import QuickHelpCard from "../cards/QuickHelpCard";

const QuickHelp = () => {
  return (
    <div className="w-full p-9 bg-[#222222] rounded-[24px] border border-[#FAFAFA1A] flex flex-col gap-10">
      
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-neutral-50 font-hk">
          Quick Help
        </h2>
      </div>

      {/* Proper responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <QuickHelpCard
          title="FAQs"
          description="Find answers to commonly asked questions"
          onButtonClick={() => console.log("View FAQs clicked")}
        />

        <QuickHelpCard
          title="Documentation"
          description="Browse our comprehensive user guides"
          onButtonClick={() => console.log("View Documentation clicked")}
        />
      </div>

    </div>
  );
};

export default QuickHelp;
