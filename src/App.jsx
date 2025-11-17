import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Aurora / gradient beams background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute top-1/2 -right-20 h-[30rem] w-[30rem] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path fill=\"white\" fill-opacity=\"0.8\" d=\"M0 31h2v1H0zm30 0h2v1h-2zM0 0h1v2H0zm31 0h1v2h-1z\"/></svg>')]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
        <footer className="border-t border-white/10 py-10 mt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/70">
            <p>© {new Date().getFullYear()} FlowPay Pty Ltd • Built for AU & NZ</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
