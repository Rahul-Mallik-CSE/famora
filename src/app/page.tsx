/** @format */

import HeroSection from "@/components/HomeComponents/HeroSection";
import SetupGuidelineSection from "@/components/HomeComponents/SetupGuidelineSection";

export default function Home() {
  return (
    <div className="w-full bg-transparent">
      <HeroSection />
      <SetupGuidelineSection />
    </div>
  );
}
