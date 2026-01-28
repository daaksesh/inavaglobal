import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-[#F9F5EE]" />
        <div className="container py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">
              Strategic Finance Leadership. Strong Governance. Reliable Execution.
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-2xl">
              We combine CFO-level advisory, governance & risk expertise, and full-stack
              finance operations — helping growing businesses build control, gain clarity,
              and scale with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/services" className="btn-secondary">Explore services</a>
              <a
                href="https://outlook.office.com/book/FreeConsultationwithInavaGlobal@inavaglobal.com/?ismsaljsauthenabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book discovery call
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative card">
              <ul className="space-y-4">
                {[
                  {t:'CFO Advisory & Financial Strategy', d:'Forecasting, profitability improvement, and funding readiness.'},
                  {t:'Governance & Risk Oversight', d:'Internal audit, controls, and fraud risk frameworks.'},
                  {t:'Board-Ready Reporting', d:'KPI dashboards, MIS, and multi-GAAP financial reporting.'},
                  {t:'Structured Finance Operations', d:'Bookkeeping, payroll, and compliance under governance oversight.'},
                ].map((item,i)=> (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <div>
                      <p className="font-semibold">{item.t}</p>
                      <p className="text-sm text-slate-600">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 border-y border-slate-200 bg-white">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {h:'Leadership-Level Expertise', p:'ACCA, CPA, CA & CFA-led team supporting boards, CFOs and founders.'},
            {h:'Governance-First Approach', p:'Risk, compliance and control frameworks embedded in every engagement.'},
            {h:'Scalable Finance Execution', p:'Reliable operations that grow with your business — without adding overhead.'},
          ].map((k,i)=> (
            <div key={i} className="card">
              <h3 className="font-semibold text-navy">{k.h}</h3>
              <p className="text-slate-600 text-sm mt-2">{k.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="section bg-navy text-white">
        <div className="container">
          <h2 className="text-3xl font-bold">Who we work best with</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {t:'Startups & Scale-ups', d:'Build structured finance and governance foundations early.'},
              {t:'Growing SMEs', d:'Strengthen controls, improve visibility, and optimize profitability.'},
              {t:'Multi-Entity & Global Businesses', d:'Cross-border reporting, compliance and governance support.'},
              {t:'Investor-Backed Companies', d:'Board reporting, funding readiness, and risk oversight.'},
            ].map((tile,i)=>(
              <div key={i} className="rounded-2xl bg-gold text-navy p-6 shadow-md">
                <h3 className="font-semibold text-lg">{tile.t}</h3>
                <p className="mt-2 text-sm">{tile.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-navy">How we support your finance function</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            From strategic advisory to daily execution, we cover the full finance lifecycle.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Strategic Finance & CFO Advisory',
              'Governance, Risk & Internal Audit',
              'Financial Reporting & Performance Intelligence',
              'Credit, Capital & Financial Analysis',
              'Finance Operations & Execution',
              'Finance Transformation & Automation'
            ].map((s,i)=>(
              <div key={i} className="card">
                <p className="font-semibold text-navy">{s}</p>
              </div>
            ))}
          </div>

          <a href="/services" className="btn-secondary mt-8 inline-flex">View detailed services</a>
        </div>
      </section>
    </Layout>
  )
}
