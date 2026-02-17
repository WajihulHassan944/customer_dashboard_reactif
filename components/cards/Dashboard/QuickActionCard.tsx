interface QuickActionCardProps {
  label: string;
  primary?: boolean;
}

const QuickActionCard = ({ label, primary }: QuickActionCardProps) => {
  return (
    <button
      className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all
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
