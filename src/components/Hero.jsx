import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      {/* Grid + beams */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live in AU/NZ • STP & KiwiSaver ready
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Earned wage access that feels instant
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-white/70"
            >
              Real‑time earnings, instant payouts and automated reconciliation. A premium experience for Australia and New Zealand.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow-sm hover:bg-slate-100">
                Book a demo
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-medium text-white hover:bg-white/5">
                How it works
              </a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="flex -space-x-2">
                <img alt="" src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                <img alt="" src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                <img alt="" src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
              </div>
              <p className="text-sm">Trusted by teams across hospitality, retail and healthcare</p>
            </div>
          </div>
          <div className="relative h-[560px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* Glass card overlay */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 text-xs text-white/80 shadow-lg">
              <div className="font-semibold">Instant payout</div>
              <div>Visa •••• 4821 • Settled in seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
