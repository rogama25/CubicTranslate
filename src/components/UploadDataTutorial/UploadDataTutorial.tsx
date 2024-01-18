import { Card, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { MyDropzone } from "@/components/MyDropzone/MyDropzone";
import { DestinationFileIcon, OriginalFileIcon } from "@/components/Icons/Icons";

export function UploadDataTutorial() {
  const onDrop = (id: string, acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsText(file);
    });
  };
  return (
    <VStack flex="1" m={4}>
      <Heading as="h1" size="2xl">Upload your data</Heading>
      <Grid w="100%" h="100%" gridTemplateColumns="1fr 1fr">
        <Flex align="center" justify="center">
          <Card p={16}>
            <MyDropzone onDrop={(files: File[]) => onDrop("1", files)} accept={{"application/json": []}}>
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
            <MyDropzone onDrop={(files: File[]) => onDrop("1", files)} accept={{ "application/json": [] }}>
              <VStack>
                <Heading size="lg">Destination language</Heading>
                <DestinationFileIcon boxSize={16}/>
              </VStack>
              <Text>DROP IT</Text>
            </MyDropzone>
          </Card>
        </Flex>
      </Grid>
    </VStack>
  );
}
