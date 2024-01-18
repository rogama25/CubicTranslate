import { ColumnDef, SortingState, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { TranslationTableData } from "./Table";
import { Thead, Tr, Th, Flex, chakra, Tbody, Td, Table as ChakraTable } from "@chakra-ui/react";
import { useState } from "react";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa";
import styles from "@/components/Table/Table.module.css";

export type TableLayoutProps = {
  columns: ColumnDef<TranslationTableData, string>[],
  data: TranslationTableData[],
  selectedRow: string | undefined,
  onRowClick: (rowKey: string) => void
}

export function TableLayout({ columns, data, selectedRow, onRowClick }: TableLayoutProps) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    },
    getRowId: (row) => row.key
  });

  return <ChakraTable p={4} layout="fixed">
    <Thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <Tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
            const meta: any = header.column.columnDef.meta;
            return (
              <Th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                isNumeric={meta?.isNumeric}
                className={styles.tableCell}
              >
                <Flex>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                  <chakra.span pl="4">
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === "desc" ? (
                        <FaSortDown aria-label="sorted descending" />
                      ) : (
                        <FaSortUp aria-label="sorted ascending" />
                      )
                    ) : <FaSort />}
                  </chakra.span>
                </Flex>
              </Th>
            );
          })}
        </Tr>
      ))}
    </Thead>
    <Tbody>
      {table.getRowModel().rows.map((row) => (
        <Tr key={row.id} onClick={() => onRowClick(row.original.key)}
          bgColor={row.original.key === selectedRow ? "orange.200" : undefined}>
          {row.getVisibleCells().map((cell) => {
            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
            const meta: any = cell.column.columnDef.meta;
            return (
              <Td key={cell.id} isNumeric={meta?.isNumeric} className={styles.tableCell}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            );
          })}
        </Tr>
      ))}
    </Tbody>
  </ChakraTable>;
}
