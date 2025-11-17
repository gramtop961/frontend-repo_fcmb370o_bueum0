import { Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-inner" />
            <span className="text-xl font-semibold tracking-tight">FlowPay</span>
            <span className="ml-3 rounded-full bg-black/5 px-2.5 py-1 text-xs text-gray-600 hidden sm:inline">AU • NZ</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#how" className="hover:text-gray-900 transition">How it works</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Log in
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-3.5 py-2 text-sm font-semibold shadow-sm hover:bg-black">
              Get started <ArrowRight className="h-4 w-4" />
            </button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
