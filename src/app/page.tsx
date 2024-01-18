"use client";

import { NavBar } from "@/components/NavBar/NavBar";
import { Box, Flex, HStack, Icon, Image, Input, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaFileDownload, FaFileUpload } from "react-icons/fa";
import { useTranslationContext, useTranslationContextReducer } from "@/components/TranslationsContextProvider/TranslationContextProvider";
import { TranslationUI } from "@/components/TranslationUI/TranslationUI";
import { UploadDataTutorial } from "@/components/UploadDataTutorial/UploadDataTutorial";
import { DestinationFileIcon, OriginalFileIcon } from "@/components/Icons/Icons";
import { useRef } from "react";
import { loadFile } from "@/utils/FileLoader";

export default function Home() {
  const translations = useTranslationContext();
  const inputOriginal = useRef<HTMLInputElement>(null);
  const inputDestination = useRef<HTMLInputElement>(null);
  const download = useRef<HTMLAnchorElement>(null);
  const dispatch = useTranslationContextReducer();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    if (event.target.files === null) return;
    Array.from(event.target.files).forEach((file) => {
      if (file.type !== "application/json") return;
      loadFile(file).then((data) => {
        const json = JSON.parse(data);
        switch (id) {
          case "original":
            dispatch && dispatch({ type: "replace-original", payload: json });
            break;
          case "translation":
            dispatch && dispatch({ type: "replace-translation", payload: json });
            break;
        }
      });
    });
  }

  function handleDownload(id: string) {
    console.log(download.current);
    switch (id) {
      case "original":
        const originalData = JSON.stringify(translations?.original, null, "\t");
        const originalBlob = new Blob([originalData], { type: "application/json" });
        if (download.current === null) return;
        download.current.href = URL.createObjectURL(originalBlob);
        download.current.download = "original.json";
        download.current.click();
        break;
      case "translation":
        const translationData = JSON.stringify(translations?.translation, null, "\t");
        const translationBlob = new Blob([translationData], { type: "application/json" });
        if (download.current === null) return;
        download.current.href = URL.createObjectURL(translationBlob);
        download.current.download = "translation.json";
        download.current.click();
        break;
    }
  }
  return (
    <Flex h="100vh" w="100vw" flexDirection="column">
      <NavBar>
        <Image src="/MCTranslator.png" alt="MCTranslator logo" h="100%" />
        <HStack h="100%" align="stretch">
          <Menu strategy="fixed">
            <MenuButton as={Box} h="100%">
              <Icon as={FaFileDownload} h="100%" mx={4} w={6} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleDownload("original")}>
                <OriginalFileIcon boxSize={6} mx={4} />Original
              </MenuItem>
              <MenuItem onClick={() => handleDownload("translation")}>
                <DestinationFileIcon boxSize={6} mx={4} />Destination
              </MenuItem>
              <Link ref={download} display="none" />
            </MenuList>
          </Menu>
          <Menu strategy="fixed">
            <MenuButton as={Box} h="100%">
              <Icon as={FaFileUpload} h="100%" mx={4} w={6} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => inputOriginal.current?.click()}>
                <OriginalFileIcon boxSize={6} mx={4} />Original
              </MenuItem>
              <Input type="file" accept="application/json" display={"none"} ref={inputOriginal} onChange={(e) => handleInput(e, "original")} />
              <MenuItem onClick={() => inputDestination.current?.click()}>
                <DestinationFileIcon boxSize={6} mx={4} />Destination
              </MenuItem>
              <Input type="file" accept="application/json" display={"none"} ref={inputDestination} onChange={(e) => handleInput(e, "translation")} />
            </MenuList>
          </Menu>
        </HStack>
      </NavBar>
      {
        translations?.loaded ? <TranslationUI /> : <UploadDataTutorial />
      }
    </Flex>
  );
}
