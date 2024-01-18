import type {Metadata} from "next";
import {Providers} from "./providers";
import React from "react";
import Home from "./page";
import "@/styles/css-variables.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "MCTranslator",
  description: "Translate Minecraft language files",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <Providers>
      <Home/>
      <ToastContainer/>
    </Providers>
    </body>
    </html>
  );
}
