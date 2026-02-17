import React from "react";
import { FiDownload } from "react-icons/fi"; // PDF download icon

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
    <div className="w-full overflow-x-auto">
      <div className="min-w-[800px] bg-[#222222] rounded-[12px] border border-[#FAFAFA1A]  p-7 flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h2 className="text-xl font-semibold text-neutral-50 font-hk">
            Transaction History
          </h2>
          <button className="px-3 py-1.5 rounded outline outline-1 outline-offset-[-1px] outline-neutral-50/10 flex items-center gap-2.5 text-neutral-50 font-medium font-hk text-base">
            <FiDownload className="w-5 h-5" />
            Export All
          </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[150px_120px_1fr_140px_100px_100px_100px] gap-4 px-2 py-3 border-b border-neutral-50/10 text-neutral-50 font-hk font-semibold text-base">
          <div>Invoice ID</div>
          <div>Date</div>
          <div>Description</div>
          <div>Payment Method</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col divide-y divide-neutral-50/10">
          {transactions.map((tx, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[150px_120px_1fr_140px_100px_100px_100px] gap-4 items-center px-2 py-2 text-neutral-50 font-hk text-m"
            >
              <div>{tx.invoiceId}</div>
              <div>{tx.date}</div>
              <div>{tx.description}</div>
              <div>{tx.paymentMethod}</div>
              <div>{tx.amount}</div>
              <div>
                <span
                  className={`px-3 py-1 rounded ${statusColors[tx.status]}`}
                >
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
  );
};

export default PaymentTable;
