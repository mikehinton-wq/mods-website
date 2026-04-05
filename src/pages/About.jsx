import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>About</span>
          <h1>About Mike Hinton</h1>
          <p>DVSA Qualified Driving Instructor · Rotherham &amp; Worksop</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: 8 }}>Hi, I'm Mike — your driving instructor in Rotherham.</h2>
            <div className="divider" />
            <p style={{ marginBottom: 16, color: 'var(--grey-700)', lineHeight: 1.75 }}>
              I'm a DVSA qualified Approved Driving Instructor (ADI) based in Dalton, Rotherham.
              I've been helping learners pass their test and become safe, confident drivers in
              South Yorkshire for a number of years.
            </p>
            <p style={{ marginBottom: 24, color: 'var(--grey-700)', lineHeight: 1.75 }}>
              I wanted to do a job where I could make a real difference. Every lesson I see students
              arrive nervous and leave confident — that matters to me more than anything. I'm a big
              believer in treating others how I want to be treated. I will never shout at you, or
              talk down to you but endeavour to bring out the best in your ability so that you can
              excel at learning to drive.
            </p>

            <h3 style={{ marginBottom: 12 }}>How I Teach</h3>
            <p style={{ marginBottom: 16, color: 'var(--grey-700)', lineHeight: 1.75 }}>
              No two learners are the same. Some people pick things up quickly; others need more
              time with specific skills. I work at <strong>your pace</strong>, not a fixed schedule.
              My lessons are always one-to-one — it's just you, me, and the road.
            </p>
            <p style={{ marginBottom: 24, color: 'var(--grey-700)', lineHeight: 1.75 }}>
              I use the DVSA's recommended learning syllabus to make sure you cover everything you
              need, and I'll always be honest with you about where you are and how close you are
              to being ready to test. To support you with this, you have access to your own <strong>FREE dedicated app</strong>.
            </p>

            <h3 style={{ marginBottom: 12 }}>Specialist Experience</h3>
            <p style={{ marginBottom: 24, color: 'var(--grey-700)', lineHeight: 1.75 }}>
              I have experience working with learners who have <strong>Anxiety</strong>,{' '}
              <strong>Dyslexia</strong>, <strong>Dyspraxia</strong>, <strong>ADHD</strong>, and <strong>Autism</strong>.
              If you've tried lessons before and found it difficult, or if you learn in a way that
              doesn't suit the average instructor's approach — I can help.{' '}
              <Link to="/specialist-learners">Find out more about specialist lessons →</Link>
            </p>

            <h3 style={{ marginBottom: 12 }}>My Car</h3>
            <p style={{ marginBottom: 16, color: 'var(--grey-700)', lineHeight: 1.75 }}>
              I teach in a modern, well-maintained car fitted with <strong>dual controls</strong> for
              your safety. The car is comfortable, easy to handle, and gives you every advantage on
              test day.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'stretch' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <img
                  src="/images/Mike Hinton Car.jpg"
                  alt="Mike Hinton Driving School car"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="guarantee-box" style={{ margin: 0 }}>
                <h4 style={{ color: 'var(--green)', marginBottom: 8 }}>Theory Test Guarantee</h4>
                <p style={{ color: 'var(--grey-700)', fontSize: '0.95rem' }}>
                  If you don't pass your theory test after completing the required structured learning plan,
                  your test fee will be refunded. No small print. Terms and Conditions apply.{' '}
                  <a href="https://drivingtestsuccess.com/app-pass-guarantee/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Click HERE for details.</a>
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <img
                src="/images/Mike Hinton.JPG"
                alt="Mike Hinton — DVSA Approved Driving Instructor"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>

            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <h4 style={{ marginBottom: 14, color: 'var(--navy)' }}>Qualifications</h4>
              <ul className="check-list">
                <li>DVSA Approved Driving Instructor (ADI)</li>
                <li>DBS (formerly CRB) checked</li>
                <li>Fully insured</li>
                <li>Specialist learner experience</li>
              </ul>
            </div>

            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <h4 style={{ marginBottom: 14, color: 'var(--navy)' }}>Areas Covered</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Rotherham', 'Worksop', 'Maltby', 'Wickersley', 'Bramley',
                  'Brinsworth', 'Dinnington', 'Mexborough', 'Swinton', 'Hellaby'].map(a => (
                  <span key={a} style={{
                    background: 'var(--pale-blue)', color: 'var(--navy)',
                    padding: '4px 10px', borderRadius: 100,
                    fontSize: '0.78rem', fontWeight: 600,
                  }}>{a}</span>
                ))}
              </div>
            </div>

            <div className="card" style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)' }}>
              <h4 style={{ color: 'var(--white)', marginBottom: 14 }}>Get in Touch</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="tel:07915999994" className="btn btn-primary" style={{ justifyContent: 'center' }}>📞 07915 999994</a>
                <a href="https://wa.me/447915999994" className="btn btn-white" style={{ justifyContent: 'center', color: 'var(--navy)' }} target="_blank" rel="noreferrer">💬 WhatsApp</a>
                <a href="mailto:mikejhinton@outlook.com" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--light-blue)', justifyContent: 'center' }}>✉️ Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
