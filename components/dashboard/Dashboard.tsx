
import {
  statsData,
  recentQuotes,
  activeOrders,
  quickActions,
} from "@/constants/dashboard";
import Header from "../shared/Header";
import StatCard from "../cards/Dashboard/StatCard";
import ListCard from "../cards/Dashboard/ListCard";
import QuickActionCard from "../cards/Dashboard/QuickActionCard";
import { FileText } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-0">

      <Header
        title="Customer Dashboard"
        subtitle="Welcome to your customer portal"
      />

      <div className="max-w-full mx-auto space-y-9">

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map((item, i) => (
            <StatCard key={i} {...item} icon={<FileText size={19} strokeWidth={1.5} />} />
          ))}
        </div>

        {/* Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ListCard title="Recent Quotes" items={recentQuotes.map(q => q.status)} />
          <ListCard title="Active Orders" items={activeOrders} />
        </div>

        {/* Quick Actions */}
        <div className="p-6 bg-neutral-900/60 backdrop-blur-sm rounded-xl border border-[#FAFAFA1A]">
          <h2 className="text-neutral-200 text-lg font-semibold mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((btn, i) => (
              <QuickActionCard key={i} {...btn} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;
