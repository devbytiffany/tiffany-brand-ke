import { techStack } from "@/lib/site-config";

export default function TechStack() {
  return (
    <section className="border-y border-border bg-surface/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">Tools I build with</p>
        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          {techStack.map((tool) => (
            <span key={tool} className="font-mono text-sm text-text">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
