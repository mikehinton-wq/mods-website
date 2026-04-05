import { Link } from 'react-router-dom'

const concepts = [
  { num: '01', icon: '🪑', text: "Don't start the engine without securing each passenger in the car, including children and pets. Safety belts save thousands of lives each year." },
  { num: '02', icon: '↔️', text: 'Leave space to escape dangerous situations.' },
  { num: '03', icon: '🐢', text: 'Slow down, especially during bad weather conditions or at night.' },
  { num: '04', icon: '🚦', text: 'Always obey speed limits. Read the signs.' },
  { num: '05', icon: '👁️', text: 'Concentrate on your driving at all times and keep a watchful eye on pedestrians and pets along the roadside.' },
  { num: '06', icon: '🗺️', text: 'Expect the unexpected and plan for escape routes.' },
  { num: '07', icon: '😴', text: 'Never drive if you are impaired by lack of sleep or anything else that may impact your driving.' },
  { num: '08', icon: '🔍', text: 'Check your mirrors frequently.' },
  { num: '09', icon: '🛑', text: 'Assume that drivers will run through stop signs or red lights and be prepared to react.' },
  { num: '10', icon: '🤝', text: "Follow the rules of the road. Don't contest the right of way or try to race another car. Be respectful of other motorists." },
]

const practiseTips = [
  { icon: '🪟', text: 'Start practising now by checking your mirrors constantly. Effective observation!' },
  { icon: '⬅️', text: 'Always be aware of what is on your right, your left and behind you.' },
  { icon: '🛣️', text: 'Check the road ahead. What is on the horizon? What is happening in front of the car ahead of you?' },
  { icon: '👀', text: 'Learn to make eye contact with drivers and pedestrians — that way you know they see you.' },
  { icon: '🚗', text: 'Look at the front wheels of cars parked on the side of the road. If a car has its wheels turned to the right, is it going to suddenly pull out?' },
  { icon: '⚡', text: 'Be prepared for the unexpected.' },
]

const s = {
  hero: {
    background: 'linear-gradient(135deg, #0C3C60 0%, #1a5a8a 100%)',
    color: '#fff',
    padding: '80px 24px 64px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 70% 20%, rgba(30,171,199,0.22) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(255,255,255,0.04) 0%, transparent 50%)',
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
  heroAccent: { color: '#1EABC7' },
  heroSub: {
    fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.65)',
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
  conceptCard: {
    display: 'flex',
    gap: 18,
    background: '#fff',
    border: '1px solid #dde8f0',
    borderLeft: '6px solid #1EABC7',
    borderRadius: 14,
    padding: '18px 22px',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  conceptLeft: {
    flexShrink: 0,
    textAlign: 'center',
    minWidth: 52,
  },
  conceptNum: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 800,
    fontSize: '1.3rem',
    color: '#1EABC7',
    lineHeight: 1,
    marginBottom: 4,
  },
  practiseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 14,
    marginTop: 8,
  },
  practiseCard: {
    background: '#fff',
    border: '1px solid #dde8f0',
    borderTop: '4px solid #1EABC7',
    borderRadius: 14,
    padding: '18px 18px',
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
  },
  summaryBox: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '28px 32px',
    margin: '48px 0 0',
    textAlign: 'center',
  },
}

export default function DrivingDefensive() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Safety</div>
          <h1 style={s.h1}>
            <span style={s.heroAccent}>Defensive Driving</span>
          </h1>
          <p style={s.heroSub}>
            Learn to anticipate danger before it happens — and develop habits that will protect you for life.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            Defensive driving is a form of training or practice that teaches drivers to consciously reduce the dangers associated with driving — by anticipating dangerous scenarios before they develop. If you start developing these habits early, you significantly increase your chances of never being involved in an accident.
          </div>

          <p style={{ fontSize: '0.95rem', color: '#2a2a2a', lineHeight: 1.8, marginBottom: 16 }}>
            A driver who practises defensive driving has learned to control their emotions and is not easily affected by other drivers exhibiting bad behaviour. A defensive driver is always watching. They can quickly identify and predict potential road problems, then immediately decide and act to avoid danger.
          </p>

          <h2 style={s.h2}>10 Basic Concepts of Defensive Driving</h2>

          {concepts.map(c => (
            <div key={c.num} style={s.conceptCard}>
              <div style={s.conceptLeft}>
                <div style={s.conceptNum}>{c.num}</div>
                <span style={{ fontSize: '1.5rem' }}>{c.icon}</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#333', lineHeight: 1.75 }}>{c.text}</p>
            </div>
          ))}

          <h2 style={s.h2}>You Too Can Become a Defensive Driver</h2>
          <p style={{ fontSize: '0.95rem', color: '#2a2a2a', lineHeight: 1.8, marginBottom: 20 }}>
            Start putting these habits into practice from your very first lesson:
          </p>

          <div style={s.practiseGrid} className="mobile-1col">
            {practiseTips.map((tip, i) => (
              <div key={i} style={s.practiseCard}>
                <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{tip.icon}</span>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#444', lineHeight: 1.75 }}>{tip.text}</p>
              </div>
            ))}
          </div>

          <div style={s.summaryBox}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.8, margin: '0 0 20px' }}>
              Defensive driving isn't just for the test — it's a mindset for life.<br />
              <strong style={{ color: '#1EABC7' }}>Mike builds these habits into every lesson from day one.</strong>
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
