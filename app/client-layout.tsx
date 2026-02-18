"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar";
import Container from "@/components/container";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-auto relative">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setIsSidebarOpen}
        />

        {/* Background Blur Elements */}
        <div className="absolute w-40 h-44 top-0 left-[90px] bg-indigo-600 rounded-full blur-[200px] opacity-70 pointer-events-none" />
        <div className="absolute w-40 h-44 bottom-10 right-[30px] bg-purple-600 rounded-full blur-[200px] opacity-70 pointer-events-none" />

        <main className="flex-1 overflow-y-auto px-0 md:px-6 py-6">
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
}
