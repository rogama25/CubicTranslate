import {
  Box, Flex,
  FormControl, FormLabel,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack, Switch,
  Text, useColorMode
} from "@chakra-ui/react";
import {
  useSettingsContext,
  useSettingsReducerProvider
} from "@/components/SettingsContextProvider/SettingsContextProvider";

export type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SettingsModal({isOpen, onClose}: SettingsModalProps) {
  const settings = useSettingsContext();
  const reducer = useSettingsReducerProvider();

  const {colorMode, toggleColorMode} = useColorMode()

  function updateSetting(setting: string) {
    if (reducer) {
      reducer({type: "update", payload: setting});
    }
  }

  return <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay/>
    <ModalContent>
      <ModalHeader>App settings</ModalHeader>
      <ModalCloseButton/>
      <ModalBody p={8}>
        <FormControl>
          <Stack spacing={4}>
            <Flex alignItems="center" gap={2}>
              <Switch isChecked={settings?.editOriginal} onChange={() => updateSetting("editOriginal")}/>
              <FormLabel mb={0}>Allow editing original string</FormLabel>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
              <FormLabel mb={0}>Dark mode</FormLabel>
            </Flex>
          </Stack>
        </FormControl>
      </ModalBody>
    </ModalContent>
  </Modal>;
}
