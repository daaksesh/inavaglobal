import { useState } from 'react'
import Layout from '../components/Layout'

const CAL_LINK = 'https://calendly.com/hello-inavaglobal/30min'

const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Year-End',
    short: 'Audit-ready books, every month and at year-end.',
    trust: 'UK/US GAAP & IFRS alignment · ACCA/CPA oversight',
    bullets: [
      'Monthly bookkeeping: bank reconciliations, ledger maintenance',
      'Month-end close checklist, variance analysis and P&L review',
      'Year-end packs and working papers prepared for auditors',
      'Clean trial balance and audit-ready schedules'
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll & Compliance',
    short: 'Accurate payroll with statutory filings and local compliance.',
    trust: 'GDPR-aware processes · local filings support',
    bullets: [
      'End-to-end payroll processing and payslips',
      'Statutory filings support (RTI/ PAYE / state filings depending on jurisdiction)',
      'Benefits & contractor payments reconciliation',
      'Secure payroll data handling and PII controls'
    ]
  },
  {
    id: 'reporting',
    title: 'Management Reporting',
    short: 'Board-ready packs, KPIs and clear variance insight.',
    trust: 'Investor-friendly formats · automated packs',
    bullets: [
      'Monthly management pack (P&L, Balance Sheet, Cash Flow)',
      'KPI dashboards and variance commentary',
      'Quick scenario analysis for board or investor asks',
      'Automated data pulls from bookkeeping systems'
    ]
  },
  {
    id: 'ap_ar',
    title: 'Accounts Payable & Receivable',
    short: 'Faster cycles, fewer errors, better cash control.',
    trust: 'MTD-ready AP processes (UK) · revenue recognition aware (US GAAP)',
    bullets: [
      'Invoice capture (OCR) and supplier reconciliation',
      'Payment runs, AP aging and supplier dispute handling',
      'AR invoicing, credit control and DSO reduction playbook',
      'Integration with vendor portals and ERP where needed'
    ]
  },
  {
    id: 'audit',
    title: 'Audit Assistance',
    short: 'Smooth auditor handoffs with complete PBCs and reconciliations.',
    trust: 'Audit-ready PBCs and reconciliations',
    bullets: [
      'Prepare PBC schedules, reconciliations and supporting documents',
      'Coordinate auditor requests and follow-up items',
      'Pre-audit cleanups to reduce audit adjustments',
      'Support for Big-4 and mid-tier audit workflows'
    ]
  },
  {
    id: 'controller',
    title: 'Controller-as-a-Service',
    short: 'GAAP/IFRS finalization, policies and controls that stick.',
    trust: 'Policy frameworks + controls · CFO escalation path',
    bullets: [
      'Monthly close governance and journal review',
      'Prepare and maintain accounting policies (IFRS/US GAAP)',
      'Intercompany, accruals and complex reconciliations',
      'SLA driven deliverables with sign-off controls'
    ]
  },
  {
    id: 'vcfo',
    title: 'Virtual CFO & FP&A',
    short: 'Actionable forecasts, budgets and investor reporting.',
    trust: 'ACCA/CPA-qualified analysts · fundraising-ready reporting',
    bullets: [
      'Model building: cash runway, scenario planning and KPIs',
      'Investor-ready decks and covenant reporting',
      'Monthly forecast vs actual with clear action items',
      'Cap table & fundraising financial pack support (if needed)'
    ]
  },
  {
    id: 'monitoring',
    title: 'Continuous Monitoring & Risk',
    short: 'Exception alerts and fraud flags before they become losses.',
    trust: 'Automated monitoring · configurable rules',
    bullets: [
      'Automated exception detection (payments, vendor anomalies)',
      'Daily / weekly review dashboards and escalation',
      'Vendor risk & duplicate payment checks',
      'Support for internal control remediation'
    ]
  }
]

// Inline SVG icon (simple radial dot)
function DotIcon() {
  return (
    <svg className="h-3 w-3 shrink-0" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  )
}

export default function ServicesPage() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId(openId === id ? null : id)
    // optionally: scrollIntoView or focus management could be added here
  }

  return (
    <Layout>
      {/* HERO */}
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">What we do</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-navy">Services</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">A focused set of finance services designed for Startups, Scaling SMEs, Global Subsidiaries and Accounting Firms. Click any tile to learn how we add specific value for UK and US clients.</p>
        </div>
      </header>

      {/* Services grid */}
      <section className="section bg-white">
        <div className="container grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s) => {
                const isOpen = openId === s.id
                return (
                  <article key={s.id} className="group rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm overflow-hidden">
                    <button
                      aria-expanded={isOpen}
                      aria-controls={`${s.id}-panel`}
                      onClick={() => toggle(s.id)}
                      className={`w-full text-left flex items-start gap-4 p-5 sm:p-6 ${isOpen ? 'bg-white' : 'hover:bg-slate-50'} focus:outline-none`}
                    >
                      <div className="mt-1">
                        <DotIcon />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                            <p className="mt-1 text-sm text-slate-600">{s.short}</p>
                          </div>

                          <div className="ml-3 shrink-0">
                            <svg className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'} text-slate-400`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>

                        {/* expanded panel */}
                        {isOpen && (
                          <div id={`${s.id}-panel`} className="mt-4 border-t border-slate-100 pt-4 text-sm text-slate-700">
                            <p className="mb-3">{/* optional longer intro can go here */}</p>

                            <ul className="space-y-2 mb-3">
                              {s.bullets.map((b, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <span className="mt-1 text-gold"><DotIcon /></span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="text-xs text-slate-500 mb-4">✓ {s.trust}</div>

                            <div className="flex flex-wrap gap-3">
                              <a
                                href={CAL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-xl bg-gold px-4 py-2 text-sm font-semibold text-navy hover:bg-[#E6CF84] transition"
                              >
                                📅 Book a discovery call
                              </a>

                              <a href="/contact#form" className="inline-flex items-center rounded-xl ring-1 ring-slate-300 px-4 py-2 text-sm hover:bg-slate-50">
                                💬 Request a proposal
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  </article>
                )
              })}
            </div>
          </div>

          {/* Right column: Why choose us + CTA */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-navy">Why choose INAVA Global</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>GAAP/IFRS-aligned reporting (UK/US-ready)</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>SOC 2 / ISO-aligned security practices</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>ACCA & CPA-qualified leadership</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>SLA-backed deliveries & quality gates</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold"><DotIcon/></span><span>Flexible engagement — hourly / monthly / project</span></li>
              </ul>
            </div>

            <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm text-center">
              <h4 className="font-semibold text-navy">Not sure where to start?</h4>
              <p className="mt-2 text-slate-600 text-sm">Book a short 30-minute discovery call and we’ll map a clear plan for your finance operations.</p>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 inline-flex">📅 Book discovery call</a>
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
