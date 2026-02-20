"use client";

import Management from "@/components/order/Management";
import Header from "@/components/shared/Header";
import SearchFilter from "@/components/shared/SearchFilter";


const Quotes = () => {

  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-0">
      <Header
        title="Order Management"
        subtitle="Track and manage your orders"
      />

      <div className="max-w-full mx-auto space-y-9">
       <SearchFilter />
        <Management />
      </div>
    </section>
  );
};

export default Quotes;
