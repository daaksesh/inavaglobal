import { useState } from 'react'
import Layout from '../components/Layout'

const BOOKING_LINK =
  'https://outlook.office.com/book/FreeConsultationwithInavaGlobal@inavaglobal.com/'

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
    trust: 'MTD-aware AP processes · revenue recognition aware (US GAAP)',
    story:
      'Cash management separates winners from the rest. We streamline AP from capture to payment, and AR from invoicing to collections—reducing DSO and improving supplier relationships—while ensuring compliance for EU and US regulations where applicable.'
  },
  {
    id: 'audit',
    title: 'Audit Assistance',
    short: 'Smooth auditor handoffs with complete PBCs and reconciliations.',
    trust: 'Audit-ready PBCs and reconciliations',
    story:
      'Audits are stressful when documents are scattered. We assemble clean PBC schedules, reconciliations and tie-outs so external auditors—whether Big-4 or regional firms in EU/US—get exactly what they need. The result: fewer adjustments and faster sign-offs.'
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
      'Not every company needs a full-time CFO. Our virtual CFO service brings modeling, runway analysis and fundraising packs so founders and boards get CFO-level insight—at a fraction of the cost and fully aligned to EU/US investor expectations.'
  },
  {
    id: 'monitoring',
    title: 'Continuous Monitoring & Risk',
    short: 'Exception alerts and fraud flags before they become losses.',
    trust: 'Automated monitoring · configurable rules',
    story:
      'Small anomalies can become big problems. We set up automated monitoring and exception analytics to flag suspicious payments, vendor anomalies and control lapses early—reducing financial risk and keeping your teams focused on growth.'
  }
]

// small dot icon
function DotIcon() {
  return (
    <svg
      className="h-3 w-3 shrink-0"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="currentColor" />
    </svg>
  )
}

export default function ServicesPage() {
  const [hoverId, setHoverId] = useState(null)
  const [lockedId, setLockedId] = useState(null)

  return (
    <Layout>
      {/* HERO */}
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">What we do</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-navy">
            Services
          </h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            A focused set of finance services designed for Startups, Scaling SMEs,
            Global Subsidiaries and Accounting Firms. Hover or tap any service to
            explore how we help EU & US clients.
          </p>
        </div>
      </header>

      {/* SERVICES GRID */}
      <section className="section bg-white">
        <div className="container">
          <div
            className="grid sm:grid-cols-2 gap-6"
            onMouseLeave={() => {
              if (!lockedId) setHoverId(null)
            }}
          >
            {services.map((s) => {
              const isExpanded =
                lockedId === s.id || (!lockedId && hoverId === s.id)

              return (
                <div
                  key={s.id}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  aria-controls={`service-${s.id}`}
                  onMouseEnter={() => !lockedId && setHoverId(s.id)}
                  onFocus={() => setHoverId(s.id)}
                  onBlur={() => !lockedId && setHoverId(null)}
                  onClick={() =>
                    setLockedId((prev) =>
                      prev === s.id ? null : s.id
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setLockedId((prev) =>
                        prev === s.id ? null : s.id
                      )
                    }
                    if (e.key === 'Escape') {
                      setLockedId(null)
                      setHoverId(null)
                    }
                  }}
                  className={`
                    group cursor-pointer rounded-2xl ring-1 p-6 transition-all duration-300 outline-none
                    ${
                      isExpanded
                        ? 'ring-gold shadow-lg bg-white'
                        : 'ring-slate-200 hover:ring-gold hover:shadow-md'
                    }
                    focus-visible:ring-2 focus-visible:ring-gold
                  `}
                >
                  {/* HEADER */}
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 text-gold">
                      <DotIcon />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-navy">
                            {s.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {s.short}
                          </p>
                        </div>

                        {/* ROTATING CHEVRON */}
                        <svg
                          className={`
                            h-5 w-5 shrink-0 transition-transform duration-300
                            ${
                              isExpanded
                                ? 'rotate-90 text-gold'
                                : 'rotate-0 text-slate-400'
                            }
                          `}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 4l8 6-8 6V4z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* EXPANDABLE CONTENT */}
                  <div
                    id={`service-${s.id}`}
                    className={`
                      overflow-hidden transition-all duration-300 ease-out
                      ${
                        isExpanded
                          ? 'max-h-[700px] opacity-100 translate-y-0'
                          : 'max-h-0 opacity-0 translate-y-2'
                      }
                    `}
                  >
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {s.story}
                      </p>

                      <div className="mt-3 text-xs text-slate-500">
                        ✓ {s.trust}
                      </div>

                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <a
                          href={BOOKING_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex justify-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          📅 Book discovery call
                        </a>

                        <a
                          href="/contact#form"
                          className="inline-flex justify-center rounded-xl ring-1 ring-slate-300 px-4 py-2 text-sm hover:bg-slate-50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          💬 Contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
