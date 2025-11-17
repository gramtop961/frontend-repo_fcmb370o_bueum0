export default function CTA() {
  return (
    <section id="demo" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur p-8 sm:p-12">
          <h3 className="text-2xl font-semibold tracking-tight text-white">Bring earned wage access to your team</h3>
          <p className="mt-3 text-white/70">Serve Australia and New Zealand with instant payouts, full compliance and happier teams.</p>
          <form className="mt-6 grid sm:grid-cols-3 gap-3">
            <input className="sm:col-span-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Work email" />
            <button type="button" className="rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100">Request a demo</button>
          </form>
          <p className="mt-3 text-xs text-white/60">By continuing you agree to our Terms and Privacy.</p>
        </div>
      </div>
    </section>
  );
}
