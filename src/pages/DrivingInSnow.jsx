import { Link } from 'react-router-dom'

const tips = [
  {
    num: '01',
    icon: '🎒',
    title: 'Be Prepared',
    colour: '#1EABC7',
    paragraphs: [
      "Plan for the worst. Make sure you've got warm clothes, a rug, a torch, a snow shovel and some emergency food. Make sure your phone is fully charged before setting off — or keep a cheap spare mobile charged and ready in the glovebox.",
      "Wear decent driving shoes — driving in snow boots or wellies is a bad idea as it's harder to feel the pedals. One strong recommendation: get your car fitted with winter tyres ahead of cold weather. Once the temperature gets into single figures, that's when you should have them fitted.",
    ],
  },
  {
    num: '02',
    icon: '🤲',
    title: 'Be Smooth',
    colour: '#0ea5e9',
    paragraphs: [
      "Avoid sudden applications of the throttle, brakes and steering. If you're struggling for traction, don't accelerate excessively — spinning the wheels will only make things worse.",
      "Try using second gear to gain grip when pulling away, while higher gears will help the tyres keep their grip. Some automatic gearboxes offer a winter mode. In a manual car, try to feel grip by slipping the clutch.",
    ],
  },
  {
    num: '03',
    icon: '🛑',
    title: 'Brake Smoothly',
    colour: '#8b5cf6',
    paragraphs: [
      "When driving on snow-covered slopes, keep the speed slow at the top of the hill. It's easier to maintain a steady speed than to slow down on the descent.",
      "Leave big braking distances to vehicles in front — apply the brake pedal gently and avoid triggering the ABS, because the system can struggle in very slippery conditions. Older cars without ABS may actually stop sooner, thanks to locked wheels causing a snowplough effect that builds snow in front of them.",
    ],
  },
  {
    num: '04',
    icon: '👁️',
    title: 'See and Be Seen',
    colour: '#f59e0b',
    paragraphs: [
      "When you start your car, give it plenty of time to warm up and clear all the snow and ice from your windows and lights — not doing so could be seen as a traffic offence. If there's a lot of snow on the roof, clean it off too, as it could fall and cause a hazard for other motorists.",
      "Ensure your screenwash isn't frozen and your wipers aren't stuck to the windows. When driving, make sure your headlights are on and visible to other drivers.",
    ],
  },
  {
    num: '05',
    icon: '📻',
    title: 'Always Plan Ahead',
    colour: '#10b981',
    paragraphs: [
      "Turn your radio on to hear the latest traffic and weather reports, and tune into a local station for more specific information on your area. Conditions may not be too bad when you set off, but check ahead for your full journey too.",
      "If you don't have winter tyres, try to avoid routes with steep inclines and stick to main roads, which are more likely to have been treated.",
    ],
  },
  {
    num: '06',
    icon: '🛡️',
    title: "Know Your Car's Safety Systems",
    colour: '#6366f1',
    paragraphs: [
      "If you have ESP, the stability control will help you in a slide. But traction control can sometimes kill power too much and make it hard to get moving in heavy snow. Most cars allow you to turn off the traction element of the stability control.",
      "If you have an automatic gearbox, check whether you have a winter mode.",
    ],
  },
  {
    num: '07',
    icon: '😌',
    title: "Don't Panic in a Slide",
    colour: '#ef4444',
    paragraphs: [
      "If the front wheels start to push across the road, don't crank on more lock. Ease off the throttle and straighten the steering for a moment to allow the tyres to regain grip.",
      "If the rear of the car starts to drift, steer into the slide — known as applying opposite lock. Always look where you want the car to go. Avoid standing on the brakes, as this will lock them and cause ABS-equipped cars to lose effectiveness.",
    ],
  },
  {
    num: '08',
    icon: '🔭',
    title: 'Anticipation',
    colour: '#0C3C60',
    paragraphs: [
      "In snowy and icy conditions, it takes longer to stop and turn. Reduce your speed and leave lots of extra room to the car in front.",
      "Watch out for cars around you that may be sliding or losing control. Snow-covered signs and obscured kerbs mean you should pay extra attention to the road infrastructure.",
    ],
  },
  {
    num: '09',
    icon: '🚗',
    title: 'Getting Stuck',
    colour: '#64748b',
    paragraphs: [
      "If you get stuck in snow and need to abandon your car, try to move it as far off the road as possible so you don't block other drivers.",
      "If the car starts to slide back down an incline, crank the steering to full lock and apply the handbrake — this will lock the rear wheels while the fronts build a bank of snow like a plough, slowing your descent.",
    ],
  },
  {
    num: '10',
    icon: '🏠',
    title: 'Stay Safe',
    colour: '#1EABC7',
    paragraphs: [
      "Stay home. If you really don't have to go out, don't. Even if you can drive well in the snow, not everyone else can.",
      "Don't tempt fate — if you don't have somewhere you have to be, watch the snow from indoors.",
    ],
  },
]

