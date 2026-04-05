import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🎓',
    title: 'Beginner Lessons',
    desc: 'Whether you take time to learn or are a fast learner, lessons are tailored to your individual needs with the aim of giving you confidence on the road — and you\'ll have fun doing it.',
    features: ['One-to-one only', 'Dual-control car', 'Structured DVSA syllabus', 'Honest progress feedback'],
  },
  {
    icon: '🧠',
    title: 'Nervous & Neurodiverse Learners',
    desc: 'Specialist support for learners with Anxiety, Dyslexia, Dyspraxia, ADHD, or Autism. Lessons are adapted to how you process information — not how the average learner does.',
    features: ['Adjusted pacing', 'No pressure environment', 'Theory test guidance', 'Post-test support'],
    link: '/specialist-learners',
    linkLabel: 'Learn more about specialist lessons →',
  },
  {
    icon: '📱',
    title: 'Your Own Dedicated App',
    desc: 'Quickly and easily track your driving progress between lessons with your own learner app — so you always know where you are and what\'s coming next.',
    features: ['Track your progress', 'Review lesson summaries', 'See your next lesson', 'Book extra lessons via Lesson Gap'],
  },
  {
    icon: '📚',
    title: 'Theory Test Preparation',
    desc: 'We provide specific training to help you with your theory test. If you don\'t pass after completing the required structured learning plan, your test fee will be refunded. No small print. Terms and Conditions apply.',
    features: ['Dedicated theory app', 'Hazard perception tips', 'Test-taking strategies', 'Theory fee guarantee'],
  },
  {
    icon: '🔄',
    title: 'Refresher Lessons',
    desc: 'If you haven\'t driven for a while, a refresher lesson may be just what you need. Its purpose is to build your confidence and remind you of the aspects of driving essential to staying safe on the road.',
    features: ['No judgement', 'Flexible duration', 'Focus on your weak areas', 'Suitable for all ages'],
  },
  {
    icon: '💷',
    title: 'Pay Per Lesson',
    desc: 'By paying each time you have a lesson rather than a lot upfront, you are in control of when you want your lesson. This is particularly helpful if you are on a budget.',
    features: ['No large upfront cost', 'Cash or bank transfer', 'Flexible scheduling', 'Block booking discounts available'],
  },
  {
    icon: '🛣️',
    title: 'Motorway Driving',
    desc: 'Whether you are a learner or an experienced driver, we can provide tuition on motorway driving to help you grow in confidence, learn all aspects of the motorway, and how to stay safe.',
    features: ['Learners & experienced drivers', 'Confidence building', 'Joining and leaving motorways', 'Lane discipline'],
  },
  {
    icon: '🚗',
    title: 'Show Me Tell Me',
    desc: 'The Show Me, Tell Me questions test your knowledge on basic car maintenance and safety. We provide the necessary training to help you pass this part of the practical test.',
    features: ['All current questions covered', 'Practical demonstrations', 'Part of every lesson plan', 'Tested in mock tests'],
  },
]

export default function WhatWeOffer() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Services</span>
          <h1>What We Offer</h1>
          <p>Whether you take time to learn or are a fast learner, lessons are tailored to your individual needs — with the aim of giving you confidence on the road.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
        </div>
      </section>


      {/* Guarantee */}
      <section className="section-sm">
        <div className="container">
          <div className="guarantee-box" style={{ maxWidth: 760, margin: '0 auto', padding: '28px 32px' }}>
            <h3 style={{ color: 'var(--green)', marginBottom: 10 }}>✓ Theory Test Fee Guarantee</h3>
            <p style={{ color: 'var(--grey-700)', lineHeight: 1.7 }}>
              If you don't pass your theory test after completing the required structured learning plan,
              your test fee will be refunded. No small print. Terms and Conditions apply.{' '}
              <a href="https://drivingtestsuccess.com/app-pass-guarantee/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Click HERE for details.</a>
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: '56px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', marginBottom: 12 }}>Ready to Book?</h2>
          <p style={{ color: 'var(--light-blue)', marginBottom: 28 }}>
            Call, text, or WhatsApp to arrange your first lesson with no obligation.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:07915999994" className="btn btn-primary">📞 07915 999994</a>
            <a href="https://wa.me/447915999994" className="btn btn-white" target="_blank" rel="noreferrer" style={{ color: 'var(--navy)' }}>💬 WhatsApp</a>
            <Link to="/pricing" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'var(--light-blue)' }}>View Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
