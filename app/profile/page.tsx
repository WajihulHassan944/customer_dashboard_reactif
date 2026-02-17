import ProfileForm from "@/components/forms/ProfileForm";
import Header from "@/components/shared/Header";

const Profile = () => {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-0">

      <Header
        title="Manage Profile"
        subtitle="Update your personal and company information"
      />
<ProfileForm />
    
    </section>
  );
};

export default Profile;
