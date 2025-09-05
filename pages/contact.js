import Layout from '../components/Layout';

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
            Every engagement starts with a short conversation to understand your systems,
            entity count, timelines and goals. Reach us directly or send a quick message below.
          </p>
        </div>
      </header>

      {/* MAIN AREA */}
      <section className="section bg-white" id="form">
        <div className="container grid lg:grid-cols-12 lg:grid-rows-[auto,1fr] gap-10">
          {/* EMAIL (top-left row) */}
          <div className="lg:col-span-6 lg:row-span-1">
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm h-full">
              <div className="text-sm text-slate-600">Prefer email?</div>
              <div className="mt-1 text-2xl font-bold text-navy break-words">
                hello@inavaglobal.com
              </div>
              <div className="mt-1 text-sm text-slate-500">
                We respond within 48 business hours.
              </div>
              <a
                href="mailto:hello@inavaglobal.com"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold shadow hover:bg-[#E6CF84] transition"
              >
                ✉️ Email us
              </a>
            </div>
          </div>

          {/* FORM (bottom-left row) */}
          <div className="lg:col-span-6 lg:row-span-1 flex">
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-8 shadow-sm flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-slate-600">
                Tell us briefly what you need. We’ll review and reply with tailored next steps.
              </p>

              <form className="mt-6 grid sm:grid-cols-2 gap-4 flex-1" onSubmit={(e) => e.preventDefault()}>
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3" placeholder="Full Name" required />
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3" placeholder="Work Email" type="email" required />
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2" placeholder="Company & Website" />
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2" placeholder="Country / Region" />
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
                <div className="sm:col-span-2 mt-2">
                  <button type="submit" className="btn-primary">Send message</button>
                </div>
              </form>

              <p className="mt-4 text-xs text-slate-500">
                By submitting, you agree to our Privacy Policy and Data Processing Addendum.
              </p>
            </div>
          </div>

          {/* CALENDLY (right side, spans both rows) */}
          <div className="lg:col-span-6 lg:row-span-2 flex">
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm flex-1">
              <h3 className="text-xl font-semibold text-navy">Schedule directly</h3>
              <p className="mt-2 text-slate-600">
                Pick a convenient slot for a 30-minute discovery call.
              </p>

              <div
                className="calendly-inline-widget mt-6"
                data-url="https://calendly.com/hello-inavaglobal/30min"
                style={{ minWidth: '320px', height: '1200px' }} // height increased to remove scroll
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
