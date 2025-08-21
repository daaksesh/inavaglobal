import Layout from '../components/Layout'

export default function Services() {
  const Section = ({title, bullets, outcome, seo}) => (
    <section className="container py-12">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-bold text-navy">{title}</h2>
        </div>
        <div className="md:col-span-8">
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {bullets.map((b, i)=> <li key={i}>{b}</li>)}
          </ul>
          <p className="mt-4 font-medium text-slate-800">Outcome: {outcome}</p>
          <p className="mt-1 text-xs text-slate-500">SEO: {seo}</p>
        </div>
      </div>
      <hr className="mt-8 border-slate-200"/>
    </section>
  )

  return (
    <Layout>
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">End‑to‑end finance & accounting</span>
          <h1 className="mt-3 text-4xl font-extrabold text-navy">Services</h1>
          <p className="mt-3 max-w-3xl text-slate-700">
            A single partner for bookkeeping, payroll, reporting, compliance, CFO insights, automation, and ESG. Bespoke, SLA‑driven engagements with secure, AI‑enabled delivery.
          </p>
        </div>
      </header>

      <Section
        title="Bookkeeping & Year‑End Accounting"
        bullets={[
          "Monthly bookkeeping, reconciliations, AP/AR processing",
          "Year‑end financial statements and tax‑ready reporting",
          "Audit‑ready documentation aligned with IFRS / US GAAP"
        ]}
        outcome="Accurate, reliable numbers you can trust for compliance and decision‑making."
        seo="bookkeeping outsourcing, year‑end accounting services, startup accounting support"
      />

      <Section
        title="Payroll Processing & Compliance"
        bullets={[
          "Salary runs, withholdings, and employee compliance filings",
          "Social security, tax filings, and statutory registrations",
          "Scalable payroll for global employees"
        ]}
        outcome="Employees paid on time, compliance secured, stress eliminated."
        seo="outsourced payroll services, SME payroll compliance, global payroll outsourcing"
      />

      <Section
        title="Management Reporting & Financial Packs"
        bullets={[
          "Monthly packs: P&L, Balance Sheet, Cash Flow",
          "Customized KPI dashboards for founders and boards",
          "Variance analysis with actionable insights"
        ]}
        outcome="Financial clarity to make smarter business decisions."
        seo="financial reporting outsourcing, management accounting, KPI dashboards"
      />

      <Section
        title="Accounts Payable & Receivable Outsourcing"
        bullets={[
          "Vendor bill processing, approvals, payment scheduling",
          "Customer invoicing, collections, and reconciliation",
          "AI‑driven AP/AR automation"
        ]}
        outcome="Faster turnaround, improved cash flow, reduced manual workload."
        seo="AP outsourcing, AR collections, outsourced cash flow management"
      />

      <Section
        title="Audit & Year‑End Assistance"
        bullets={[
          "PBC documentation and reconciliations",
          "Year‑end tie‑outs and auditor coordination",
          "Clean‑ups and adjustments for audit readiness"
        ]}
        outcome="Hassle‑free audits with minimal disruption to your business."
        seo="audit support outsourcing, year‑end audit preparation, SME audit assistance"
      />

      <Section
        title="Controller‑as‑a‑Service"
        bullets={[
          "IFRS/US GAAP finalization and consolidation",
          "Internal controls, policies, and governance frameworks",
          "Audit compliance and risk reporting"
        ]}
        outcome="Professional‑grade financial control without the cost of a senior hire."
        seo="outsourced controller, compliance outsourcing, financial governance services"
      />

      <Section
        title="Virtual CFO & FP&A"
        bullets={[
          "Budgets, forecasts, and driver‑based models",
          "Investor‑ready board reporting",
          "Cash flow and runway management"
        ]}
        outcome="Strategic insights, investor trust, and financial foresight."
        seo="virtual CFO services, outsourced FP&A, startup financial planning"
      />

      <Section
        title="Process Automation & Finance Technology"
        bullets={[
          "OCR‑based invoice automation and reconciliations",
          "RPA bots for repetitive workflows",
          "Implementation of QuickBooks, Xero, NetSuite, D365, BlackLine"
        ]}
        outcome="Higher accuracy, faster processes, lower costs."
        seo="finance automation, RPA for accounting, AI bookkeeping solutions"
      />

      <Section
        title="Continuous Monitoring & Risk Insights"
        bullets={[
          "Exception reporting and fraud detection alerts",
          "Vendor risk dashboards and spend analytics",
          "Continuous financial monitoring systems"
        ]}
        outcome="Better governance, proactive fraud prevention, peace of mind."
        seo="continuous monitoring, fraud detection outsourcing, finance risk analytics"
      />

      <Section
        title="ESG / CSRD Readiness"
        bullets={[
          "Sustainability KPIs and reporting frameworks",
          "Governance aligned with CSRD",
          "Drafting investor/regulator‑ready disclosures"
        ]}
        outcome="Compliance with regulators, trust with investors, long‑term value creation."
        seo="ESG reporting outsourcing, CSRD compliance, sustainability services"
      />

      <Section
        title="Global Expansion & Transaction Readiness"
        bullets={[
          "GAAP conversion, entity setup, statutory registrations",
          "Data room prep, working capital analysis, due diligence support",
          "Fundraising and M&A financial packs"
        ]}
        outcome="Ready for investors, buyers, or market expansion."
        seo="global expansion finance support, transaction readiness, M&A finance services"
      />
    </Layout>
  )
}
