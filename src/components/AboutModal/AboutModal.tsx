import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Link, Stack } from "@chakra-ui/react";

export type AboutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>About CubicTranslate</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Stack spacing={4}>
          <Text>This is a tool that can help you translating Minecraft language files or other software that uses the same json-based key-value lang files.</Text>
          <Text>It is currently in beta, so expect bugs and missing features.</Text>
          <Text>The tool is open source under the GPL-3 license, and the source code is available <Link color="gray.500" href="https://github.com/rogama25/CubicTranslate" isExternal>on Github<ExternalLinkIcon mx='2px' /></Link></Text>
          <Text>I use the Solar Icons set, <Link color="gray.500" href="https://www.figma.com/community/file/1166831539721848736">available for free on Figma<ExternalLinkIcon mx="2px"/></Link></Text>
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Text>Made with 💜 from Spain</Text>
      </ModalFooter>
    </ModalContent>
  </Modal>;
}
