// components/home/PricingSection.tsx
import { Check, Zap } from "lucide-react";

const plans = [
  {
    id: "basic",
    name: "Starter",
    price: 499,
    items: ["5 crystal summaries / month"],
    cta: "Start Free",
  },
  {
    id: "pro",
    name: "Pro",
    price: 999,
    items: [
      "Unlimited summaries",
      "Lightning-fast queue",
      "Export to Markdown",
    ],
    cta: "Go Pro Now",
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/80 via-indigo-950/60 to-pink-950/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">
            Pricing
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300">
              One click. Zero regret.
            </span>
            <span className="block mt-3 text-white">Pick your portal.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`group relative ${
                plan.id === "pro" ? "md:scale-110 md:-translate-y-8" : ""
              }`}
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-pink-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-full p-10 rounded-3xl glass-card border border-white/20 backdrop-blur-3xl hover:scale-105 transition-all duration-500">
                {plan.id === "pro" && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-sm tracking-wider shadow-2xl flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      MOST LOVED
                    </div>
                  </div>
                )}

                <h3 className="text-3xl font-black text-white mb-4">
                  {plan.name}
                </h3>

                <div className="mb-8">
                  <span className="text-6xl font-black text-white">
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-400 text-lg"> / month</span>
                </div>

                <ul className="space-y-5 mb-10">
                  {plan.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    plan.id === "pro"
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                      : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
