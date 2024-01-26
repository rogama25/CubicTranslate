export interface TranslationContextData {
  loadedOriginal: boolean,
  loadedTranslation: boolean,
  translations: Map<String, TranslationTableData>
  selectedRow?: string
}

export type TranslationContextAction = {
  type: "update-translation" | "update-original" | "select-row" | "load-translation" | "load-original" | "loaded",
  payload: any
}

export type TranslationContextDispatch = (action: TranslationContextAction) => void;

export type TranslationTableData = {
  original: string;
  translation: string;
  key: string;
}

export function translationContextReducer(state: TranslationContextData, action: TranslationContextAction): TranslationContextData {
  switch (action.type) {
    case "update-translation":
      return {
        ...state,
        translations: state.translations.set(action.payload.key, { key: action.payload.key, original: state.translations.get(action.payload.key)?.original || "", translation: action.payload.value }),
        loadedTranslation: true
      };
    case "update-original":
      return {
        ...state,
        translations: state.translations.set(action.payload.key, { key: action.payload.key, translation: state.translations.get(action.payload.key)?.translation || "", original: action.payload.value }),
        loadedOriginal: true
      };
    case "select-row":
      return {
        ...state,
        selectedRow: action.payload
      };
    case "load-translation":
      return {
        ...state,
        translations: new Map(Object.keys(action.payload).map(key => [key, {
          key: key,
          original: state.translations?.get(key)?.original || "",
          translation: action.payload[key]
        }])),
        loadedTranslation: true
      };
    case "load-original":
      return {
        ...state,
        translations: new Map(Object.keys(action.payload).map(key => [key, {
          key: key,
          translation: state.translations?.get(key)?.translation || "",
          original: action.payload[key]
        }])),
        loadedOriginal: true
      };
    case "loaded":
      if (action.payload === "original") {
        return {
          ...state,
          loadedOriginal: true
        };
      }
      return {
        ...state,
        loadedTranslation: true
      };
    default:
      return state;
  }
}
