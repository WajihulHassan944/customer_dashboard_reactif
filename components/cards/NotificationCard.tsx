"use client";
import React from "react";
import NotificationRow from "../shared/NotificationCardRow";

interface NotificationCardProps {
  title: string;
  subtitle: string;
  notifications: {
    title: string;
    description: string;
    enabled?: boolean;
  }[];
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  subtitle,
  notifications,
}) => {
  return (
    <div className="w-full max-w-full p-8 md:p-9 bg-[#222222] rounded-[24px] border border-[#FAFAFA1A] flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-semibold text-neutral-50 font-hk">
          {title}
        </h2>
        <p className="text-sm md:text-base text-neutral-50/60 font-hk">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {notifications.map((notif, idx) => (
          <NotificationRow
            key={idx}
            title={notif.title}
            description={notif.description}
            enabled={notif.enabled}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationCard;
