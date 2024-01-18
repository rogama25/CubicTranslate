"use client";

import {NavBar} from "@/components/NavBar/NavBar";
import {Box, Flex, HStack, Icon, Image, Textarea, VStack, Text} from "@chakra-ui/react";
import {FaFileDownload, FaFileUpload} from "react-icons/fa";
import {Table} from "@/components/Table/Table";
import {TranslationContextProvider} from "@/components/TranslationsContextProvider/TranslationContextProvider";
import "@/styles/css-variables.css";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";

export default function Home() {
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
        <PanelGroup direction="vertical" style={{flex: 1}}>
          <Panel>
            <Table/>
          </Panel>
          <PanelResizeHandle>
            <Box w="100%" h={2} bg="var(--chakra-colors-gray-200)"/>
          </PanelResizeHandle>
          <Panel>
            <HStack w="100%" h="100%" align="stretch" p={4}>
              <VStack w="100%" h="100%">
                <Text>Original</Text>
                <Textarea resize="none" w="100%" h="100%" disabled/>
              </VStack>
              <VStack  w="100%" h="100%">
                <Text>Translation</Text>
                <Textarea resize="none" w="100%" h="100%"/>
              </VStack>
            </HStack>
          </Panel>
        </PanelGroup>
      </Flex>
    </TranslationContextProvider>
  );
}
