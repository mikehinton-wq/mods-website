import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  { icon: '🎓', title: 'Beginner Lessons', desc: 'Start from scratch with patient, structured one-to-one tuition tailored to your pace.' },
  { icon: '🧠', title: 'Nervous & Neurodiverse', desc: 'Specialist support for Anxiety, Dyslexia, Dyspraxia, ADHD, and Autism. You learn differently — I teach differently.' },
  { icon: '⚡', title: 'Intensive Courses', desc: 'Need to pass quickly? Intensive courses can be arranged around your schedule.' },
  { icon: '🛣️', title: 'Motorway Driving', desc: 'Post-test motorway sessions to build confidence on higher-speed roads.' },
  { icon: '🔄', title: 'Refresher Lessons', desc: "Haven't driven for a while? Get your confidence back with tailored refresher sessions." },
  { icon: '📚', title: 'Theory Test Prep', desc: 'Guidance on theory test resources, hazard perception, and revision strategies.' },
]

const benefits = [
  { icon: '👤', title: 'One-to-One Only', desc: 'Every lesson is just you and Mike — no sharing, no distractions.' },
  { icon: '📍', title: 'Local Knowledge', desc: 'Know the Rotherham test routes before test day.' },
  { icon: '✅', title: 'DVSA Approved', desc: 'Fully qualified ADI, DBS checked, and DVSA approved.' },
  { icon: '💰', title: 'Theory Guarantee', desc: "If you don't pass your theory test after completing the required structured learning plan, your test fee will be refunded. No small print. Terms and Conditions apply." },
]

