import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import {Table} from "@/components/Table/Table";
import {Box, HStack, Text, Textarea, VStack} from "@chakra-ui/react";

export function TranslationUI() {
    return (
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
    );
}
