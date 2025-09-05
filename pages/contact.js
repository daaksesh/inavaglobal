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
          // wipe previous content then init
          calendlyRef.current.innerHTML = '';
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/hello-inavaglobal/30min',
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {}
          });
        }
      } catch (err) {
        // show helpful console message for debugging
        // eslint-disable-next-line no-console
        console.error('Calendly init error:', err);
      }
    }

    // If script is already present
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      // if Calendly object already available -> init immediately, else wait a tick
      if (window.Calendly) {
        initWidget();
        setCalendlyScriptLoaded(true);
      } else {
        // script present but not yet initialized (rare) — wait for load event
        existing.addEventListener('load', () => {
          initWidget();
          setCalendlyScriptLoaded(true);
        }, { once: true });
      }
      return;
    }

    // otherwise add the script
    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.src = scriptSrc;
    s.async = true;
    s.onload = () => {
      setCalendlyScriptLoaded(true);
      // init after a small timeout to ensure div exists in DOM
      setTimeout(initWidget, 50);
    };
    s.onerror = () => {
      // eslint-disable-next-line no-console
      console.error('Failed to load Calendly script:', scriptSrc);
    };
    document.body.appendChild(s);

    // cleanup not strictly necessary for script, but keep pattern
    return () => {
      // do not remove script on unmount (so future navigations can reuse it)
    };
  }, [loadRequested]);

  // Optional: auto-request load when calendly container scrolls into view
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
      { rootMargin: '200px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loadRequested]);

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
            Every engagement starts with a short conversation to understand your systems, entity count, timelines and goals. Reach us directly or send a quick message below.
          </p>
        </div>
      </header>

      {/* ELONGATED CONTACT STRIP */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1 rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-600">Call us now</div>
            <div className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight text-navy">
              +91 90046 65866
            </div>
            <div className="mt-1 text-sm text-slate-500">Mon–Fri · 9:00–19:00 IST · Global delivery</div>
          </div>

          <div className="w-full md:w-auto flex gap-3">
            <a href="tel:+919004665866" className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-navy font-semibold hover:bg-[#E6CF84] transition">
              📞 Call now
            </a>

            <button
              onClick={() => {
                // scroll to calendly container and request load
                const el = document.getElementById('calendly-area');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setLoadRequested(true);
              }}
              className="inline-flex items-center justify-center rounded-xl ring-1 ring-slate-300 px-5 py-3 font-medium hover:bg-slate-50"
              aria-label="Book a discovery call (scrolls to calendar)"
            >
              Book a call
            </button>

            <a href="mailto:hello@inavaglobal.com" className="inline-flex items-center justify-center rounded-xl ring-1 ring-slate-300 px-5 py-3 font-medium hover:bg-slate-50">
              ✉️ Email us
            </a>
          </div>
        </div>
      </section>

      {/* MAIN: form + calendly side-by-side */}
      <section className="section bg-white" id="form">
        <div className="container grid lg:grid-cols-12 gap-10 items-start">
          {/* Form (left) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl ring-1 ring-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-slate-600">Tell us briefly what you need. We’ll review and reply with tailored next steps.</p>

              <form className="mt-6 grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3" placeholder="Full Name" />
                <input className="rounded-xl ring-1 ring-slate-300 px-4 py-3" placeholder="Work Email" />
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
                <textarea className="rounded-xl ring-1 ring-slate-300 px-4 py-3 sm:col-span-2" rows={6} placeholder="Briefly describe your requirements (systems, volumes, deadlines)" />
                <div className="sm:col-span-2 flex gap-3">
                  <button type="submit" className="btn-primary">Send message</button>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      const el = document.getElementById('calendly-area');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      setLoadRequested(true);
                    }}
                  >
                    Or schedule a call
                  </button>
                </div>
              </form>

              <p className="mt-3 text-xs text-slate-500">By submitting, you agree to our Privacy Policy and Data Processing Addendum.</p>
            </div>
          </div>

          {/* Calendly (right) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-navy">Schedule directly</h3>
              <p className="mt-2 text-slate-600">Pick a convenient slot for a 30-minute discovery call.</p>

              <div id="calendly-area" ref={calendlyRef} className="mt-6" style={{ minWidth: '280px', height: '600px' }}>
                {!calendlyScriptLoaded && !loadRequested && (
                  <div className="text-sm text-slate-500">Calendar will load when requested.</div>
                )}
                {/* The actual widget will be injected by Calendly script into this container */}
              </div>
            </div>

            {/* Trust signals */}
            <div className="mt-6 rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
              <h4 className="font-semibold text-navy">Why clients choose us</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>SLA-backed delivery and governance</li>
                <li>ACCA · CPA (Ontario) leadership</li>
                <li>Secure processes (SOC 2 / ISO-aligned)</li>
                <li>AI-enabled accuracy and speed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
