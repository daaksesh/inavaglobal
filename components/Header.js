import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-32 backdrop-blur bg-white/90 border-b border-slate-200">
      <div className="container h-32 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/logo.png"
            alt="INAVA Global"
            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full ring-1 ring-slate-200"
          />
          <span className="font-bold tracking-wide text-base md:text-2xl leading-tight max-w-[52vw] sm:max-w-none">
            INAVA GLOBAL
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xl">
          <Link href="/" className="hover:text-slate-600">Home</Link>
          <Link href="/services" className="hover:text-slate-600">Services</Link>
          <Link href="/process" className="hover:text-slate-600">Engagement Process</Link>
          <Link href="/about" className="hover:text-slate-600">About</Link>
        </nav>

        {/* Desktop Phone CTA */}
        <a
          href="tel:+919004665866"
          className="hidden md:inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold shadow hover:bg-[#E6CF84] transition"
        >
          📞 +91 90046 65866
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden shrink-0 inline-flex items-center gap-2 justify-center rounded-xl border border-slate-400 bg-white p-2 shadow-sm"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container py-3 flex flex-col gap-2">
            <Link href="/" className="py-2 hover:text-slate-700" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" className="py-2 hover:text-slate-700" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/process" className="py-2 hover:text-slate-700" onClick={() => setOpen(false)}>Engagement Process</Link>
            <Link href="/about" className="py-2 hover:text-slate-700" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="py-2 hover:text-slate-700" onClick={() => setOpen(false)}>Contact</Link>

            <div className="mt-2 flex flex-col gap-2">
              <a
                href="tel:+919004665866"
                className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold shadow hover:bg-[#E6CF84] transition"
              >
                📞 +91 90046 65866
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
