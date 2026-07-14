import Link from "next/link";
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
            className={`relative rounded-2xl border p-6 ${
              plan.featured ? "border-amber bg-surface" : "border-border bg-surface/60"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-amber px-3 py-1 text-xs font-medium text-ink">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-semibold">{plan.tier}</h3>
            <p className="mt-3 font-mono-custom text-2xl text-text">
              from {siteConfig.currency} {plan.price}
            </p>
            <p className="mt-3 text-sm text-muted">{plan.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/pricing"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:border-amber"
        >
          See full pricing details
        </Link>
      </div>
    </section>
  );
}