const s = {
  hero: {
    background: 'linear-gradient(135deg, #1a2a3a 0%, #2a3f55 100%)',
    color: '#fff',
    padding: '80px 24px 64px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 65% 25%, rgba(200,230,255,0.12) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(30,171,199,0.1) 0%, transparent 50%)',
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
  stayHomeBox: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '24px 28px',
    marginBottom: 48,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 16,
  },
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
    display: 'flex',
    gap: 20,
    background: '#fff',
    border: '1px solid #dde8f0',
    borderRadius: 14,
    padding: '22px 22px',
    marginBottom: 14,
    alignItems: 'flex-start',
  },
  tipLeft: {
    flexShrink: 0,
    textAlign: 'center',
    minWidth: 52,
  },
  tipNum: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 800,
    fontSize: '1.3rem',
    lineHeight: 1,
    marginBottom: 6,
  },
  tipTitle: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '1rem',
    color: '#0C3C60',
    display: 'block',
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

export default function DrivingInSnow() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Winter Driving</div>
          <h1 style={s.h1}>
            Driving in <span style={s.heroAccent}>Snow</span>
          </h1>
          <p style={s.heroSub}>
            10 essential tips for staying safe when the roads are covered in snow and ice.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.stayHomeBox}>
            <span style={{ fontSize: '2rem', flexShrink: 0 }}>🏠</span>
            <div>
              <strong style={{ fontFamily: 'Raleway, sans-serif', color: '#1EABC7', display: 'block', fontSize: '1rem', marginBottom: 6 }}>
                The Main Message: Stay Home
              </strong>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: '0.93rem', lineHeight: 1.75 }}>
                If you really don't have to go out, don't. Even if you can drive well in the snow, not everyone else can. Don't tempt fate — if you don't have somewhere you have to be, watch the snow from indoors.
              </p>
            </div>
          </div>

          <h2 style={s.h2}>If You Do Go Out — Follow These 10 Tips</h2>

          {tips.map(tip => (
            <div key={tip.num} style={{ ...s.tipCard, borderLeft: `6px solid ${tip.colour}` }}>
              <div style={s.tipLeft}>
                <div style={{ ...s.tipNum, color: tip.colour }}>{tip.num}</div>
                <span style={{ fontSize: '1.5rem' }}>{tip.icon}</span>
              </div>
              <div>
                <strong style={s.tipTitle}>{tip.title}</strong>
                {tip.paragraphs.map((para, i) => (
                  <p key={i} style={{ margin: '0 0 10px', fontSize: '0.9rem', color: '#444', lineHeight: 1.75 }}>{para}</p>
                ))}
              </div>
            </div>
          ))}

          <div style={s.summaryBox}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.8, margin: '0 0 20px' }}>
              Mike will help you build confidence driving in all weathers.<br />
              <strong style={{ color: '#1EABC7' }}>Knowing what to do before the snow arrives keeps you safe when it does.</strong>
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