const testimonials = [
  {
    quote: "Mike was incredibly patient with me — I'd failed with another instructor twice before. He completely changed my approach and I passed first time at Rotherham.",
    name: 'Sarah T.',
    detail: 'Passed at Rotherham, January 2026',
  },
  {
    quote: "I have dyslexia and was really worried about the theory test. Mike pointed me to the right resources and I passed theory and practical both first time.",
    name: 'James M.',
    detail: 'Passed at Rotherham, November 2025',
  },
  {
    quote: "Really flexible with timings and always on time. Lessons felt relaxed but I always came away having learned something new.",
    name: 'Emma R.',
    detail: 'Passed at Worksop',
  },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg" aria-hidden />
        <div className="container hero__content">
          <div className="hero__text">
            <span className="badge badge-primary" style={{ marginBottom: 16 }}>
              DVSA Qualified · Rotherham
            </span>
            <h1>Driving Lessons<br />You'll Actually Enjoy</h1>
            <p className="hero__sub">
              Patient, one-to-one tuition tailored to your pace. Specialist support for
              nervous learners, <span style={{ color: 'var(--primary)', fontWeight: 800 }}>Anxiety</span>, <span style={{ color: 'var(--primary)', fontWeight: 800 }}>Dyslexia</span>, <span style={{ color: 'var(--primary)', fontWeight: 800 }}>Dyspraxia</span>, and <span style={{ color: 'var(--primary)', fontWeight: 800 }}>Autism</span>. Based in Dalton, covering the Rotherham area.
            </p>
            <p className="hero__sub">
              With a high pass rate of{' '}
              <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2em' }}>over 80%</span>
              {' '}you can be sure you will gain confidence quickly, achieve your driving goals, and at the same time have fun doing it.
            </p>
            <div className="hero__guarantee">
              <span className="guarantee-tick">✓</span>
              <span>
                <strong>Theory Test Guarantee</strong> — if you don't pass your theory test after completing the required structured learning plan, your test fee will be refunded. No small print. Terms and Conditions apply.{' '}
                <a href="https://drivingtestsuccess.com/app-pass-guarantee/" target="_blank" rel="noreferrer" style={{ color: '#d1fae5', fontWeight: 600 }}>Click HERE for details.</a>
              </span>
            </div>
            <div className="hero__actions">
              <a href="tel:07915999994" className="btn btn-primary btn-lg">📞 Call 07915 999994</a>
              <a href="https://wa.me/447915999994" className="btn btn-white btn-lg" target="_blank" rel="noreferrer">💬 WhatsApp</a>
              <Link to="/pricing" className="btn btn-outline-white btn-lg">View Prices</Link>
            </div>
            <div style={{ marginTop: 20, width: '100%', maxWidth: 340, overflowX: 'hidden' }}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmikehintondrivingschool&tabs&width=340&height=130&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="130"
                style={{ border: 'none', overflow: 'hidden', borderRadius: 8, display: 'block' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Mike Hinton Driving School on Facebook"
              />
            </div>
            <p style={{ marginTop: 16, marginBottom: 8, color: 'var(--light-blue)', fontSize: '0.9rem', fontWeight: 600 }}>
              Follow us on social media — over 33,000 followers and growing.
            </p>
            <div style={{ marginTop: 0, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a
                href="https://www.tiktok.com/@mrdriveruk"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#010101', color: '#fff',
                  fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '1.1rem',
                  padding: '6px 12px', borderRadius: 6, textDecoration: 'none',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
                TikTok
              </a>
              <a
                href="https://www.instagram.com/mikehintondrivingschool"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'radial-gradient(circle at 30% 110%, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  color: '#fff',
                  fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '1.1rem',
                  padding: '6px 12px', borderRadius: 6, textDecoration: 'none',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@mikehintondrivingschool4126"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#FF0000', color: '#fff',
                  fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '1.1rem',
                  padding: '6px 12px', borderRadius: 6, textDecoration: 'none',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>
          <div className="hero__card-stack">
            <img
              src="/images/Mike Hinton Car.jpg"
              alt="Mike Hinton Driving School car"
              style={{
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                display: 'block',
              }}
            />
            <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                '1-to-1 lessons — every session',
                'Theory test fee guarantee',
                'DVSA approved instructor (ADI)',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--light-blue)', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── BENEFITS STRIP ───────────────────────────────────────── */}
      <section className="benefits-strip">
        <div className="container">
          <div className="grid-4">
            {benefits.map(b => (
              <div key={b.title} className="benefit-item">
                <div className="benefit-icon">{b.icon}</div>
                <div>
                  <strong>{b.title}</strong>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIST CALLOUT ────────────────────────────────────── */}
      <section className="specialist-banner">
        <div className="container specialist-banner__inner">
          <div>
            <span className="badge badge-green" style={{ marginBottom: 12 }}>Specialist Provision</span>
            <h2>Do You Learn Differently?</h2>
            <div className="divider" />
            <p>
              Many learners struggle not because driving is hard, but because
              standard lessons don't suit the way they process information. Mike has
              experience working with students with <strong>Anxiety</strong>,{' '}
              <strong>Dyslexia</strong>, <strong>Dyspraxia</strong>, <strong>ADHD</strong>, and{' '}
              <strong>Autism</strong> — adapting every lesson to suit you, not the other way around.
            </p>
            <Link to="/specialist-learners" className="btn btn-primary" style={{ marginTop: 20 }}>
              Find out more →
            </Link>
          </div>
          <div className="specialist-banner__points">
            {[
              'Lessons paced entirely to your needs',
              'No pressure, no judgement',
              'Theory test guidance included',
              'Post-test support available',
              'Serving the Rotherham area',
            ].map(p => (
              <div key={p} className="specialist-point">
                <span className="point-check">✓</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Everything You Need to Pass</h2>
            <div className="divider center" />
            <p className="section-subtitle">
              From your first lesson to test day — and beyond — Mike Hinton Driving School
              has you covered.
            </p>
          </div>
          <div className="grid-3">
            {services.map(s => (
              <div key={s.title} className="card service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/what-we-offer" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">What Students Say</h2>
            <p style={{ color: 'var(--grey-600)', fontSize: '1.05rem', marginTop: 8, marginBottom: 4 }}>
              Don't take our word for it. See why we have a 5 star rating.
            </p>
            <div className="divider center" />
          </div>
          <div className="grid-3">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <a href="https://www.facebook.com/mikehintondrivingschool/reviews" target="_blank" rel="noreferrer" className="btn btn-outline">Read More Reviews</a>
          </div>
        </div>
      </section>

      {/* ── AREAS COVERED ────────────────────────────────────────── */}
      <section className="areas-section section-sm">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Areas Covered</h2>
            <div className="divider center" />
            <p className="section-subtitle">
              Based in Dalton, Rotherham. Lessons available across South Yorkshire.
            </p>
          </div>
          <div className="areas-grid">
            {['Dalton', 'Sunnyside', 'Woodlaithes', 'Flanderwell', 'Wickersley',
              'Bramley', 'Ravenfield', 'Braithwell', 'Micklebring', 'Maltby',
              'Brecks', 'East Denes', 'Herringthorpe', 'Rawmarsh'].map(area => (
              <div key={area} className="area-pill">{area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready to Start?</h2>
            <p>Get in touch today for a no-obligation chat about lessons.</p>
          </div>
          <div className="cta-banner__actions">
            <a href="tel:07915999994" className="btn btn-white">📞 07915 999994</a>
            <a href="https://wa.me/447915999994" className="btn btn-outline-white" target="_blank" rel="noreferrer">💬 WhatsApp</a>
            <Link to="/contact" className="btn btn-outline-white">Contact Form</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
