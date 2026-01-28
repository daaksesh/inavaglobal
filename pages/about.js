import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">Who we are</span>
          <h1 className="mt-3 text-4xl font-extrabold text-navy">About INAVA Global</h1>
          <p className="mt-3 max-w-3xl text-slate-700">
            A strategic finance, governance, and risk advisory firm delivering
            leadership-level financial insight alongside reliable execution support.
          </p>
        </div>
      </header>

      <section className="container py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-navy">Our Purpose</h2>
          <p className="mt-3 text-slate-700">
            We help growing businesses build strong financial foundations. By combining
            CFO-level advisory, governance and risk expertise, and structured finance
            operations, we enable organizations to scale with control, clarity, and confidence.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-navy">What Makes Us Different</h2>
          <p className="mt-3 text-slate-700">
            Most firms offer either advisory or outsourcing. Inava Global integrates both.
            We provide strategic financial direction and governance oversight while ensuring
            day-to-day finance operations are delivered accurately and under structured controls.
          </p>

          <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
            <li><b>Leadership-Level Expertise</b> – ACCA, CPA, CA, and CFA-led professionals with board and CFO advisory experience.</li>
            <li><b>Governance-First Approach</b> – Risk management, internal controls, and compliance embedded in every engagement.</li>
            <li><b>Decision-Focused Reporting</b> – We convert financial data into performance intelligence and board-ready insights.</li>
            <li><b>Execution with Oversight</b> – Reliable bookkeeping, payroll, and compliance supported by senior supervision.</li>
            <li><b>Scalable Finance Structures</b> – Processes, systems, and frameworks that grow with your organization.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-navy">Our Values</h2>
          <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
            <li><b>Integrity & Accountability</b> – Transparency, ownership, and ethical practice in every engagement.</li>
            <li><b>Client Partnership</b> – We operate as an extension of your leadership team, not just a vendor.</li>
            <li><b>Excellence Through Expertise</b> – Global qualifications and practical experience drive our standards.</li>
            <li><b>Continuous Improvement</b> – We embrace automation, process optimization, and evolving finance practices.</li>
            <li><b>Collaboration & Trust</b> – Strong communication and long-term relationships define how we work.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-navy">Our Approach</h2>
          <p className="mt-3 text-slate-700">
            Every engagement begins with understanding your business model, risk exposure,
            and financial objectives. We then design a delivery model that blends strategic
            oversight with operational execution—ensuring compliance, performance visibility,
            and long-term financial resilience.
          </p>
        </div>

        <aside className="card">
          <h3 className="font-semibold text-navy">Global Expertise, Practical Delivery</h3>
          <p className="text-sm text-slate-700 mt-2">
            Our team brings experience across India, US, and UAE-facing operations,
            supporting organizations in regulated and growth-focused environments.
          </p>

          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p>• Multi-GAAP Reporting (IFRS, US GAAP, UK GAAP, Indian GAAP)</p>
            <p>• Governance, Risk & Internal Audit Expertise</p>
            <p>• CFO Advisory & Capital Strategy Support</p>
            <p>• Cross-Border Finance & Compliance Knowledge</p>
          </div>

          <div className="mt-5">
            <span className="badge">ACCA · CPA · CA · CFA</span>
          </div>
        </aside>
      </section>
    </Layout>
  )
}
