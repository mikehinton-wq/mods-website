import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const related = [
  { href: '/blog/is-your-car-safe-to-drive', title: 'Is Your Car Actually Safe to Drive?' },
  { href: '/blog/how-to-get-rid-of-nerves', title: 'How to Get Rid of Driving Test Nerves in 3 Simple Steps' },
  { href: '/blog/rotherham-test-centre', title: 'What to Expect at Rotherham Driving Test Centre' },
]

const ladSteps = [
  {
    letter: 'L',
    word: 'Look',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    border: 'rgba(245,158,11,0.35)',
    desc: 'Scan continuously — not just the car in front, but the car in front of that. The junction 200 metres away. The child near the kerb. The delivery van with its hazards on.',
  },
  {
    letter: 'A',
    word: 'Assess',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.10)',
    border: 'rgba(34,211,238,0.30)',
    desc: "What's the situation? Who else is here? What are they doing? What might they be about to do?",
  },
  {
    letter: 'D',
    word: 'Decide',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.10)',
    border: 'rgba(167,139,250,0.30)',
    desc: 'Based on what you see — and what you reasonably expect to happen — what is the right action? Adjust speed? Change lane? Cover the brake?',
  },
]

const whatIfList = [
  { icon: '🚗', text: 'That parked car opens its door?' },
  { icon: '🧒', text: 'That child runs out between those cars?' },
  { icon: '🚦', text: "The driver at that junction hasn't seen me?" },
  { icon: '🚲', text: 'That cyclist moves out to pass a pothole?' },
  { icon: '🐕', text: 'That dog pulls free of its lead?' },
]

const zones = [
  {
    label: 'Near Zone',
    range: '0–2 sec',
    color: '#ef4444',
    bg: '#1a0a0a',
    border: '#ef4444',
    desc: 'Immediate hazards in your path. What you must react to right now.',
  },
  {
    label: 'Middle Zone',
    range: '4–8 sec ahead',
    color: '#f59e0b',
    bg: '#1a1000',
    border: '#f59e0b',
    desc: 'Developing situations. The car slowing, the cyclist wobbling, the bus pulling out.',
  },
  {
    label: 'Far Zone',
    range: '8+ sec ahead',
    color: '#22d3ee',
    bg: '#001a1a',
    border: '#22d3ee',
    desc: 'Early warning signals. Brake lights, junctions, bends, pedestrian crossings.',
  },
]

const hotspots = [
  { icon: '🅿️', title: 'Parked vehicles', body: "Never the parked car itself — always what it's hiding. A child. A cyclist. A pedestrian stepping out without looking. Slow down. Give space. Look beyond." },
  { icon: '🏫', title: 'School zones', body: "Children can't judge vehicle speed the way adults can. They dart. They assume you'll stop. Treat every school zone as if something unexpected is about to happen — because statistically, it often does." },
  { icon: '🚧', title: 'Roadworks', body: "Normal rules don't apply. Lanes narrow. Signs change. Workers appear unexpectedly. Treat every roadwork zone as a completely different road." },
  { icon: '⏰', title: 'Rush hour', body: "Hurried drivers take risks. Someone running late will push a gap that isn't quite there. Rush hour isn't just slow — it's unpredictable. Your anticipation needs to be sharper, not lower." },
]

const vulnerable = [
  { emoji: '🚲', label: 'Cyclists', note: 'May move out for potholes or drainage covers with no signal' },
  { emoji: '🏍️', label: 'Motorcyclists', note: 'Harder to see, easily lost in blind spots' },
  { emoji: '🧓', label: 'Pedestrians', note: 'Children and elderly people may act unpredictably' },
  { emoji: '🐎', label: 'Horses', note: 'Pass wide and slow — a spooked horse can cause serious accidents' },
  { emoji: '🚑', label: 'Emergency vehicles', note: 'Know what to do before one appears' },
]

