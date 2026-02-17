"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const inputClass =
  "h-11 w-full bg-neutral-800 border-white/10 text-neutral-100 placeholder:text-neutral-500 focus-visible:ring-0 focus-visible:border-white/20";

const FormField = ({ label, defaultValue }: { label: string; defaultValue: string }) => (
  <div className="space-y-2 w-full min-w-0">
    <Label className="text-sm font-medium text-neutral-300 font-hk">
      {label}
    </Label>
    <Input defaultValue={defaultValue} className={inputClass} />
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-6">
    <h2 className="text-lg sm:text-xl font-semibold text-neutral-100 font-hk">
      {title}
    </h2>
    {children}
  </section>
);

const ProfileForm = () => {
  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <Card className="bg-neutral-900/60 backdrop-blur-sm border border-[#FAFAFA1A] rounded-2xl py-0">
        <CardContent className="p-6 sm:p-8 lg:p-10 space-y-10">

          {/* ================= PERSONAL INFO ================= */}
          <Section title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Full Name" defaultValue="John Doe" />
              <FormField label="Email Address" defaultValue="john.doe@acme.com" />

              <div className="md:col-span-2">
                <FormField label="Phone Number" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>
          </Section>

          {/* ================= COMPANY INFO ================= */}
          <Section title="Company Information">
            {/* Full width by default */}
            <FormField label="Company Name" defaultValue="Acme Corporation" />
          </Section>

          {/* ================= ADDRESS ================= */}
          <Section title="Address">
            <div className="space-y-6">

              {/* Full width street */}
              <FormField
                label="Street Address"
                defaultValue="123 Business St, Suite 100"
              />

              {/* Responsive & no overflow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField label="City" defaultValue="San Francisco" />
                <FormField label="State" defaultValue="CA" />
                <FormField label="Zip Code" defaultValue="94567" />
              </div>

            </div>
          </Section>

          {/* ================= ACTIONS ================= */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold font-hk hover:opacity-90 shadow-lg shadow-indigo-500/20 px-5">
              Save Changes
            </Button>

            <Button
              variant="outline"
              className="border-white/20 text-neutral-300 hover:bg-white/5 font-hk px-5"
            >
              Cancel
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileForm;
