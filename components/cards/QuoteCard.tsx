"use client";

import React from "react";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

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
  actions?: { label: string; onClick: () => void; type?: "primary" | "secondary" }[];
}

const statusColors = {
  Pending: "bg-purple-600 text-neutral-50",
  Approved: "bg-blue-600 text-neutral-50",
  Rejected: "bg-pink-400 text-neutral-50",
};

const statusIcons = {
  Pending: <AlertCircle className="w-5 h-5 text-purple-600" />,
  Approved: <CheckCircle className="w-5 h-5 text-blue-600" />,
  Rejected: <XCircle className="w-5 h-5 text-pink-400" />,
};

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, actions }) => {
  return (
    <div className="p-6 bg-neutral-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-50/30 flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 p-1.5 rounded-lg flex justify-center items-center gap-2.5 bg-neutral-900/20`}>
            {statusIcons[quote.status]}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-neutral-50 text-xl font-semibold font-hk">{quote.title}</div>
            <div className="text-neutral-50/60 text-base font-semibold font-hk">{quote.code}</div>
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

      {/* Divider */}
      {actions && actions.length > 0 && <div className="self-stretch h-px bg-neutral-50/10 my-2" />}

      {/* Actions */}
      {actions && actions.length > 0 && (
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-2 flex-wrap justify-between">
          {actions.map((action, idx) => (
            <button
              key={idx}
              onClick={action.onClick}
              className={`flex-1 px-3 py-2 rounded-lg font-semibold font-hk text-base flex justify-center items-center gap-2
                ${action.type === "primary"
                  ? "bg-blue-600 text-neutral-50 hover:bg-blue-700 transition-colors"
                  : "outline outline-1 outline-offset-[-1px] outline-neutral-50/30 text-neutral-50 hover:bg-neutral-700 transition-colors"
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
