import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-cyan-500/25 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-pink-900/40 animate-gradient-flow" />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <div className="inline-block mb-10 group">
          <div className="relative p-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse-glow">
            <div className="px-8 py-3 rounded-full glass flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-cyan-300 animate-pulse" />
              <span className="font-bold text-white tracking-wider">
                Crafted by AI
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300">
            From PDF chaos
          </span>
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-white">
            to clarity
          </span>
        </h1>

        <p className="mt-6 text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Summaries that <span className="text-cyan-300 font-bold">look</span>{" "}
          as good as they{" "}
          <span className="text-purple-300 font-bold">read</span>.
        </p>
        <Link href="/#pricing" className="group inline-block mt-12">
          <div className="relative p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-gradient-flow group-hover:animate-none">
            <div className="px-10 py-5 rounded-full glass flex items-center gap-3 group-hover:scale-105 transition-all duration-300">
              <span className="text-xl font-bold text-white">Try SumSnap</span>
              <ArrowRight className="w-6 h-6 text-cyan-300 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
