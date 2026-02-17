import EmailNotifications from "@/components/notifications/EmailNotifications";
import PushNotifications from "@/components/notifications/PushNotifications";
import Header from "@/components/shared/Header";

const Profile = () => {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-0">

      <Header
        title="Notification Preferences"
        subtitle="Manage how you receive updates and communications"
      />
       <div className="max-w-full mx-auto space-y-9">
        <EmailNotifications />
        <PushNotifications />
        </div>
    </section>
  );
};

export default Profile;
