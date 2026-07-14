export default function Hero(){
    return(
        <section id="top" className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 md:items-center md:gap-12">
            <div>
                <p className="font-mono-custom text-xs uppercase tracking-widest text-amber">Nairobi, Kenya</p>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">Software that works the way your business actually runs.</h1>
                <p className="mt-6 max-w-md text-muted">
                    I build websites, mobile apps, and e-commerce stores with real M-Pesa payments for Kenyan businesses — not templates that need a developer every time something changes.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a href="#contact"
                    className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink hover:opacity-90"
                    >Chat on Whatsapp
                    </a>

                    <a href="#pricing" className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:border-amber">
                        See Pricing
                    </a>
                </div>

                <p className="mt-4 font-mono-custom text-xs text-muted">
                    Free 30-minute discovery call, no obligation.
                </p>
            </div>
        <div className="rounded-2xl border border-border bg-surface p-6 font-mono-custom text-sm">
            <div className ="flex items-center gap-2 border-b border-border pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F25C5C]"/>
                <span className="h-2.5 w-2.5 rounded-full bg-amber"/>
                <span className="h-2.5 w-2.5 rounded-full bg-signal"/>
                <span className="ml-2 text-xs text-muted">order-events.log</span>
            </div>
                <div className ="mt-4 space-y-3 text-xs">
                    <p className="text-muted">
                        <span className="text-signal">✓</span> STK Push sent to +254 7•• ••• 214
                    </p>
                    <p className ="text-muted">
                        <span className="text-signal">✓</span> Payment confirmed -KES 2,450
                    </p>
                    <p className="text-muted">
                        <span className="text-amber">↻</span> Order #1042 broadcast via Websocket
                    </p>
                    <p className="text-text">
                        <span className="text-signal">✓</span> Order confirmed-packing started
                    </p>
                </div>
        </div>
        </section>
    );
}