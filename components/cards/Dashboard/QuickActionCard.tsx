import React from "react";
import { useRouter } from "next/navigation";

interface QuickActionCardProps {
  label: string;
  primary?: boolean;
  route: string;  // New prop for routing
}

const QuickActionCard = ({ label, primary, route }: QuickActionCardProps) => {
  const router = useRouter();

  // Handle the button click to navigate
  const handleClick = () => {
    router.push(route); // Navigate to the provided route
  };

  return (
    <button
      onClick={handleClick} // Add onClick handler to navigate
      className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer
      ${
        primary
          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20 hover:opacity-90"
          : "border border-white/10 text-neutral-300 hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
};

export default QuickActionCard;