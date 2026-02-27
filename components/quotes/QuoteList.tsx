"use client";

import React from "react";
import { Quote, QuoteCard } from "../cards/QuoteCard";

const quotes: Quote[] = [
  { id: "1", title: "Office Furniture Set", code: "Q-1234", status: "Pending", amount: "$12,500", items: 15, requested: "2025-11-15", validUntil: "2025-12-15" },
  { id: "2", title: "Lighting Installation", code: "Q-1235", status: "Approved", amount: "$8,750", items: 10, requested: "2025-11-10", validUntil: "2025-12-10" },
  { id: "3", title: "Ergonomic Workstation", code: "Q-1236", status: "Rejected", amount: "$15,000", items: 20, requested: "2025-11-12", validUntil: "2025-12-12" },
  { id: "4", title: "Storage Solutions", code: "Q-1237", status: "Approved", amount: "$9,500", items: 12, requested: "2025-11-14", validUntil: "2025-12-14" },
];

const QuoteList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {quotes.map((quote) => (
        <QuoteCard
          key={quote.id}
          quote={quote}
          actions={[
            {
              label: "View Details",
              onClick: () => alert(`Viewing ${quote.title}`),
              type: quote.status === "Rejected" ? "rejected" : "secondary",
            },
            (quote.status !== "Rejected" && quote.status !== "Pending") && {
              label: "Accept Quote",
              onClick: () => alert(`Accepted ${quote.title}`),
              type: "primary",
            },
          ].filter(Boolean) as any}
        />
      ))}
    </div>
  );
};

export default QuoteList;