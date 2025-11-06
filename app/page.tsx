import HeroSection from "@/components/home/heroSection";
import DemoSection from "@/components/home/demoSection";
import HowItWorksSection from "@/components/home/howItWorksSection";
import PricingSection from "@/components/home/pricingSection";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-pink-950" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 backdrop-blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500/40 to-pink-500/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-gradient-to-l from-cyan-400/40 to-blue-500/30 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-glow" />

        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
            style={{
              top: `${20 + i * 6}%`,
              left: `${10 + ((i * 7) % 80)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 pt-24">
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1200">
          <HeroSection />
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1200 delay-300">
          <DemoSection />
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1200 delay-600">
          <HowItWorksSection />
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1200 delay-600">
          <PricingSection />
        </div>
      </main>
    </>
  );
}
