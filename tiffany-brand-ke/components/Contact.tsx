import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  const waMessage = encodeURIComponent("Hi Tiffany, I'd like to talk about a project.");
  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${waMessage}`;
  const mailLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Project inquiry"
  )}`;

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="font-display text-3xl font-semibold">Ready to build something?</h2>
      <p className="mt-4 text-muted">
        Send a message on WhatsApp or email — free discovery call, no pressure.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
        >
          Chat on WhatsApp
        </a>
        <a
          href={mailLink}
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-amber"
        >
          Send an email
        </a>
      </div>
    </section>
  );
}
