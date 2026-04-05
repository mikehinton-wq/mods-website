import { Link } from 'react-router-dom'

const learningPoints = [
  { icon: '🎯', text: 'Learn how to judge the speed of the vehicle' },
  { icon: '📊', text: 'Learn how to check your speed on the dashboard without taking focus away from the road ahead' },
  { icon: '🪧', text: 'Learn how speed restrictions are regulated on UK roads and how to recognise when those restrictions are imposed' },
  { icon: '🎛️', text: 'Learn various ways in which to control the speed of the car' },
]

const appropriateSpeeds = [
  { icon: '↕️', text: 'The speed at which you approach junctions' },
  { icon: '🚲', text: 'Driving past parked cars or cyclists too fast with no clear view of the road ahead' },
  { icon: '📏', text: 'Inappropriate speed for maintaining a safe driving distance behind other vehicles' },
  { icon: '⚠️', text: 'Inappropriate speed for approaching a hazard' },
  { icon: '🌧️', text: 'Inappropriate speed for the weather conditions' },
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
  p: { fontSize: '0.95rem', color: '#2a2a2a', lineHeight: 1.8, marginBottom: 16 },
  backLink: {
    display: 'inline-block',
    color: '#1EABC7',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '0.9rem',
    textDecoration: 'none',
    marginBottom: 40,
  },
  listCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 14,
    background: '#fff',
    border: '1px solid #dde8f0',
    borderLeft: '5px solid #1EABC7',
    borderRadius: 12,
    padding: '14px 18px',
    marginBottom: 10,
  },
  twoCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 12,
    marginTop: 8,
  },
  warningBox: {
    background: '#fff8f0',
    border: '2px solid #f0c060',
    borderRadius: 14,
    padding: '20px 24px',
    margin: '32px 0',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,
  },
  tealBox: {
    background: 'linear-gradient(135deg, #e8f4f8, #d0eef6)',
    border: '1px solid #9fd4e8',
    borderRadius: 14,
    padding: '24px 28px',
    margin: '32px 0',
  },
  summaryBox: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '28px 32px',
    margin: '48px 0 0',
    textAlign: 'center',
  },
}

export default function DrivingSpeedAwareness() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Awareness</div>
          <h1 style={s.h1}>
            <span style={s.heroAccent}>Speed Awareness</span>
          </h1>
          <p style={s.heroSub}>
            Controlling your speed is about far more than staying within the limit — it's a fundamental skill that affects every aspect of your driving.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            Learning to drive requires more than knowing the theory and mastering the controls. You also need to be aware of the driving environment around you and how your vehicle interacts within it. Fundamental to this is the ability to control the speed of the car.
          </div>

          <h2 style={s.h2}>What You Need to Learn</h2>
          <p style={s.p}>A major part of your driving is the focus on speed awareness. You need to:</p>

          {learningPoints.map((pt, i) => (
            <div key={i} style={s.listCard}>
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{pt.icon}</span>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#333', lineHeight: 1.75 }}>{pt.text}</p>
            </div>
          ))}

          <h2 style={s.h2}>Dangers from Slow and Fast Driving</h2>
          <p style={s.p}>You can be penalised if you drive too fast or too slow — as either can cause a hazard. Going too fast clearly speaks for itself, but the dangers of driving too slowly are not always obvious.</p>
          <p style={s.p}>A slow vehicle on a fast road can be an unexpected hazard to other road users — causing traffic jams and triggering erratic driving from others attempting to bypass the slower car.</p>

          <div style={s.warningBox}>
            <span style={{ fontSize: '2rem', flexShrink: 0 }}>⚠️</span>
            <div>
              <strong style={{ fontFamily: 'Raleway, sans-serif', display: 'block', color: '#92400e', marginBottom: 6 }}>Important for Learner Drivers</strong>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#92400e', lineHeight: 1.75 }}>
                Driving slowly suggests nervousness and uncertainty. If you are nervous, you are unlikely to be in full control of the car and may not respond well to hazards. A driving test examiner is likely to down-mark you if you are consistently driving slowly for no reason.
              </p>
            </div>
          </div>

          <p style={s.p}>Drivers should keep to the speed shown by signs on any given road — except when hazards call for slower, more careful driving.</p>

          <h2 style={s.h2}>Appropriate Speeds for Everyday Driving</h2>
          <p style={s.p}>Driving too fast does not necessarily mean breaking the speed limit. Both your instructor and the test examiner will be aware of:</p>

          <div style={s.twoCol} className="mobile-1col">
            {appropriateSpeeds.map((item, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #dde8f0',
                borderTop: '4px solid #1EABC7',
                borderRadius: 12,
                padding: '16px 16px',
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#444', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>

          <p style={{ ...s.p, marginTop: 20 }}>All of these reflect how a driver is responding to the hazards around them. Examiners will be looking to see that you adjust your speed appropriately.</p>

          <h2 style={s.h2}>Using Speed Awareness to Anticipate Hazards</h2>
          <p style={s.p}>To become speed aware, a driver must first be confident and comfortable with the skills to control the vehicle. Once this is achieved, greater attention can be devoted to observing the surrounding environment and developing anticipation and planning. This in turn will help you to anticipate potential hazards and choose an appropriate action.</p>

          <div style={s.tealBox}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>🏙️</span>
              <div>
                <strong style={{ fontFamily: 'Raleway, sans-serif', display: 'block', color: '#0C3C60', marginBottom: 8, fontSize: '1rem' }}>
                  No Speed Limit Sign? Here's the Rule
                </strong>
                <p style={{ margin: 0, fontSize: '0.92rem', color: '#0a2d3d', lineHeight: 1.75 }}>
                  You may find yourself on a road where the speed limit is not displayed. Remember that most urban roads with street lighting will have a speed limit of <strong>30mph</strong>. If you're unsure — reduce your speed rather than risk going too fast.
                </p>
              </div>
            </div>
          </div>

          <div style={s.summaryBox}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.8, margin: '0 0 20px' }}>
              Speed awareness is built throughout every lesson with Mike.<br />
              <strong style={{ color: '#1EABC7' }}>You'll develop the confidence to drive at the right speed for every situation.</strong>
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
