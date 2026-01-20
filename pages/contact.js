// pages/contact.js
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
            Every engagement starts with a short conversation to understand your systems, entity count, timelines and goals.
          </p>
        </div>
      </header>

  {/* CALL STRIP */}
<section className="py-8 bg-white border-y border-slate-200">
  <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="text-center md:text-left">
      <div className="text-sm text-slate-600">Prefer to talk?</div>
      <div className="mt-1 text-2xl font-bold text-navy break-words">
        +919004665866
      </div>
      <div className="mt-1 text-sm text-slate-500">
        Mon–Fri · 9am–6pm EST
      </div>
    </div>

    <a
      href="tel:+16465550198"
      className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold shadow hover:bg-[#E6CF84] transition"
    >
      📞 Call us
    </a>
  </div>
</section>
   
      {/* SCHEDULE CONSULTATION STRIP */}
<section className="py-8 bg-white border-b border-slate-200">
  <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="text-center md:text-left">
      <div className="text-sm text-slate-600">
        Want to schedule directly?
      </div>
      <div className="mt-1 text-2xl font-bold text-navy">
        Free 30-minute consultation
      </div>
      <div className="mt-1 text-sm text-slate-500">
        Choose a time that works for you
      </div>
    </div>

    <a
      href="https://outlook.office.com/book/FreeConsultationwithInavaGlobal@inavaglobal.com/?ismsaljsauthenabled=true"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold shadow hover:bg-[#E6CF84] transition"
    >
      📅 Schedule now
    </a>
  </div>
</section>

 {/* 1️⃣ EMAIL STRIP (UNCHANGED) */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-sm text-slate-600">Prefer email?</div>
            <div className="mt-1 text-2xl font-bold text-navy break-words">
              hello@inavaglobal.com
            </div>
            <div className="mt-1 text-sm text-slate-500">
              We respond within 48 business hours.
            </div>
          </div>
          <a
            href="mailto:hello@inavaglobal.com"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold shadow hover:bg-[#E6CF84] transition"
          >
            ✉️ Email us
          </a>
        </div>
      </section>
     
  {/* 3️⃣ SEND MESSAGE FORM */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <div className="rounded-3xl ring-1 ring-slate-200 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-navy">
              Send us a message
            </h2>
            <p className="mt-2 text-slate-600">
              Prefer to write? Share a few details and we’ll get back with next steps.
            </p>

            <form
              className="mt-6 grid sm:grid-cols-2 gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="rounded-xl ring-1 ring-slate-300 px-4 py-3"
                placeholder="Full Name"
                required
              />
              <input
                className="rounded-xl ring-1 ring-slate-300 px-4 py-3"
                placeholder="Work Email"
                type="email"
                required
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
                <option>ESG / CSRD</option>
                <option>Global Expansion</option>
                <option>Transaction Readiness</option>
              </select>

              <textarea
                className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2"
                rows={5}
                placeholder="Briefly describe your requirements (systems, volumes, deadlines)"
              />

              <div className="sm:col-span-2 mt-2">
                <button type="submit" className="btn-primary">
                  Send message
                </button>
              </div>
            </form>

            <p className="mt-4 text-xs text-slate-500">
              By submitting, you agree to our Privacy Policy and Data Processing Addendum.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
