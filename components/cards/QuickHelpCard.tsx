"use client";

import React from "react";

interface QuickHelpCardProps {
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string; // optional extra styling
}

const QuickHelpCard: React.FC<QuickHelpCardProps> = ({
  title,
  description,
  buttonLabel = "View FAQs",
  onButtonClick,
  className = "",
}) => {
  return (
    <div
      className={`w-full px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 bg-neutral-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-50/10 flex flex-col justify-start items-start gap-3 ${className}`}
    >
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-neutral-50 font-hk">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-m font-medium text-neutral-50/60 font-hk">
        {description}
      </p>
      {onButtonClick && (
        <button
          onClick={onButtonClick}
          className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-50/30 flex justify-center items-center gap-2 text-sm sm:text-base text-neutral-50 font-semibold font-hk mt-1"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default QuickHelpCard;
