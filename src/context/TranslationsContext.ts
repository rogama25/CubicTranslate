import {createContext} from "react";

export interface TranslationsContextData {
  loaded: boolean,
  original: Record<string, string>,
  translation: Record<string, string>
}

export const TranslationsContext = createContext<TranslationsContextData>({
  loaded: false, translation: {}, original: {}
});
