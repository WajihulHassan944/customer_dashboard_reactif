"use client";

import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const SearchFilter: React.FC = () => {
  return (
    <div className="w-full p-4 bg-neutral-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-50/10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 justify-start md:justify-between">

      {/* Search Box */}
      <div className="flex-1 flex items-center gap-3 px-4 py-2.5 bg-neutral-800 rounded-md w-full md:max-w-[600px]">
        <Search className="w-5 h-5 text-neutral-50/60" />
        <input
          type="text"
          placeholder="Search Quotes..."
          className="flex-1 bg-transparent text-neutral-50/60 text-base font-medium font-hk outline-none placeholder:text-neutral-50/60"
        />
      </div>

      {/* Filter Button */}
      <button className="flex items-center gap-2 px-4 py-2.5 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-50/60 bg-neutral-800 hover:bg-neutral-700 transition-colors">
        <SlidersHorizontal className="w-5 h-5 text-neutral-50" />
        <span className="text-neutral-50 text-base font-medium font-hk">Filter</span>
      </button>
    </div>
  );
};

export default SearchFilter;
