import {createContext, ReactNode, useContext, useReducer} from "react";
import {SettingsContextData, SettingsContextDispatch, settingsContextReducer} from "@/context/SettingsContext";

export type SettingsContextProvider = {
  children: ReactNode;
};

export const SettingsContext = createContext<SettingsContextData | null>(null);

export const SettingsContextReducerProvider = createContext<SettingsContextDispatch | null>(null);

export function SettingsContextProvider({children}: SettingsContextProvider) {
  const [settings, dispatch] = useReducer(settingsContextReducer, {});
  return (
    <SettingsContext.Provider value={settings}>
      <SettingsContextReducerProvider.Provider value={dispatch}>
        {children}
      </SettingsContextReducerProvider.Provider>
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  return useContext(SettingsContext);
}

export function useSettingsReducerProvider() {
  return useContext(SettingsContextReducerProvider);
}
