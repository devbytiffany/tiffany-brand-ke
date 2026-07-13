import { pricing, siteConfig } from "@/lib/site-config";

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl font-semibold">Simple, transparent pricing</h2>
      <p className="mt-3 max-w-xl text-muted">
        Every project starts with a free discovery call — the numbers below are a starting point, not a final quote.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pricing.map((plan) => (
          <div
            key={plan.tier}
            className={`rounded-2xl border p-6 ${
              plan.featured ? "border-amber bg-surface" : "border-border bg-surface/60"
            }`}
          >
            <h3 className="font-display text-lg font-semibold">{plan.tier}</h3>
            <p className="mt-3 font-mono text-2xl text-text">
              from {siteConfig.currency} {plan.price}
            </p>
            <p className="mt-3 text-sm text-muted">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-signal">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
