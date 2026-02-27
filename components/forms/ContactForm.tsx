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
  className="self-start inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 rounded-lg text-neutral-50 text-base sm:text-lg font-semibold font-hk hover:bg-blue-700 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className="shrink-0"
  >
    <path
      d="M17.105 0.421057C16.9159 0.233224 16.6786 0.101178 16.4192 0.0394311C16.1599 -0.0223156 15.8885 -0.0113729 15.635 0.0710566L1.00503 4.95106C0.733698 5.03703 0.493932 5.20149 0.316014 5.42365C0.138095 5.64581 0.0300049 5.91572 0.00539418 6.19928C-0.0192166 6.48284 0.0407563 6.76733 0.177738 7.01682C0.31472 7.26632 0.522567 7.46962 0.775027 7.60106L6.84503 10.6011L9.84503 16.6911C9.96561 16.9294 10.1501 17.1296 10.3779 17.2691C10.6058 17.4086 10.8679 17.482 11.135 17.4811H11.235C11.5211 17.46 11.7943 17.3534 12.019 17.175C12.2437 16.9967 12.4095 16.7549 12.495 16.4811L17.445 1.89106C17.5334 1.63899 17.5484 1.367 17.4882 1.10675C17.428 0.846508 17.2951 0.608714 17.105 0.421057ZM1.62503 6.33106L14.395 2.07106L7.30503 9.16106L1.62503 6.33106ZM11.205 15.9011L8.36503 10.2211L15.455 3.13106L11.205 15.9011Z"
      fill="#FAFAFA"
    />
  </svg>

  <span>Send Message</span>
</button>
      </form>
    </section>
  );
};

export default ContactForm;
