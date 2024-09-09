import React from "react";
import { Inter_Font } from "@/utils/Utils";

import "@/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body className={Inter_Font.className}>
        <div className="mx-auto max-w-2xl lg:w-3/4">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
