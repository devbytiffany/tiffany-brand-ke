# tiffany-brand-ke

Local (Kenya, KES pricing) version of the personal brand site.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Before you launch, edit `lib/site-config.ts`

Everything that's specific to you lives in that one file:

- `brand` — your display name / brand name
- `whatsappNumber` — your real WhatsApp number, digits only, country code without `+` (e.g. `2547XXXXXXXX`)
- `email` — your real contact email
- `pricing` — these are placeholder numbers, adjust to what you're comfortable charging
- `projects` — update statuses as things ship (e.g. Nexus Commerce → "Shipped" once it's live)

Everything else (components, layout, styling) reads from that file, so you
only ever have one place to update content.

## Why this structure

`lib/site-config.ts` is deliberately separated from the components. When we
build the international (USD) version next, it'll get its own copy of this
file — same shape, different currency and no M-Pesa mention — while every
component stays exactly the same. That's what makes the geolocation split
clean later: the routing logic just decides which config to load, not which
UI to render.

## Next step

Once this version looks right, we'll:
1. Build the international version (same structure, USD pricing, Stripe instead of M-Pesa)
2. Add Next.js middleware to detect visitor country and route KE → this version, everyone else → international version
3. Add a manual "not in Kenya?" override link
