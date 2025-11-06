"use client";

import { ClipboardList } from "lucide-react";
import NavLink from "./navLink";
import { useEffect, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 80 && currentY > lastY);
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? "-translate-y-full" : "translate-y-0"}
        glass-nav backdrop-blur-2xl border-b border-white/10
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none
      `}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <NavLink href="/" className="group flex items-center gap-3">
          <div className="relative p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:border-purple-400/60 transition-all duration-500">
            <ClipboardList className="w-7 h-7 text-purple-300 group-hover:text-purple-200 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300" />
            <div className="absolute inset-0 rounded-2xl bg-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity" />
          </div>
          <span className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 tracking-tighter animate-gradient-flow">
            SumSnap
          </span>
        </NavLink>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          <NavLink
            href="/#pricing"
            className="relative text-gray-300 hover:text-white font-medium tracking-wide
              after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
              after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400
              after:transition-all after:duration-500 hover:after:w-full"
          >
            Pricing
          </NavLink>

          <SignedIn>
            <NavLink
              href="/dashboard"
              className="relative text-gray-300 hover:text-white font-medium tracking-wide
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400
                after:transition-all after:duration-500 hover:after:w-full"
            >
              Your Summaries
            </NavLink>
          </SignedIn>
        </div>

        <div className="flex items-center gap-4">
          <SignedIn>
            <NavLink
              href="/upload"
              className="px-6 py-3 rounded-2xl glass font-bold text-white hover:scale-105 transition-all duration-300 border border-purple-400/40"
            >
              Upload PDF
            </NavLink>
            <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/40 text-sm font-bold text-purple-200">
              Pro
            </div>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <NavLink
              href="/sign-in"
              className="group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden isolate"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl animate-gradient-flow" />
              <div className="absolute inset-0 glass rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/20 transition-all duration-700" />
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-400/50 to-cyan-400/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10">Sign In</span>
            </NavLink>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