const s = {
  page: { fontFamily: 'system-ui, sans-serif', color: '#1a1a1a' },

  hero: { background: 'linear-gradient(160deg, #0d1b3e 0%, #0a0f1e 100%)', padding: '64px 0 0', position: 'relative', overflow: 'hidden' },
  heroGlow: { position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)', pointerEvents: 'none' },
  heroStripe: { position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #f59e0b, #22d3ee, #a78bfa)' },
  heroInner: { maxWidth: 700, margin: '0 auto', padding: '0 24px' },
  back: { color: 'rgba(255,255,255,0.4)', fontWeight: 500, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 28, textDecoration: 'none' },
  pill: { display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.45)', borderRadius: 999, padding: '4px 14px', fontSize: 11, color: '#fcd34d', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 20 },
  h1: { fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(26px,5vw,46px)', lineHeight: 1.06, color: '#fff', marginBottom: 20 },
  h1Gold: { color: '#fcd34d' },
  lead: { fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, maxWidth: 520, marginBottom: 32 },
  metaRow: { display: 'flex', gap: 20, flexWrap: 'wrap', paddingBottom: 32 },
  metaBadge: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' },
  metaVal: { color: 'rgba(255,255,255,0.7)', fontWeight: 500 },

  content: { maxWidth: 700, margin: '0 auto', padding: '52px 24px 80px' },
  intro: { fontSize: 18, fontWeight: 300, lineHeight: 1.85, color: '#444', marginBottom: 40, paddingBottom: 36, borderBottom: '2px solid #f0ede8' },

  sectionH2: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6, marginTop: 52 },
  sectionSub: { fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 28, lineHeight: 1.6 },

  defBox: { background: '#f0f7ff', border: '2px solid #1e3a8a', borderRadius: 14, padding: '28px 32px', margin: '40px 0' },
  defLabel: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1e3a8a', marginBottom: 10 },
  defQuote: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(16px,3vw,20px)', fontWeight: 700, color: '#1e3a8a', lineHeight: 1.45, marginBottom: 0, fontStyle: 'italic' },

  ladGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, margin: '32px 0' },
  ladCard: (color, bg, border) => ({ background: bg, border: `1.5px solid ${border}`, borderRadius: 14, padding: '24px 20px' }),
  ladLetter: (color) => ({ fontFamily: 'Raleway, sans-serif', fontSize: 48, fontWeight: 900, color, lineHeight: 1, marginBottom: 4 }),
  ladWord: { fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: 12 },
  ladDesc: { fontSize: 14, lineHeight: 1.65, color: '#333' },

  whatIfBox: { background: '#0d1b3e', borderRadius: 16, padding: '32px 28px', margin: '32px 0' },
  whatIfTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 22, color: '#fcd34d', marginBottom: 8 },
  whatIfSub: { fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 24, lineHeight: 1.5 },
  whatIfItem: { display: 'flex', alignItems: 'flex-start', gap: 14, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  whatIfEmoji: { fontSize: 22, flexShrink: 0, marginTop: 1 },
  whatIfText: { fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 },

  zonesWrap: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, margin: '32px 0' },
  zoneCard: (bg, border) => ({ background: bg, border: `2px solid ${border}`, borderRadius: 14, padding: '22px 18px' }),
  zoneRange: (color) => ({ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color, marginBottom: 6 }),
  zoneLabel: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 17, color: '#fff', marginBottom: 10 },
  zoneDesc: { fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 },

  hotspotGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '28px 0' },
  hotspotCard: { background: '#f9f9f9', border: '1.5px solid #e5e5e5', borderRadius: 12, padding: '22px 20px' },
  hotspotIcon: { fontSize: 28, marginBottom: 10 },
  hotspotTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 16, color: '#111', marginBottom: 8 },
  hotspotBody: { fontSize: 14, lineHeight: 1.65, color: '#444' },

  vulnGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14, margin: '28px 0' },
  vulnCard: { background: '#fff8ed', border: '1.5px solid #f59e0b44', borderRadius: 12, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 6 },
  vulnEmoji: { fontSize: 26 },
  vulnLabel: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 15, color: '#1a1a1a' },
  vulnNote: { fontSize: 13, color: '#666', lineHeight: 1.5 },

  tailgateBox: { background: '#fff5f5', border: '2px solid #dc2626', borderRadius: 14, padding: '28px 28px', margin: '40px 0' },
  tailgateTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 20, color: '#dc2626', marginBottom: 16 },
  tailgatePoint: { display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 12 },
  tailgateNum: { background: '#dc2626', color: '#fff', fontWeight: 700, fontSize: 13, width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 },
  tailgateText: { fontSize: 15, color: '#333', lineHeight: 1.6 },

  testBox: { background: 'linear-gradient(135deg, #0d1b3e, #0a0f1e)', border: '1.5px solid rgba(245,158,11,0.3)', borderRadius: 16, padding: '32px 28px', margin: '48px 0' },
  testTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 22, color: '#fcd34d', marginBottom: 14 },
  testBody: { fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 },

  bottomLine: { background: '#0d1b3e', borderRadius: 16, padding: '36px 32px', margin: '48px 0 0', textAlign: 'center' },
  bottomTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(18px,4vw,26px)', color: '#fff', marginBottom: 16 },
  bottomItems: { display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left', maxWidth: 420, margin: '0 auto 24px' },
  bottomItem: { display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 },
  bottomCheck: { color: '#fcd34d', fontWeight: 700, flexShrink: 0 },

  prose: { fontSize: 16, lineHeight: 1.8, color: '#333', marginBottom: 20 },

  relatedWrap: { marginTop: 64, paddingTop: 36, borderTop: '2px solid #f0ede8' },
  relatedTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 18, color: '#111', marginBottom: 18 },
  relatedList: { display: 'flex', flexDirection: 'column', gap: 10 },
  relatedLink: { fontSize: 15, color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500 },
}

