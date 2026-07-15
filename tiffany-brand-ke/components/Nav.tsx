"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold">
          {siteConfig.brand}
        </a>

        <ul className="hidden gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        
        <a href="#contact"
          className="hidden rounded-full bg-amber px-4 py-2 text-sm font-medium text-ink hover:opacity-90 md:inline-block"
        >
          Chat on WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-text md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                
                <a href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <a href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block rounded-full bg-amber px-4 py-2 text-sm font-medium text-ink"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}