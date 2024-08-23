import type { Metadata } from "next";

import { ThemeProvider } from "@/context/ThemeProvider";
import { ToastProvider } from "@/context/ToastProvider";

import RootWrapper from "./wrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celestia",
  description: "A next generation messaging platform.",
};

const ContextWrapper = ({ children }: any) => {
  return (
    <ThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <ContextWrapper>
          <RootWrapper>{children}</RootWrapper>
        </ContextWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
