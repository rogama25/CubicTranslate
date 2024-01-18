export interface TranslationContextData {
  loaded: boolean,
  original: Record<string, string>,
  translation: Record<string, string>
}

export type TranslationContextAction = {
  type: "update-translation" | "update-original",
  payload: {
    "key": string,
    "value": string
  }
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
    default:
      return state;
  }
}
