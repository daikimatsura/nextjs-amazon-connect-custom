import type { Metadata } from "next";
import { FC } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <main className="w-screen h-screen">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
