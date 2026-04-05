import { Link } from 'react-router-dom'

const quickTips = [
  { icon: '🪟', text: 'Keep windows clean to avoid increased glare and condensation.' },
  { icon: '💡', text: "Don't dazzle others — dip your lights when faced with another road user." },
  { icon: '🌅', text: 'Help drivers see you in twilight by turning your headlights on before sunset and keeping them on for an hour after sunrise.' },
  { icon: '👓', text: 'Have your eyes checked regularly for problems which can affect your night vision.' },
  { icon: '⚠️', text: 'Be aware that other road users may behave erratically — be prepared to give them more space.' },
  { icon: '🚶', text: 'Watch out for pedestrians, especially near pubs and clubs around closing time.' },
  { icon: '⏱️', text: "Allow more time for your own journey so you're not driving under pressure." },
  { icon: '🔅', text: 'Dim your dashboard lights to reduce reflections and avoid reducing your night vision.' },
]

const sections = [
  {
    icon: '👁️',
    title: 'Eyesight',
    colour: '#1EABC7',
    paragraphs: [
      "It's vital to have your sight checked regularly, as this will show up any underlying eye problems such as glaucoma that may affect your night vision.",
      'Never wear dark or tinted lenses for night driving.',
    ],
  },
  {
    icon: '💡',
    title: 'Lighten Up',
    colour: '#f59e0b',
    paragraphs: [
      'The Institute of Advanced Motorists advises turning your headlights on before sunset and keeping them on for an hour after sunrise — so it\'s easier for other drivers to see you in twilight.',
      'Make sure all your exterior lights are clean and working properly, and keep your interior lights turned off.',
      'Although it\'s always important to make sure you can stop within the distance you can see to be clear, after dark this is especially the case.',
    ],
  },
  {
    icon: '🙈',
    title: "Don't Dazzle",
    colour: '#8b5cf6',
    paragraphs: [
      'On rural roads, drive on full beam whenever possible — but dip your lights when faced with another road user to avoid dazzling them.',
      "If you're dazzled by an oncoming car, avoid looking at the headlights. Keep your attention on the left-hand kerb and try to keep your speed steady.",
      "Avoid driving at 50mph, dropping to 40mph when there's oncoming traffic and then speeding up again — it's very confusing for drivers travelling behind you.",
      "It's better to aim for a speed you can maintain, such as 45mph, and stick to it even if there are times you could go faster.",
    ],
  },
  {
    icon: '🪟',
    title: 'Windows',
    colour: '#0ea5e9',
    paragraphs: [
      'Make sure your car windows are clean, inside and out. Dirty windows will increase glare from other vehicles and are more prone to steaming up.',
    ],
  },
  {
    icon: '🛣️',
    title: 'Study the Road Ahead',
    colour: '#10b981',
    paragraphs: [
      'Read the road ahead for signs of oncoming drivers — glimmers of light at the top of hills and at bends could be the headlights of other vehicles, giving you prior warning.',
      'Watch out for pedestrians and cyclists — after dark they can be more difficult to spot, especially if they\'re not wearing reflective clothing.',
    ],
  },
  {
    icon: '☕',
    title: 'Take Regular Breaks',
    colour: '#ef4444',
    paragraphs: [
      "It's always advisable to take regular breaks when driving long distances, but this is even more vital when driving overnight.",
      'Stop for a rest at least every two hours and drink strong coffee to keep yourself alert.',
    ],
  },
]

const s = {
  hero: {
    background: 'linear-gradient(135deg, #080e1a 0%, #0d1f3c 100%)',
    color: '#fff',
    padding: '80px 24px 64px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 60% 30%, rgba(30,171,199,0.2) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(255,220,80,0.06) 0%, transparent 50%)',
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
  heroAccent: { color: '#1EABC7' },
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
  quickGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 12,
    marginBottom: 48,
  },
  quickCard: {
    background: '#fff',
    border: '1px solid #dde8f0',
    borderTop: '4px solid #1EABC7',
    borderRadius: 12,
    padding: '16px 16px',
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
  },
  sectionCard: {
    background: '#fff',
    border: '1px solid #dde8f0',
    borderRadius: 14,
    padding: '24px 24px',
    marginBottom: 14,
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  summaryBox: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '28px 32px',
    margin: '48px 0 0',
    textAlign: 'center',
  },
}

export default function DrivingInTheDark() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Night Driving</div>
          <h1 style={s.h1}>
            Driving in <span style={s.heroAccent}>the Dark</span>
          </h1>
          <p style={s.heroSub}>
            Night driving presents unique risks. These tips will help you stay safe, visible and alert after dark.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            Driving in the dark presents more risk than daytime driving. Many accidents occur at night — so knowing how to adapt your driving after dark will ensure your safety and the safety of those travelling with you.
          </div>

          <h2 style={s.h2}>Quick Tips at a Glance</h2>
          <div style={s.quickGrid} className="mobile-1col">
            {quickTips.map((tip, i) => (
              <div key={i} style={s.quickCard}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{tip.icon}</span>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#444', lineHeight: 1.7 }}>{tip.text}</p>
              </div>
            ))}
          </div>

          <h2 style={s.h2}>In More Detail</h2>

          {sections.map(section => (
            <div key={section.title} style={{ ...s.sectionCard, borderLeft: `6px solid ${section.colour}` }}>
              <div style={s.sectionHeader}>
                <span style={{ fontSize: '1.8rem' }}>{section.icon}</span>
                <strong style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: '#0C3C60',
                }}>
                  {section.title}
                </strong>
              </div>
              {section.paragraphs.map((para, i) => (
                <p key={i} style={{ margin: '0 0 10px', fontSize: '0.9rem', color: '#444', lineHeight: 1.75 }}>{para}</p>
              ))}
            </div>
          ))}

          <div style={s.summaryBox}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.8, margin: '0 0 20px' }}>
              Mike will help you build confidence driving in all conditions — including at night.<br />
              <strong style={{ color: '#1EABC7' }}>Being prepared for the dark makes you a safer driver all year round.</strong>
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
