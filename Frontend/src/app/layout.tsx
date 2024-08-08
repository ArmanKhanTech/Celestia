import type { Metadata } from "next";

// fix this
import { ThemeProvider } from "./context/ThemeProvider";
import ContextWrapper from "./context/ContextWrapper";

import "./globals.css";

export const metadata: Metadata = {
  title: "Celestia",
  description: "A next generation chatting platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ContextWrapper>
            {children}
          </ContextWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
