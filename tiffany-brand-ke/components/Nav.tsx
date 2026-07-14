export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold">
          Tiffany
        </a>
        <ul className="hidden gap-8 text-sm text-muted md:flex">
          <li><a href="#services" className="hover:text-text">Services</a></li>
          <li><a href="#work" className="hover:text-text">Work</a></li>
          <li><a href="#pricing" className="hover:text-text">Pricing</a></li>
          <li><a href="#contact" className="hover:text-text">Contact</a></li>
        </ul>
        
        <a href="#contact"
          className="rounded-full bg-amber px-4 py-2 text-sm font-medium text-ink hover:opacity-90"
        >Chat on WhatsApp
        </a>
      </nav>
    </header>
  );
}