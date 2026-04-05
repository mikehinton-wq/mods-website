import { Link } from 'react-router-dom'

const tips = [
  {
    icon: '🪟',
    title: 'Use Your Sun Visor',
    colour: '#f59e0b',
    text: "All vehicles are fitted with sun visors. They can be positioned to block sunlight coming through the front windshield as well as from the side window. A sun visor is one of the most effective ways to block sunlight — use it.",
  },
  {
    icon: '🕶️',
    title: 'Wear Sunglasses',
    colour: '#1EABC7',
    text: "Invest in a great pair of sunglasses. They will not only drastically reduce the bright sun reaching your eyes but will also protect them from harmful UV rays — and enable you to see the road ahead more clearly.",
  },
  {
    icon: '📏',
    title: 'Stay Back',
    colour: '#10b981',
    text: "Leave a greater distance between your vehicle and the one in front. Bright light greatly reduces your visibility and reaction time. By increasing your following distance, you dramatically reduce risk and give yourself more time to react to what is happening ahead.",
  },
  {
    icon: '⏱️',
    title: 'Be Patient',
    colour: '#8b5cf6',
    text: "Allow more time to complete your journey. Bright sun will mean you drive more cautiously, so extra time reduces pressure. If bright sunlight begins to hurt your eyes or impedes your ability to drive in any way, find a safe place to pull off the road and wait 10–15 minutes for the sun to reposition before continuing.",
  },
  {
    icon: '👀',
    title: 'Be Aware of Other Drivers',
    colour: '#ef4444',
    text: "Remember that other drivers will be affected by the sun just as much as you are. Pay close attention to vehicles around you — they may be struggling to see just as clearly.",
  },
]

const s = {
  hero: {
    background: 'linear-gradient(135deg, #7c3a00 0%, #b85c00 50%, #d97706 100%)',
    color: '#fff',
    padding: '80px 24px 64px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 65% 20%, rgba(255,220,80,0.25) 0%, transparent 55%), radial-gradient(ellipse at 20% 85%, rgba(255,150,0,0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  heroTag: {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: 20,
    padding: '5px 18px',
    fontSize: 12,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.6)',
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
  heroAccent: { color: '#fde68a' },
  heroSub: {
    fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.7)',
    maxWidth: 540,
    margin: '0 auto',
    lineHeight: 1.7,
  },
  content: { maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' },
  introBox: {
    background: 'linear-gradient(135deg, #fffbeb, #fef9e7)',
    borderLeft: '5px solid #f59e0b',
    borderRadius: '0 14px 14px 0',
    padding: '24px 28px',
    marginBottom: 48,
    fontSize: '1.05rem',
    color: '#78350f',
    lineHeight: 1.8,
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
    background: '#fff',
    border: '1px solid #dde8f0',
    borderRadius: 14,
    padding: '24px 24px',
    marginBottom: 14,
  },
  tipHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  summaryBox: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '28px 32px',
    margin: '48px 0 0',
    textAlign: 'center',
  },
}

export default function DrivingBrightSun() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Weather</div>
          <h1 style={s.h1}>
            Driving in <span style={s.heroAccent}>Bright Sunlight</span>
          </h1>
          <p style={s.heroSub}>
            Bright sunlight is an underestimated hazard. These tips will help you stay safe when the glare hits.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            Driving in bright sunlight is underestimated as a dangerous driving condition. It is a contributing factor in many accidents. Glare and dazzle from the sun is a serious hazard — but the following tips will help you drive safely when the sun is at its worst.
          </div>

          {tips.map(tip => (
            <div key={tip.title} style={{ ...s.tipCard, borderLeft: `6px solid ${tip.colour}` }}>
              <div style={s.tipHeader}>
                <span style={{ fontSize: '1.8rem' }}>{tip.icon}</span>
                <strong style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: '#0C3C60',
                }}>
                  {tip.title}
                </strong>
              </div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#444', lineHeight: 1.75 }}>{tip.text}</p>
            </div>
          ))}

          <div style={s.summaryBox}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.8, margin: '0 0 20px' }}>
              Mike prepares you for driving in all weather conditions — including glare.<br />
              <strong style={{ color: '#1EABC7' }}>A great pair of sunglasses and the right habits make all the difference.</strong>
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
