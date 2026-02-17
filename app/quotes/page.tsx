"use client";

import QuoteList from "@/components/quotes/QuoteList";
import Header from "@/components/shared/Header";
import SearchFilter from "@/components/shared/SearchFilter";
import { Plus } from "lucide-react";

const Quotes = () => {

  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-0">
      <Header
        title="Quote Requests"
        subtitle="Manage your quote requests and approvals"
        action={
            <div className="px-5 py-2.5 bg-blue-600 rounded-lg inline-flex justify-center items-center gap-1.5 cursor-pointer hover:bg-blue-700 transition">
              <Plus className="text-white" size={17} />
              <div className="text-white text-md font-medium font-hk">
                New Quote Request
              </div>
            </div>
        }
      />

      <div className="max-w-full mx-auto space-y-9">
       <SearchFilter />
  <QuoteList />
      </div>
    </section>
  );
};

export default Quotes;
