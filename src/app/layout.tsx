import type {Metadata} from "next";
import {Providers} from "./providers";
import React from "react";
import Home from "./page";
import "@/styles/css-variables.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "CubicTranslate",
  description: "Translate Minecraft language files",
};

export default function RootLayout({}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <Providers>
      <Home/>
      <ToastContainer position="bottom-left"/>
    </Providers>
    </body>
    </html>
  );
}
