"use client";

import { useState } from "react";
import Header from "@/components/shared/Header";
import SupportTabs from "@/components/support/SupportTabs";
import QuickHelp from "@/components/support/QuickHelp";
import ContactForm from "@/components/forms/ContactForm";
import LiveSupportChat from "@/components/support/LiveSupportChat";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"contact" | "direct">("contact");

  const renderMainContent = () => {
    switch (activeTab) {
      case "contact":
        return <ContactForm />;

      case "direct":
        return <LiveSupportChat />;

      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-0">
      <Header
        title="Support Center"
        subtitle="Get help from our support team"
      />

      <div className="max-w-full mx-auto space-y-9">
        <SupportTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Only this part switches */}
        <div
          key={activeTab}
          className="space-y-9 animate-in fade-in-50 duration-300"
        >
          {renderMainContent()}
        </div>

        {/* Always visible */}
        <QuickHelp />
      </div>
    </section>
  );
};

export default Dashboard;
