import { services } from "@/lib/site-config";

export default function Services(){
    return(
        <section id="services" className ="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-3xl font-semibold">What We Build</h2>
            <p className="mt-3 max-w-xl text-muted">One person, a focused set of things done well-from a landing page to a full payment-enabled store.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {services.map((service)=>(
                    <div key={service.title} className="rounded-2xl border border-border bg-surface p-6">
                        <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                        <p className="mt-2 text-sm text-muted">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}