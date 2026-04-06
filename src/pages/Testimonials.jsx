import { Helmet } from 'react-helmet-async'

const testimonials = [
  {
    quote: "Mike was incredibly patient with me — I'd failed with another instructor twice before. He completely changed my approach and I passed first time at Rotherham. Cannot recommend him enough.",
    name: 'Sarah T.',
    centre: 'Rotherham Test Centre',
    date: 'January 2026',
    initial: 'S',
  },
  {
    quote: "I have dyslexia and was really worried about the theory test. Mike pointed me to the right resources and helped me understand what to focus on. Passed theory and practical both first time.",
    name: 'James M.',
    centre: 'Rotherham Test Centre',
    date: 'November 2025',
    initial: 'J',
  },
  {
    quote: "Really flexible with timings and always on time. Lessons felt relaxed but I always came away having learned something new. Passed at Worksop first time.",
    name: 'Emma R.',
    centre: 'Worksop Test Centre',
    date: '2025',
    initial: 'E',
  },
  {
    quote: "I'm an anxious person in general and was dreading learning to drive. Mike made it feel manageable from the very first lesson. His patience is unbelievable.",
    name: 'Liam H.',
    centre: 'Rotherham Test Centre',
    date: 'October 2025',
    initial: 'L',
  },
  {
    quote: "Had a gap of 10 years before refresher lessons with Mike. He quickly identified what I needed to work on and I felt road-ready after just a few sessions.",
    name: 'Carol B.',
    centre: 'Refresher — Rotherham',
    date: '2025',
    initial: 'C',
  },
  {
    quote: "Straightforward, professional, and very knowledgeable about the test routes. Did my mock test on the actual Rotherham route which gave me a massive confidence boost.",
    name: 'Ryan P.',
    centre: 'Rotherham Test Centre',
    date: 'September 2025',
    initial: 'R',
  },
]

export default function Testimonials() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Reviews</span>
          <h1>What My Students Say</h1>
          <p style={{ color: 'var(--white)', fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Raleway, sans-serif', marginTop: 10, marginBottom: 4 }}>
            See why we have a{' '}
            <span style={{ color: '#1EABC7' }}>⭐⭐⭐⭐⭐ 5 star rating</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{
                background: 'var(--white)', borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow)', padding: '28px',
                borderTop: '3px solid var(--primary)',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ fontSize: '3.5rem', color: 'var(--primary)', lineHeight: 0.8, fontFamily: 'Georgia', opacity: 0.5, marginBottom: 8 }}>"</div>
                <p style={{ color: 'var(--grey-700)', fontStyle: 'italic', lineHeight: 1.7, fontSize: '0.93rem', flex: 1, marginBottom: 20 }}>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--grey-200)', paddingTop: 16 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--primary)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Raleway', fontWeight: 700, fontSize: '1rem', flexShrink: 0,
                  }}>{t.initial}</div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--navy)' }}>{t.name}</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--grey-400)' }}>{t.centre} · {t.date}</span>
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
    </>
  )
}
