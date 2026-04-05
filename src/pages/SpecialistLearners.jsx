import { Link } from 'react-router-dom'

const conditions = [
  { icon: '😰', label: 'Anxiety & Nerves' },
  { icon: '📖', label: 'Dyslexia' },
  { icon: '🎯', label: 'Dyspraxia' },
  { icon: '⚡', label: 'ADHD' },
  { icon: '🧩', label: 'Autism' },
  { icon: '🔄', label: 'Previous Difficulties' },
  { icon: '🧓', label: 'Older Learners' },
]

export default function SpecialistLearners() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-green" style={{ marginBottom: 14 }}>Specialist Provision</span>
          <h1>Driving Lessons for Nervous &amp; Neurodiverse Learners</h1>
          <p style={{ color: '#d1fae5' }}>You learn differently. Mike teaches differently.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860, margin: '0 auto' }}>

          <p style={{ fontSize: '1.08rem', color: 'var(--grey-700)', lineHeight: 1.8, marginBottom: 32 }}>
            Learning to drive is a big deal — and for some people, it comes with extra challenges.
            Whether you experience Anxiety behind the wheel, have been told driving "isn't for you",
            or simply learn in a way that doesn't suit the average instructor's approach, Mike can help.
          </p>

          <h2 style={{ marginBottom: 20 }}>Who Mike Works With</h2>
          <div className="three-col" style={{ marginBottom: 40 }}>
            {conditions.map(c => (
              <div key={c.label} style={{
                background: 'var(--pale-blue)', borderRadius: 'var(--radius)',
                padding: '20px', textAlign: 'center', border: '1.5px solid var(--light-blue)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontFamily: 'Raleway', fontWeight: 700, color: 'var(--navy)', fontSize: '0.95rem' }}>{c.label}</div>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: 14 }}>How Mike's Lessons Are Different</h2>
          <div className="divider" />
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 16 }}>
            Mike doesn't work to a rigid lesson plan. He takes time to understand how you learn best
            and adapts his teaching to suit <em>you</em> — not the other way around.
          </p>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 16 }}>
            If you find it hard to process verbal instructions quickly, we'll work on that together.
            If you need more repetitions before something clicks, we'll repeat it without any
            frustration or pressure. If you feel anxious at junctions or roundabouts, we'll build
            your confidence gradually before moving on.
          </p>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 32 }}>
            Every lesson is one-to-one — no distractions, no pressure, just you and the road.
          </p>

          <div className="two-col-equal" style={{ marginBottom: 40 }}>
            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ marginBottom: 10 }}>During Lessons</h4>
              <ul className="check-list">
                <li>Pace set entirely by you</li>
                <li>Clear, simple instructions</li>
                <li>No pressure to move on before you're ready</li>
                <li>Breaks when needed</li>
                <li>Positive, calm environment</li>
              </ul>
            </div>
            <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ marginBottom: 10 }}>Theory Test Support</h4>
              <ul className="check-list">
                <li>Guidance on the right resources</li>
                <li>Strategies for reading-heavy material</li>
                <li>Hazard perception tips</li>
                <li>Theory fee refund if you don't pass</li>
                <li>Post-test support available</li>
              </ul>
            </div>
          </div>

          <div className="guarantee-box" style={{ marginBottom: 40 }}>
            <h4 style={{ color: 'var(--green)', marginBottom: 8 }}>Theory Test Guarantee</h4>
            <p style={{ color: 'var(--grey-700)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              If you don't pass your theory test after completing the required structured learning plan,
              your test fee will be refunded. No small print. Terms and Conditions apply.{' '}
              <a href="https://drivingtestsuccess.com/app-pass-guarantee/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Click HERE for details.</a>
            </p>
          </div>

          <div style={{
            background: 'var(--pale-blue)', borderRadius: 'var(--radius-lg)',
            padding: '28px 32px', marginBottom: 32
          }}>
            <h3 style={{ marginBottom: 12 }}>Not Sure If This is Right For You?</h3>
            <p style={{ color: 'var(--grey-700)', lineHeight: 1.7, marginBottom: 20 }}>
              If you're not sure whether lessons with Mike would suit your needs, just get in
              touch for a no-obligation chat. There's no pressure and no judgement — Mike is
              happy to talk through how he can adapt lessons before you commit to anything.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="tel:07915999994" className="btn btn-primary">📞 07915 999994</a>
              <a href="https://wa.me/447915999994" className="btn btn-outline" target="_blank" rel="noreferrer">💬 WhatsApp</a>
              <a href="mailto:mikejhinton@outlook.com" className="btn btn-outline">✉️ Email</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
