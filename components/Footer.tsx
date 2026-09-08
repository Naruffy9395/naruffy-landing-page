export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © 2026 Sahyom. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="#work"
            className="transition-colors hover:text-text"
          >
            Work
          </a>
          <a
            href="#services"
            className="transition-colors hover:text-text"
          >
            Services
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-text"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
