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
        <div className="rounded-3xl border border-black/10 bg-white/60 backdrop-blur p-8 sm:p-12">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="text-sm text-gray-500">Step {i + 1}</div>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
