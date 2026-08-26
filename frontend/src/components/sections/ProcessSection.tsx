import React from "react";

const steps = [
  { id: "01", title: "Requirement & Order Discussion" },
  { id: "02", title: "Fabric / Material Received" },
  { id: "03", title: "Design & Specification Review" },
  { id: "04", title: "Cutting / Preparation" },
  { id: "05", title: "Stitching & Assembly" },
  { id: "06", title: "Finishing" },
  { id: "07", title: "Quality Inspection" },
  { id: "08", title: "Packing & Dispatch" },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-brand-navy overflow-hidden" id="process">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Fabric to Finished Garment</h2>
          <p className="text-gray-300 text-lg">
            Our systematic approach ensures consistency and quality at every step of production.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line for mobile, Horizontal for desktop */}
          <div className="absolute left-8 md:left-auto md:top-12 md:left-0 md:right-0 bottom-0 md:bottom-auto w-1 md:w-full h-full md:h-1 bg-brand-charcoal md:bg-gray-700 rounded" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-y-20 relative">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex md:flex-col items-center md:text-center relative pl-24 md:pl-0 z-10"
              >
                {/* Number Circle */}
                <div className="absolute left-0 md:left-auto md:relative w-16 h-16 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold text-xl shadow-lg border-4 border-brand-navy md:mb-6">
                  {step.id}
                </div>
                
                <h3 className="text-lg font-bold text-white md:max-w-[200px] leading-snug">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
