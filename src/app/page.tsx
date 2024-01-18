"use client";

import {NavBar} from "@/components/NavBar/NavBar";
import {Flex, HStack, Icon, Image} from "@chakra-ui/react";
import {FaFileDownload, FaFileUpload} from "react-icons/fa";
import {
  TranslationContextProvider,
  useTranslationContext
} from "@/components/TranslationsContextProvider/TranslationContextProvider";
import "@/styles/css-variables.css";
import {TranslationUI} from "@/components/TranslationUI/TranslationUI";
import {UploadDataTutorial} from "@/components/UploadDataTutorial/UploadDataTutorial";

export default function Home() {
  const translations = useTranslationContext();
  return (
    <TranslationContextProvider>
      <Flex h="100vh" w="100vw" flexDirection="column">
        <NavBar>
          <Image src="/MCTranslator.png" alt="MCTranslator logo" h="100%"/>
          <HStack h="100%" align="stretch">
            <Icon as={FaFileDownload} h="100%" mx={4} w={6}/>
            <Icon as={FaFileUpload} h="100%" mx={4} w={6}/>
          </HStack>
        </NavBar>
        {
          translations.loaded ? <TranslationUI/> : <UploadDataTutorial/>
        }
      </Flex>
    </TranslationContextProvider>
  );
}
