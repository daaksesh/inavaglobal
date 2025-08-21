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
          <span className="badge">Bespoke & SLA‑driven</span>
          <h1 className="mt-3 text-4xl font-extrabold text-navy">Engagement Process</h1>
          <p className="mt-3 max-w-3xl text-slate-700">From discovery to steady‑state delivery—secure, transparent, and outcomes‑focused.</p>
        </div>
      </header>

      <section className="section">
        <div className="container grid md:grid-cols-5 gap-6">
          <Step t="1. Discovery Call" d="30–45 minutes to understand scope, entities, systems, pain points, and success metrics." />
          <Step t="2. Scoping & Proposal" d="Tailored scope document with deliverables, SLAs, tech stack, and AI options. Fees quoted only after requirements are clear." />
          <Step t="3. Agreement & SLA" d="Mutual SLA with deliverables, deadlines, confidentiality, compliance, and performance metrics." />
          <Step t="4. Onboarding & Pilot" d="Secure access setup, parallel run verification, SOP confirmation, and success criteria before steady state." />
          <Step t="5. Ongoing Delivery" d="SLA‑backed monthly ops, dashboards, and quarterly optimization sprints for continuous improvement." />
        </div>
      </section>
    </Layout>
  )
}
