export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Stripe Dunning Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-retry failed payments<br />
          <span className="text-[#58a6ff]">with smart timing</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Stop losing revenue to failed payments. Our ML-driven dunning engine retries Stripe charges at the optimal moment — recovering subscriptions before customers churn.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Revenue — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to start. Cancel anytime.</p>
      </section>

      {/* Stats row */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[
          { value: "73%", label: "Avg recovery rate" },
          { value: "48h", label: "Median recovery time" },
          { value: "$0", label: "Setup cost" }
        ].map((s) => (
          <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
            <div className="text-[#8b949e] text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to recover failed payments</p>
          <ul className="space-y-3 mb-8">
            {[
              "Stripe webhook integration",
              "ML-optimized retry scheduling",
              "Real-time recovery dashboard",
              "Email + Slack alerts",
              "Unlimited retry rules",
              "Revenue analytics & reporting"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the smart retry timing work?",
              a: "We analyze behavioral signals — time of day, day of week, card type, and historical payment patterns — to schedule retries when the probability of success is highest, rather than retrying at fixed intervals."
            },
            {
              q: "Do I need to change my Stripe setup?",
              a: "No. You simply point a Stripe webhook at your dashboard URL. We handle everything from there — no code changes, no SDK installs, no infrastructure to manage."
            },
            {
              q: "What happens if a payment still fails after retries?",
              a: "You configure the fallback: send a dunning email, trigger a Slack alert, or mark the subscription for manual review. Full control stays with you."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Dunning Automator. Built for SaaS founders.
      </footer>
    </main>
  )
}