const schemaLD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "The Skill That Separates Good Drivers From Everyone Else",
      "description": "Anticipation is the number one skill separating safe, confident drivers from those who react too late. Learn the LAD framework, three-zone scanning, and the 'What if?' technique used by experienced drivers.",
      "datePublished": "2026-04-21",
      "dateModified": "2026-04-21",
      "author": { "@type": "Person", "name": "Mike Hinton" },
      "publisher": {
        "@type": "Organization",
        "name": "Mike Hinton Driving School",
        "url": "https://www.mikehintondrivingschool.co.uk"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.mikehintondrivingschool.co.uk/blog/the-skill-that-separates-good-drivers"
      },
      "keywords": ["driving anticipation", "hazard perception", "LAD framework", "driving test tips", "observation faults", "defensive driving", "learner driver tips Rotherham"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is anticipation in driving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Anticipation in driving means taking action when you expect a hazard — before it requires you to slow down, change direction, or stop. It is the ability to read the road and predict what is about to happen rather than simply reacting to what has already happened."
          }
        },
        {
          "@type": "Question",
          "name": "What is the LAD framework in driving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The LAD framework stands for Look, Assess, Decide. Good drivers continuously Look at the road ahead beyond the car in front, Assess the developing situation, and Decide on the appropriate action before a hazard demands a response."
          }
        },
        {
          "@type": "Question",
          "name": "How do I improve my hazard perception for the driving test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Practice the 'What if?' habit on every drive. Ask yourself: what if that parked car opens its door? What if that pedestrian steps off the kerb? The more you do this, the faster and more naturally you will spot developing hazards — which is exactly what the DVSA's hazard perception test measures."
          }
        },
        {
          "@type": "Question",
          "name": "Why does tailgating ruin your anticipation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When you drive too close to the vehicle in front, you lose your view of the road ahead entirely and your stopping distance shrinks dangerously. You cannot see what is developing beyond the car you are following, so anticipation becomes impossible — you are purely reacting."
          }
        },
        {
          "@type": "Question",
          "name": "What causes observation faults on the driving test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Observation faults are most commonly caused by failing to anticipate hazards early enough — looking too close to the bonnet, not checking mirrors before responding to a hazard, and reacting late because the driver hadn't asked 'what if?' in advance."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mikehintondrivingschool.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mikehintondrivingschool.co.uk/blog" },
        { "@type": "ListItem", "position": 3, "name": "The Skill That Separates Good Drivers From Everyone Else", "item": "https://www.mikehintondrivingschool.co.uk/blog/the-skill-that-separates-good-drivers" }
      ]
    }
  ]
})

