import React from "react";
import { useRouter } from "next/navigation";

interface ListCardProps {
  title: string;
  viewAll?: boolean;
  items: string[];
  route: string; // Pass the route here for View All
}

const ListCard = ({ title, items, route }: ListCardProps) => {
  const router = useRouter();

  // Handler for "View All" click
  const handleViewAllClick = () => {
    router.push(route); // Navigate to the respective route
  };

  return (
    <div className="p-4 sm:p-6 bg-neutral-900/60 backdrop-blur-sm rounded-[12px] border border-[#FAFAFA1A] space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-neutral-200 text-base sm:text-lg font-semibold">
          {title}
        </h2>
          <span
            className="text-xs sm:text-sm text-[#FAFAFA99] font-semibold cursor-pointer whitespace-nowrap"
            onClick={handleViewAllClick} // Handle the click event for View All
          >
            View All
          </span>
      
      </div>

      {/* Items */}
      {items.map((status, i) => (
        <div
          key={i}
          className="p-3 sm:p-4 rounded-xl border border-white/5 bg-neutral-900/40 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0"
        >
          {/* Left Info */}
          <div className="text-neutral-300 text-xs sm:text-sm leading-5 sm:leading-6">
            Office Furniture Set <br />
            <span className="text-[#FAFAFA99]">
              Q-1234 • 2025-11-15
            </span>
          </div>

          {/* Status Badge */}
          <div
            className={`self-start sm:self-auto px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full whitespace-nowrap ${
              status === "Delivered"
                ? "bg-blue-500/15 text-blue-400"
                : status === "Shipped" || status === "Approved"
                ? "bg-purple-500/15 text-purple-400"
                : "border border-neutral-500 text-neutral-400"
            }`}
          >
            {status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;