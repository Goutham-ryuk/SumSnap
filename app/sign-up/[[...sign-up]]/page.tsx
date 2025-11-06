// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";
import { Zap } from "lucide-react";

export default function Page() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* CYBER-GLASS VOID */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-pink-950" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl" />

        {/* Living Orbs */}
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-cyan-500/25 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      </div>

      {/* XL GLASS SIGN-UP PALACE */}
      <div className="relative w-full max-w-2xl mx-6">
        {/* Epic Glow Ring */}
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-pink-500/40 blur-3xl animate-pulse-slow" />

        {/* Main Card */}
        <div className="relative p-16 rounded-3xl glass-card border border-white/20 backdrop-blur-3xl shadow-2xl">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
              <Zap className="w-16 h-16 text-cyan-400" />
            </div>
          </div>

          <h1 className="text-center text-5xl font-black text-white mb-3">
            Join the future
          </h1>
          <p className="text-center text-xl text-gray-300 mb-12 max-w-lg mx-auto leading-relaxed">
            Create your <span className="text-cyan-300 font-bold">SumSnap</span>{" "}
            account and turn every PDF into a masterpiece.
          </p>

          {/* Clerk Sign-Up */}
          <div className="clerk-container flex flex-col items-center">
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:shadow-2xl hover:shadow-purple-500/50 text-white font-bold text-lg py-4 rounded-2xl transition-all duration-300 hover:scale-105",
                  card: "bg-transparent shadow-none",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton:
                    "border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md py-3 text-base",
                  dividerLine: "bg-white/10",
                  dividerText: "text-gray-400",
                  formFieldInput:
                    "bg-white/5 border border-white/20 text-white placeholder-gray-500 backdrop-blur-md text-lg py-4 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30",
                  footerActionText: "text-gray-400 text-base",
                  footerActionLink:
                    "text-cyan-300 hover:text-cyan-200 font-bold text-base",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
