import { useState } from 'react'
import Layout from '../components/Layout'

const CAL_LINK = 'https://calendly.com/hello-inavaglobal/30min'

const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Year-End',
    short: 'Audit-ready books, every month and at year-end.',
    trust: 'EU & US GAAP / IFRS alignment · ACCA/CPA oversight',
    story:
      'Many fast-growing companies struggle with messy ledgers and last-minute year-end headaches. We act as your monthly close partner — reconciling accounts, preparing audit-ready schedules and aligning reports to EU/US GAAP or IFRS. With ACCA/CPA oversight, you gain faster closes, cleaner audits and investor-ready financials.'
  },
  {
    id: 'payroll',
    title: 'Payroll & Compliance',
    short: 'Accurate payroll with statutory filings and regional compliance.',
    trust: 'GDPR-aware processes · EU & US local filings support',
    story:
      'Payroll is both a people and compliance function: mistakes cost trust and fines. We run end-to-end payroll (including contractor pay), prepare local filings, and protect personal data with secure workflows—so your team is paid on time and regulators are satisfied.'
  },
  {
    id: 'reporting',
    title: 'Management Reporting',
    short: 'Board-ready packs, KPIs and clear variance insight.',
    trust: 'Investor-friendly formats · automated packs',
    story:
      'Boards and investors want clarity, not spreadsheets. We design monthly management packs with KPIs, variance commentary and scenario analysis—formatted for EU/US reporting expectations—so leaders can make decisive, confident choices.'
  },
  {
    id: 'ap_ar',
    title: 'Accounts Payable & Receivable',
    short: 'Faster cycles, fewer errors, better cash control.',
    trust: 'MTD-aware AP processes (EU contexts) · revenue recognition aware (US GAAP)',
    story:
      'Cash management separates winners from the rest. We streamline AP from capture to payment, and AR from invoicing to collections—reducing DSO and improving supplier relationships—while ensuring compliance for EU and US regulations where applicable.'
  },
  {
    id: 'audit',
    title: 'Audit Assistance',
    short: 'Smooth auditor handoffs with complete PBCs and reconciliations.',
    trust: 'Audit-ready PBCs and reconciliations',
    story:
      'Audits are stressful when documents are scattered. We assemble clean PBC schedules, reconciliations and tie-outs so external auditors — whether Big-4 or regional firms in EU/US — get exactly what they need. The result: fewer adjustments and faster sign-offs.'
  },
  {
    id: 'controller',
    title: 'Controller-as-a-Service',
    short: 'GAAP/IFRS finalization, policies and controls that stick.',
    trust: 'Policy frameworks + controls · CFO escalation path',
    story:
      'Growing businesses need accounting governance without the full-time overhead. Our controller service provides close governance, accounting policies and intercompany controls—delivering reliable numbers and compliance while keeping costs predictable.'
  },
  {
    id: 'vcfo',
    title: 'Virtual CFO & FP&A',
    short: 'Actionable forecasts, budgets and investor reporting.',
    trust: 'ACCA/CPA-qualified analysts · fundraising-ready reporting',
    story:
      'Not every company needs a full-time CFO. Our virtual CFO service brings modeling, runway analysis and fundraising packs so founders and boards get CFO-level insight — at a fraction of the cost and fully aligned to EU/US investor expectations.'
  },
  {
    id: 'monitoring',
    title: 'Continuous Monitoring & Risk',
    short: 'Exception alerts and fraud flags before they become losses.',
    trust: 'Automated monitoring · configurable rules',
    story:
      'Small anomalies can become big problems. We set up automated monitoring and exception analytics to flag suspicious payments, vendor anomalies and control lapses early — reducing financial risk and keeping your teams focused on growth.'
  }
]

// small dot icon
function DotIcon() {
  return (
    <svg className="h-3 w-3 shrink-0" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  )
}

export default function ServicesPage() {
  const [activeId, setActiveId] = useState(services[0].id) // default select first for clarity

  return (
    <Layout>
      {/* HERO */}
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">What we do</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-navy">Services</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            A focused set of finance services designed for Startups, Scaling SMEs, Global Subsidiaries and Accounting Firms.
            Click any tile to read a short story of the problem, our approach and the outcomes for EU & US clients.
          </p>
        </div>
      </header>

      {/* GRID + DETAIL (master-detail) */}
      <section className="section bg-white">
        <div className="container grid lg:grid-cols-12 gap-8">
          {/* left: tiles */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s) => {
                const isActive = s.id === activeId
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={`text-left group rounded-2xl ring-1 transition-shadow p-5 sm:p-6 flex gap-4 items-start ${isActive ? 'ring-gold shadow-md bg-white' : 'ring-slate-200 hover:bg-slate-50'}`}
                    aria-pressed={isActive}
                  >
                    <div className="mt-1 text-gold"><DotIcon /></div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className={`text-lg font-semibold ${isActive ? 'text-navy' : 'text-navy'}`}>{s.title}</h3>
                          <p className="mt-1 text-sm text-slate-600">{s.short}</p>
                        </div>

                        <div className="ml-3 shrink-0">
                          <svg className={`h-5 w-5 transform transition-transform ${isActive ? 'rotate-90' : 'rotate-0'} text-slate-400`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4l8 6-8 6V4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* right: detail pane */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              {/* find active service */}
              {(() => {
                const svc = services.find((x) => x.id === activeId) || services[0]
                return (
                  <>
                    <h4 className="font-semibold text-navy">{svc.title}</h4>
                    <p className="mt-3 text-sm text-slate-700 leading-relaxed">{svc.story}</p>
                    <div className="mt-4 text-xs text-slate-500">✓ {svc.trust}</div>

                    <div className="mt-6 flex flex-col gap-3">
                      <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex justify-center">
                        📅 Book discovery call
                      </a>
                      <a href="/contact#form" className="inline-flex justify-center rounded-xl ring-1 ring-slate-300 px-4 py-2 text-sm hover:bg-slate-50">
                        💬 Contact us
                      </a>
                    </div>
                  </>
                )
              })()}
            </div>

            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-navy">Why choose INAVA Global</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>GAAP/IFRS-aligned reporting (EU & US ready)</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>SOC 2 / ISO-aligned security practices</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>ACCA & CPA-qualified leadership</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>SLA-backed deliveries & quality gates</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>Flexible engagement — hourly / monthly / project</span></li>
              </ul>
            </div>

            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm text-sm">
              <h4 className="font-semibold text-navy">Trust & compliance</h4>
              <p className="mt-2 text-slate-600">We can host data in EU/US/India, apply least-privilege access, and support auditor & tax requests.</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
