export interface TranslationContextData {
  loaded: boolean,
  original: Record<string, string>,
  translation: Record<string, string>,
  selectedRow?: string
}

export type TranslationContextAction = {
  type: "update-translation" | "update-original" | "select-row" | "replace-translation" | "replace-original" | "loaded",
  payload: any
}

export type TranslationContextDispatch = (action: TranslationContextAction) => void;

export function translationContextReducer(state: TranslationContextData, action: TranslationContextAction) {
  switch (action.type) {
    case "update-translation":
      return {
        ...state,
        translation: {
          ...state.translation,
          [action.payload.key]: action.payload.value
        }
      };
    case "update-original":
      return {
        ...state,
        original: {
          ...state.original,
          [action.payload.key]: action.payload.value
        }
      };
    case "select-row":
      return {
        ...state,
        selectedRow: action.payload
      };
    case "replace-translation":
      return {
        ...state,
        translation: action.payload
      };
    case "replace-original":
      return {
        ...state,
        original: action.payload
      };
    case "loaded":
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
}
