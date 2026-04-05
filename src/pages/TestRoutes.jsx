import { Link } from 'react-router-dom'

export default function TestRoutes() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Test Routes</span>
          <h1>Know the Roads Before Your Test</h1>
          <p>Mike builds real test routes into every lesson — so nothing surprises you on the day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--grey-700)', lineHeight: 1.8, marginBottom: 32 }}>
              One of the best ways to reduce test-day nerves is to be familiar with the roads
              you'll be driving on. Mike builds familiarity with real test routes into every lesson
              — so when the day comes, nothing should surprise you.
            </p>

            <h2 style={{ marginBottom: 8 }}>Rotherham Test Centre</h2>
            <div className="divider" />
            <div style={{ background: 'var(--pale-blue)', borderRadius: 'var(--radius)', padding: '16px 20px', marginBottom: 20 }}>
              <p style={{ fontSize: '0.88rem', color: 'var(--accent)', fontWeight: 600 }}>📍 Unit 3, Malta Trading Estate, Mangham Way, S61 4RL</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--grey-600)', marginTop: 4 }}>
                Current first-time pass rate: <strong>~51%</strong> — with thorough preparation, you can be in the majority.
              </p>
            </div>
            <p style={{ color: 'var(--grey-700)', marginBottom: 14, lineHeight: 1.7 }}>The Rotherham test routes typically include:</p>
            <ul className="check-list" style={{ marginBottom: 32 }}>
              <li>Driving on the dual carriageways on Centenary Way, New Wortley Road and Fitzwilliam Road</li>
              <li>Town centre junctions including Wellgate, Clifton Park, Moorgate Road and Drummond Street</li>
              <li>Residential areas in Greasbrough, Kimberworth, Rawmarsh, Upper Haugh and Swinton</li>
              <li>Roundabouts including St Annes, College Roundabout, Dalton Asda, Parkgate, Ickles Roundabout, Aldwarke and Brinsworth</li>
              <li>Independent driving sections using sat-nav and road signs</li>
              <li>Reversing manoeuvres</li>
            </ul>

            <h2 style={{ marginBottom: 14 }}>Mock Tests</h2>
            <p style={{ color: 'var(--grey-700)', marginBottom: 24, lineHeight: 1.7 }}>
              Before your practical test, Mike will take you on a full mock test on a real test
              route. You'll experience the same format, timing, and instructions as the real
              thing — so you know exactly what to expect and can arrive on test day feeling confident.
            </p>

            <h2 style={{ marginBottom: 14 }}>Show Me / Tell Me Questions</h2>
            <p style={{ color: 'var(--grey-700)', marginBottom: 16, lineHeight: 1.7 }}>
              At the start of your practical test, the examiner will ask one 'show me' and one
              'tell me' vehicle safety question. Mike covers all of these during lessons so you
              won't go into your test unprepared. See our full guide below.
            </p>
            <Link to="/blog/show-me-tell-me-2026" className="btn btn-outline">
              Show Me Tell Me Guide 2026 →
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <h4 style={{ marginBottom: 14 }}>What to Expect on Test Day</h4>
              <ul className="check-list" style={{ fontSize: '0.88rem' }}>
                <li>Arrive 10 minutes early</li>
                <li>Bring your photocard licence</li>
                <li>Test lasts ~40 minutes</li>
                <li>Show me / tell me at the start</li>
                <li>~20 min independent driving</li>
                <li>Up to 15 minor faults allowed</li>
                <li>One serious = automatic fail</li>
              </ul>
            </div>

            <div className="card" style={{ background: 'var(--navy)' }}>
              <h4 style={{ color: 'var(--white)', marginBottom: 12 }}>Ready to Book?</h4>
              <p style={{ color: 'var(--light-blue)', fontSize: '0.88rem', marginBottom: 16, lineHeight: 1.6 }}>
                All lessons include test route familiarisation as standard.
              </p>
              <a href="tel:07915999994" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }}>
                📞 07915 999994
              </a>
              <a href="https://wa.me/447915999994" className="btn btn-white" target="_blank" rel="noreferrer" style={{ width: '100%', justifyContent: 'center', color: 'var(--navy)' }}>
                💬 WhatsApp
              </a>
            </div>

            <div className="card" style={{ borderTop: '3px solid var(--green)' }}>
              <h4 style={{ color: 'var(--green)', marginBottom: 8 }}>Theory Guarantee</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--grey-700)', lineHeight: 1.6 }}>
                If you don't pass your theory test after completing the required structured learning plan,
                your test fee will be refunded. No small print. Terms and Conditions apply.{' '}
                <a href="https://drivingtestsuccess.com/app-pass-guarantee/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Click HERE for details.</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
