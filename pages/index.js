import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-[#F9F5EE]" />
        <div className="container py-16 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">Empowering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-goldsoft">Next‑Gen Finance</span></h1>
            <p className="mt-5 text-lg text-slate-700 max-w-2xl">AI-powered offshore finance operations—bookkeeping to CFO insights. Faster closes, stronger compliance, smarter decisions.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/services" className="btn-secondary">Explore services</a>
              <a href="/contact" className="btn-primary">Book discovery call</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative card">
              <ul className="space-y-4">
                {[ 
                  {t:'Bookkeeping & Year‑End', d:'Audit-ready books, on time—every month and at year-end.'},
                  {t:'Controller & Reporting', d:'GAAP/IFRS finalization, policies, audit PBC, consolidation.'},
                  {t:'Virtual CFO & FP&A', d:'Budgets, forecasts, cash runway, board‑ready insights.'},
                  {t:'Continuous Monitoring', d:'Exception alerts and fraud flags before they become losses.'},
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
            {h:'Faster close', p:'Cut month‑end by 30–50% with automation + orchestration.'},
            {h:'Assured quality', p:'Dual‑review and QA—accuracy, compliance, audit‑ready docs.'},
            {h:'Secure delivery', p:'SOC 2 / ISO 27001 controls, least‑privilege access, EU/US data options.'},
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
          <h2 className="text-3xl font-bold">Who we help</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {t:'Startups', d:'Get finance operations right from day one, ready for scale and investors.'},
              {t:'Scaling SMEs', d:'Tighten controls, gain clarity, and unlock cost-efficient offshore support.'},
              {t:'Global Subsidiaries', d:'Local compliance, group reporting, and audit support handled end-to-end.'},
              {t:'Accounting Firms', d:'Reliable offshore bookkeeping and audit prep to free senior staff.'},
            ].map((tile,i)=>(
              <div key={i} className="rounded-2xl bg-gold text-navy p-6 shadow-md">
                <h3 className="font-semibold text-lg">{tile.t}</h3>
                <p className="mt-2 text-sm">{tile.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-navy">Featured services</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">A focused set of services that give leaders the clarity, compliance, and control they need to grow.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {t:'Bookkeeping & Year‑End', d:'Audit-ready books, on time—every month and at year-end.'},
              {t:'Payroll & Compliance', d:'Accurate, on-time payroll with filings handled for you.'},
              {t:'Management Reporting', d:'Board-ready packs with KPIs and clear variance insights.'},
              {t:'AP & AR Outsourcing', d:'Faster cycles, fewer errors, better cash control.'},
              {t:'Audit Assistance', d:'Clean tie-outs, complete PBC, smooth auditor handoff.'},
              {t:'Controller-as-a-Service', d:'GAAP/IFRS finalization with policies and controls that stick.'},
              {t:'Virtual CFO & FP&A', d:'Budgets, forecasts, and cash runway you can act on.'},
              {t:'Continuous Monitoring', d:'Exception alerts and fraud flags before they become losses.'},
            ].map((s,i)=>(
              <div key={i} className="card">
                <h3 className="font-semibold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
          <a href="/services" className="btn-secondary mt-8 inline-flex">View all services</a>
        </div>
      </section>
    </Layout>
  )
}
