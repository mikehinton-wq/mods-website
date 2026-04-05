import { Link } from 'react-router-dom'

const takingItSlowTips = [
  { icon: '👟', text: 'Wear comfortable, dry shoes for driving.' },
  { icon: '🚗', text: 'Pull away in second gear, easing your foot off the clutch gently to avoid wheel-spin.' },
  { icon: '⛰️', text: 'Uphill — leave plenty of room or wait until clear so you don\'t have to stop part way up. Keep a constant speed and try to avoid changing gear on the hill.' },
  { icon: '📉', text: 'Downhill — slow down before the hill, use a low gear and try to avoid braking. Leave as much room as possible to the car in front.' },
  { icon: '🛑', text: 'If you have to use your brakes, apply them gently.' },
  { icon: '⚙️', text: "If you drive an automatic, check the handbook — some have a winter mode or recommend selecting '2' in slippery conditions." },
  { icon: '🪤', text: 'If you do get stuck, straighten the steering and clear the snow from the wheels. Put a sack or old rug in front of the driving wheels to give the tyres some grip.' },
]

const beforeYouSetOff = [
  { icon: '⏰', text: 'Allow extra time for winter journeys.' },
  { icon: '🌅', text: 'Try to get up at least 10 minutes early to give yourself time to de-ice the car.' },
  { icon: '⛽', text: "Check fuel levels — keep at least a quarter of a tank in case of unexpected delay." },
  { icon: '🪟', text: "Don't drive off with a tiny hole cleared in the windscreen — clear all windows fully." },
  { icon: '🧊', text: 'Clear all windows using a scraper and de-icer.' },
  { icon: '🔑', text: 'Use a cigarette lighter to warm a key for a frozen lock.' },
  { icon: '🗺️', text: 'Plan routes to favour major roads, which are more likely to have been cleared and gritted.' },
]

const s = {
  hero: {
    background: 'linear-gradient(135deg, #0d1f35 0%, #1a3350 100%)',
    color: '#fff',
    padding: '80px 24px 64px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 65% 25%, rgba(180,220,255,0.1) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(30,171,199,0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  heroTag: {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: '5px 18px',
    fontSize: 12,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 24,
  },
  h1: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 'clamp(2rem,5vw,3rem)',
    fontWeight: 800,
    lineHeight: 1.15,
    maxWidth: 700,
    margin: '0 auto 16px',
    color: '#fff',
  },
  heroAccent: { color: '#a8d8f0' },
  heroSub: {
    fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.6)',
    maxWidth: 540,
    margin: '0 auto',
    lineHeight: 1.7,
  },
  content: { maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' },
  introBox: {
    background: 'linear-gradient(135deg, #e8f4f8, #f0f9fb)',
    borderLeft: '5px solid #1EABC7',
    borderRadius: '0 14px 14px 0',
    padding: '24px 28px',
    marginBottom: 48,
    fontSize: '1.05rem',
    color: '#0a2d3d',
    lineHeight: 1.8,
  },
  warningBox: {
    background: '#fff8f0',
    border: '2px solid #f0c060',
    borderRadius: 14,
    padding: '20px 24px',
    marginBottom: 40,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,
  },
  h2: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '1.4rem',
    color: '#0C3C60',
    margin: '48px 0 20px',
  },
  backLink: {
    display: 'inline-block',
    color: '#1EABC7',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '0.9rem',
    textDecoration: 'none',
    marginBottom: 40,
  },
  tipCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 14,
    background: '#fff',
    border: '1px solid #dde8f0',
    borderRadius: 12,
    padding: '16px 18px',
    marginBottom: 10,
  },
  summaryBox: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '28px 32px',
    margin: '48px 0 0',
    textAlign: 'center',
  },
}

export default function DrivingIcyConditions() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Winter Driving</div>
          <h1 style={s.h1}>
            Driving in <span style={s.heroAccent}>Icy Conditions</span>
          </h1>
          <p style={s.heroSub}>
            Ice is particularly dangerous — especially black ice. These tips will help you stay in control when the roads are at their most treacherous.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            Ice can cause a considerable risk to your driving. If you have never driven in icy conditions before, you might find these tips useful — and even experienced drivers should refresh their knowledge before winter arrives.
          </div>

          <div style={s.warningBox}>
            <span style={{ fontSize: '2rem', flexShrink: 0 }}>⚠️</span>
            <div>
              <strong style={{ fontFamily: 'Raleway, sans-serif', display: 'block', color: '#92400e', marginBottom: 6 }}>
                Stopping Distances Are 10x Longer on Ice
              </strong>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#92400e', lineHeight: 1.75 }}>
                With stopping distances up to 10 times longer than normal, gentle manoeuvres are the key to safe driving in ice and snow. Everything — accelerating, steering and braking — must be done smoothly and progressively.
              </p>
            </div>
          </div>

          <h2 style={{ ...s.h2, marginTop: 0 }}>Take It Slow</h2>

          {takingItSlowTips.map((tip, i) => (
            <div key={i} style={{ ...s.tipCard, borderLeft: '5px solid #1EABC7' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{tip.icon}</span>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#333', lineHeight: 1.75 }}>{tip.text}</p>
            </div>
          ))}

          <h2 style={s.h2}>Before You Set Off</h2>

          {beforeYouSetOff.map((tip, i) => (
            <div key={i} style={{ ...s.tipCard, borderLeft: '5px solid #0ea5e9' }}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{tip.icon}</span>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#333', lineHeight: 1.75 }}>{tip.text}</p>
            </div>
          ))}

          <div style={s.summaryBox}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.8, margin: '0 0 20px' }}>
              Mike covers winter driving conditions throughout your lessons.<br />
              <strong style={{ color: '#1EABC7' }}>The more prepared you are, the safer you'll be when ice strikes.</strong>
            </p>
            <a href="tel:07915999994" style={{
              display: 'inline-block',
              background: '#1EABC7',
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '13px 30px',
              borderRadius: 50,
              textDecoration: 'none',
            }}>
              📞 Book a Lesson — 07915 999994
            </a>
          </div>

        </div>
      </main>
    </>
  )
}
