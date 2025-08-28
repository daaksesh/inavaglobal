import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      {/* HERO */}
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">Let’s talk</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-navy">Contact INAVA Global</h1>
          <p className="mt-4 max-w-3xl text-slate-700 text-lg">Prefer to talk to a human? Call us now or book a discovery call. Every engagement starts with a short conversation to understand your systems, entity count, timelines and goals.</p>
        </div>
      </header>

      {/* CONTACT STRIP WITH PHONE HIGHLIGHT */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container grid md:grid-cols-3 gap-6 items-stretch">
          {/* Phone highlight */}
          <div className="md:col-span-2 rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm text-slate-600">Call us now</div>
              <div className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight text-navy">+91 90046 65866</div>
              <div className="mt-1 text-sm text-slate-500">Mon–Fri · 9:00–19:00 IST · Global delivery</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919004665866" className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold hover:bg-[#E6CF84] transition">📞 Call now</a>
              <a href="/contact#form" className="$1"> </a>
              <a href="https://calendly.com/your-calendly/30min" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl ring-1 ring-slate-300 px-5 py-3 font-medium hover:bg-slate-50">Book discovery call</a>
            </div>
          </div>
          {/* Alt channel */}
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
            <div className="font-semibold text-navy">Prefer email?</div>
            <div className="mt-2 text-slate-700 break-words">hello@inavaglobal.com</div>
            <div className="mt-3 text-xs text-slate-500">We respond within 48 business hours.</div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="section bg-white" id="form">
        <div className="container grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl ring-1 ring-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-slate-600">Tell us briefly what you need. We’ll review and reply with tailored next steps and a proposed discovery call slot.</p>
              <form className="mt-6 grid sm:grid-cols-2 gap-4">
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3" placeholder="Full Name" />
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3" placeholder="Work Email" />
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2" placeholder="Company & Website" />
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2" placeholder="Country / Region" />
                <select className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2">
                  <option>What services are you interested in?</option>
                  <option>Bookkeeping & Year‑End</option>
                  <option>Payroll & Compliance</option>
                  <option>Management Reporting</option>
                  <option>AP/AR Outsourcing</option>
                  <option>Audit Assistance</option>
                  <option>Controller‑as‑a‑Service</option>
                  <option>Virtual CFO & FP&A</option>
                  <option>Automation & Tech</option>
                  <option>Continuous Monitoring</option>
                  <option>ESG / CSRD</option>
                  <option>Global Expansion</option>
                  <option>Transaction Readiness</option>
                </select>
                <textarea className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2" rows={6} placeholder="Briefly describe your requirements (systems, volumes, deadlines)"></textarea>
                <button type="button" className="btn-primary mt-2">Send message</button>
                <a href="https://calendly.com/your-calendly/30min" target="_blank" rel="noreferrer" className="btn-secondary mt-2">Or book a discovery call</a>
              </form>
              <p className="mt-3 text-xs text-slate-500">By submitting, you agree to our Privacy Policy and Data Processing Addendum.</p>
            </div>
          </div>

          {/* Contact info / Trust column */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Direct lines */}
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-navy">Direct lines</h3>
              <div className="mt-3 space-y-2 text-slate-700">
                <div>📞 <a href="tel:+919004665866" className="font-semibold text-navy hover:underline">+91 90046 65866</a> <span className="text-xs text-slate-500">(Primary)</span></div>
                {/* <div>📞 <a href="tel:+1xxxxxxxxxx" className="hover:underline">+1 (xxx) xxx‑xxxx</a> <span className=\"text-xs text-slate-500\">(US line)</span></div> */}
                <div>✉️ hello@inavaglobal.com</div>
              </div>
              <div className="mt-3 text-xs text-slate-500">Response SLA: within 48 business hours.</div>
            </div>

            {/* Trust signals */}
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-navy">Why clients choose us</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>SLA‑backed delivery and governance</li>
                <li>ACCA · CPA (Ontario) leadership</li>
                <li>Secure processes (SOC 2 / ISO‑aligned)</li>
                <li>AI‑enabled accuracy and speed</li>
              </ul>
            </div>

            {/* FAQ mini */}
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-navy">FAQs</h3>
              <details className="mt-3 group">
                <summary className="cursor-pointer list-none font-medium text-slate-800">Do you replace our CPA?</summary>
                <p className="mt-2 text-sm text-slate-600">No. We handle daily finance ops and prep; your local CPA/tax firm reviews and signs as required.</p>
              </details>
              <details className="mt-3 group">
                <summary className="cursor-pointer list-none font-medium text-slate-800">How soon can you start?</summary>
                <p className="mt-2 text-sm text-slate-600">Typically within 5–10 business days after scoping, depending on access and volumes.</p>
              </details>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
