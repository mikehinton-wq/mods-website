import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Home.css'

const services = [
  {
    icon: '🎓', title: 'Beginner Lessons',
    desc: "Whether you take time to learn or are a fast learner, lessons are tailored to your individual needs with the aim of giving you confidence on the road — and you'll have fun doing it.",
    features: ['One-to-one only', 'Dual-control car', 'Structured DVSA syllabus', 'Honest progress feedback'],
  },
  {
    icon: '🧠', title: 'Nervous & Neurodiverse Learners',
    desc: 'Specialist support for learners with Anxiety, Dyslexia, Dyspraxia, ADHD, or Autism. Lessons are adapted to how you process information — not how the average learner does.',
    features: ['Adjusted pacing', 'No pressure environment', 'Theory test guidance', 'Post-test support'],
    link: '/specialist-learners', linkLabel: 'Learn more about specialist lessons →',
  },
  {
    icon: '📱', title: 'Your Own Dedicated App',
    desc: "Quickly and easily track your driving progress between lessons with your own learner app — so you always know where you are and what's coming next.",
    features: ['Track your progress', 'Review lesson summaries', 'See your next lesson', 'Book extra lessons via Lesson Gap'],
  },
  {
    icon: '📚', title: 'Theory Test Guarantee',
    desc: "We provide specific training to help you with your theory test. If you don't pass after completing the required structured learning plan, your test fee will be refunded. No small print. Terms and Conditions apply.",
    features: ['Dedicated theory app', 'Hazard perception tips', 'Test-taking strategies', 'Theory fee guarantee'],
  },
  {
    icon: '🔄', title: 'Refresher Lessons',
    desc: "If you haven't driven for a while, a refresher lesson may be just what you need. Its purpose is to build your confidence and remind you of the aspects of driving essential to staying safe on the road.",
    features: ['No judgement', 'Flexible duration', 'Focus on your weak areas', 'Suitable for all ages'],
  },
  {
    icon: '💷', title: 'Pay Per Lesson',
    desc: 'By paying each time you have a lesson rather than a lot upfront, you are in control of when you want your lesson. This is particularly helpful if you are on a budget.',
    features: ['No large upfront cost', 'Cash or bank transfer', 'Flexible scheduling', 'Block booking discounts available'],
  },
  {
    icon: '🛣️', title: 'Motorway Driving',
    desc: 'Whether you are a learner or an experienced driver, we can provide tuition on motorway driving to help you grow in confidence, learn all aspects of the motorway, and how to stay safe.',
    features: ['Learners & experienced drivers', 'Confidence building', 'Joining and leaving motorways', 'Lane discipline'],
  },
  {
    icon: '🚗', title: 'Show Me Tell Me',
    desc: 'The Show Me, Tell Me questions test your knowledge on basic car maintenance and safety. We provide the necessary training to help you pass this part of the practical test.',
    features: ['All current questions covered', 'Practical demonstrations', 'Part of every lesson plan', 'Tested in mock tests'],
  },
]

const benefits = [
  { icon: '👤', title: 'One-to-One Only', desc: 'Every lesson is just you and Mike — no sharing, no distractions.' },
  { icon: '📍', title: 'Local Knowledge', desc: 'Know the Rotherham test routes before test day.' },
  { icon: '✅', title: 'DVSA Approved', desc: 'Fully qualified ADI, DBS checked, and DVSA approved.' },
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
      <Helmet>
        <title>Driving Lessons in Rotherham | Mike Hinton Driving School</title>
        <meta name="description" content="DVSA-approved driving instructor in Rotherham offering one-to-one manual driving lessons. Specialist in nervous learners, anxiety, ADHD, dyslexia and autism. Call 07915 999994." />
        <link rel="canonical" href="https://mikehintondrivingschool.co.uk/" />
        <meta property="og:title" content="Driving Lessons in Rotherham | Mike Hinton Driving School" />
        <meta property="og:description" content="DVSA-approved driving instructor in Rotherham offering one-to-one manual driving lessons. Specialist in nervous learners. Call 07915 999994." />
        <meta property="og:url" content="https://mikehintondrivingschool.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DrivingSchool",
          "name": "Mike Hinton Driving School",
          "url": "https://mikehintondrivingschool.co.uk",
          "telephone": "+447915999994",
          "email": "mikejhinton@outlook.com",
          "address": { "@type": "PostalAddress", "addressLocality": "Rotherham", "addressRegion": "South Yorkshire", "addressCountry": "GB" },
          "areaServed": "Rotherham",
          "priceRange": "££",
          "openingHours": "Mo-Su 07:00-20:00"
        })}</script>
      </Helmet>

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
              <a
                href="https://www.facebook.com/mikehintondrivingschool"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#1877F2', color: '#fff',
                  fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '1.1rem',
                  padding: '6px 12px', borderRadius: 6, textDecoration: 'none',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
          <div className="hero__card-stack">
            <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)', textAlign: 'center', marginBottom: 12, letterSpacing: '0.04em' }}>Rotherham</p>
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
                'Manual car',
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {services.map(s => (
              <div key={s.title} className="card" style={{ borderTop: '3px solid var(--primary)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'var(--grey-700)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{s.desc}</p>
                <ul className="check-list" style={{ marginBottom: s.link ? 16 : 0 }}>
                  {s.features.map(f => <li key={f} style={{ fontSize: '0.88rem' }}>{f}</li>)}
                </ul>
                {s.link && (
                  <Link to={s.link} style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', marginTop: 8 }}>
                    {s.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, background: 'var(--pale-blue)', borderRadius: 'var(--radius-lg)', padding: '28px 32px', maxWidth: 760, margin: '40px auto 0' }}>
            <h3 style={{ marginBottom: 10 }}>After Every Lesson</h3>
            <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, fontSize: '1.02rem' }}>
              After every lesson you'll receive a brief summary of what we covered, what to practise
              before next time, and what we'll be working on in the next session. This keeps you
              progressing between lessons and means you always know exactly where you stand.
              To support you with this, you have access to your own <strong>FREE dedicated app</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">What Students Say</h2>
            <p style={{ color: 'var(--navy)', fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Raleway, sans-serif', marginTop: 10, marginBottom: 4, textAlign: 'center' }}>
              See why we have a{' '}
              <span style={{ color: 'var(--primary)' }}>⭐⭐⭐⭐⭐ 5 star rating</span>
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
            <span className="btn btn-outline">Read More Reviews</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
            <div className="elfsight-app-a8fdbcd6-2bb7-42f8-a307-3e274cc31116" data-elfsight-app-lazy></div>
            <div className="elfsight-app-64c02bc2-4726-47d5-8ef3-b5d2c9a9441f" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* ── AREAS COVERED ────────────────────────────────────────── */}
      <section className="areas-section section-sm">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Areas Covered</h2>
            <div className="divider center" />
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
