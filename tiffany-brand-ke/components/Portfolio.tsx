import { projects } from "@/lib/site-config";

const statusColor: Record<string, string> = {
  Shipped: "text-signal",
  Live: "text-signal",
  "In progress": "text-amber",
};

export default function Portfolio() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-3xl font-semibold">Build log</h2>
      <p className="mt-3 max-w-xl text-muted">
        Real projects, not mockups — each one built end to end, backend to UI.
      </p>

      <div className="mt-10 max-w-2xl">
        {projects.map((project) => (
          <div key={project.name} className="trace-line flex gap-5 pb-10">
            <div className="mt-1 h-6 w-6 flex-none rounded-full border-2 border-amber bg-ink" />
            <div>
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                <span className={`font-mono text-xs uppercase tracking-wide ${statusColor[project.status] ?? "text-muted"}`}>
                  {project.status}
                </span>
              </div>
              <p className="mt-2 font-mono text-xs text-muted">{project.stack}</p>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-amber hover:underline"
              >
                View project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
