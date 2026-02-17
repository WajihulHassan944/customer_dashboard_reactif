"use client";

import NotificationCard from "../cards/NotificationCard";

const PushNotifications = () => {
  const pushNotifications = [
    { title: "Quote Update", description: "Instant alerts for quote changes", enabled: true },
    { title: "Order Update", description: "Real-time order and shipping alerts", enabled: true },
    { title: "Payment Confirmation", description: "Instant payment notifications", enabled: false },
    { title: "Promotions & Offers", description: "Get notified about special deals", enabled: false },
    { title: "Products Updates", description: "Feature announcements and updates", enabled: false },
  ];

  return (
    <NotificationCard
      title="Push Notifications"
      subtitle="Receive instant updates on your device"
      notifications={pushNotifications}
    />
  );
};

export default PushNotifications;
