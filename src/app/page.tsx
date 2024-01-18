"use client";

import NavBar from "@/components/NavBar/NavBar";
import {HStack, Icon, Image, Stack, StackItem, Text} from "@chakra-ui/react";
import {useState} from "react";
import {TranslationsContextData} from "@/context/TranslationsContext";
import {FaFileDownload, FaFileUpload} from "react-icons/fa";

export default function Home() {
  const [translationsData, setTranslationsData] = useState<TranslationsContextData>({
    loaded: false, translation: {}, original: {}
  })
  return (
    <>
      <NavBar>
        <Image src="/MCTranslator.png" alt="MCTranslator logo" h="100%"/>
        <HStack h="100%">
          <Icon as={FaFileDownload} h="100%" mx={4} w={6}/>
          <Icon as={FaFileUpload} h="100%" mx={4} w={6}/>
        </HStack>
      </NavBar>
    </>
  );
}
