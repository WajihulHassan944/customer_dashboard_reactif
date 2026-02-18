"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { menuItems } from "@/constants/sidebarItems";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "flex flex-col w-[287px] h-screen shrink-0 transition-transform duration-300 z-50",
          {
            "fixed top-0 left-0 bg-[#222] md:relative md:translate-x-0": true,
            "-translate-x-full": !isOpen, // hidden on mobile
            "translate-x-0": isOpen,      // visible on mobile
          }
        )}
        style={{
          background: `
            conic-gradient(
              from 135deg at 37.06% 47.11%,
              rgba(242, 98, 181, 0.10) 134deg,
              rgba(95, 197, 255, 0.10) 144deg,
              rgba(255, 172, 137, 0.10) 171deg,
              rgba(129, 85, 255, 0.10) 221deg,
              rgba(120, 157, 255, 0.10) 291deg,
              rgba(159, 115, 241, 0.10) 360deg
            ),
            #222
          `,
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-[20px] px-[24px] pt-[20px] pb-[24px]">
          <Avatar className="h-[56px] w-[56px]">
            <AvatarImage src="/logo.png" alt="@reactif" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white tracking-tight">ReactIf</h1>
            <p className="text-base text-white font-medium tracking-wider">Print & Design</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-4">
          <nav className="flex flex-col gap-[12px]">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // close on mobile
                  className={cn(
                    "flex items-center gap-[12px] px-4 py-3 rounded-[8px] transition-all duration-200",
                    isActive
                      ? "bg-linear-to-r from-[#F472B6] to-[#A855F7] text-white"
                      : "text-white hover:bg-gray-50 hover:text-black"
                  )}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-[16px] font-medium">{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer / Logout */}
        <div className="p-6">
          <div className="h-px bg-[#FFFFFF99] w-full mb-6" />
          <Button
            variant="ghost"
            className="flex items-center justify-start gap-4 w-full h-auto p-0 text-white hover:bg-transparent hover:text-red-600 transition-all"
          >
            <LogOut size={22} />
            <span className="font-medium text-[16px]">Logout</span>
          </Button>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
