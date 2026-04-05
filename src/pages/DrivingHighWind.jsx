import { Link } from 'react-router-dom'

const tips = [
  {
    icon: '🎒',
    title: 'Be Prepared',
    colour: '#1EABC7',
    text: "It is possible you will be delayed or your journey will take longer than normal. Prepare essential items such as a good coat and extra warm clothes. Ensure your phone is fully charged. If you are on a long journey, take food and water with you.",
  },
  {
    icon: '📢',
    title: 'Keep People Informed',
    colour: '#0ea5e9',
    text: "Let people know when you are leaving and when you have arrived safely. Share your route so that if you are delayed or experience an incident, they know where to look for you.",
  },
  {
    icon: '📻',
    title: 'Listen to Travel Alerts',
    colour: '#8b5cf6',
    text: "Pay attention to social media and local radio announcements to stay up to date on weather conditions. This will help you decide if it is safe to travel, keep you informed of incidents on the road, and flag any routes affected by high wind.",
  },
  {
    icon: '🐢',
    title: 'Slow Down',
    colour: '#f59e0b',
    text: "High wind is extremely dangerous. By slowing down, you reduce the risk of being caught out by sudden gusts and give yourself more time to react to unexpected changes in car handling.",
  },
  {
    icon: '🤲',
    title: 'Keep Control',
    colour: '#10b981',
    text: "Ensure you have a firm grip on the steering wheel at all times. Unexpected gusts of wind can catch you out suddenly — a good grip gives you the best chance of staying in control.",
  },
  {
    icon: '🚛',
    title: 'Other Vehicles',
    colour: '#ef4444',
    text: "Be especially attentive to other vehicles on the road that will also be affected by the wind — particularly high-sided vehicles such as buses and lorries. This includes vehicles coming towards you, not just those in front. Plan well ahead and keep a safe distance.",
  },
  {
    icon: '🔽',
    title: 'Reduce Your Speed',
    colour: '#6366f1',
    text: "Reducing your speed gives you more time to plan ahead and deal with any issues that arise from the strong winds. There is no benefit in driving at the speed limit if conditions make it unsafe to do so.",
  },
  {
    icon: '🌿',
    title: 'Debris on the Road',
    colour: '#64748b',
    text: "Keep an eye out for debris on the road. Looking well ahead will help you spot and navigate around any obstacles before you reach them.",
  },
  {
    icon: '⚠️',
    title: 'Be Careful Overtaking',
    colour: '#dc2626',
    text: "If you do decide to overtake, be prepared for a sudden gust of wind as you pass the vehicle. Only overtake if it is truly necessary — the risk of being caught by a gust mid-manoeuvre is significantly higher in high wind.",
  },
]

const s = {
  hero: {
    background: 'linear-gradient(135deg, #1a2535 0%, #2d3f55 100%)',
    color: '#fff',
    padding: '80px 24px 64px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 65% 20%, rgba(148,200,255,0.12) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(30,171,199,0.1) 0%, transparent 50%)',
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
  heroAccent: { color: '#93c5fd' },
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
    margin: '0 0 24px',
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
    padding: '22px 22px',
    marginBottom: 12,
  },
  tipHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
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

export default function DrivingHighWind() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Weather</div>
          <h1 style={s.h1}>
            Driving in <span style={s.heroAccent}>High Wind</span>
          </h1>
          <p style={s.heroSub}>
            High winds are one of the most unpredictable driving hazards. Know what to do before you set off.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            Driving in high wind is extremely hazardous and presents situations you need to deal with quickly. If the wind is at dangerous levels, give serious consideration to whether your journey is necessary. If you do decide to drive, follow the tips below to plan properly and stay safe.
          </div>

          <div style={s.warningBox}>
            <span style={{ fontSize: '2rem', flexShrink: 0 }}>💨</span>
            <div>
              <strong style={{ fontFamily: 'Raleway, sans-serif', display: 'block', color: '#92400e', marginBottom: 6 }}>
                Is Your Journey Necessary?
              </strong>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#92400e', lineHeight: 1.75 }}>
                If the wind is forecast to be at dangerous levels, seriously consider whether you need to travel at all. No journey is worth your safety.
              </p>
            </div>
          </div>

          <h2 style={s.h2}>If You Do Drive — Follow These Guidelines</h2>

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
              Mike prepares you for driving in all conditions — including extreme weather.<br />
              <strong style={{ color: '#1EABC7' }}>Confidence in difficult conditions comes from knowledge and practice.</strong>
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
