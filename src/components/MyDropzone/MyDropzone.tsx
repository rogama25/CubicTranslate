import { ReactNode } from "react";
import Dropzone, { Accept, FileRejection } from "react-dropzone";

export type MyDropzoneProps = {
  children: ReactNode[],
  onDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void,
  accept: Accept
}

export function MyDropzone({children, onDrop, accept}: MyDropzoneProps) {
  return <Dropzone onDrop={onDrop} accept={accept} multiple={false}>
    {({ getRootProps, getInputProps, isDragActive }) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          { isDragActive ? children[1]: children[0] }
        </div>
      </section>
    )}
  </Dropzone>;
}
