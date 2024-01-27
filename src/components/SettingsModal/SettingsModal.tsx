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
  Text
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
      <ModalBody>
        <FormControl>
          <Stack spacing={4}>
            <Flex alignItems="center" gap={2}>
              <Switch isChecked={settings?.editOriginal} onChange={() => updateSetting("editOriginal")}/>
              <FormLabel mb={0}>Allow editing original string</FormLabel>
            </Flex>
          </Stack>
        </FormControl>
      </ModalBody>
    </ModalContent>
  </Modal>;
}
