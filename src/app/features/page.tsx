/** @format */

import CoreFeaturesSection from "@/components/FeaturesComponents/CoreFeaturesSection";
import StatsSection from "@/components/FeaturesComponents/StatsSection";

const FeaturesPage = () => {
  return (
    <main className="w-full bg-transparent">
      <StatsSection />
      <CoreFeaturesSection />
    </main>
  );
};

export default FeaturesPage;
