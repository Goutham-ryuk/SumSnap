import { UploadCloud, Brain, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud className="w-14 h-14" />,
    label: "Upload Your PDF",
    desc: "Drag & drop or click — fast, simple, secure.",
  },
  {
    icon: <Brain className="w-14 h-14" />,
    label: "AI Thinks for You",
    desc: "Advanced AI scans & extracts instantly.",
  },
  {
    icon: <Sparkles className="w-14 h-14" />,
    label: "Get Beautiful Summaries",
    desc: "Clear, stunning summaries in seconds.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-pink-900/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">
            How It Works
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300">
              Transform any PDF
            </span>
            <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-pink-300 to-white">
              in just three simple steps
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="group h-full p-8 rounded-3xl glass-card hover:scale-105 transition-all duration-500 border border-white/10">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 inline-block mb-6">
                  <div
                    className={`text-${
                      ["purple", "cyan", "pink"][i]
                    }-300 group-hover:scale-110 transition-transform`}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.label}
                </h3>
                <p className="text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 items-center justify-center pointer-events-none">
                  <div className="relative">
                    <ArrowRight className="w-10 h-10 text-cyan-400" />
                    <div className="absolute inset-0 blur-xl bg-cyan-400/50 animate-pulse" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
