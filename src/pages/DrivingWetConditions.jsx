import { Link } from 'react-router-dom'

const tips = [
  { icon: '↩️', title: 'Turn Back', text: "Don't let pride get in the way of your safety. If you feel the weather is too severe to continue your journey safely, turn back or pull into a safe area well off the road and wait until the weather improves." },
  { icon: '🐢', title: 'Slow Down', text: "The first few hours of rain are often the most dangerous. When rain falls it mixes with whatever else is on the road surface — spilt fuel, oil, grease, dirt and mud — all of which can combine to make the road surface as slippery as an ice rink." },
  { icon: '💡', title: 'Be Seen', text: "Switch on your headlights regardless of daylight. This will help your vision and let other drivers see you in their mirrors more clearly." },
  { icon: '🪟', title: 'Can You See?', text: "Use your wipers for maximum visibility and switch on your demisters if necessary. For fastest demisting, use the AC with the temperature set to 'hot'. This will also clear condensation from other windows." },
  { icon: '🌊', title: 'Sheet Rain', text: "Sheet rain can overwhelm the wiper blades, allowing an almost continuous sheet of water to flow over the screen. When visibility is so limited that the edges of the road or other vehicles cannot be seen at a safe distance, pull over and wait for the rain to ease." },
  { icon: '👁️', title: 'Limits of Visibility', text: "Never drive beyond the limits of visibility. At night, rainy roads become especially treacherous. The glare of oncoming lights, amplified by rain on your windscreen, can cause temporary loss of visibility while substantially increasing driver fatigue." },
  { icon: '🚛', title: 'Spray', text: "Stay well back from lorries and buses. The larger the vehicle, the larger the tyres — and the larger the throwback spray." },
  { icon: '📏', title: 'Lengthen Your Stopping Distance', text: "Stay well back from the car in front. You should double, if not treble, the two-second gap rule." },
  { icon: '🚦', title: 'Traffic Lights & Road Junctions', text: "Give yourself ample time to slow down when approaching traffic lights or road junctions." },
  { icon: '🔍', title: 'Scanning', text: "Use the defensive driving technique of constantly scanning the road for vehicles, pedestrians, animals, and broken down or abandoned vehicles." },
  { icon: '🪞', title: 'Double Check Mirrors', text: "Take extra care when overtaking or turning. In heavy rain or gloomy conditions, drivers who have not switched on their lights can be especially difficult to see in your side mirrors." },
  { icon: '🤏', title: 'Lighten Your Touch', text: "Wet roads need finesse, not strength. Avoid heavy braking, harsh acceleration or abrupt steering." },
  { icon: '🚫', title: 'Cruise Control', text: "Never use cruise control in the rain. Many cruise control systems don't account for loss of traction — if you start slipping, the system will try to speed you back up." },
  { icon: '🌀', title: 'Moving Water', text: "If you cannot see how deep running water is across the road, it is probably too deep to drive through. Find another route. Some cars can be swept off the road in less than a foot of fast-running water." },
  { icon: '💧', title: 'Still Water', text: "It can be difficult to see the depth of puddles or surface water — err on the side of caution and go slow. If water is lapping the bottom of your doors, turn around and find another route. Note: if you have a low-slung exhaust, do not reverse in this depth of water as it could force water into the engine." },
  { icon: '🌊', title: 'Flood Depth up to 30cm (12in)', text: "Never drive through flooded roads if you cannot see the other side. If you have no alternative, wait until clear, keep revs high and move forward cautiously in first gear until clear. Do not reverse — it forces water up the exhaust. If stranded, call 999." },
  { icon: '🚨', title: 'Flood Depth Above 45cm (18in)', text: "It is highly unlikely that a saloon car can safely make it through water of this depth. Turn around and find another route. If you unexpectedly find yourself in this depth of water, call 999." },
  { icon: '🏃', title: 'Stranded', text: "If you find yourself stranded in rising water, abandon your vehicle and head for dry land immediately. Call 999." },
  { icon: '🌙', title: 'Night-Time', text: "In the dark it is difficult to tell the difference between a wet road surface and floodwater. Keep an eye on the side of the road — at the height of fences, hedges and buildings. If they appear to be getting progressively lower, slow down at once as the road ahead is probably flooded." },
  { icon: '⚡', title: 'Hitting Floodwater', text: "If you hit floodwater at speed you will come to an uncontrolled, violent stop. Be on your guard — watch for places where floodwater collects, such as low-lying roads alongside streams or rivers, and dips in the road especially under railway bridges." },
  { icon: '🌀', title: 'Aquaplaning', text: "Aquaplaning happens when the water in front of your tyres builds up faster than your car's weight can push it out of the way. Avoid it by slowing down when you see water lying on the road surface." },
  { icon: '🛑', title: 'Brakes', text: "Always test your brakes after going through water. To dry your brakes, press the brake pedal lightly while keeping the car moving at about 10mph for around 100 metres." },
]

const s = {
  hero: {
    background: 'linear-gradient(135deg, #0a2a4a 0%, #0e4b6e 100%)',
    color: '#fff',
    padding: '80px 24px 64px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 70% 20%, rgba(30,171,199,0.25) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(100,180,255,0.08) 0%, transparent 50%)',
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
  tipCard: {
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
  tipIcon: {
    fontSize: '1.6rem',
    flexShrink: 0,
    marginTop: 2,
  },
  tipTitle: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '0.97rem',
    color: '#0C3C60',
    display: 'block',
    marginBottom: 6,
  },
  tipText: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#444',
    lineHeight: 1.75,
  },
  summaryBox: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '28px 32px',
    margin: '48px 0 0',
    textAlign: 'center',
  },
}

export default function DrivingWetConditions() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Weather</div>
          <h1 style={s.h1}>
            Driving in <span style={s.heroAccent}>Wet Conditions</span>
          </h1>
          <p style={s.heroSub}>
            22 essential tips to keep you safe when heavy rain, flooding or stormy weather hits the road.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            Britain has always seen its share of wet and stormy weather — and with experts predicting more extreme conditions due to climate change, drivers are likely to face harsh driving conditions more frequently. Heavy rain can quickly reduce visibility and create slippery, dangerous road conditions. Taking simple precautions and knowing what to do will help keep you safe.
          </div>

          <h2 style={s.h2}>If You Get Caught in a Storm — Follow These Guidelines</h2>

          {tips.map((tip, i) => (
            <div key={i} style={s.tipCard}>
              <span style={s.tipIcon}>{tip.icon}</span>
              <div>
                <strong style={s.tipTitle}>{tip.title}</strong>
                <p style={s.tipText}>{tip.text}</p>
              </div>
            </div>
          ))}

          <div style={s.summaryBox}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.8, margin: '0 0 20px' }}>
              Mike covers wet weather driving as part of your lessons.<br />
              <strong style={{ color: '#1EABC7' }}>Being prepared for all conditions makes you a safer, more confident driver.</strong>
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
