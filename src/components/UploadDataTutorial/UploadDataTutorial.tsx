import { Button, Card, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { MyDropzone } from "@/components/MyDropzone/MyDropzone";
import { DestinationFileIcon, OriginalFileIcon } from "@/components/Icons/Icons";
import { FileRejection } from "react-dropzone";
import { loadFile } from "@/utils/FileLoader";
import { useTranslationContextReducer } from "@/components/TranslationsContextProvider/TranslationContextProvider";

export function UploadDataTutorial() {
  const dispatch = useTranslationContextReducer();
  function onDrop(id: string, acceptedFiles: File[], rejectedFiles: FileRejection[]) {
    acceptedFiles.forEach((file) => {
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
  function handleNext() {
    dispatch && dispatch({ type: "loaded", payload: {}});
  }
  return (
    <VStack flex="1" m={4}>
      <Heading as="h1" size="2xl">Upload your data</Heading>
      <Grid w="100%" h="100%" gridTemplateColumns="1fr 1fr">
        <Flex align="center" justify="center">
          <Card p={16}>
            <MyDropzone onDrop={(files, rejections) => onDrop("original", files, rejections)} accept={{"application/json": []}}>
              <VStack>
                <Heading size="lg">Original language</Heading>
                <OriginalFileIcon boxSize={16} />
              </VStack>
              <Text>DROP IT</Text>
            </MyDropzone>
          </Card>
        </Flex>
        <Flex align="center" justify="center">
          <Card p={16}>
            <MyDropzone onDrop={(files, rejections) => onDrop("translation", files, rejections)} accept={{ "application/json": [] }}>
              <VStack>
                <Heading size="lg">Destination language</Heading>
                <DestinationFileIcon boxSize={16}/>
              </VStack>
              <Text>DROP IT</Text>
            </MyDropzone>
          </Card>
        </Flex>
      </Grid>
      <Button onClick={handleNext}>Next</Button>
    </VStack>
  );
}
