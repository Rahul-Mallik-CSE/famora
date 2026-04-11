/** @format */

import { Lock, Users } from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";

const cards = [
  {
    title: "Shared Events",
    description:
      "Visible to all connected family members. Perfect for appointments, family plans, and group reminders.",
    icon: Users,
    label: "Family Plan feature",
  },
  {
    title: "Private Events",
    description:
      "Only you can see it. Personal reminders, private appointments, sensitive information kept just for you.",
    icon: Lock,
    label: "All plans",
  },
];

const PrivacyAndControllSection = () => {
  return (
    <section className="w-full bg-secondary-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Your privacy. Your control." />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-2xl border border-button-bg/18 bg-card-bg p-7"
              >
                <div className="mb-2 md:mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-button-bg/25 text-button-bg">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  {card.title}
                </h3>
                <p className="mt-1 md:mt-3 max-w-md text-sm md:leading-6 text-secondary">
                  {card.description}
                </p>
                <span className="mt-5 inline-flex rounded-full bg-button-bg/16 px-4 py-1 text-xs font-medium text-button-bg">
                  {card.label}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrivacyAndControllSection;
