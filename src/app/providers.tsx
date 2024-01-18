"use client";

import { TranslationContextProvider } from "@/components/TranslationsContextProvider/TranslationContextProvider";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>
    <TranslationContextProvider>
      {children}
    </TranslationContextProvider>
  </ChakraProvider>;
}
