import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const tellMe = [
  { q: "Tell me how you'd check the brakes are working before starting a journey.", a: "Brakes should not feel spongy or slack. Test by pressing firmly as you set off — the car should pull up quickly and in a straight line." },
  { q: "Tell me where you'd find the recommended tyre pressures and how they should be checked.", a: "In the vehicle handbook. Check using a tyre pressure gauge when the tyres are cold, and adjust at a garage if needed." },
  { q: "Tell me how you'd check the head restraint is correctly adjusted.", a: "The rigid part of the head restraint should be at least as high as the eye or top of the ears, and as close to the head as possible." },
  { q: "Tell me how you'd check that the tyres have sufficient tread depth and are in good condition.", a: "No cuts or bulges. Tread depth must be at least 1.6mm across the central ¾ of the tyre and around the entire circumference." },
  { q: "Tell me how you'd check the engine oil level is correct.", a: "Using the dipstick — remove, wipe clean, reinsert fully, then check the level is between the minimum and maximum markings." },
  { q: "Tell me how you'd check the engine coolant level is correct.", a: "Via the coolant reservoir — the level should be between the minimum and maximum markers when the engine is cold." },
  { q: "Tell me how you'd check the brake fluid level is correct.", a: "Via the brake fluid reservoir under the bonnet — the level should be between the minimum and maximum markings." },
  { q: "Tell me how you'd check that the power steering is working.", a: "Apply gentle pressure to the steering wheel immediately as you start the engine — you should notice the steering become lighter as it engages." },
]

const showMe = [
  { q: 'When it\'s safe, show me how you wash and clean the rear windscreen.', a: 'Use the rear wiper and washer controls — usually a stalk or button on the dashboard.' },
  { q: 'When it\'s safe, show me how you wash and clean the front windscreen.', a: 'Use the windscreen washer and wiper controls — pull the wiper stalk toward you or use a dedicated washer button.' },
  { q: 'When it\'s safe, show me how you\'d switch on your dipped headlights.', a: 'Turn the headlight control to the dipped headlights symbol — usually a dial on the dashboard or indicator stalk.' },
  { q: 'When it\'s safe, show me how you\'d set the rear demister.', a: 'Press the heated rear window button — typically shown with a rear window and wavy lines symbol.' },
  { q: 'When it\'s safe, show me how you\'d operate the horn.', a: 'Press the centre of the steering wheel (demonstrate when safe and appropriate to do so).' },
  { q: 'When it\'s safe, show me how you\'d demist the front windscreen.', a: 'Use the blower/fan, set temperature to warm, turn on the air conditioning if available, and direct vents toward the screen.' },
  { q: 'When it\'s safe, show me how you\'d open and close the side window.', a: 'Use the electric window switch on the door panel — press down to open, pull up to close.' },
]

export default function BlogShowMe() {
  return (
    <>
      <Helmet>
        <title>Show Me Tell Me Questions 2026 — Complete Guide | Mike Hinton Driving School</title>
        <meta name="description" content="The complete list of Show Me Tell Me questions for 2026 UK driving tests. Learn exactly what the examiner will ask and how to answer correctly." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/show-me-tell-me-2026" />
        <meta property="og:title" content="Show Me Tell Me Questions 2026 — Complete Guide" />
        <meta property="og:description" content="Every Show Me Tell Me question for 2026 with answers. Prepare for your driving test vehicle safety checks." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/show-me-tell-me-2026" />
        <meta property="og:type" content="article" />
      </Helmet>
      <section style={{ background: 'var(--pale-blue)', padding: '48px 0 40px', borderBottom: '1px solid var(--light-blue)' }}>
        <div className="container">
          <Link to="/blog" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
            ← Back to Blog
          </Link>
          <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
            <span className="badge badge-primary">Theory</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', alignSelf: 'center' }}>March 2026 · 7 min read</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--navy)', maxWidth: 720 }}>
            Show Me Tell Me Questions 2026 — The Complete List
          </h1>
          <p style={{ color: 'var(--text-muted)', marginTop: 12 }}>By Mike Hinton, ADI · Mike Hinton Driving School</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <article>
            <p style={{ fontSize: '1.05rem', color: 'var(--grey-700)', lineHeight: 1.8, marginBottom: 28 }}>
              At the start of your DVSA practical driving test, the examiner will ask you two
              vehicle safety questions — one <strong>'show me'</strong> (demonstrated while driving)
              and one <strong>'tell me'</strong> (answered while stationary before driving).
              Getting these wrong counts as one minor fault. They're easy marks — make sure you're prepared.
            </p>

            <div className="highlight-box" style={{ marginBottom: 32 }}>
              <p style={{ fontWeight: 600, color: 'var(--navy)' }}>How it works:</p>
              <p style={{ fontSize: '0.92rem', color: 'var(--grey-700)', marginTop: 4 }}>
                The examiner picks one from each list. You won't know which until the day.
                Learn them all and you're covered — it takes an hour at most.
              </p>
            </div>

            <h2 style={{ color: 'var(--navy)', fontSize: '1.3rem', marginBottom: 6, marginTop: 8 }}>Tell Me Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 20 }}>Answered before you set off, while stationary</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {tellMe.map((item, i) => (
                <div key={i} style={{
                  border: '1px solid var(--grey-200)', borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                }}>
                  <div style={{ background: 'var(--pale-blue)', padding: '12px 16px', borderBottom: '1px solid var(--light-blue)' }}>
                    <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.92rem' }}>Q: {item.q}</p>
                  </div>
                  <div style={{ padding: '12px 16px', background: 'var(--white)' }}>
                    <p style={{ color: 'var(--grey-700)', fontSize: '0.88rem', lineHeight: 1.65 }}><strong>A:</strong> {item.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ color: 'var(--navy)', fontSize: '1.3rem', marginBottom: 6 }}>Show Me Questions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 20 }}>Demonstrated while driving when the examiner asks</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {showMe.map((item, i) => (
                <div key={i} style={{
                  border: '1px solid var(--grey-200)', borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                }}>
                  <div style={{ background: '#f0fdf4', padding: '12px 16px', borderBottom: '1px solid #d1fae5' }}>
                    <p style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.92rem' }}>Q: {item.q}</p>
                  </div>
                  <div style={{ padding: '12px 16px', background: 'var(--white)' }}>
                    <p style={{ color: 'var(--grey-700)', fontSize: '0.88rem', lineHeight: 1.65 }}><strong>A:</strong> {item.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="guarantee-box">
              <h4 style={{ color: 'var(--green)', marginBottom: 8 }}>A note from Mike</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--grey-700)', lineHeight: 1.7 }}>
                I cover all Show Me Tell Me questions during lessons — you won't go into your
                test without knowing these. If you want to practise, read each answer out loud
                until it feels natural. <Link to="/contact">Get in touch</Link> if you'd like to book a lesson.
              </p>
            </div>
          </article>

          <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="card" style={{ background: 'var(--navy)' }}>
              <h4 style={{ color: 'var(--white)', marginBottom: 14 }}>Book With Mike</h4>
              <p style={{ color: 'var(--light-blue)', fontSize: '0.85rem', marginBottom: 16, lineHeight: 1.6 }}>
                All lessons include Show Me Tell Me preparation as standard.
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
              <Link to="/blog/rotherham-test-centre" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', display: 'block', marginBottom: 8 }}>
                Rotherham Test Centre Guide →
              </Link>
              <Link to="/test-routes" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', display: 'block' }}>
                Test Routes Guide →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
