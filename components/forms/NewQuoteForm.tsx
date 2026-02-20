import React from "react";
import {
  UploadCloud,
  Trash2,
  FileText,
} from "lucide-react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
}) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-neutral-50 text-sm font-semibold">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="h-11 px-4 bg-neutral-700 rounded-lg outline outline-1 outline-neutral-600 
                 text-neutral-50 placeholder:text-neutral-400 text-sm
                 focus:outline-blue-600 focus:ring-1 focus:ring-blue-600 transition"
    />
  </div>
);

const NewQuoteForm: React.FC = () => {
  return (
      <div className="max-w-6xl mx-auto bg-neutral-800 rounded-[16px] p-6 md:p-10 
                      outline outline-1 outline-neutral-700 space-y-12">

        {/* ================= PROJECT DETAILS ================= */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-50">
            Project Details
          </h2>
          <div className="border-t border-neutral-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Project Name" placeholder="Enter Project Name" />
            <InputField
              label="Project ID / Reference Number"
              placeholder="Enter Project ID or Reference"
            />
            <InputField
              label="Project Type"
              placeholder="Select Project Type"
            />
            <InputField
              label="Required Deadline"
              placeholder="dd/mm/yyyy"
              type="date"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-neutral-50 text-sm font-semibold">
              Detailed Description
            </label>
            <textarea
              rows={6}
              placeholder="Provide a detailed description of the project requirements..."
              className="w-full p-4 bg-neutral-700 rounded-xl outline outline-1 outline-neutral-600 
                         text-neutral-50 placeholder:text-neutral-400 text-sm
                         focus:outline-blue-600 focus:ring-1 focus:ring-blue-600 transition"
            />
          </div>
        </section>

        {/* ================= CONTACT INFO ================= */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-50">
            Contact Information
          </h2>
          <div className="border-t border-neutral-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Primary Contact Name" placeholder="John Smith" />
            <InputField
              label="Contact Email"
              placeholder="john@gmail.com"
              type="email"
            />
            <InputField
              label="Contact Phone Number"
              placeholder="+92 76769876"
            />
          </div>
        </section>

        {/* ================= ATTACHMENTS ================= */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-50">
            Attachments
          </h2>
          <div className="border-t border-neutral-700" />

          {/* Upload Box */}
          <div className="border-2 border-dashed border-neutral-600 
                          rounded-xl p-10 text-center 
                          hover:border-blue-600 transition cursor-pointer
                          flex flex-col items-center gap-4">

            <UploadCloud className="w-10 h-10 text-blue-600" />

            <p className="text-sm">
              <span className="text-blue-600 font-semibold">
                Click to browse
              </span>{" "}
              <span className="text-neutral-400">
                or drag & drop files here
              </span>
            </p>

            <p className="text-xs text-neutral-500">
              Supported formats: JPG, PNG, PDF (Max 5MB)
            </p>
          </div>

          {/* Example File Success */}
          <div className="bg-neutral-700 rounded-xl p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-neutral-200 text-sm">
                  project_brief_v2.pdf
                </p>
                <p className="text-neutral-400 text-xs">1.2MB</p>
              </div>
            </div>

            <button className="text-neutral-400 hover:text-red-500 transition">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          {/* Example File Error */}
          <div className="bg-rose-100 rounded-xl p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-neutral-800 text-sm">
                  unsupported_file.zip
                </p>
                <p className="text-red-600 text-xs">
                  File type not supported.
                </p>
              </div>
            </div>

            <button className="text-red-600 hover:text-red-800 transition">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* ================= BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 
                             rounded-lg text-white text-sm font-semibold transition">
            Submit Request
          </button>

          <button className="px-6 py-2.5 border border-neutral-600 
                             rounded-lg text-neutral-200 text-sm font-semibold 
                             hover:bg-neutral-700 transition">
            Cancel
          </button>
        </div>
      </div>
    
  );
};

export default NewQuoteForm;