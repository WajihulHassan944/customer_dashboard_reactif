"use client";

import React from "react";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { cn } from "@/lib/utils";

type Props = {
  activeTab: "contact" | "direct";
  setActiveTab: (value: "contact" | "direct") => void;
};

const SupportTabs = ({ activeTab, setActiveTab }: Props) => {
  const tabs = [
    {
      id: "contact",
      label: "Contact Form",
      icon: FiMail,
    },
    {
      id: "direct",
      label: "Direct Message",
      icon: FiMessageSquare,
    },
  ] as const;

  return (
    <div className="w-full">
      <div className="w-full flex p-1.5 bg-neutral-200/70 backdrop-blur-sm rounded-full gap-2 shadow-sm">

        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 px-6 sm:px-8 py-3 rounded-full",
                "flex items-center justify-center gap-3",
                "text-sm sm:text-base font-semibold font-hk transition-all duration-300 ease-in-out",
                isActive
                  ? "bg-neutral-50 text-black shadow-md"
                  : "text-neutral-700 hover:bg-neutral-100/70"
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 transition-all duration-300",
                  isActive ? "text-black" : "text-neutral-800"
                )}
              />
              <span>{tab.label}</span>

              {/* Right Side Icon */}
            
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default SupportTabs;
