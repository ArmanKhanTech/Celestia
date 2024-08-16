import type { Metadata } from "next";

import Header from "@/components/Common/Header";
import Toast from "@/components/Common/Toast";

import HomeWrapper from "./wrapper";

export const metadata: Metadata = {
  title: "Chat",
};

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <HomeWrapper>{children}</HomeWrapper>;
};

export default HomeLayout;
