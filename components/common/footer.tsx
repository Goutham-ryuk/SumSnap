import { Zap, Mail, X, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 backdrop-blur-xl bg-black/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-7 h-7 text-cyan-400" />
              <span className="font-black text-2xl text-white">SumSnap</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI that turns dense PDFs into crystal-clear stories — in seconds.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/#pricing" className="hover:text-cyan-300 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-cyan-300 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-cyan-300 transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <a
                href="mailto:hello@sumsnap.in"
                className="flex items-center gap-2 hover:text-cyan-300 transition"
              >
                <Mail className="w-4 h-4" />
                hello@sumsnap.in
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-cyan-300 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-cyan-300 transition"
              >
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">
            © 2025 SumSnap. Crafted in India with AI & love.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-gray-500 text-xs">Made by</span>
            <span className="text-cyan-400 font-bold text-xs tracking-wider">
              Goutham
            </span>
            <span className="text-gray-500 text-xs">in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
