import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-8">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Earned wage access for Australia and New Zealand
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-lg text-gray-600"
            >
              See what you've earned this week in real time. Tap to get paid early when you need it. Fully compliant for AU/NZ with instant settlement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 font-medium shadow-sm hover:bg-black">
                Book a demo
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg border border-black/10 px-5 py-3 font-medium hover:bg-black/5">
                How it works
              </a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-gray-600">
              <div className="flex -space-x-2">
                <img alt="" src="https://i.pravatar.cc/40?img=1" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img alt="" src="https://i.pravatar.cc/40?img=2" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img alt="" src="https://i.pravatar.cc/40?img=3" className="h-8 w-8 rounded-full ring-2 ring-white" />
              </div>
              <p className="text-sm">Trusted by teams across hospitality, retail and healthcare</p>
            </div>
          </div>
          <div className="relative h-[520px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-xl">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
