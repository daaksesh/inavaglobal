export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="INAVA Global" className="h-10 w-10 rounded-full ring-1 ring-slate-200" />
            <span className="font-semibold">INAVA GLOBAL</span>
          </div>
          <p className="mt-3 text-slate-600">Offshore finance operations, automation, and advisory for global SMEs and scale‑ups.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-slate-600">
            <li>Bookkeeping & Year‑End</li>
            <li>Payroll & Compliance</li>
            <li>Controller & Reporting</li>
            <li>Virtual CFO & FP&A</li>
            <li>Automation & Monitoring</li>
            <li>ESG / CSRD</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal & Trust</h4>
          <ul className="space-y-1 text-slate-600">
            <li>Privacy Policy</li>
            <li>Data Processing Addendum</li>
            <li>Security Overview</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-slate-600">📞 <a href="tel:+919004665866" className="hover:text-navy">+919004665866</a><br/>✉️ hello@inavaglobal.com</p>
          <div className="mt-3 text-slate-500">© {new Date().getFullYear()} INAVA Global. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
