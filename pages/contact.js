import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">Let’s talk</span>
          <h1 className="mt-3 text-4xl font-extrabold text-navy">Contact Us</h1>
          <p className="mt-3 max-w-3xl text-slate-700">Every engagement starts with a discovery call. Share your systems, entity count, and goals—we’ll respond within 48 hours with tailored next steps.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="card">
            <form className="grid sm:grid-cols-2 gap-4">
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
              <textarea className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2" rows={5} placeholder="Briefly describe your requirements"></textarea>
              <button type="button" className="btn-primary mt-2">Request Discovery Call</button>
            </form>
            <div className="mt-6 text-sm text-slate-600">
              Prefer email? <b>hello@inavaglobal.com</b>
            </div>
            <p className="mt-3 text-xs text-slate-500">By submitting, you agree to our Privacy Policy and Data Processing Addendum.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
