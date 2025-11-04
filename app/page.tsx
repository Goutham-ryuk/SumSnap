import HeroSection from "@/components/home/heroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <HeroSection />
      </div>
      {/* <DemoSection />
      <HowItWorksSection />
      <CTASection /> */}
    </div>
  );
}
