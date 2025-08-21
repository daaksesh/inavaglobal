import Layout from '../components/Layout'
import Link from 'next/link'

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
              <Link href="/services" className="btn-secondary">Explore services</Link>
              <Link href="/contact" className="btn-primary">Book discovery call</Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div>ACCA · CPA (Ontario) · Global delivery</div>
              <div className="hidden sm:block">SOC 2 / ISO 27001 ready</div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative card">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#F3E7C2] to-[#E2C469] opacity-60 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-navy opacity-10 blur-2xl" />
              <ul className="space-y-4">
                {[
                  {t:'Bookkeeping & Year‑End', d:'Accurate, audit‑ready books and compliant year‑end reports.'},
                  {t:'Controller & Reporting', d:'IFRS/US GAAP finalization, policies, audit PBC, consolidation.'},
                  {t:'Virtual CFO & FP&A', d:'Budgets, forecasts, cash runway, board‑ready insights.'},
                  {t:'Automation & Tech', d:'OCR, RPA, and close orchestration to reduce manual work.'},
                  {t:'Continuous Monitoring', d:'Exception analytics, fraud flags, vendor risk insights.'},
                  {t:'ESG / CSRD', d:'KPI frameworks, governance, and draft disclosures.'},
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

      {/* TRUST */}
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

      {/* SERVICES GRID TEASERS */}
      <section className="section bg-navy text-white">
        <div className="container">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-2 text-white/80 max-w-3xl">A seamless blend of traditional accounting and next‑gen consulting—tailored to your stage and goals.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Bookkeeping & Year‑End Accounting',
              'Payroll & Compliance',
              'Management Reporting',
              'Accounts Payable & Receivable',
              'Audit & Year‑End Assistance',
              'Controller‑as‑a‑Service',
              'Virtual CFO & FP&A',
              'Process Automation & Finance Tech',
              'Continuous Monitoring & Risk',
              'ESG / CSRD Readiness',
              'Global Expansion',
              'Transaction Readiness',
            ].map((t,i)=> (
              <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h3 className="font-semibold text-lg">{t}</h3>
                <p className="mt-2 text-sm text-white/90">Learn how we deliver this service with SLA‑backed quality and AI‑enabled efficiency.</p>
              </div>
            ))}
          </div>
          <Link href="/services" className="btn-secondary mt-8 inline-flex">View full services</Link>
        </div>
      </section>
    </Layout>
  )
}
