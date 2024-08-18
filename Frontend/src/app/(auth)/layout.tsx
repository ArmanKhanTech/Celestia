import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
};

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return children;
};

export default AuthLayout;
