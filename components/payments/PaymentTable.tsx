import React from "react";
import { FiDownload } from "react-icons/fi";

interface Transaction {
  invoiceId: string;
  date: string;
  description: string;
  paymentMethod: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
}

const transactions: Transaction[] = [
  {
    invoiceId: "INV-2025-001",
    date: "2025-11-15",
    description: "Office Furniture - Order #5680",
    paymentMethod: "Credit Card",
    amount: "$2,450.00",
    status: "Paid",
  },
  {
    invoiceId: "INV-2025-002",
    date: "2025-11-15",
    description: "Office Furniture - Order #5680",
    paymentMethod: "Credit Card",
    amount: "$2,450.00",
    status: "Paid",
  },
  {
    invoiceId: "INV-2025-002",
    date: "2025-11-16",
    description: "Laptop - Order #5681",
    paymentMethod: "PayPal",
    amount: "$1,200.00",
    status: "Pending",
  },
];

const statusColors: Record<string, string> = {
  Paid: "bg-blue-600 text-black font-[500] font-hk",
  Pending: "bg-yellow-500 text-black font-[500] font-hk",
  Failed: "bg-red-600 text-neutral-50",
};

const PaymentTable = () => {
  return (
    <div className="w-full">
      <div className="bg-[#222222] rounded-[12px] border border-[#FAFAFA1A] p-4 md:p-7 flex flex-col gap-5 md:gap-6">

        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-3 md:gap-4">
          <h2 className="text-lg md:text-xl font-semibold text-neutral-50 font-hk">
            Transaction History
          </h2>
          <button className="px-3 py-1.5 md:px-4 md:py-2 rounded outline outline-1 outline-offset-[-1px] outline-neutral-50/10 flex items-center gap-2.5 text-neutral-50 font-medium font-hk text-sm md:text-base">
            <FiDownload className="w-4 h-4 md:w-5 md:h-5" />
            Export All
          </button>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-[800px]">

            {/* Table Header */}
            <div className="grid grid-cols-[150px_120px_1fr_140px_100px_100px_100px] gap-4 px-2 md:px-4 py-3 md:py-4 border-b border-neutral-50/10 text-neutral-50 font-hk font-semibold text-sm md:text-base">
              <div>Invoice ID</div>
              <div>Date</div>
              <div>Description</div>
              <div>Payment Method</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Actions</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col divide-y divide-neutral-50/10">
              {transactions.map((tx, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[150px_120px_1fr_140px_100px_100px_100px] gap-4 items-center px-2 md:px-4 py-2.5 md:py-4 text-neutral-50 font-hk text-sm"
                >
                  <div>{tx.invoiceId}</div>
                  <div>{tx.date}</div>
                  <div className="truncate">{tx.description}</div>
                  <div>{tx.paymentMethod}</div>
                  <div>{tx.amount}</div>
                  <div>
                    <span className={`px-3 py-1 rounded ${statusColors[tx.status]}`}>
                      {tx.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FiDownload className="w-5 h-5" />
                    <span>Pdf</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="flex flex-col gap-4 md:hidden">
          {transactions.map((tx, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-white/10 bg-neutral-900/40 flex flex-col gap-3"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-neutral-50">
                  {tx.invoiceId}
                </span>
                <span className={`px-3 py-1 text-xs rounded ${statusColors[tx.status]}`}>
                  {tx.status}
                </span>
              </div>

              <div className="text-sm text-neutral-400">
                {tx.description}
              </div>

              <div className="flex justify-between text-xs text-neutral-400">
                <span>{tx.date}</span>
                <span>{tx.paymentMethod}</span>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-white/5">
                <span className="text-sm font-semibold text-neutral-50">
                  {tx.amount}
                </span>

                <div className="flex items-center gap-2 text-sm cursor-pointer">
                  <FiDownload className="w-4 h-4" />
                  <span>Pdf</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PaymentTable;
