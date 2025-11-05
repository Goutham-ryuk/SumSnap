import { Zap } from "lucide-react";

export default function DemoSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="relative p-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30">
          <div className="rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/10 p-12 shadow-2xl">
            <div className="text-center space-y-8">
              <Zap className="w-12 h-12 mx-auto text-cyan-400 animate-pulse-glow" />

              <h3 className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                See how SumSnap turns dense PDFs into smart, readable stories
              </h3>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Watch it break down complex pages into clear, structured
                insights — in seconds.
              </p>
              <div className="mt-12 mx-auto w-full max-w-3xl h-96 rounded-2xl bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-xl bg-white/10 backdrop-blur-md animate-pulse-glow" />
                  <p className="text-gray-400 text-lg">
                    Interactive Demo Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
