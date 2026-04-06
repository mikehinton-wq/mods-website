import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

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
  { q: "When it's safe, show me how you wash and clean the rear windscreen.", a: 'Use the rear wiper and washer controls — usually a stalk or button on the dashboard.' },
  { q: "When it's safe, show me how you wash and clean the front windscreen.", a: 'Use the windscreen washer and wiper controls — pull the wiper stalk toward you or use a dedicated washer button.' },
  { q: "When it's safe, show me how you'd switch on your dipped headlights.", a: 'Turn the headlight control to the dipped headlights symbol — usually a dial on the dashboard or indicator stalk.' },
  { q: "When it's safe, show me how you'd set the rear demister.", a: 'Press the heated rear window button — typically shown with a rear window and wavy lines symbol.' },
  { q: "When it's safe, show me how you'd operate the horn.", a: 'Press the centre of the steering wheel (demonstrate when safe and appropriate to do so).' },
  { q: "When it's safe, show me how you'd demist the front windscreen.", a: 'Use the blower/fan, set temperature to warm, turn on the air conditioning if available, and direct vents toward the screen.' },
  { q: "When it's safe, show me how you'd open and close the side window.", a: 'Use the electric window switch on the door panel — press down to open, pull up to close.' },
]

const s = {
  hero: { background: '#0C3C60', color: '#fff', padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 20%, rgba(30,171,199,0.2) 0%, transparent 55%), radial-gradient(ellipse at 20% 85%, rgba(255,255,255,0.04) 0%, transparent 50%)', pointerEvents: 'none' },
  heroTag: { display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '5px 16px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 28 },
  h1: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, lineHeight: 1.12, maxWidth: 820, margin: '0 auto 16px', color: '#fff' },
  heroAccent: { color: '#1EABC7' },
  heroSub: { fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.7 },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.35)' },
  content: { maxWidth: 800, margin: '0 auto', padding: '64px 24px 80px' },
  introBox: { background: '#e8f4f8', borderLeft: '4px solid #1EABC7', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: 48, fontSize: '1.05rem', color: '#0a2d3d', lineHeight: 1.75, fontWeight: 400 },
  howBox: { background: '#0C3C60', borderRadius: 14, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', gap: 16 },
  howIcon: { fontSize: '2rem', flexShrink: 0 },
  howTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, color: '#1EABC7', fontSize: '0.95rem', marginBottom: 4 },
  howText: { color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 },
  sectionLabel: { fontFamily: 'Raleway, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#0C3C60', margin: '48px 0 6px' },
  sectionSub: { color: '#8a8070', fontSize: '0.88rem', marginBottom: 24 },
  qCard: { border: '1px solid #dde8f0', borderRadius: 12, overflow: 'hidden', marginBottom: 14 },
  qHead: { background: '#e8f4f8', padding: '12px 18px', borderBottom: '1px solid #c0dff0' },
  qHeadGreen: { background: '#f0fdf4', padding: '12px 18px', borderBottom: '1px solid #d1fae5' },
  qText: { fontWeight: 600, color: '#0C3C60', fontSize: '0.92rem', margin: 0 },
  aBody: { padding: '12px 18px', background: '#fff' },
  aText: { color: '#444', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 },
  noteBox: { background: '#1a3a2a', borderRadius: 14, padding: '24px 28px', margin: '40px 0' },
  noteLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4ade80', marginBottom: 10 },
  noteText: { fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: 0 },
  cta: { textAlign: 'center', background: 'linear-gradient(135deg, #0C3C60, #1a5a8a)', color: 'white', padding: '64px 24px' },
  ctaH2: { fontFamily: 'Raleway, sans-serif', color: 'white', marginTop: 0, fontSize: '2rem', fontWeight: 700, marginBottom: 16 },
  ctaP: { color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 },
  ctaBtns: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' },
  ctaBtn: { display: 'inline-block', background: '#1EABC7', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: 50, textDecoration: 'none' },
  ctaBtnOutline: { display: 'inline-block', background: 'transparent', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' },
}

