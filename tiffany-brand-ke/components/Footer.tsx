import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.brand}</p>
        
        <a href="https://github.com/devbytiffany"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text"
        >
          github.com/devbytiffany
        </a>
      </div>
    </footer>
  );
}