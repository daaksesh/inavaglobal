// pages/contact.js
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const calendlyRef = useRef(null);
  const [loadRequested, setLoadRequested] = useState(false);
  const [calendlyScriptLoaded, setCalendlyScriptLoaded] = useState(false);

  // Load Calendly script once when loadRequested becomes true
  useEffect(() => {
    if (!loadRequested) return;
    if (typeof window === 'undefined') return; // SSR guard

    const SCRIPT_ID = 'calendly-widget-script';
    const scriptSrc = 'https://assets.calendly.com/assets/external/widget.js';

    function initWidget() {
      try {
        if (window.Calendly && calendlyRef.current) {
          // clear previous content then init
          calendlyRef.current.innerHTML = '';
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/hello-inavaglobal/30min',
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {}
          });
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('Calendly init error:', err);
      }
    }

    // If script already present
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      if (window.Calendly) {
        initWidget();
        setCalendlyScriptLoaded(true);
      } else {
        existing.addEventListener(
          'load',
          () => {
            initWidget();
            setCalendlyScriptLoaded(true);
          },
          { once: true }
        );
      }
      return;
    }

    // Add script
    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.src = scriptSrc;
    s.async = true;
    s.onload = () => {
      setCalendlyScriptLoaded(true);
      // init after a tiny delay to ensure DOM present
      setTimeout(initWidget, 50);
    };
    s.onerror = () => {
      // eslint-disable-next-line no-console
      console.error('Failed to load Calendly script:', scriptSrc);
    };
    document.body.appendChild(s);
    // keep script for reuse — no cleanup removal
  }, [loadRequested]);

  // Optional: auto-request load when calendly container is near viewport
  useEffect(() => {
    if (!calendlyRef.current || loadRequested) return;
    if (typeof window === 'undefined') return;

    const el = calendlyRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadRequested(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: '250px' } // preload slightly before visible
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loadRequested]);

  // Calendar fixed visual height to avoid internal scrolling
  const CALENDLY_HEIGHT = 920; // adjust 900-1000 if needed

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
            Every engagement starts with a short conversation to understand your systems, entity count, timelines and goals.
          </p>
        </div>
      </header>

      {/* EMAIL STRIP */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-sm text-slate-600">Prefer email?</div>
            <div className="mt-1 text-2xl font-bold text-navy break-words">hello@inavaglobal.com</div>
            <div className="mt-1 text-sm text-slate-500">We respond within 48 business hours.</div>
          </div>
          <a
            href="mailto:hello@inavaglobal.com"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold shadow hover:bg-[#E6CF84] transition"
          >
            ✉️ Email us
          </a>
        </div>
      </section>

      {/* MAIN: form + calendly side-by-side with equal height */}
      <section className="section bg-white" id="form">
        <div className="container">
          {/* grid wrapper ensures spacing; use flex containers inside to allow equal height */}
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left column (form) */}
            <div className="lg:col-span-6 flex">
              <div className="rounded-3xl ring-1 ring-slate-200 bg-white p-8 shadow-sm flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
                <p className="mt-2 text-slate-600">Tell us briefly what you need. We’ll review and reply with tailored next steps.</p>

                <form className="mt-6 grid sm:grid-cols-2 gap-4 flex-1" onSubmit={(e) => e.preventDefault()}>
                  <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3" placeholder="Full Name" required />
                  <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3" placeholder="Work Email" type="email" required />
                  <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2" placeholder="Company & Website" />
                  <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2" placeholder="Country / Region" />
                  <select className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2">
                    <option>What services are you interested in?</option>
                    <option>Bookkeeping & Year-End</option>
                    <option>Payroll & Compliance</option>
                    <option>Management Reporting</option>
                    <option>AP/AR Outsourcing</option>
                    <option>Audit Assistance</option>
                    <option>Controller-as-a-Service</option>
                    <option>Virtual CFO & FP&A</option>
                    <option>Automation & Tech</option>
                    <option>Continuous Monitoring</option>
                    <option>ESG / CSRD</option>
                    <option>Global Expansion</option>
                    <option>Transaction Readiness</option>
                  </select>
                  <textarea
                    className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2"
                    rows={6}
                    placeholder="Briefly describe your requirements (systems, volumes, deadlines)"
                  />
                  <div className="sm:col-span-2 mt-2">
                    <button type="submit" className="btn-primary">Send message</button>
                  </div>
                </form>

                <p className="mt-4 text-xs text-slate-500">
                  By submitting, you agree to our Privacy Policy and Data Processing Addendum.
                </p>
              </div>
            </div>

            {/* Right column (calendly) */}
            <div className="lg:col-span-6 flex">
              <div className="rounded-3xl ring-1 ring-slate-200 bg-white p-6 shadow-sm flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-navy">Schedule directly</h3>
                <p className="mt-2 text-slate-600">Pick a convenient slot for a 30-minute discovery call.</p>

                {/* Calendly container — the flex layout + fixed height ensures equal visual height */}
                <div
                  id="calendly-area"
                  ref={calendlyRef}
                  className="mt-4 flex-1"
                  style={{ minWidth: '280px', height: `${CALENDLY_HEIGHT}px`, maxHeight: `${CALENDLY_HEIGHT}px` }}
                >
                  {!calendlyScriptLoaded && !loadRequested && (
                    <div className="flex items-center justify-center h-full text-sm text-slate-500">
                      Calendar will load when requested.
                    </div>
                  )}
                  {/* When script loads, Calendly will inject the inline widget into this container */}
                </div>

                {/* Load controls */}
                <div className="mt-4 flex gap-3">
                  {!calendlyScriptLoaded && (
                    <button
                      onClick={() => setLoadRequested(true)}
                      className="inline-flex items-center justify-center rounded-xl bg-navy text-white px-4 py-2 font-medium"
                    >
                      Load calendar
                    </button>
                  )}
                  <a
                    href="https://calendly.com/hello-inavaglobal/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl ring-1 ring-slate-300 px-4 py-2 font-medium hover:bg-slate-50"
                  >
                    Open Calendly (new tab)
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
