import type {Metadata} from "next";
import {Providers} from "./providers";
import React from "react";


export const metadata: Metadata = {
  title: "MCTranslator",
  description: "Translate Minecraft language files",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  );
}
