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
  { icon: '📍', title: 'Local Knowledge', desc: 'Know the Rotherham and Worksop test routes before test day.' },
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
            <div style={{ marginTop: 16 }}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmikehintondrivingschool&tabs&width=340&height=130&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="130"
                style={{ border: 'none', overflow: 'hidden', borderRadius: 8, maxWidth: '100%' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Mike Hinton Driving School on Facebook"
              />
            </div>
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
              'Serving Rotherham & Worksop',
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
