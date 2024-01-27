import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Table } from "@/components/Table/Table";
import { Box, HStack, Text, Textarea, VStack } from "@chakra-ui/react";
import { useTranslationContext, useTranslationContextReducer } from "../TranslationsContextProvider/TranslationContextProvider";
import {useRef} from "react";
import {useSettingsContext} from "@/components/SettingsContextProvider/SettingsContextProvider";

export function TranslationUI() {
  const translations = useTranslationContext();
  const translationDispatch = useTranslationContextReducer();
  const settings = useSettingsContext();

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>, type: "update-original" | "update-translation") {
    translationDispatch?.({
      type: type,
      payload: {
        key: translations?.selectedRow as string,
        value: e.target.value
      }
    });
  }

  return (
    <PanelGroup direction="vertical" style={{ flex: 1 }}>
      <Panel defaultSize={75}>
        <Box w="100%" h="100%">
          <Table />
        </Box>
      </Panel>
      <PanelResizeHandle>
        <Box w="100%" h={2} bg="var(--chakra-colors-gray-200)" />
      </PanelResizeHandle>
      <Panel defaultSize={25}>
        <HStack w="100%" h="100%" align="stretch" p={4}>
          <VStack w="100%" h="100%">
            <Text>Original</Text>
            <Textarea resize="none" w="100%" h="100%" disabled={!settings?.editOriginal} value={translations?.translations.get(translations.selectedRow || "")?.original || ""} onChange={(e) => handleChange(e, "update-original")}/>
          </VStack>
          <VStack w="100%" h="100%">
            <Text>Translation</Text>
            <Textarea resize="none" w="100%" h="100%" value={translations?.translations.get(translations.selectedRow || "")?.translation || ""} onChange={(e) => handleChange(e, "update-translation")}/>
          </VStack>
        </HStack>
      </Panel>
    </PanelGroup>
  );
}
