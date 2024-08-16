import type { Metadata } from "next";

import Menu from "@/src/app/components/Common/Menu";
import MainWrapper from "./wrapper";

export const metadata: Metadata = {
  title: "Home",
};

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default MainLayout;
