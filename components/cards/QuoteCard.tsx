"use client";

import React from "react";

export interface Quote {
  id: string;
  title: string;
  code: string;
  status: "Pending" | "Approved" | "Rejected";
  amount: string;
  items: number;
  requested: string;
  validUntil: string;
}

interface QuoteCardProps {
  quote: Quote;
  actions?: { 
    label: string; 
    onClick: () => void; 
    type?: "primary" | "secondary" | "rejected" 
  }[];
}

const statusColors = {
  Pending: "bg-purple-600 text-neutral-50",
  Approved: "bg-blue-600 text-neutral-50",
  Rejected: "bg-pink-400 text-neutral-50",
};

const iconWrapperColors = {
  Pending: "bg-purple-500/10",
  Approved: "bg-blue-500/10",
  Rejected: "bg-pink-400/10",
};

const iconStrokeColors = {
  Pending: "#9C3CD3",
  Approved: "#2563EB",
  Rejected: "#F262B5",
};

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, actions }) => {
  return (
    <div className="p-6 bg-neutral-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-50/30 flex flex-col gap-6 w-full">

      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div className="flex items-center gap-4">

          {/* SVG Icon */}
          <div className={`w-10 h-10 rounded-lg flex justify-center items-center ${iconWrapperColors[quote.status]}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.66536 11.6663H13.332M6.66536 8.33301H8.33203M6.66536 14.9997H9.9987M8.33203 2.49967H4.9987C4.55667 2.49967 4.13275 2.67527 3.82019 2.98783C3.50763 3.30039 3.33203 3.72431 3.33203 4.16634V16.6663C3.33203 17.1084 3.50763 17.5323 3.82019 17.8449C4.13275 18.1574 4.55667 18.333 4.9987 18.333H14.9987C15.4407 18.333 15.8646 18.1574 16.1772 17.8449C16.4898 17.5323 16.6654 17.1084 16.6654 16.6663V4.16634C16.6654 3.72431 16.4898 3.30039 16.1772 2.98783C15.8646 2.67527 15.4407 2.49967 14.9987 2.49967H12.082M8.33203 2.49967V0.833008M8.33203 2.49967V4.16634"
                stroke={iconStrokeColors[quote.status]}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-neutral-50 text-xl font-semibold font-hk">
              {quote.title}
            </div>
            <div className="text-neutral-50/60 text-base font-semibold font-hk">
              {quote.code}
            </div>
          </div>
        </div>

        <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[quote.status]}`}>
          {quote.status}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2">
        <DetailRow label="Amount:" value={quote.amount} />
        <DetailRow label="Items:" value={quote.items} />
        <DetailRow label="Requested:" value={quote.requested} />
        <DetailRow label="Valid Until:" value={quote.validUntil} />
      </div>

      {actions && actions.length > 0 && <div className="h-px bg-neutral-50/10 my-2" />}

      {/* Actions */}
      {actions && actions.length > 0 && (
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-2 flex-wrap justify-between">
          {actions.map((action, idx) => (
            <button
              key={idx}
              onClick={action.onClick}
              className={`flex-1 px-3 py-2 rounded-lg font-semibold font-hk text-base flex justify-center items-center gap-2 transition-colors
                ${
                  action.type === "primary"
                    ? "bg-blue-600 text-neutral-50 hover:bg-blue-700"
                    : action.type === "rejected"
                    ? "bg-[#F262B5] text-white hover:opacity-90"
                    : "outline outline-1 outline-offset-[-1px] outline-neutral-50/30 text-neutral-50 hover:bg-neutral-700"
                }`}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const DetailRow: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <div className="text-neutral-50 text-base font-medium font-hk">{label}</div>
    <div className="text-neutral-50 text-base font-medium font-hk">{value}</div>
  </div>
);