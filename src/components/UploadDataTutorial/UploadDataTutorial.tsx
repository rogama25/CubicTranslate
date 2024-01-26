import { Button, Card, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { MyDropzone } from "@/components/MyDropzone/MyDropzone";
import { DestinationFileIcon, OriginalFileIcon } from "@/components/Icons/Icons";
import { FileRejection } from "react-dropzone";
import { loadFile } from "@/utils/FileLoader";
import {
  useTranslationContext,
  useTranslationContextReducer
} from "@/components/TranslationsContextProvider/TranslationContextProvider";
import { toast } from "react-toastify";

export function UploadDataTutorial() {
  const dispatch = useTranslationContextReducer();
  const translations = useTranslationContext();
  function onDrop(id: string, acceptedFiles: File[], rejectedFiles: FileRejection[]) {
    acceptedFiles.forEach((file) => {
      loadFile(file).then((data) => {
        const json = JSON.parse(data);
        switch (id) {
          case "original":
            dispatch && dispatch({ type: "load-original", payload: json });
            break;
          case "translation":
            dispatch && dispatch({ type: "load-translation", payload: json });
            break;
        }
      });
    });
    if (rejectedFiles.length) {
      toast("Error loading your file", {type: "error"});
    }
  }
  function handleNext() {
    dispatch && dispatch({ type: "loaded", payload: {}});
  }
  return (
    <VStack flex="1" m={4}>
      <Heading as="h1" size="2xl">Upload your data</Heading>
      <Grid w="100%" h="100%" gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))">
        <Flex direction="column" justify="stretch" maxH="100%" maxW="100%" m={[2, 20]}>
          <Card h="100%" w="100%">
            <MyDropzone onDrop={(files, rejections) => onDrop("original", files, rejections)} accept={{"application/json": []}}>
              <VStack m={2}>
                <Heading size="lg">Original language</Heading>
                <OriginalFileIcon color={translations?.loadedOriginal ? "green": undefined} boxSize={[16,24]} />
              </VStack>
              <Text>DROP IT</Text>
            </MyDropzone>
          </Card>
        </Flex>
        <Flex direction="column" justify="stretch" align="stretch"  maxH="100%" maxW="100%" m={[2, 20]}>
          <Card align="center" justify="center" h="100%" w="100%">
            <MyDropzone onDrop={(files, rejections) => onDrop("translation", files, rejections)} accept={{ "application/json": [] }}>
              <VStack m={2}>
                <Heading size="lg">Destination language</Heading>
                <DestinationFileIcon color={translations?.loadedTranslation ? "green": undefined} boxSize={[16,24]}/>
              </VStack>
              <Text>DROP IT</Text>
            </MyDropzone>
          </Card>
        </Flex>
      </Grid>
      <Text textAlign="center"><b>TIP: </b>Drag and drop your files, or click the cards to open the file picker. To start translating a new file, open the original and tap next.</Text>
      <Button onClick={handleNext}>Next</Button>
    </VStack>
  );
}
