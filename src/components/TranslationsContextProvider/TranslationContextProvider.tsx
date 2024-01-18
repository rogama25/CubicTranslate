import {createContext, ReactNode, useContext, useReducer} from "react";
import {
  TranslationContextData,
  TranslationContextDispatch,
  translationContextReducer
} from "@/context/TranslationContext";

export type TranslationsContextProviderProps = {
  children: ReactNode;
};

export const TranslationContext = createContext<TranslationContextData>({
  loaded: false, translation: {}, original: {}
});

export const TranslationContextReducerProvider = createContext<TranslationContextDispatch | null>(null);

export function TranslationContextProvider({children}: TranslationsContextProviderProps) {
  const [translation, dispatch] = useReducer(translationContextReducer, {loaded: false, translation: {}, original: {}});
  return (
    <TranslationContext.Provider value={translation}>
      <TranslationContextReducerProvider.Provider value={dispatch}>
        {children}
      </TranslationContextReducerProvider.Provider>
    </TranslationContext.Provider>
  );
}

export function useTranslationContext() {
  return useContext(TranslationContext);
}

export function useTranslationContextReducer() {
  return useContext(TranslationContextReducerProvider);
}
