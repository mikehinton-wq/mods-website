import { Link } from 'react-router-dom'

export default function BlogRotherham() {
  return (
    <>
      <section style={{ background: 'var(--pale-blue)', padding: '48px 0 40px', borderBottom: '1px solid var(--light-blue)' }}>
        <div className="container">
          <Link to="/blog" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
            ← Back to Blog
          </Link>
          <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
            <span className="badge badge-primary">Test Prep</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', alignSelf: 'center' }}>March 2026 · 5 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--navy)', maxWidth: 720 }}>
            What to Expect at Rotherham Driving Test Centre — A Complete Guide
          </h1>
          <p style={{ color: 'var(--text-muted)', marginTop: 12 }}>By Mike Hinton, ADI · Mike Hinton Driving School</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <article style={{ lineHeight: 1.8, color: 'var(--grey-700)' }}>
            <p style={{ fontSize: '1.05rem', marginBottom: 24 }}>
              Taking your practical driving test at Rotherham? Here's everything you need to know
              before you arrive, so there are no surprises on the day.
            </p>

            <h2 style={{ color: 'var(--navy)', fontSize: '1.3rem', marginBottom: 10, marginTop: 32 }}>Where is Rotherham Test Centre?</h2>
            <div className="highlight-box">
              <p style={{ fontWeight: 600, color: 'var(--navy)' }}>📍 Unit 3, Malta Trading Estate, Mangham Way, S61 4RL</p>
              <p style={{ fontSize: '0.88rem', marginTop: 4 }}>There is parking nearby and the centre is accessible by public transport.</p>
            </div>

            <h2 style={{ color: 'var(--navy)', fontSize: '1.3rem', marginBottom: 10, marginTop: 32 }}>What is the Pass Rate at Rotherham?</h2>
            <p style={{ marginBottom: 16 }}>
              The current first-time pass rate at Rotherham test centre is around <strong>51%</strong>.
              This is broadly in line with the national average. With the right preparation, there is
              absolutely no reason you can't be in the majority.
            </p>

            <h2 style={{ color: 'var(--navy)', fontSize: '1.3rem', marginBottom: 14, marginTop: 32 }}>What Happens on Test Day?</h2>
            <ul className="check-list" style={{ marginBottom: 24 }}>
              <li>Arrive 10 minutes early — late arrival can mean your test is cancelled</li>
              <li>Bring your provisional driving licence (the photocard)</li>
              <li>Your instructor will wait while you take the test</li>
              <li>The examiner will introduce themselves and explain what to expect</li>
              <li>The test lasts approximately 40 minutes</li>
              <li>You'll be asked a 'show me / tell me' vehicle safety question at the start</li>
              <li>You'll drive for around 20 minutes independently using sat-nav or road signs</li>
              <li>The examiner will give directions for the rest of the test</li>
            </ul>

            <h2 style={{ color: 'var(--navy)', fontSize: '1.3rem', marginBottom: 14, marginTop: 32 }}>What Routes Will I Drive?</h2>
            <p style={{ marginBottom: 16 }}>
              The test routes from Rotherham typically cover a mix of town centre roads, dual
              carriageway, and residential areas. Common areas include:
            </p>
            <ul className="check-list" style={{ marginBottom: 16 }}>
              <li>Driving on the dual carriageways on Centenary Way, New Wortley Road and Fitzwilliam Road</li>
              <li>Town centre junctions including Wellgate, Clifton Park, Moorgate Road and Drummond Street</li>
              <li>Residential areas in Greasbrough, Kimberworth, Rawmarsh, Upper Haugh and Swinton</li>
              <li>Roundabouts including St Annes, College Roundabout, Dalton Asda, Parkgate, Ickles Roundabout, Aldwarke and Brinsworth</li>
              <li>Independent driving sections using sat-nav and road signs</li>
              <li>Reversing manoeuvres</li>
            </ul>
            <p style={{ marginBottom: 24 }}>
              Mike builds all of these routes into your lessons throughout your learning journey —
              so you'll already know them well before test day.
            </p>

            <h2 style={{ color: 'var(--navy)', fontSize: '1.3rem', marginBottom: 10, marginTop: 32 }}>How Many Minors Are Allowed?</h2>
            <p style={{ marginBottom: 24 }}>
              You can receive up to <strong>15 minor (driving) faults</strong> and still pass.
              One serious or dangerous fault means an automatic fail. Your examiner will go through
              the result sheet with you at the end — whether you pass or not.
            </p>

            <h2 style={{ color: 'var(--navy)', fontSize: '1.3rem', marginBottom: 14, marginTop: 32 }}>Top Tips for Test Day</h2>
            <ul className="check-list" style={{ marginBottom: 32 }}>
              <li>Get a good night's sleep the night before</li>
              <li>Have a lesson with Mike on the morning of your test if possible</li>
              <li>Don't rush — methodical and safe beats fast and unsure every time</li>
              <li>If you make a mistake, don't dwell on it — just continue driving safely</li>
              <li>Trust your preparation. If you're in for the test, Mike believes you're ready</li>
            </ul>

            <div className="guarantee-box">
              <h4 style={{ color: 'var(--green)', marginBottom: 8 }}>Theory Test Guarantee</h4>
              <p style={{ fontSize: '0.92rem' }}>
                If you don't pass your theory test after completing the required structured learning plan,
                your test fee will be refunded. No small print. Terms and Conditions apply.{' '}
                <a href="https://drivingtestsuccess.com/app-pass-guarantee/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Click HERE for details.</a>
              </p>
            </div>
          </article>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="card" style={{ background: 'var(--navy)' }}>
              <h4 style={{ color: 'var(--white)', marginBottom: 14 }}>Book With Mike</h4>
              <p style={{ color: 'var(--light-blue)', fontSize: '0.85rem', marginBottom: 16, lineHeight: 1.6 }}>
                Mike builds real test routes into every lesson. Call to get started.
              </p>
              <a href="tel:07915999994" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 8 }}>
                📞 07915 999994
              </a>
              <a href="https://wa.me/447915999994" className="btn btn-white" target="_blank" rel="noreferrer" style={{ width: '100%', justifyContent: 'center', color: 'var(--navy)' }}>
                💬 WhatsApp
              </a>
            </div>
            <div className="card" style={{ borderTop: '3px solid var(--primary)' }}>
              <h4 style={{ marginBottom: 12 }}>Related</h4>
              <Link to="/blog/show-me-tell-me-2026" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', display: 'block', marginBottom: 8 }}>
                Show Me Tell Me Questions 2026 →
              </Link>
              <Link to="/test-routes" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', display: 'block' }}>
                Full Test Route Guide →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
