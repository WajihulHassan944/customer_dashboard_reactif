interface ListCardProps {
  title: string;
  viewAll?: boolean;
  items: string[];
}

const ListCard = ({ title, items }: ListCardProps) => {
  return (
    <div className="p-6 bg-neutral-900/60 backdrop-blur-sm rounded-[12px] border border-[#FAFAFA1A] space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-neutral-200 text-lg font-semibold">
          {title}
        </h2>
        <span className="text-sm text-[#FAFAFA99] font-semibold cursor-pointer">
          View All
        </span>
      </div>

      {items.map((status, i) => (
        <div
          key={i}
          className="p-4 rounded-xl border border-white/5 bg-neutral-900/40 flex justify-between items-center"
        >
          <div className="text-neutral-300 text-sm leading-6">
            Office Furniture Set <br />
            Q-1234 • 2025-11-15
          </div>

          <div
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
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
