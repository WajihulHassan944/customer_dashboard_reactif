"use client";

import NotificationCard from "../cards/NotificationCard";

const EmailNotifications = () => {
  const emailNotifications = [
    { title: "Quote Update", description: "Get notified when your quotes are reviewed or updated", enabled: true },
    { title: "Order Update", description: "Track your order status and shipping updates", enabled: true },
    { title: "Payment Confirmation", description: "Receive receipts and payment confirmations", enabled: true },
    { title: "Promotions & Offers", description: "Special deals and promotional content", enabled: false },
    { title: "Products Updates", description: "News about new features and improvements", enabled: true },
  ];

  return (
    <NotificationCard
      title="Email Notifications"
      subtitle="Receive updates via email"
      notifications={emailNotifications}
    />
  );
};

export default EmailNotifications;
