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
      className={`w-full  p-6 bg-neutral-800 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-50/10 flex flex-col justify-start items-start gap-3 ${className}`}
    >
      <h3 className="text-xl font-semibold text-neutral-50 font-hk">{title}</h3>
      <p className="text-m font-medium text-neutral-50/60 font-hk">{description}</p>
      {onButtonClick && (
        <button
          onClick={onButtonClick}
          className="px-5 py-2.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-50/30 flex justify-center items-center gap-2.5 text-neutral-50 font-semibold font-hk text-base mt-1"
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default QuickHelpCard;
