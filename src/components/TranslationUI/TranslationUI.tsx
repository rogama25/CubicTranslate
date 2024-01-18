import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Table } from "@/components/Table/Table";
import { Box, HStack, Text, Textarea, VStack } from "@chakra-ui/react";
import { useTranslationContext, useTranslationContextReducer } from "../TranslationsContextProvider/TranslationContextProvider";

export function TranslationUI() {
  const translations = useTranslationContext();
  const translationDispatch = useTranslationContextReducer();

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    translationDispatch?.({
      type: "update-translation",
      payload: {
        key: translations?.selectedRow as string,
        value: e.target.value
      }
    });
  }

  return (
    <PanelGroup direction="vertical" style={{ flex: 1 }}>
      <Panel>
        <Box w="100%" h="100%" overflowY={"scroll"}>
          <Table />
        </Box>
      </Panel>
      <PanelResizeHandle>
        <Box w="100%" h={2} bg="var(--chakra-colors-gray-200)" />
      </PanelResizeHandle>
      <Panel>
        <HStack w="100%" h="100%" align="stretch" p={4}>
          <VStack w="100%" h="100%">
            <Text>Original</Text>
            <Textarea resize="none" w="100%" h="100%" disabled value={translations?.original[translations.selectedRow as string]}/>
          </VStack>
          <VStack w="100%" h="100%">
            <Text>Translation</Text>
            <Textarea resize="none" w="100%" h="100%" value={translations?.translation[translations.selectedRow as string]} onChange={handleChange}/>
          </VStack>
        </HStack>
      </Panel>
    </PanelGroup>
  );
}
