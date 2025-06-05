"use client";

import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import SideMenu from "../SideMenu/SideMenu";
import { useSidebar } from "../SideMenu/SidebarContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { expanded } = useSidebar();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideMenu />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          expanded ? "md:pl-64" : "md:pl-20"
        }`}
      >
        <Navbar />
        <main className="bg-gray-200 w-full flex-1">{children}</main>
      </div>
    </div>
  );
}
