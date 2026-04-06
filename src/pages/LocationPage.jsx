import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const benefits = [
  { icon: '👤', title: 'One-to-One Only', desc: 'Every lesson is just you and Mike — no sharing, no distractions.' },
  { icon: '📍', title: 'Local Knowledge', desc: 'Know the Rotherham test routes before test day.' },
  { icon: '✅', title: 'DVSA Approved', desc: 'Fully qualified ADI, DBS checked, and DVSA approved.' },
]

const services = [
  { icon: '🎓', title: 'Beginner Lessons', desc: 'Start from scratch with a patient, structured approach.' },
  { icon: '🧠', title: 'Nervous & Neurodiverse Learners', desc: 'Specialist experience with anxiety, dyslexia, ADHD and autism.' },
  { icon: '🔄', title: 'Refresher Lessons', desc: 'Been off the road a while? Build your confidence back up.' },
  { icon: '📚', title: 'Theory Test Guarantee', desc: 'Structured theory support with a money-back guarantee.' },
  { icon: '🛣️', title: 'Motorway Driving', desc: 'Post-test motorway lessons for newly qualified drivers.' },
  { icon: '🚗', title: 'Show Me Tell Me', desc: 'Full preparation for vehicle safety questions on test day.' },
]

export default function LocationPage({ location }) {
  const { area, slug, metaTitle, metaDescription, h1, intro, nearby } = location
  const canonicalUrl = `https://www.mikehintondrivingschool.co.uk/driving-lessons-${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: 'Mike Hinton Driving School',
    description: metaDescription,
    url: canonicalUrl,
    telephone: '+447915999994',
    address: {
      '@type': 'PostalAddress',
      addressLocality: area,
      addressRegion: 'Rotherham',
      addressCountry: 'GB',
    },
    areaServed: [
      { '@type': 'City', name: area },
      { '@type': 'City', name: 'Rotherham' },
    ],
    priceRange: '££',
    openingHours: 'Mo-Su 07:00-20:00',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+447915999994',
      contactType: 'customer service',
    },
  }

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/Mike Hinton Logo Cropped.jpg" />
        <meta property="og:site_name" content="Mike Hinton Driving School" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />

        {/* Local SEO */}
        <meta name="geo.region" content="GB-SYK" />
        <meta name="geo.placename" content={`${area}, Rotherham`} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="hero">
        <div className="hero__inner container">
          <div className="hero__text">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
              <span className="badge badge-primary">Rotherham</span>
              <span className="badge badge-secondary">{area}</span>
            </div>

            <h1 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.2rem)', lineHeight: 1.12, marginBottom: 20 }}>
              {h1}
            </h1>

            <p style={{ fontSize: '1.08rem', color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 16, maxWidth: 520 }}>
              {intro}
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--grey-600)', lineHeight: 1.7, marginBottom: 24, maxWidth: 520 }}>
              Mike Hinton is a DVSA-approved driving instructor offering one-to-one manual driving lessons in {area} and the surrounding Rotherham area. Lessons are picked up from your door and tailored to your pace, needs, and learning style.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                `Manual driving lessons in ${area}`,
                'Picked up from your door',
                'DVSA-approved instructor',
                'Specialist support for nervous & neurodiverse learners',
                'All Rotherham test routes built into lessons',
                'Manual car',
                `Serving the ${area} area`,
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.95rem', color: 'var(--grey-700)' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="tel:07915999994" className="btn btn-primary">📞 07915 999994</a>
              <a href="https://wa.me/447915999994" className="btn btn-outline" target="_blank" rel="noreferrer">💬 WhatsApp</a>
            </div>

            <p style={{ marginTop: 20, fontSize: '0.9rem', color: 'var(--grey-500)' }}>
              Also covering: {nearby} and more
            </p>
          </div>

          <div className="hero__card-stack">
            <p style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: 'var(--navy)',
              textAlign: 'center',
              marginBottom: 8,
            }}>
              {area}
            </p>
            <img
              src="/images/Mike Hinton Logo Cropped.jpg"
              alt={`Driving lessons in ${area}, Rotherham`}
              style={{ width: '100%', maxWidth: 340, borderRadius: 16, display: 'block', margin: '0 auto' }}
            />
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section style={{ background: 'var(--navy)', padding: '28px 24px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {benefits.map(b => (
            <div key={b.title} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: '1.5rem' }}>{b.icon}</div>
              <div>
                <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{b.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem' }}>{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 8 }}>Everything You Need to Pass</h2>
          <p style={{ textAlign: 'center', color: 'var(--grey-600)', marginBottom: 40 }}>
            Available for learners in {area} and across the Rotherham area
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {services.map(s => (
              <div key={s.title} className="card" style={{ padding: '22px 22px' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: 8, color: 'var(--navy)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--grey-700)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontFamily: 'Raleway', marginBottom: 12 }}>Ready to Start in {area}?</h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Get in touch today and Mike will have a quick chat to understand your needs before booking your first lesson.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:07915999994" className="btn btn-primary">📞 07915 999994</a>
          <a href="https://wa.me/447915999994" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }} target="_blank" rel="noreferrer">💬 WhatsApp</a>
          <Link to="/contact" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>Contact Form</Link>
        </div>
      </section>
    </>
  )
}
