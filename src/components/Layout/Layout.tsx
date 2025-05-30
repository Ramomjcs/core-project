import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import SideMenu from "../SideMenu/SideMenu";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideMenu />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}
