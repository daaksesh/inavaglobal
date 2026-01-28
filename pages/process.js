import Layout from '../components/Layout'

export default function Process() {
  const Step = ({t, d}) => (
    <div className="card">
      <h3 className="font-semibold text-navy">{t}</h3>
      <p className="text-sm text-slate-700 mt-2">{d}</p>
    </div>
  )

  return (
    <Layout>
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">Structured • Governance-Led • Outcome-Focused</span>
          <h1 className="mt-3 text-4xl font-extrabold text-navy">
            Our Engagement Approach
          </h1>
          <p className="mt-3 max-w-3xl text-slate-700">
            We integrate with your finance function through a structured framework
            that combines strategic oversight, governance controls, and reliable
            execution support.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container grid md:grid-cols-5 gap-6">

          <Step
            t="1. Strategic Discovery & Diagnostic"
            d="We begin by understanding your business model, financial structure, reporting requirements, and risk exposure. This includes a review of finance processes, control environment, and growth objectives to identify gaps and improvement areas."
          />

          <Step
            t="2. Solution Architecture & Advisory Roadmap"
            d="Based on the diagnostic, we design a tailored finance structure combining advisory oversight and execution support. This includes governance layers, reporting frameworks, process design, technology alignment, and a phased delivery roadmap."
          />

          <Step
            t="3. Engagement Framework & Governance Setup"
            d="We formalize the engagement with defined advisory roles, reporting cadence, escalation protocols, and performance metrics. Confidentiality, compliance standards, and control responsibilities are embedded from the start."
          />

          <Step
            t="4. Structured Transition & Control Implementation"
            d="Secure access is established, processes are mapped, SOPs are validated, and baseline reporting is set up. Parallel runs and control checkpoints ensure accuracy and stability before full operational integration."
          />

          <Step
            t="5. Ongoing Delivery, Oversight & Optimization"
            d="Beyond execution, we provide continuous oversight through monthly financial reviews, periodic risk assessments, and process optimization initiatives—ensuring your finance function evolves with your business."
          />

        </div>
      </section>
    </Layout>
  )
}
