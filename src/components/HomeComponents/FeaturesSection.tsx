/** @format */

import {
  Bell,
  Calendar,
  GitCompareArrows,
  MapPin,
  PencilLine,
  Utensils,
} from "lucide-react";
import SectionHeading from "@/components/CommonComponents/SectionHeading";

const features = [
  {
    title: "Shared Family Calendar",
    description:
      "All family members stay in sync. Share events, appointments, and plans in real time.",
    icon: Calendar,
  },
  {
    title: "Smart Reminders",
    description:
      "Set reminders once. The bot remembers and notifies you automatically even months in advance.",
    icon: Bell,
  },
  {
    title: "Conflict Detection",
    description:
      "If two family members have overlapping events, the bot flags it instantly.",
    icon: GitCompareArrows,
  },
  {
    title: "Meal Planning",
    description:
      "Ask the bot for a weekly meal plan tailored to your family's preferences.",
    icon: Utensils,
  },
  {
    title: "School Messages",
    description: "Generate letters, notes, and messages for school in seconds.",
    icon: PencilLine,
  },
  {
    title: "Location Services",
    description:
      "Find the nearest hospital, pharmacy, or clinic with directions and contact details.",
    icon: MapPin,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="w-full bg-transparent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          semiTitle="Everything Your Family Needs"
          title="One bot. Endless possibilities."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-button-bg/20 bg-card-bg p-6 sm:p-7"
              >
                <div className="mb-2 md:mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-button-bg text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="mt-1 md:mt-2 text-xs md:text-[15px] md:leading-6 text-secondary">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
