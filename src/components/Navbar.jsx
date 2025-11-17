import { Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400" />
              <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background:
                "radial-gradient(100%_50%_at_0%_0%,rgba(255,255,255,0.4),transparent),radial-gradient(100%_50%_at_100%_100%,rgba(0,0,0,0.3),transparent)" }} />
            </div>
            <span className="text-white text-xl font-semibold tracking-tight">FlowPay</span>
            <span className="ml-3 rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/70 hidden sm:inline">AU • NZ</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="relative hover:text-white transition">Features</a>
            <a href="#how" className="relative hover:text-white transition">How it works</a>
            <a href="#pricing" className="relative hover:text-white transition">Pricing</a>
            <a href="#faq" className="relative hover:text-white transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white">
              Log in
            </button>
            <button className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white px-3.5 py-2 text-sm font-semibold shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50">
              <span className="relative">
                <span className="absolute inset-0 -z-10 rounded-lg bg-white/20 blur opacity-0 transition group-hover:opacity-100" />
                Get started
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/80">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
