export default function CTA() {
  return (
    <section id="demo" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8 sm:p-12">
          <h3 className="text-2xl font-bold tracking-tight">Bring earned wage access to your team</h3>
          <p className="mt-3 text-gray-600">Serve Australia and New Zealand with instant payouts, full compliance and happier teams.</p>
          <form className="mt-6 grid sm:grid-cols-3 gap-3">
            <input className="sm:col-span-2 rounded-lg border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Work email" />
            <button type="button" className="rounded-lg bg-gray-900 text-white px-5 py-3 font-medium hover:bg-black">Request a demo</button>
          </form>
          <p className="mt-3 text-xs text-gray-500">By continuing you agree to our Terms and Privacy.</p>
        </div>
      </div>
    </section>
  );
}
