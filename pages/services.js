import Layout from '../components/Layout'

function Icon({name}) {
  const common = "h-8 w-8 mb-4";
  switch(name) {
    case 'book':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 19.5C3 18.12 4.12 17 5.5 17H20" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 3H8a2 2 0 0 0-2 2v14" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'users':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'chart':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 13v5M12 9v9M17 5v13" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'brief':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="7" width="18" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3v4M8 3v4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'shield':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 12.5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'settings':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.3 18.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.32-.38 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.1 3.3l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c.7 0 1.32.38 1.51 1a1.65 1.65 0 0 0 1.82.33l.06-.06A2 2 0 1 1 21.7 5.1l-.06.06a1.65 1.65 0 0 0-.33 1.82c.2.62.82 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.7 0-1.32.38-1.51 1z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'globe':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12h20M12 2c2 3 2 7 0 12c-2-5-2-9 0-12z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    default:
      return null
  }
}

export default function Services() {
  const core = [
    { icon: 'book', title: 'Bookkeeping & Year-End', desc: 'Accurate, audit-ready books every month and at year-end.' },
    { icon: 'users', title: 'Payroll & Compliance', desc: 'On-time payroll with filings handled seamlessly.' },
    { icon: 'chart', title: 'Management Reporting', desc: 'Board-ready packs with KPIs and variance insights.' },
    { icon: 'brief', title: 'AP & AR Outsourcing', desc: 'Faster cycles, fewer errors, and improved cash control.' },
    { icon: 'shield', title: 'Audit Assistance', desc: 'Clean tie-outs, complete PBCs, and smooth auditor handoff.' },
  ]

  const strategic = [
    { icon: 'settings', title: 'Controller-as-a-Service', desc: 'GAAP/IFRS finalization with policies and controls that stick.' },
    { icon: 'chart', title: 'Virtual CFO & FP&A', desc: 'Budgets, forecasts, and cash runway you can act on.' },
    { icon: 'globe', title: 'Global Expansion', desc: 'Entity setup, cross-border compliance, and intercompany flows.' },
  ]

  const advisory = [
    { icon: 'brief', title: 'Transaction Readiness', desc: 'Financial due diligence and prep for investors or exits.' },
    { icon: 'shield', title: 'Continuous Monitoring', desc: 'Exception alerts and fraud flags before they become losses.' },
    { icon: 'chart', title: 'ESG / CSRD', desc: 'KPIs, governance frameworks, and draft disclosures.' },
  ]

  const who = [
    { title: 'Startups', desc: 'From zero to Series A—finance you can scale with.' },
    { title: 'Scaling SMEs', desc: 'Tighter controls and insights for growing teams.' },
    { title: 'Global Subsidiaries', desc: 'Entity management and group reporting simplified.' },
    { title: 'Accounting Firms', desc: 'Offshore pods for year-end, AP/AR, and audit prep.' },
  ]

  return (
    <Layout>
      {/* HERO */}
      <header className="section bg-[#F9F5EE]">
        <div className="container text-center">
          <span className="badge">What we do</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-navy">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-slate-700 text-lg">
            From day-to-day accounting to board-ready insights, INAVA Global delivers AI-enabled finance operations with the human expertise you trust.
          </p>
        </div>
      </header>

      {/* CORE FINANCE OPS */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-navy mb-8">Core Finance Operations</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {core.map((s, i) => (
              <div key={i} className="group rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:ring-gold transition">
                <Icon name={s.icon} />
                <h3 className="font-semibold text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC FINANCE */}
      <section className="section bg-[#F9F5EE]">
        <div className="container">
          <h2 className="text-2xl font-bold text-navy mb-8">Strategic Finance</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategic.map((s, i) => (
              <div key={i} className="group rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:ring-gold transition">
                <Icon name={s.icon} />
                <h3 className="font-semibold text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORY & RISK */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold text-navy mb-8">Advisory & Risk</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisory.map((s, i) => (
              <div key={i} className="group rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:ring-gold transition">
                <Icon name={s.icon} />
                <h3 className="font-semibold text-lg text-navy">{s.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section bg-[#F9F5EE]">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-navy mb-8">Who We Help</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {who.map((c, i) => (
              <div key={i} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg text-navy">{c.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold">Ready to transform your finance function?</h2>
          <p className="mt-2 text-white/80 max-w-2xl mx-auto">
            Book a discovery call today and see how INAVA Global can save you time, reduce costs, and deliver board-ready insights.
          </p>
          <a href="https://calendly.com/hello-inavaglobal/30min" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 inline-flex">
            📅 Book Discovery Call
          </a>
        </div>
      </section>
    </Layout>
  )
}
