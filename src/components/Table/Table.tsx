import {TranslationContextData, TranslationTableData} from "@/context/TranslationContext";
import {createColumnHelper} from "@tanstack/react-table";
import {useTranslationContext, useTranslationContextReducer} from "@/components/TranslationsContextProvider/TranslationContextProvider";
import { TableLayout } from "./TableLayout";



export function Table() {

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
  const translationDispatch = useTranslationContextReducer();

  function getTableData(data: TranslationContextData | null) {
    return Array.from(data?.translations.values() || []);
  }

  function onRowClick(rowKey: string) {
    translationDispatch?.({ type: "select-row", payload: rowKey });
  }

  return (
    <TableLayout columns={columns} data={getTableData(translations)} selectedRow={translations?.selectedRow} onRowClick={onRowClick} />
  );
}
