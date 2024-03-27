import { ReactNode } from "react";
import Dropzone, { Accept, FileRejection } from "react-dropzone";
import {Flex} from "@chakra-ui/react";

export type MyDropzoneProps = {
  children: ReactNode[],
  onDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void,
  accept: Accept
}

export function MyDropzone({children, onDrop, accept}: MyDropzoneProps) {
  return <Dropzone onDrop={onDrop} accept={accept} multiple={false}>
    {({ getRootProps, getInputProps, isDragActive }) => (
        <Flex {...getRootProps()} h="100%" w="100%" align="center" justify="center" >
          <input {...getInputProps()} />
          { isDragActive ? children[1]: children[0] }
        </Flex>
    )}
  </Dropzone>;
}
