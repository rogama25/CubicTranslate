import { ReactNode } from "react";
import Dropzone from "react-dropzone";

export type MyDropzoneProps = {
  children: ReactNode[],
  onDrop: (files: File[]) => void
}

export function MyDropzone({children, onDrop}: MyDropzoneProps) {
  return <Dropzone onDrop={onDrop}>
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
