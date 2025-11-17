export default function HowItWorks() {
  const steps = [
    {
      title: "Connect payroll",
      desc: "We integrate with your payroll and timekeeping to calculate accrued wages in real time.",
    },
    {
      title: "Track earnings",
      desc: "Employees see how much they've earned so far this pay cycle in the app.",
    },
    {
      title: "Cash out on demand",
      desc: "When needed, they withdraw a portion instantly to their bank or card.",
    },
    {
      title: "Automated reconciliation",
      desc: "We settle with payroll on payday. No changes to your existing process.",
    },
  ];

  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur p-8 sm:p-12">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">How it works</h2>
            <p className="mt-2 text-white/60">From connection to cash out—designed to be simple.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="text-sm text-white/60">Step {i + 1}</div>
                <h3 className="mt-1 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
