import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/90 border-b border-slate-200">
      <div className="container h-22 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="INAVA Global"
            className="h-14 w-14 md:h-16 md:w-16 rounded-full ring-1 ring-slate-200" />
          <span className="font-bold tracking-wide text-lg md:text-xl">INAVA GLOBAL</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="hover:text-slate-600">Home</Link>
          <Link href="/services" className="hover:text-slate-600">Services</Link>
          <Link href="/process" className="hover:text-slate-600">Engagement Process</Link>
          <Link href="/about" className="hover:text-slate-600">About</Link>
          <Link href="/contact" className="hover:text-slate-600">Contact</Link>
        </nav>
        {/* Phone number (desktop only) */}
        <a href="tel:+919004665866" className="hidden md:inline text-sm font-medium text-slate-700 hover:text-navy">
        📞 +919004665866
        </a>
        <Link href="/contact" className="btn-primary">Book a discovery call</Link>
      </div>
    </header>
  );
}
