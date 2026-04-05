import { Link } from 'react-router-dom'

const skills = [
  {
    num: '01',
    title: 'Car Control & Coordination',
    icon: '🎮',
    colour: '#1EABC7',
    content: [
      'You, as the driver, are expected to be in full control of the car and its controls at all times. Is this just about holding the wheel correctly, or using the controls, or changing gear? No — it involves more.',
      'The purpose of Car Control is to prevent road collisions by providing a way of controlling your vehicle that is methodical, safe, and leaves nothing to chance, using all the controls of the car properly.',
      'It is applicable in all circumstances and provides the most effective way of dealing with an unpredictable environment. Therefore, you need to fully understand all the controls of the car, how and when to use them effectively whilst making decisions.',
    ],
  },
  {
    num: '02',
    title: 'Effective Observation',
    icon: '👁️',
    colour: '#0ea5e9',
    content: [
      'Those who use the safest driving techniques will be concentrating on effective observation.',
      'Effective observation is about not just looking, but taking in the information of what is happening around them, processing that information and using it to make a decision that is safe.',
      'Observation is not just looking, but "seeing" and processing what you are looking at — and what you are looking for.',
    ],
  },
  {
    num: '03',
    title: 'Awareness & Planning',
    icon: '🗺️',
    colour: '#8b5cf6',
    content: [
      'To anticipate is to take action when you expect something will or might happen. The way you anticipate what might happen is to make early use of all the information available to you.',
      'To do this effectively you need to be constantly aware of what is happening around you.',
      'Always expect the unexpected.',
    ],
  },
  {
    num: '04',
    title: 'Judgment',
    icon: '⚖️',
    colour: '#f59e0b',
    content: [
      'As well as being able to anticipate and deal with hazards, you will need to demonstrate good forward planning and judgement skills.',
      'These skills require you to effectively read the road ahead by doing the following:',
    ],
    bullets: [
      'Take in information about what is happening and what is about to happen',
      'Use that information — decide what you are going to do in plenty of time',
      'Act on that information, making the safest decision possible',
    ],
  },
  {
    num: '05',
    title: 'Self Evaluation',
    icon: '🪞',
    colour: '#10b981',
    content: [
      'A good driver will always analyse their driving so that they can understand what they are doing well, where they need to improve or do things differently, and then apply that learning to all aspects of their driving.',
    ],
  },
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
    maxWidth: 520,
    margin: '0 auto',
    lineHeight: 1.7,
  },
  content: { maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' },
  introBox: {
    background: 'linear-gradient(135deg, #e8f4f8, #f0f9fb)',
    borderLeft: '5px solid #1EABC7',
    borderRadius: '0 14px 14px 0',
    padding: '24px 28px',
    marginBottom: 40,
    fontSize: '1.05rem',
    color: '#0a2d3d',
    lineHeight: 1.8,
  },
  pillRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 48,
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
  summaryBox: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '28px 32px',
    margin: '48px 0 0',
    textAlign: 'center',
  },
  summaryText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: '1.05rem',
    lineHeight: 1.8,
    margin: '0 0 20px',
  },
}

const pillColours = ['#1EABC7', '#0ea5e9', '#8b5cf6', '#f59e0b', '#10b981']
const pillLabels = [
  '1 — Car Control & Coordination',
  '2 — Effective Observation',
  '3 — Awareness & Planning',
  '4 — Judgment',
  '5 — Self Evaluation',
]

export default function DrivingFiveKeySkills() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Fundamentals</div>
          <h1 style={s.h1}>
            The <span style={s.heroAccent}>5 Key Driving Skills</span>
          </h1>
          <p style={s.heroSub}>
            These skills apply to every aspect of your driving — and will often overlap. Master them and you'll be equipped for any situation on the road.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            As a driver, you need to display competence in all aspects of driving. The 5 key driving skills can be applied to any aspect of your driving and will often overlap. Your instructor will cover each of these in much more detail during your lessons.
          </div>

          <div style={s.pillRow}>
            {pillLabels.map((label, i) => (
              <span key={label} style={{
                background: pillColours[i],
                color: '#fff',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: '0.8rem',
                padding: '6px 14px',
                borderRadius: 20,
              }}>
                {label}
              </span>
            ))}
          </div>

          {skills.map(skill => (
            <div key={skill.num} style={{
              display: 'flex',
              gap: 20,
              background: '#fff',
              border: '1px solid #dde8f0',
              borderRadius: 14,
              padding: '28px 24px',
              marginBottom: 16,
              alignItems: 'flex-start',
              borderLeft: `6px solid ${skill.colour}`,
            }}>
              <div style={{ flexShrink: 0, textAlign: 'center', minWidth: 56 }}>
                <div style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  color: skill.colour,
                  lineHeight: 1,
                  marginBottom: 6,
                }}>
                  {skill.num}
                </div>
                <span style={{ fontSize: '1.6rem' }}>{skill.icon}</span>
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: '#0C3C60',
                  display: 'block',
                  marginBottom: 12,
                }}>
                  {skill.title}
                </strong>
                {skill.content.map((para, i) => (
                  <p key={i} style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.75, margin: '0 0 10px' }}>{para}</p>
                ))}
                {skill.bullets && (
                  <ul style={{ margin: '8px 0 0', paddingLeft: 20 }}>
                    {skill.bullets.map((b, i) => (
                      <li key={i} style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.75, marginBottom: 6 }}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          <div style={s.summaryBox}>
            <p style={s.summaryText}>
              Your instructor will cover all 5 of these skills throughout your lessons.<br />
              <strong style={{ color: '#1EABC7' }}>Understanding them now will give you a head start from day one.</strong>
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
