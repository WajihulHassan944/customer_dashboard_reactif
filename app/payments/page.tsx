import StatCard from "@/components/cards/Dashboard/StatCard";
import PaymentTable from "@/components/payments/PaymentTable";
import Header from "@/components/shared/Header";
import { paymentStatsData } from "@/constants/payments";

const Dashboard = () => {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-0">

      <Header
        title="Payment History"
        subtitle="View all your past transactions and download invoices"
      />
      <div className="max-w-full mx-auto space-y-9">

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentStatsData.map((item, i) => (
            <StatCard key={i} {...item} showAction={false} className="p-6" />
          ))}
        </div>
          <PaymentTable />
        </div>
    </section>
  );
};

export default Dashboard;
