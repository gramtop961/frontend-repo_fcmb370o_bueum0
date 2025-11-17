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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-black/10 bg-white/60 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-gray-900 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
