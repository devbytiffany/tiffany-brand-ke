"use client";

import { useState } from "react";
import { techStack } from "@/lib/site-config";

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);
  const visibleTools = showAll ? techStack : techStack.slice(0, 10);

  return (
    <section className="border-y border-border bg-surface/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono-custom text-xs uppercase tracking-widest text-muted">
          Tools I build with
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {visibleTools.map((tool) => (
            <div key={tool.slug} className="flex flex-col items-center gap-2 text-center">
              <img
                src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                alt={tool.name}
                width={32}
                height={32}
              />
              <span className="text-xs text-muted">{tool.name}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 font-mono-custom text-xs text-amber hover:underline"
        >
          {showAll ? "Show less" : `Show all ${techStack.length} tools`}
        </button>
      </div>
    </section>
  );
}