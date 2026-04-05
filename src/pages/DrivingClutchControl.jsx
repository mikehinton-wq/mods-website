import { Link } from 'react-router-dom'

const sections = [
  {
    icon: '⚙️',
    title: 'What Is the Clutch?',
    colour: '#1EABC7',
    paragraphs: [
      'The clutch pedal is operated with your left foot and sits on the left of the group of three pedals.',
      'The clutch is the connection between the engine and the gearbox. It consists of a pair of friction plates which are pulled apart when the clutch is pressed down. When pressed, it disconnects the engine from the driving wheels — allowing the car to stop without stalling the engine. Pressing the clutch pedal down also allows you to change gear.',
      'As you let the clutch pedal up, the two plates touch and power starts to be transmitted to the wheels. The point of engagement, when the two plates begin to make contact and the load on the engine increases, is known as the "biting point". The further you release the clutch pedal, the more power is transmitted. Once fully released, the clutch plates lock together and all the power from the engine is delivered to the wheels.',
    ],
    warning: 'If you forget to press the clutch down when coming to a stop, your car will stall.',
  },
  {
    icon: '🚦',
    title: 'Pulling Away on the Flat',
    colour: '#0ea5e9',
    paragraphs: [
      'First, press the clutch pedal down and select 1st gear, then gently press the accelerator pedal to raise the engine revs just above idle. These extra revs are important as they provide extra power to help avoid stalling.',
      'Next, lift the clutch pedal up a little until you feel the clutch start to bite. You need to find just the right amount of clutch bite point — too little and the car won\'t move, too much and it will judder or stall.',
      'Try listening for the engine note deepening, or look for the nose of the car rising slightly as it strains against the handbrake. Then release the handbrake and keep both feet still as the car starts to roll forward. This allows the biting point to gently get the car moving smoothly.',
      'Lift the clutch up fully once the car is at about walking pace and continue driving. Be patient — if you try to lift it too early or in one go, the clutch will bite too quickly and will probably stall the engine.',
    ],
  },
  {
    icon: '⛰️',
    title: 'Hill Start',
    colour: '#8b5cf6',
    paragraphs: [
      "It's the same drill as for pulling away on the flat, but with a little more revs to provide extra power to get the car moving uphill. To avoid rolling backwards, you must use the accelerator, clutch and handbrake together.",
    ],
    bullets: [
      'With your left foot, press the clutch pedal all the way down',
      'Put the car into 1st gear',
      'With your right foot, apply a little more pressure on the accelerator than you would on the flat, and hold it perfectly steady',
      'Slowly bring the clutch up to the biting point (it will be slightly higher than on the flat)',
      'Check your mirrors, check your blind spots, signal if necessary',
      'When it\'s safe, gently release the handbrake',
      'Gradually press the accelerator as you pull away, keep your feet still for at least two to three seconds, then let the clutch come up slowly as you build momentum',
    ],
  },
  {
    icon: '🚧',
    title: 'Stop-Start Traffic',
    colour: '#f59e0b',
    paragraphs: [
      'Another time you will need good clutch control is when driving in stop-start traffic. At first, just use 1st gear and the clutch biting point to edge forward slowly.',
      'The useful technique in traffic is to let the car roll along slowly with the engine idling. Once you change into 2nd gear, you can let the car roll without pressing any pedals — though keep your feet ready to react if you need to stop quickly.',
      'When you need to reduce speed, push the clutch pedal down to reduce the drive to the wheels and use the brakes as needed.',
    ],
  },
  {
    icon: '🔄',
    title: 'Reversing',
    colour: '#10b981',
    paragraphs: [
      'When manoeuvring, it\'s important to keep the car speed very slow — around 1 mph. If you lift the clutch pedal just enough that the clutch is starting to bite, it will give enough drive to move the car slowly.',
      'From there, you can adjust the car speed by changing the amount of clutch bite — lift the pedal a little more to increase drive, or push it down a little to reduce drive or stop the car.',
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
    marginBottom: 48,
    fontSize: '1.05rem',
    color: '#0a2d3d',
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
  warningBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    background: '#fff8f0',
    border: '2px solid #f0c060',
    borderRadius: 12,
    padding: '14px 20px',
    margin: '16px 0 0',
    fontSize: '0.9rem',
    color: '#92400e',
    fontWeight: 600,
  },
  summaryBox: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '28px 32px',
    margin: '48px 0 0',
    textAlign: 'center',
  },
}

export default function DrivingClutchControl() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Car Control</div>
          <h1 style={s.h1}>
            <span style={s.heroAccent}>Clutch Control</span>
          </h1>
          <p style={s.heroSub}>
            Understanding how the clutch works — and how to use it smoothly — is one of the most important skills for any new driver.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            Good clutch control is essential if you want to drive a manual car smoothly. To develop this skill you need to understand what the clutch is, how it works, and how to use it correctly in different situations.
          </div>

          {sections.map(section => (
            <div key={section.title} style={{
              background: '#fff',
              border: '1px solid #dde8f0',
              borderLeft: `6px solid ${section.colour}`,
              borderRadius: 14,
              padding: '28px 24px',
              marginBottom: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
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
                <p key={i} style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.75, margin: '0 0 10px' }}>{para}</p>
              ))}

              {section.bullets && (
                <ul style={{ margin: '10px 0 0', paddingLeft: 22 }}>
                  {section.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.75, marginBottom: 6 }}>{b}</li>
                  ))}
                </ul>
              )}

              {section.warning && (
                <div style={s.warningBox}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>⚠️</span>
                  <span>{section.warning}</span>
                </div>
              )}
            </div>
          ))}

          <div style={s.summaryBox}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.8, margin: '0 0 20px' }}>
              Mike will guide you through clutch control step by step from your very first lesson.<br />
              <strong style={{ color: '#1EABC7' }}>It gets easier every time — smooth clutch control becomes second nature.</strong>
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
