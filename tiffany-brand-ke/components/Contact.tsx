"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const waMessage = encodeURIComponent("Hi Tiffany, I'd like to talk about a project.");
  const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${waMessage}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${subject}&body=${body}`;

    window.open(gmailLink, "_blank");
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="font-display text-3xl font-semibold">Ready to build something?</h2>
      <p className="mt-4 text-muted">
        Send a message on WhatsApp, or fill out the form below.
      </p>

      
      <a  href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink hover:opacity-90"
      >
        Chat on WhatsApp
      </a>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted focus:border-amber"
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted focus:border-amber"
        />
        <textarea
          placeholder="Tell me about your project"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-muted focus:border-amber"
        />
        <button
          type="submit"
          className="w-full rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:border-amber"
        >
          Send message
        </button>
      </form>
    </section>
  );
}