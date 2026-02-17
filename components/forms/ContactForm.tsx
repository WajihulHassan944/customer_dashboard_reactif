import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  textarea = false,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={name}
        className="text-neutral-50 text-base sm:text-lg font-semibold font-hk"
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          className="w-full px-4 py-2 bg-neutral-800 rounded-lg border border-neutral-50/10 text-neutral-50 focus:outline-none focus:border-blue-500 transition resize-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className="w-full h-11 px-4 bg-neutral-800 rounded-lg border border-neutral-50/10 text-neutral-50 focus:outline-none focus:border-blue-500 transition"
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="w-full p-6 sm:p-8 lg:p-9 bg-[#222222] rounded-[24px] border border-[#FAFAFA1A] flex flex-col gap-8">
      
      {/* Header */}
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-neutral-50 font-hk">
          Send us a message
        </h2>
        <p className="text-neutral-50/60 text-base sm:text-lg font-medium font-hk">
          Fill out the form below and we&apos;ll get back to you within 24 hours
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        
        {/* Name & Email (2 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Name" name="name" />
          <InputField label="Email" name="email" type="email" />
        </div>

        {/* Subject */}
        <InputField label="Subject" name="subject" />

        {/* Message */}
        <InputField label="Message" name="message" textarea />

        {/* Button */}
        <button
          type="submit"
          className="self-start px-6 py-2.5 bg-blue-600 rounded-lg text-neutral-50 text-base sm:text-lg font-semibold font-hk hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
