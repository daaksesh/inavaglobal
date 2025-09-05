import Layout from '../components/Layout'
import { FileText, Users, Briefcase, BarChart3, ShieldCheck, Settings, Globe, TrendingUp, Building2 } from 'lucide-react'

export default function Services() {
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
            {[
              { icon: FileText, title: 'Bookkeeping & Year-End', desc: 'Accurate, audit-ready books every month and at year-end.' },
              { icon: Users, title: 'Payroll & Compliance', desc: 'On-time payroll with filings handled seamlessly.' },
              { icon: BarChart3, title: 'Management Reporting', desc: 'Board-ready packs with KPIs and variance insights.' },
              { icon: Briefcase, title: 'AP & AR Outsourcing', desc: 'Faster cycles, fewer errors, and improved cash control.' },
              { icon: ShieldCheck, title: 'Audit Assistance', desc: 'Clean tie-outs, complete PBCs, and smooth auditor handoff.' },
            ].map((s, i) => (
              <div key={i} className="group rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:ring-gold transition">
                <s.icon className="h-8 w-8 text-gold mb-4" />
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
            {[
              { icon: Settings, title: 'Controller-as-a-Service', desc: 'GAAP/IFRS finalization with policies and controls that stick.' },
              { icon: TrendingUp, title: 'Virtual CFO & FP&A', desc: 'Budgets, forecasts, and cash runway you can act on.' },
              { icon: Globe, title: 'Global Expansion', desc: 'Entity setup, cross-border compliance, and intercompany flows.' },
            ].map((s, i) => (
              <div key={i} className="group rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:ring-gold transition">
                <s.icon className="h-8 w-8 text-gold mb-4" />
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
            {[
              { icon: Building2, title: 'Transaction Readiness', desc: 'Financial due diligence and prep for investors or exits.' },
              { icon: ShieldCheck, title: 'Continuous Monitoring', desc: 'Exception alerts and fraud flags before they become losses.' },
              { icon: BarChart3, title: 'ESG / CSRD', desc: 'KPIs, governance frameworks, and draft disclosures.' },
            ].map((s, i) => (
              <div key={i} className="group rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:ring-gold transition">
                <s.icon className="h-8 w-8 text-gold mb-4" />
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
            {[
              { title: 'Startups', desc: 'From zero to Series A—finance you can scale with.' },
              { title: 'Scaling SMEs', desc: 'Tighter controls and insights for growing teams.' },
              { title: 'Global Subsidiaries', desc: 'Entity management and group reporting simplified.' },
              { title: 'Accounting Firms', desc: 'Offshore pods for year-end, AP/AR, and audit prep.' },
            ].map((c, i) => (
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
          <a href="https://calendly.com/hello-inavaglobal/30min" target="_blank" rel="noopener noreferrer"
             className="btn-primary mt-6 inline-flex">
            📅 Book Discovery Call
          </a>
        </div>
      </section>
    </Layout>
  )
}
