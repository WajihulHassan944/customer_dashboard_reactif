import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  gradient: string;
  bg: string;
  iconColor?: string;

  // Optional props
  icon?: React.ReactNode;
  showAction?: boolean;
  actionLabel?: string;
  onActionClick?: () => void;

  // New optional prop
  className?: string; // allows passing custom padding or other styles
}

const StatCard = ({
  title,
  value,
  gradient,
  bg,
  iconColor = "text-white",
  icon,
  showAction = true,
  actionLabel = "View All",
  onActionClick,
  className = "", // default empty
}: StatCardProps) => {
  return (
    <div
      className={`p-6 bg-[#222222] rounded-[12px] border border-[#FAFAFA1A] flex flex-col justify-between gap-6 hover:border-white/10 transition ${className}`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-neutral-300 text-sm font-medium font-hk">
            {title}
          </h3>
          <p className="text-2xl font-semibold text-neutral-100 mt-1">
            {value}
          </p>
        </div>

        {/* Icon Container */}
        {icon && (
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${bg}`}>
            <div className={`w-5 h-5 ${iconColor}`}>{icon}</div>
          </div>
        )}
      </div>

      {/* Optional Action */}
      {showAction && (
        <button
          onClick={onActionClick}
          className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent flex items-center gap-1`}
        >
          {actionLabel} →
        </button>
      )}
    </div>
  );
};

export default StatCard;
