"use client";

import {TranslationContextProvider} from "@/components/TranslationsContextProvider/TranslationContextProvider";
import {ChakraProvider} from "@chakra-ui/react";
import React from "react";
import {SettingsContextProvider} from "@/components/SettingsContextProvider/SettingsContextProvider";

export function Providers({children}: { children: React.ReactNode }) {
  return <ChakraProvider>
    <TranslationContextProvider>
      <SettingsContextProvider>
        {children}
      </SettingsContextProvider>
    </TranslationContextProvider>
  </ChakraProvider>;
}
