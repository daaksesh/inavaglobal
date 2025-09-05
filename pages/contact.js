// pages/contact.js
import Layout from '../components/Layout';

export default function Contact() {
  // adjust this if calendar still shows a scrollbar (increase)
  const CALENDLY_HEIGHT = 1200;

  return (
    <Layout>
      {/* HERO */}
      <header className="section bg-[#F9F5EE]">
        <div className="container">
          <span className="badge">Let’s talk</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-navy">
            Contact INAVA Global
          </h1>
          <p className="mt-4 max-w-3xl text-slate-700 text-lg">
            Every engagement starts with a short conversation to understand your systems,
            entity count, timelines and goals. Reach us directly or send a quick message below.
          </p>
        </div>
      </header>

      {/* MAIN AREA: Email (green) + Form (purple) left, Calendly (blue) right spanning both rows */}
      <section className="section bg-white" id="form">
        <div className="container">
          <div className="grid lg:grid-cols-12 lg:grid-rows-2 gap-6">

            {/* EMAIL card — top left (row 1, col 1-6) */}
            <div className="lg:col-span-6 lg:row-span-1">
              <div className="h-full rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-sm text-slate-600">Prefer email?</div>
                  <div className="mt-1 text-2xl font-bold text-navy break-words">hello@inavaglobal.com</div>
                  <div className="mt-1 text-sm text-slate-500">We respond within 48 business hours.</div>
                </div>
                <div className="mt-4">
                  <a
                    href="mailto:hello@inavaglobal.com"
                    className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold shadow hover:bg-[#E6CF84] transition"
                  >
                    ✉️ Email us
                  </a>
                </div>
              </div>
            </div>

            {/* CALENDLY card — right column spanning both rows (col 7-12, row 1-2) */}
            <div className="lg:col-span-6 lg:row-span-2">
              <div className="h-full rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold text-navy">Schedule directly</h3>
                  <p className="mt-2 text-slate-600">Pick a convenient slot for a 30-minute discovery call.</p>
                </div>

                {/* Calendly container: fixed height to avoid internal scroll */}
                <div
                  className="mt-6 flex-1"
                  style={{
                    minWidth: '320px',
                    height: `${CALENDLY_HEIGHT}px`,
                    maxHeight: `${CALENDLY_HEIGHT}px`,
                    overflow: 'hidden'  // hide any internal scrollbar UI from parent
                  }}
                >
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/hello-inavaglobal/30min"
                    style={{ minWidth: '320px', height: `${CALENDLY_HEIGHT}px` }}
                  />
                </div>

                {/* small actions area below (kept inside right card) */}
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://calendly.com/hello-inavaglobal/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl ring-1 ring-slate-300 px-4 py-2 font-medium hover:bg-slate-50"
                  >
                    Open Calendly (new tab)
                  </a>
                </div>

                {/* include the Calendly script once (required for the inline widget to render) */}
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/wi
