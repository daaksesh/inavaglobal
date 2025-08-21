import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">Who we are</span>
          <h1 className="mt-3 text-4xl font-extrabold text-navy">About INAVA Global</h1>
          <p className="mt-3 max-w-3xl text-slate-700">Redefining finance for the next generation of businesses with global expertise and AI‑enabled delivery.</p>
        </div>
      </header>

      <section className="container py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
          <p className="mt-3 text-slate-700">Empower businesses with accurate, efficient, and future‑ready finance operations—so leaders can focus on growth while we ensure compliance, clarity, and scalability.</p>

          <h2 className="mt-8 text-2xl font-bold text-navy">Our Values</h2>
          <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
            <li><b>Integrity in Numbers</b> – Accuracy and transparency are non‑negotiable.</li>
            <li><b>Client‑Centered</b> – Every engagement is bespoke and aligned to your goals.</li>
            <li><b>Innovation‑Driven</b> – AI, automation, and continuous improvement at the core.</li>
            <li><b>Global Mindset</b> – Offshore advantage, onshore confidence.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-navy">Why Choose Us</h2>
          <ul className="mt-3 space-y-2 text-slate-700 list-disc pl-5">
            <li>SLA‑driven delivery and governance</li>
            <li>AI‑augmented accuracy and speed</li>
            <li>End‑to‑end coverage: bookkeeping to CFO</li>
            <li>Security first: SOC 2 / ISO‑aligned controls</li>
            <li>Scalable support as you grow</li>
          </ul>
        </div>
        <aside className="card">
          <h3 className="font-semibold text-navy">Global Footprint</h3>
          <p className="text-sm text-slate-700 mt-2">Delivery hubs in India with US/EU partner pods for reviews and sign‑offs. Client base across US, UK, Europe, and APAC.</p>
          <div className="mt-4">
            <span className="badge">ACCA · CPA (Ontario)</span>
          </div>
        </aside>
      </section>
    </Layout>
  )
}
