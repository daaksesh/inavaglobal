import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-32 backdrop-blur bg-white/90 border-b border-slate-200">
      <div className="container h-32 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="INAVA Global"
            className="h-20 w-20 md:h-20 md:w-20 rounded-full ring-1 ring-slate-200" />
          <span className="font-bold tracking-wide text-lg md:text-2xl">INAVA GLOBAL</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-xl">
          <Link href="/" className="hover:text-slate-600">Home</Link>
          <Link href="/services" className="hover:text-slate-600">Services</Link>
          <Link href="/process" className="hover:text-slate-600">Engagement Process</Link>
          <Link href="/about" className="hover:text-slate-600">About</Link>
          <Link href="/contact" className="hover:text-slate-600">Contact</Link>
        </nav>
        {/* Phone number as secondary button */}
        <a href="tel:+919004665866" className="hidden md:inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold shadow hover:bg-[#E6CF84] transition">
        📞 +91 90046 65866
        </a>
        </div>
    </header>
  );
}
