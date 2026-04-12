/** @format */

import React from "react";
import SimplePricingSection from "@/components/PricingComponents/SimplePricingSection";
import FeatureComparisnSection from "@/components/PricingComponents/FeatureComparisnSection";

const PricingPage = () => {
  return (
    <main className="w-full bg-transparent">
      <SimplePricingSection />
      <FeatureComparisnSection />
    </main>
  );
};

export default PricingPage;
