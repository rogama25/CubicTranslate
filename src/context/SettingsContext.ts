export interface SettingsContextData {
  [key: string]: boolean;
}

export type SettingsContextAction = {
  type: "update",
  payload: string
}

export type SettingsContextDispatch = (action: SettingsContextAction) => void;

export function settingsContextReducer(state: SettingsContextData, action: SettingsContextAction): SettingsContextData {
  switch (action.type) {
    case "update":
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };
  }
}
