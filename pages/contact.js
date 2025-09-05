import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      {/* HERO */}
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">Let’s talk</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-navy">
            Contact INAVA Global
          </h1>
          <p className="mt-4 max-w-3xl text-slate-700 text-lg">
            Every engagement starts with a short conversation to understand your
            systems, entity count, timelines and goals. Reach us directly or send
            a quick message below.
          </p>
        </div>
      </header>

      {/* CONTACT STRIP */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container grid md:grid-cols-3 gap-6 items-stretch">
          {/* Phone highlight */}
          <div className="md:col-span-2 rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-sm text-slate-600">Call us now</div>
              <div className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight text-navy">
                +91 90046 65866
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Mon–Fri · 9:00–19:00 IST · Global delivery
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919004665866"
                className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold hover:bg-[#E6CF84] transition"
              >
                📞 Call now
              </a>
              <a
                href="mailto:hello@inavaglobal.com"
                className="inline-flex items-center justify-center rounded-xl ring-1 ring-slate-300 px-5 py-3 font-medium hover:bg-slate-50"
              >
                ✉️ Email us
              </a>
            </div>
          </div>

          {/* Alt CTA */}
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
            <div className="font-semibold text-navy">Prefer scheduling?</div>
            <div className="mt-2 text-slate-700 text-sm">
              Book a discovery call at a time that works for you.
            </div>
            <a
              href="#form"
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-navy text-white px-5 py-3 font-medium hover:bg-slate-800 transition"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT AREA */}
      <section className="section bg-white" id="form">
        <div className="container grid lg:grid-cols-12 gap-10">
          {/* Form + optional Calendly */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl ring-1 ring-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-slate-600">
                Tell us briefly what you need. We’ll review and reply with tailored
                next steps.
              </p>
              <form className="mt-6 grid sm:grid-cols-2 gap-4">
                <input
                  className="rounded-xl ring-1 ring-slate-300 px-4 py-3"
                  placeholder="Full Name"
                />
                <input
                  className="rounded-xl ring-1 ring-slate-300 px-4 py-3"
                  placeholder="Work Email"
                />
                <input
                  className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2"
                  placeholder="Company & Website"
                />
                <input
                  className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2"
                  placeholder="Country / Region"
                />
                <select className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2">
                  <option>What services are you interested in?</option>
                  <option>Bookkeeping & Year-End</option>
                  <option>Payroll & Compliance</option>
                  <option>Management Reporting</option>
                  <option>AP/AR Outsourcing</option>
                  <option>Audit Assistance</option>
                  <option>Controller-as-a-Service</option>
                  <option>Virtual CFO & FP&A</option>
                  <option>Automation & Tech</option>
                  <option>Continuous Monitoring</option>
                  <option>ESG / CSRD</option>
                  <option>Global Expansion</option>
                  <option>Transaction Readiness</option>
                </select>
                <textarea
                  className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2"
                  rows={6}
                  placeholder="Briefly describe your requirements (systems, volumes, deadlines)"
                ></textarea>
                <button type="button" className="btn-primary mt-2">
                  Send message
                </button>
              </form>
              <p className="mt-3 text-xs text-slate-500">
                By submitting, you agree to our Privacy Policy and Data Processing
                Addendum.
              </p>
            </div>

            {/* Calendly Inline Embed (single location) */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-navy mb-3">
                Or schedule directly
              </h3>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/hello-inavaglobal/30min"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Trust signals */}
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-navy">Why clients choose us</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>SLA-backed delivery and governance</li>
                <li>ACCA · CPA (Ontario) leadership</li>
                <li>Secure processes (SOC 2 / ISO-aligned)</li>
                <li>AI-enabled accuracy and speed</li>
              </ul>
            </div>

            {/* FAQ mini */}
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-navy">FAQs</h3>
              <details className="mt-3 group">
                <summary className="cursor-pointer list-none font-medium text-slate-800">
                  Do you replace our CPA?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  No. We handle daily finance ops and prep; your local CPA/tax firm
                  reviews and signs as required.
                </p>
              </details>
              <details className="mt-3 group">
                <summary className="cursor-pointer list-none font-medium text-slate-800">
                  How soon can you start?
                </summary>
                <p className="mt-2 text-sm text-slate-600">
                  Typically within 5–10 business days after scoping, depending on
                  access and volumes.
                </p>
              </details>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
