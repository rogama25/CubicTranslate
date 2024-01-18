import { ReactNode } from "react";
import Dropzone, { Accept } from "react-dropzone";

export type MyDropzoneProps = {
  children: ReactNode[],
  onDrop: (files: File[]) => void,
  accept: Accept
}

export function MyDropzone({children, onDrop, accept}: MyDropzoneProps) {
  return <Dropzone onDrop={onDrop} accept={accept}>
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
