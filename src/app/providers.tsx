"use client";

import {TranslationContextProvider} from "@/components/TranslationsContextProvider/TranslationContextProvider";
import {ChakraProvider, ColorModeScript, ThemeConfig, extendTheme} from "@chakra-ui/react";
import React, {ReactNode} from "react";
import {SettingsContextProvider} from "@/components/SettingsContextProvider/SettingsContextProvider";

export function Providers({children}: { children: ReactNode }) {
  const defaultColor = "system";

  const themeConfig: ThemeConfig = {
    initialColorMode: defaultColor,
    useSystemColorMode: true,
  };

  const theme = extendTheme({
    config: themeConfig
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={defaultColor}/>
        <TranslationContextProvider>
          <SettingsContextProvider>
            {children}
          </SettingsContextProvider>
        </TranslationContextProvider>
      </ChakraProvider>
    </>
  );
}
