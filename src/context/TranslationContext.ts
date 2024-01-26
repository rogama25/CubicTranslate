export interface TranslationContextData {
  loadedOriginal: boolean,
  loadedTranslation: boolean,
  original: Record<string, string>,
  translation: Record<string, string>,
  selectedRow?: string
}

export type TranslationContextAction = {
  type: "update-translation" | "update-original" | "select-row" | "replace-translation" | "replace-original" | "loaded",
  payload: any
}

export type TranslationContextDispatch = (action: TranslationContextAction) => void;

export function translationContextReducer(state: TranslationContextData, action: TranslationContextAction): TranslationContextData {
  switch (action.type) {
    case "update-translation":
      return {
        ...state,
        translation: {
          ...state.translation,
          [action.payload.key]: action.payload.value
        },
        loadedTranslation: true
      };
    case "update-original":
      return {
        ...state,
        original: {
          ...state.original,
          [action.payload.key]: action.payload.value
        },
        loadedOriginal: true
      };
    case "select-row":
      return {
        ...state,
        selectedRow: action.payload
      };
    case "replace-translation":
      return {
        ...state,
        translation: action.payload,
        loadedTranslation: true
      };
    case "replace-original":
      return {
        ...state,
        original: action.payload,
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