export default function BlogAnticipation() {
  return (
    <div style={s.page}>
      <Helmet>
        <title>The Skill That Separates Good Drivers From Everyone Else | Mike Hinton Driving School</title>
        <meta name="description" content="Anticipation is the number one skill separating safe, confident drivers from those who react too late. Learn the LAD framework, three-zone scanning, and the 'What if?' technique." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/the-skill-that-separates-good-drivers" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="The Skill That Separates Good Drivers From Everyone Else" />
        <meta property="og:description" content="Anticipation is the number one skill separating safe, confident drivers from those who react too late. Learn the LAD framework and 'What if?' technique." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/the-skill-that-separates-good-drivers" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{schemaLD}</script>
      </Helmet>

      {/* Hero */}
      <section style={s.hero}>
        <div style={s.heroStripe} />
        <div style={s.heroGlow} />
        <div style={s.heroInner}>
          <Link to="/blog" style={s.back}>← Back to blog</Link>
          <div style={s.pill}>Driving Skills</div>
          <h1 style={s.h1}>
            The Skill That Separates{' '}
            <span style={s.h1Gold}>Good Drivers</span>{' '}
            From Everyone Else
          </h1>
          <p style={s.lead}>
            Most learners obsess over mechanics. The biting point. Gear changes. Parallel park.
            But there is one skill above all of them — and most people never think about it.
          </p>
          <div style={s.metaRow}>
            <span style={s.metaBadge}>📅 <span style={s.metaVal}>April 2026</span></span>
            <span style={s.metaBadge}>⏱ <span style={s.metaVal}>5 min read</span></span>
            <span style={s.metaBadge}>✍️ <span style={s.metaVal}>Mike Hinton</span></span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={s.content}>

        <p style={s.intro}>
          Mechanics will get you started. Mirror. Signal. Manoeuvre. Those things matter — but
          they are not what separates drivers who pass first time from drivers who collect
          observation fault after observation fault. The skill that does that is <strong>anticipation</strong>.
          And it is the same skill that keeps experienced drivers safe for decades.
        </p>

        {/* Definition */}
        <div style={s.defBox}>
          <p style={s.defLabel}>Definition</p>
          <p style={s.defQuote}>
            "Taking action when you expect a hazard — before it requires you to slow down, change direction, or stop."
          </p>
        </div>

        <p style={s.prose}>
          Read that again. <em>Before</em> it requires you to act. Most drivers react.
          The best drivers anticipate. The difference is time — and time is everything on the road.
        </p>

        {/* LAD Framework */}
        <h2 style={s.sectionH2}>The LAD Framework</h2>
        <p style={s.sectionSub}>
          Good drivers work through three stages constantly, without even thinking about it.
        </p>

        <div style={s.ladGrid} className="anticipation-lad-grid">
          {ladSteps.map(step => (
            <div key={step.letter} style={s.ladCard(step.color, step.bg, step.border)}>
              <div style={s.ladLetter(step.color)}>{step.letter}</div>
              <div style={s.ladWord}>{step.word}</div>
              <p style={s.ladDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <p style={s.prose}>
          Most learners do the L. Some do the A. Very few consistently do the D — deciding before
          the hazard arrives, not when it is already on top of them.
        </p>

        {/* What If */}
        <h2 style={s.sectionH2}>The One Question That Changes Everything</h2>
        <p style={s.sectionSub}>Every time you approach a situation on the road, ask yourself this:</p>

        <div style={s.whatIfBox}>
          <p style={s.whatIfTitle}>"What if...?"</p>
          <p style={s.whatIfSub}>You are not being paranoid. You are being prepared.</p>
          {whatIfList.map((item, i) => (
            <div key={i} style={{ ...s.whatIfItem, borderBottom: i === whatIfList.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.08)' }}>
              <span style={s.whatIfEmoji}>{item.icon}</span>
              <span style={s.whatIfText}>What if {item.text}</span>
            </div>
          ))}
        </div>

        <p style={s.prose}>
          The driver who has already asked the question is always faster to respond than the driver
          who has not. That fraction of a second is the difference between a minor scare and a collision.
        </p>

        {/* 3-Zone Scanning */}
        <h2 style={s.sectionH2}>What You Should Actually Be Looking At</h2>
        <p style={s.sectionSub}>
          Most learners look too close — gaze fixed on the road five metres in front of the bonnet.
          Good drivers scan three zones simultaneously.
        </p>

        <div style={s.zonesWrap} className="anticipation-zones-grid">
          {zones.map(z => (
            <div key={z.label} style={s.zoneCard(z.bg, z.border)}>
              <div style={s.zoneRange(z.color)}>{z.range}</div>
              <div style={s.zoneLabel}>{z.label}</div>
              <p style={s.zoneDesc}>{z.desc}</p>
            </div>
          ))}
        </div>

        <p style={s.prose}>
          The further ahead you look, the more time you have. The more time you have, the calmer
          and smoother your driving becomes. Smooth driving is not just comfortable — it is
          the examiner's signal that you are reading the road, not just reacting to it.
        </p>

        {/* Hotspots */}
        <h2 style={s.sectionH2}>The Situations That Catch Drivers Out</h2>
        <p style={s.sectionSub}>These are the places where anticipation matters most.</p>

        <div style={s.hotspotGrid} className="anticipation-hotspot-grid">
          {hotspots.map(h => (
            <div key={h.title} style={s.hotspotCard}>
              <div style={s.hotspotIcon}>{h.icon}</div>
              <div style={s.hotspotTitle}>{h.title}</div>
              <p style={s.hotspotBody}>{h.body}</p>
            </div>
          ))}
        </div>

        {/* Vulnerable road users */}
        <h2 style={s.sectionH2}>Vulnerable Road Users</h2>
        <p style={s.sectionSub}>Some road users need more of your anticipation than others.</p>

        <div style={s.vulnGrid}>
          {vulnerable.map(v => (
            <div key={v.label} style={s.vulnCard}>
              <span style={s.vulnEmoji}>{v.emoji}</span>
              <span style={s.vulnLabel}>{v.label}</span>
              <span style={s.vulnNote}>{v.note}</span>
            </div>
          ))}
        </div>

        {/* Tailgating */}
        <div style={s.tailgateBox}>
          <p style={s.tailgateTitle}>Tailgating Kills Anticipation</p>
          <div style={s.tailgatePoint}>
            <div style={s.tailgateNum}>1</div>
            <p style={s.tailgateText}>Your stopping distance shrinks to a point where a reaction is no longer fast enough.</p>
          </div>
          <div style={s.tailgatePoint}>
            <div style={s.tailgateNum}>2</div>
            <p style={s.tailgateText}>Your view of the road ahead disappears entirely — you cannot see what is developing beyond the car in front.</p>
          </div>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.65, marginTop: 8, marginBottom: 0 }}>
            Back off. The extra two seconds of following distance will save you far more time
            than you will ever lose by maintaining it. And it might save a life.
          </p>
        </div>

        {/* Test relevance */}
        <div style={s.testBox}>
          <p style={s.testTitle}>What This Means on Your Driving Test</p>
          <p style={s.testBody}>
            Examiners do not just assess whether you hit the brakes in time. They assess whether
            you were <em>reading the road</em>. A driver who smoothly reduces speed well before a hazard
            looks completely different to a driver who brakes sharply because the hazard surprised them.
            The first driver passes. The second driver wonders why they got an observation fault.
          </p>
          <p style={{ ...s.testBody, marginTop: 14 }}>
            Your{' '}
            <Link to="/the-driving-test" style={{ color: '#fcd34d', textDecoration: 'underline' }}>
              hazard perception test
            </Link>{' '}
            is literally a test of anticipation. And the practical test? Anticipation is
            threaded through every single fault category.
          </p>
        </div>

        {/* Bottom line */}
        <div style={s.bottomLine}>
          <p style={s.bottomTitle}>The Bottom Line</p>
          <div style={s.bottomItems}>
            {[
              'Look further ahead than feels natural',
              'Ask "What if?" every time you approach a situation',
              'Give vulnerable road users more space than you think they need',
              'Back off the car in front — your view is your most important asset',
            ].map((item, i) => (
              <div key={i} style={s.bottomItem}>
                <span style={s.bottomCheck}>→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 0 }}>
            The road is always telling you what is about to happen. Learn to listen.
          </p>
        </div>

        {/* Related */}
        <div style={s.relatedWrap}>
          <p style={s.relatedTitle}>More from the blog</p>
          <div style={s.relatedList}>
            {related.map(r => (
              <Link key={r.href} to={r.href} style={s.relatedLink}>
                → {r.title}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