export default function ShowMeTellMe() {
  return (
    <>
      <Helmet>
        <title>Show Me Tell Me Questions 2025 | Mike Hinton Driving School</title>
        <meta name="description" content="Full list of Show Me Tell Me vehicle safety questions for the 2025 driving test. Prepared by DVSA-approved instructor Mike Hinton, Rotherham." />
        <link rel="canonical" href="https://mikehintondrivingschool.co.uk/show-me-tell-me" />
        <meta property="og:title" content="Show Me Tell Me Questions 2025 | Driving Test Prep" />
        <meta property="og:description" content="Full list of Show Me Tell Me questions for your driving test — prepared by Mike Hinton, Rotherham." />
        <meta property="og:url" content="https://mikehintondrivingschool.co.uk/show-me-tell-me" />
        <meta property="og:type" content="article" />
      </Helmet>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Test Prep · Vehicle Safety</div>
          <h1 style={s.h1}>
            Show Me Tell Me Questions —<br />
            <span style={s.heroAccent}>The Complete 2026 List</span>
          </h1>
          <p style={s.heroSub}>The full list of vehicle safety questions the examiner may ask at the start of your driving test, with answers explained clearly.</p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <div style={s.introBox}>
            At the start of your DVSA practical driving test, the examiner will ask you two vehicle safety questions — one <strong>'show me'</strong> (demonstrated while driving) and one <strong>'tell me'</strong> (answered while stationary before driving). Getting these wrong counts as one minor fault. They're easy marks — make sure you're prepared.
          </div>

          <div style={s.howBox}>
            <div style={s.howIcon}>💡</div>
            <div>
              <div style={s.howTitle}>How it works</div>
              <p style={s.howText}>The examiner picks one from each list. You won't know which until the day. Learn them all and you're covered — it takes an hour at most.</p>
            </div>
          </div>

          {/* Tell Me */}
          <h2 style={s.sectionLabel}>Tell Me Questions</h2>
          <p style={s.sectionSub}>Answered before you set off, while stationary</p>
          {tellMe.map((item, i) => (
            <div key={i} style={s.qCard}>
              <div style={s.qHead}>
                <p style={s.qText}>Q: {item.q}</p>
              </div>
              <div style={s.aBody}>
                <p style={s.aText}><strong>A:</strong> {item.a}</p>
              </div>
            </div>
          ))}

          {/* Show Me */}
          <h2 style={{ ...s.sectionLabel, marginTop: 56 }}>Show Me Questions</h2>
          <p style={s.sectionSub}>Demonstrated while driving when the examiner asks</p>
          {showMe.map((item, i) => (
            <div key={i} style={s.qCard}>
              <div style={s.qHeadGreen}>
                <p style={s.qText}>Q: {item.q}</p>
              </div>
              <div style={s.aBody}>
                <p style={s.aText}><strong>A:</strong> {item.a}</p>
              </div>
            </div>
          ))}

          <div style={s.noteBox}>
            <div style={s.noteLabel}>✓ A note from Mike</div>
            <p style={s.noteText}>
              I cover all Show Me Tell Me questions during lessons — you won't go into your test without knowing these. If you want to practise, read each answer out loud until it feels natural.{' '}
              <Link to="/contact" style={{ color: '#4ade80', fontWeight: 600 }}>Get in touch</Link> if you'd like to book a lesson.
            </p>
          </div>

        </div>

        <section style={s.cta}>
          <h2 style={s.ctaH2}>Book Your Lessons with Mike</h2>
          <p style={s.ctaP}>All lessons include Show Me Tell Me preparation as standard. You'll go into your test fully confident on every question.</p>
          <div style={s.ctaBtns}>
            <a href="tel:07915999994" style={s.ctaBtn}>📞 07915 999994</a>
            <a href="https://wa.me/447915999994" target="_blank" rel="noreferrer" style={s.ctaBtnOutline}>💬 WhatsApp</a>
            <Link to="/contact" style={s.ctaBtnOutline}>Contact Form</Link>
          </div>
        </section>
      </main>
    </>
  )
}
