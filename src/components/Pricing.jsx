export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] backdrop-blur p-8 sm:p-12">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Simple, transparent pricing</h2>
              <p className="mt-3 text-white/70">No set-up fees. No lock-in contracts. Volume discounts for larger teams.</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>Per withdrawal fee from $1.50</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>Employer dashboard included</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>No impact on payroll timing</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/>Support for awards & KiwiSaver</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
              <div className="relative z-10">
                <div className="text-sm text-white/70">From</div>
                <div className="text-4xl font-bold tracking-tight text-white">$1.50</div>
                <div className="text-sm text-white/70">per cash out</div>
                <a href="#demo" className="mt-6 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 w-full">Talk to sales</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
