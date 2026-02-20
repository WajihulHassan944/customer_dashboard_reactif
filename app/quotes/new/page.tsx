"use client";
import NewQuoteForm from "@/components/forms/NewQuoteForm";
import Header from "@/components/shared/Header";
import { Plus } from "lucide-react";

const Quotes = () => {

  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-0">
      <Header
        title="Add New Quote Requests"
        subtitle="Fill in the project details below to receive a quotation."
      />

    <NewQuoteForm />
    </section>
  );
};

export default Quotes;
