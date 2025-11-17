import { ShieldCheck, Clock, CreditCard, BarChart3 } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-time earnings",
      desc: "Connect your payroll and time systems to show up-to-the-minute accrued pay.",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Instant payouts",
      desc: "Tap to cash out to your bank or card in seconds. 24/7, including weekends.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "AU/NZ compliance",
      desc: "Built for New Zealand & Australia: KiwiSaver, PAYE, STP and awards ready.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Employer analytics",
      desc: "Lower turnover, higher shift fill-rate and payroll insights—out of the box.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">What makes it different</h2>
          <div className="hidden sm:block text-sm text-white/60">Fast. Compliant. Loved by teams.</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 shadow-sm">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
