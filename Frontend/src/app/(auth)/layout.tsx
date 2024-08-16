import type { Metadata } from "next";

import Header from "@/components/Common/Header";
import Toast from "@/components/Common/Toast";

export const metadata: Metadata = {
  title: "Auth",
};

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="flex-grow overflow-auto">{children}</section>;
};

export default AuthLayout;
