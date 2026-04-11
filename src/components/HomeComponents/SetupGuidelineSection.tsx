/** @format */

import SectionHeading from "@/components/CommonComponents/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Choose a Plan",
    description: "Pick the subscription that fits your family size",
  },
  {
    number: "02",
    title: "Complete Payment",
    description: "Secure checkout with instant confirmation",
  },
  {
    number: "03",
    title: "Account Activated",
    description: "Your AI account is created automatically",
  },
  {
    number: "04",
    title: "Start on WhatsApp",
    description: "You are redirected straight to your AI bot on WhatsApp",
  },
];

const SetupGuidelineSection = () => {
  return (
    <section
      id="how-it-works"
      className="w-full bg-secondary-background py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          semiTitle="Simple Setup"
          title="Up and running in minutes"
        />

        <div className="relative mt-12 hidden md:block">
          <div className="absolute top-5 right-16 md:right-32 left-16 md:left-32 border-t-2 border-dashed border-button-bg/60" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-button-bg text-sm font-semibold text-white">
                  {step.number}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-button-bg/25 bg-card-bg p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-button-bg text-sm font-semibold text-white">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-primary">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupGuidelineSection;
