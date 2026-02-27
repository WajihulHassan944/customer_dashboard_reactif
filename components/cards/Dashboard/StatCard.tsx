import Image from "next/image";

interface StatCardProps {
  title: string;
  value: string;
  gradient: string;
  bg: string;

  icon?: string; // now string path
  showAction?: boolean;
  actionLabel?: string;
  onActionClick?: () => void;
  className?: string;
}

const StatCard = ({
  title,
  value,
  gradient,
  bg,
  icon,
  showAction = true,
  actionLabel = "View All",
  onActionClick,
  className = "",
}: StatCardProps) => {
  return (
    <div
      className={`p-6 bg-[#222222] rounded-[12px] border border-[#FAFAFA1A] flex flex-col justify-between gap-6 hover:border-white/10 transition ${className}`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-neutral-100 text-xl font-semibold font-hk">
            {title}
          </h3>
          <p className="text-xl text-neutral-100 mt-1">{value}</p>
        </div>

        {/* SVG Icon */}
        {icon && (
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${bg}`}>
            <Image
              src={icon}
              alt={title}
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Optional Action */}
      {showAction && (
        <button
          onClick={onActionClick}
          className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent flex items-center gap-1 cursor-pointer`}
        >
          {actionLabel} →
        </button>
      )}
    </div>
  );
};

export default StatCard;