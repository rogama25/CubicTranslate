export async function loadFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onabort = () => reject();
    reader.onerror = () => reject();
    reader.onload = () => {
      const binaryStr = reader.result;
      resolve(binaryStr as string);
    };
    reader.readAsText(file);
  });
}
