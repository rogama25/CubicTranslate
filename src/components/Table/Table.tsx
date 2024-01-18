import {TranslationContextData} from "@/context/TranslationContext";
import {createColumnHelper} from "@tanstack/react-table";
import {useTranslationContext, useTranslationContextReducer} from "@/components/TranslationsContextProvider/TranslationContextProvider";
import { TableLayout } from "./TableLayout";

export type TranslationTableData = {
  original: string;
  translation: string;
  key: string;
}

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
    if (!data?.loaded) {
      return [];
    }
    return Object.keys(data.original).map(key => {
      return {
        key: key,
        original: data.original[key],
        translation: data.translation[key]
      };
    });
  }

  function onRowClick(rowKey: string) {
    translationDispatch?.({ type: "select-row", payload: rowKey });
  }

  return (
    <TableLayout columns={columns} data={getTableData(translations)} selectedRow={translations?.selectedRow} onRowClick={onRowClick} />
  );
}
