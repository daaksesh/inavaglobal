import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/90 border-b border-slate-200">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="INAVA Global" className="h-10 w-10 md:h-12 md:w-12 rounded-full ring-1 ring-slate-200" />
          <span className="font-semibold tracking-wide">INAVA GLOBAL</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="hover:text-slate-600">Home</Link>
          <Link href="/services" className="hover:text-slate-600">Services</Link>
          <Link href="/process" className="hover:text-slate-600">Engagement Process</Link>
          <Link href="/about" className="hover:text-slate-600">About</Link>
          <Link href="/contact" className="hover:text-slate-600">Contact</Link>
        </nav>
        <Link href="/contact" className="btn-primary">Book a discovery call</Link>
      </div>
    </header>
  );
}
