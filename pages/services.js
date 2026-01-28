import { useState } from 'react'
import Layout from '../components/Layout'

const BOOKING_LINK =
  'https://outlook.office.com/book/FreeConsultationwithInavaGlobal@inavaglobal.com/'

const services = [
  {
    id: 'cfo',
    title: 'Strategic Finance & CFO Advisory',
    short: 'CFO-level insight without full-time overhead.',
    trust: 'ACCA/CPA leadership · Investor & board-ready outputs',
    story:
      'We operate as an extension of your leadership team—bringing financial strategy, forecasting, and decision support that growing businesses need. From budgeting and scenario modeling to profitability improvement and funding strategy, we help you move from reactive finance to structured financial leadership.'
  },
  {
    id: 'governance',
    title: 'Governance, Risk & Internal Audit',
    short: 'Stronger controls, reduced risk, and audit confidence.',
    trust: 'IFC frameworks · ERM design · Audit committee reporting',
    story:
      'As businesses scale, risk and compliance become critical. We design internal control frameworks, perform internal audits, assess fraud risks, and establish governance structures that boards, investors, and regulators trust. Our approach balances control with operational efficiency.'
  },
  {
    id: 'reporting',
    title: 'Financial Reporting & Performance Intelligence',
    short: 'Decision-ready reporting, not just financial statements.',
    trust: 'IFRS / US GAAP / UK GAAP · Board-level MIS',
    story:
      'We transform financial data into leadership insight. From statutory financial statements to KPI dashboards and board reporting packs, we ensure clarity, compliance, and actionable performance visibility across entities and geographies.'
  },
  {
    id: 'capital',
    title: 'Credit, Capital & Financial Analysis',
    short: 'Supporting funding, lending, and investment decisions.',
    trust: 'Credit appraisal expertise · Cash flow & covenant analysis',
    story:
      'We bridge finance operations with capital strategy. Our team prepares due diligence reports, credit appraisals, cash flow analysis, and covenant monitoring—helping businesses and financial stakeholders make informed funding and investment decisions.'
  },
  {
    id: 'operations',
    title: 'Finance Operations & Execution',
    short: 'Reliable day-to-day finance under structured oversight.',
    trust: 'Audit-ready books · Controlled processes',
    story:
      'Our execution team manages bookkeeping, month-end close, AP/AR, payroll, cost accounting, and compliance support. Unlike traditional outsourcing providers, our operations are guided by governance frameworks and senior oversight, ensuring accuracy and control.'
  },
  {
    id: 'transformation',
    title: 'Finance Transformation & Automation',
    short: 'Modernizing finance for efficiency and scale.',
    trust: 'Process optimization · ERP & reporting automation',
    story:
      'We help finance functions evolve. Through process reengineering, ERP optimization, reporting automation, and SOP design, we reduce manual risk, improve speed, and build scalable finance infrastructure aligned with growth.'
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
            Strategic Finance, Governance & Execution Services
          </h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            We combine CFO-level advisory, governance expertise, and full-stack
            finance execution—helping growing businesses build control, gain
            clarity, and scale with confidence.
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
                    setLockedId((prev) => (prev === s.id ? null : s.id))
                  }
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setLockedId((prev) => (prev === s.id ? null : s.id))
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
