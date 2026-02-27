"use client";
import React from "react";
import Image from "next/image";
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
  // Decide icon based on title
  const iconSrc = title.toLowerCase().includes("email")
    ? "/icons/mail.svg"
    : "/icons/mobile.svg";

  return (
    <div className="w-full max-w-full p-8 md:p-9 bg-[#222222] rounded-[24px] border border-[#FAFAFA1A] flex flex-col gap-8">

      {/* HEADER WITH ICON (Figma Style) */}
      <div className="flex items-start gap-3">

        {/* Icon Wrapper */}
        <div className="p-2.5 bg-indigo-600/10 rounded-lg flex items-center justify-center">
          <Image
            src={iconSrc}
            alt="notification icon"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        {/* Title + Subtitle */}
        <div className="flex flex-col gap-[0.5] flex-1">
          <h2 className="text-2xl font-semibold text-neutral-50 font-hk">
            {title}
          </h2>
          <p className="text-lg text-neutral-50/60  font-hk">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Notification Rows */}
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