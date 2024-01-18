import {TranslationContextData} from "@/context/TranslationContext";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel, getSortedRowModel,
  SortingState,
  useReactTable
} from "@tanstack/react-table";
import {useTranslationContext} from "@/components/TranslationsContextProvider/TranslationContextProvider";
import {useRef, useState} from "react";
import {chakra, Tbody, Th, Thead, Tr, Table as ChakraTable, Td, Flex} from "@chakra-ui/react";
import {FaSort, FaSortDown, FaSortUp} from "react-icons/fa";

export type TranslationTableData = {
  original: string;
  translation: string;
}

export const Table = () => {

  const columnHelper = createColumnHelper<TranslationTableData>();

  const columns = [
    columnHelper.accessor("original", {
      header: "Original"
    }),
    columnHelper.accessor("translation", {
      header: "Translation"
    })
  ];

  const translations = useTranslationContext();

  function getTableData(data: TranslationContextData) {
    if (!data?.loaded) {
      return [];
    }
    return Object.keys(data.translation).map(key => {
      return {
        original: data.original[key],
        translation: data.translation[key]
      };
    });
  }

  const [sorting, setSorting] = useState<SortingState>([]);

  const calculatedData = useRef(getTableData(translations)).current;

  const table = useReactTable({
    columns,
    data: calculatedData,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    }
  });

  return (
    <ChakraTable p={4}>
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
                >
                  <Flex>
                    {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                    <chakra.span pl="4">
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === "desc" ? (
                          <FaSortDown aria-label="sorted descending"/>
                        ) : (
                          <FaSortUp aria-label="sorted ascending"/>
                        )
                      ) : <FaSort/>}
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
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
              const meta: any = cell.column.columnDef.meta;
              return (
                <Td key={cell.id} isNumeric={meta?.isNumeric}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};
