import { Link } from 'react-router-dom'

const tips = [
  {
    num: '01',
    title: 'Slow Down',
    icon: '🐢',
    desc: 'When there are more vehicles than usual on the road it will naturally slow you down. While you might be tempted to try to drive faster, this type of driving can cause an accident. Use your observation skills and proceed with caution — situations can come out of nowhere.',
  },
  {
    num: '02',
    title: "Don't Weave",
    icon: '↔️',
    desc: "Don't weave in and out of other cars. Rapidly switching lanes to try to get ahead of the traffic is very dangerous. More often than not, lane changes are made quickly and very late with little or no observation. Other drivers can't predict what you're going to do. The safest move is to stay in one lane unless it's necessary to move.",
  },
  {
    num: '03',
    title: 'Use Signals Correctly',
    icon: '🔆',
    desc: "When there are lots of other drivers around, it's important you let them know what you're doing. Letting people know what you're doing is not only safe, but will also make it easier for you when a driver lets you in front of them. Pay attention to what other vehicles are likely to do and try to anticipate their actions.",
  },
  {
    num: '04',
    title: 'Plan Ahead',
    icon: '🗺️',
    desc: 'Proper planning can keep you from having to deal with heavy traffic altogether. Keep in mind: weather conditions (snow, rain, fog), road works in your area, local radio traffic updates, events such as festivals and sporting games, and time of day — planning around rush hour leads to a much more enjoyable journey.',
  },
  {
    num: '05',
    title: 'Remove Distractions',
    icon: '📵',
    desc: "It is against the law to use your mobile phone to text and drive — even if you are stationary. Stay focused on the road at all times. This is even more important in heavy traffic. Just because you're moving slower doesn't make driving less dangerous.",
  },
  {
    num: '06',
    title: 'Know Your Stopping Distances',
    icon: '📏',
    desc: 'In heavy traffic, your stopping distance is your thinking distance — so continually think about your reaction to other vehicles. In normal traffic it is recommended to keep at least 2 seconds between you and the driver in front to maintain a safe distance and allow time to react.',
  },
  {
    num: '07',
    title: 'Anticipate and Plan Properly',
    icon: '👁️',
    desc: "Always expect the unexpected. Just because you're practising safe driving doesn't mean everyone around you is. Sometimes it's a mistake, sometimes it's malicious. Either way, being ready to react to others is crucial in heavy traffic situations. Try to anticipate what actions other vehicles may take.",
  },
  {
    num: '08',
    title: 'Keep Calm',
    icon: '🧘',
    desc: 'The worst thing you can do while driving in traffic is lose your patience and get angry. Getting angry on the road can lead to aggressive and irresponsible driving, putting everyone in danger. Stay as calm as possible.',
  },
  {
    num: '09',
    title: "Don't Rubberneck",
    icon: '🚨',
    desc: "Often when passing the scene of an accident that caused the heavy traffic, it's common to take your eyes off the road and stare. Don't let that change your focus. Keep your eyes on the drivers around you and the road in front. Don't turn your head to stare at an accident that isn't involving you.",
  },
  {
    num: '10',
    title: 'Take a Break if Necessary',
    icon: '☕',
    desc: 'If you have been stuck in heavy traffic for a considerable time, you may find yourself getting anxious, angry, or impatient — so take a break. Pull off at an exit and stretch your legs, take a few deep breaths. The extra minute or two will make a world of difference.',
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
  tipCard: {
    display: 'flex',
    gap: 20,
    background: '#fff',
    border: '1px solid #dde8f0',
    borderRadius: 14,
    padding: '24px 24px',
    marginBottom: 16,
    alignItems: 'flex-start',
    borderLeft: '5px solid #1EABC7',
  },
  tipLeft: {
    flexShrink: 0,
    textAlign: 'center',
    minWidth: 56,
  },
  tipNum: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 800,
    fontSize: '1.4rem',
    color: '#1EABC7',
    lineHeight: 1,
    marginBottom: 4,
  },
  tipIcon: {
    fontSize: '1.6rem',
    display: 'block',
  },
  tipTitle: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '1rem',
    color: '#0C3C60',
    marginBottom: 8,
    display: 'block',
  },
  tipDesc: {
    fontSize: '0.9rem',
    color: '#444',
    lineHeight: 1.75,
    margin: 0,
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
  backLink: {
    display: 'inline-block',
    color: '#1EABC7',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '0.9rem',
    textDecoration: 'none',
    marginBottom: 40,
  },
}

export default function DrivingHeavyTraffic() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Skills · Tips</div>
          <h1 style={s.h1}>
            Driving in <span style={s.heroAccent}>Heavy Traffic</span>
          </h1>
          <p style={s.heroSub}>
            10 tips to keep you safe, calm, and in control when the roads get busy.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <Link to="/driving-skills" style={s.backLink}>← Back to Driving Skills</Link>

          <div style={s.introBox}>
            Few things are more frustrating than getting stuck in a massive traffic jam, or trying to get somewhere when the traffic is really busy. Whether it's caused by a road accident, road works, or general rush hour traffic, driving in heavy traffic is a difficult skill to master and requires all your concentration.
          </div>

          {tips.map(tip => (
            <div key={tip.num} style={s.tipCard}>
              <div style={s.tipLeft}>
                <div style={s.tipNum}>{tip.num}</div>
                <span style={s.tipIcon}>{tip.icon}</span>
              </div>
              <div>
                <strong style={s.tipTitle}>{tip.title}</strong>
                <p style={s.tipDesc}>{tip.desc}</p>
              </div>
            </div>
          ))}

          <div style={s.summaryBox}>
            <p style={s.summaryText}>
              Armed with these tips, you can conquer the next heavy traffic scenario you face.<br />
              <strong style={{ color: '#1EABC7' }}>Remember — getting to your destination safely is the number one priority for every driver on the road.</strong>
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
