import { process } from "@/lib/site-config";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl font-semibold">How a project runs</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {process.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-borderbg-surface p-6">
                <span className="font-mono-custom text-tsn text-amber">
                    {String(i+1).padStart(2,"0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
        ))}
      </div>
    </section>
  );
}