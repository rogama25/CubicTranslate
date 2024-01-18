"use client";

import {NavBar} from "@/components/NavBar/NavBar";
import {Box, Button, Flex, HStack, Icon, Image, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {FaFileDownload, FaFileUpload} from "react-icons/fa";
import {useTranslationContext} from "@/components/TranslationsContextProvider/TranslationContextProvider";
import "@/styles/css-variables.css";
import {TranslationUI} from "@/components/TranslationUI/TranslationUI";
import {UploadDataTutorial} from "@/components/UploadDataTutorial/UploadDataTutorial";

export default function Home() {
  const translations = useTranslationContext();
  return (
      <Flex h="100vh" w="100vw" flexDirection="column">
        <NavBar>
          <Image src="/MCTranslator.png" alt="MCTranslator logo" h="100%"/>
          <HStack h="100%" align="stretch">
            <Menu>
              <MenuButton as={Box} h="100%">
                <Icon as={FaFileDownload} h="100%" mx={4} w={6} />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Box} h="100%">
                <Icon as={FaFileUpload} h="100%" mx={4} w={6} />
              </MenuButton>
              <MenuList>
                <MenuItem>Upload</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </NavBar>
        {
          translations?.loaded ? <TranslationUI/> : <UploadDataTutorial/>
        }
      </Flex>
  );
}
