import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const related = [
  { href: '/blog/the-skill-that-separates-good-drivers', title: 'The Skill That Separates Good Drivers From Everyone Else' },
  { href: '/blog/is-your-car-safe-to-drive', title: 'Is Your Car Actually Safe to Drive?' },
  { href: '/blog/beat-driving-test-anxiety', title: '5 Ways to BEAT Driving Test Anxiety (and actually pass!)' },
]

const schemaLD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "Speed and Survival: The Numbers Every Driver Needs to See",
      "description": "At 20 mph, 9 in 10 people survive being hit by a car. At 40 mph, only 1 in 10 does. The numbers behind speed are stark — and every driver should understand them.",
      "datePublished": "2026-08-25",
      "dateModified": "2026-08-25",
      "author": { "@type": "Person", "name": "Mike Hinton" },
      "publisher": {
        "@type": "Organization",
        "name": "Mike Hinton Driving School",
        "url": "https://www.mikehintondrivingschool.co.uk"
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mikehintondrivingschool.co.uk/blog/speed-and-survival" }
    }
  ]
})

export default function BlogSpeedSurvival() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#1a1a1a' }}>
      <Helmet>
        <title>Speed and Survival: The Numbers Every Driver Needs to See | Mike Hinton Driving School</title>
        <meta name="description" content="At 20 mph, 9 in 10 people survive being hit by a car. At 40 mph, only 1 in 10 does. The numbers behind speed are stark — and every driver should understand them." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/speed-and-survival" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Speed and Survival: The Numbers Every Driver Needs to See" />
        <meta property="og:description" content="At 20 mph you have a 90% chance of surviving. At 40 mph? Just 10%. Here's the brutal maths behind speed." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/speed-and-survival" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Speed and Survival: The Numbers Every Driver Needs to See" />
        <meta name="twitter:description" content="At 20 mph you have a 90% chance of surviving. At 40 mph? Just 10%. Here's the brutal maths behind speed." />
        <script type="application/ld+json">{schemaLD}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1a1a2e 0%, #0f0f1a 100%)', padding: '64px 0 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #dc2626, #ef4444, #f97316)' }} />
        <div style={{ position: 'absolute', top: -80, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,38,38,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 28, textDecoration: 'none' }}>← Back to blog</Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(220,38,38,0.2)', border: '1px solid rgba(220,38,38,0.45)', borderRadius: 999, padding: '4px 14px', fontSize: 11, color: '#fca5a5', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 20 }}>Road Safety</div>
          <h1 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5.5vw,50px)', lineHeight: 1.04, color: '#fff', marginBottom: 20 }}>
            Speed and Survival:<br />
            <span style={{ color: '#f87171', fontStyle: 'italic' }}>The Numbers Every Driver</span><br />
            <span style={{ color: '#fff' }}>Needs to See</span>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 540, marginBottom: 32 }}>
            Most drivers think of speed limits as rules. They're not. They're survival thresholds — and the difference between 20 and 40 mph is the difference between almost certainly living and almost certainly dying.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', paddingBottom: 32 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>📅 <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>August 2026</span></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>⏱ <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>4 min read</span></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>✍️ <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Mike Hinton</span></span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '52px 24px 80px' }}>

        {/* Three stat boxes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 48 }}>
          {[
            { speed: '20 mph', chance: '90%', label: 'survival chance', bg: '#f0fdf4', border: '#86efac', numCol: '#16a34a', labelCol: '#15803d' },
            { speed: '30 mph', chance: '50%', label: 'survival chance', bg: '#fffbeb', border: '#fcd34d', numCol: '#d97706', labelCol: '#b45309' },
            { speed: '40 mph', chance: '10%', label: 'survival chance', bg: '#fff1f2', border: '#fda4af', numCol: '#dc2626', labelCol: '#b91c1c' },
          ].map(s => (
            <div key={s.speed} style={{ background: s.bg, border: `2px solid ${s.border}`, borderRadius: 14, padding: '20px 12px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(26px,5vw,40px)', color: s.numCol, lineHeight: 1 }}>{s.chance}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: s.labelCol, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 4, marginBottom: 8 }}>{s.label}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#374151' }}>{s.speed}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#333', marginBottom: 20 }}>
          Let that sink in. At 30 mph — a speed most of us treat as completely normal — you are effectively flipping a coin with someone's life the moment they step into your path. At 40 mph, the coin lands in your favour only once in ten.
        </p>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#333', marginBottom: 40 }}>
          These aren't scare tactics. They're physics. And understanding them is one of the most important things any driver can do.
        </p>

        {/* Section: Why speed changes everything */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3.5vw,26px)', color: '#111', marginBottom: 20, borderLeft: '4px solid #dc2626', paddingLeft: 16 }}>
          Why Speed Changes Everything
        </h2>

        {/* 44 feet callout */}
        <div style={{ background: '#1a1a2e', borderRadius: 16, padding: '28px 28px', marginBottom: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
          <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(32px,6vw,48px)', color: '#f87171', lineHeight: 1, flexShrink: 0 }}>44ft</div>
          <div>
            <p style={{ fontWeight: 700, color: '#fff', fontSize: 15, marginBottom: 6 }}>Every. Single. Second.</p>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>At 30 mph, your car travels 44 feet — about 13.4 metres — every second. That's the length of a double-decker bus. Before your brain has even registered the hazard, you've already covered that distance.</p>
          </div>
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#333', marginBottom: 20 }}>
          There are three reasons why even small speed increases become catastrophic:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
          {[
            {
              icon: '🧠',
              title: 'Less time to react',
              body: 'The Highway Code assumes a thinking time of 0.67 seconds — but research suggests the average driver actually takes 1.5 seconds to react. At 30 mph, that\'s over 20 metres of travel before your foot even touches the brake. If a child runs out, that gap simply isn\'t there.',
              colour: '#7c3aed', light: '#f5f3ff', border: '#ddd6fe',
            },
            {
              icon: '💥',
              title: 'Exponentially more force',
              body: 'Crash force doesn\'t increase in a straight line — it increases with the square of the speed. A car at 30 mph has twice the crash energy of a car at 20 mph. At 40 mph it\'s four times as much. Bones, organs, and the brain absorb that energy. The human body has limits.',
              colour: '#dc2626', light: '#fff1f2', border: '#fecaca',
            },
            {
              icon: '⏱',
              title: 'No room for error',
              body: 'At 30 mph, the total stopping distance in dry conditions is around 23 metres — and that\'s with perfect reactions and perfect brakes. In wet weather that number roughly doubles. A child, a cyclist, a dog — none of them wait for optimal conditions.',
              colour: '#d97706', light: '#fffbeb', border: '#fde68a',
            },
          ].map(item => (
            <div key={item.title} style={{ background: item.light, border: `2px solid ${item.border}`, borderRadius: 14, padding: '22px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 17, color: item.colour }}>{item.title}</span>
              </div>
              <p style={{ fontSize: 15, color: '#333', lineHeight: 1.8, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* Section: The community impact */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3.5vw,26px)', color: '#111', marginBottom: 20, borderLeft: '4px solid #dc2626', paddingLeft: 16 }}>
          It's Not Just the Driver's Choice
        </h2>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#333', marginBottom: 20 }}>
          Speed doesn't only affect the person behind the wheel. According to the Royal Society for the Prevention of Accidents (RoSPA), the risk of a pedestrian dying in a collision is <strong>5.5 times higher</strong> when a vehicle is travelling between 30–40 mph compared to 20–30 mph.
        </p>

        <div style={{ background: '#fff', border: '2px solid #e5e7eb', borderRadius: 16, padding: '24px 24px', marginBottom: 28 }}>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 15, color: '#dc2626', marginBottom: 12 }}>📊 What the data shows:</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Reducing limits from 30 to 20 mph in built-up areas typically reduces casualties by more than 20%',
              'The pedestrian death rate is 5.5× higher at 30–40 mph than at 20–30 mph (RoSPA)',
              'Real-world stopping distances are significantly longer than Highway Code figures — most drivers react in 1.5 seconds, more than twice the assumed 0.67 seconds',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: '#333', lineHeight: 1.7 }}>
                <span style={{ color: '#dc2626', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#333', marginBottom: 40 }}>
          These aren't abstract statistics. These are streets in Rotherham — roads near schools, parks, and housing estates where real people walk every day.
        </p>

        {/* Section: What this means for your driving */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(20px,3.5vw,26px)', color: '#111', marginBottom: 20, borderLeft: '4px solid #dc2626', paddingLeft: 16 }}>
          What This Means for Your Driving
        </h2>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#333', marginBottom: 20 }}>
          Speed limits aren't suggestions — but they're also not a target. A 30 mph sign means <em>no faster than 30 mph in ideal conditions</em>. Near a school at 3pm, in rain, or on a narrow road with parked cars, 20 mph might already be too fast.
        </p>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#333', marginBottom: 20 }}>
          Good drivers don't ask "what's the limit?" They ask "what speed can I safely stop from if something unexpected happens?"
        </p>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: '#333', marginBottom: 40 }}>
          That shift in thinking — from rule-following to hazard-awareness — is what separates drivers who pass their test from drivers who are genuinely safe on the road for life.
        </p>

        {/* Closing callout */}
        <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #0f0f1a)', borderRadius: 16, padding: '40px 32px', textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🚗</div>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(20px,4vw,28px)', color: '#f87171', marginBottom: 16 }}>Speed limits exist for a reason.</p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.85, maxWidth: 500, margin: '0 auto 20px' }}>
            The next time you're tempted to push past 30 in a residential area, picture that coin toss. Because that's exactly what it is — for the person who just stepped off the pavement.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            {['#roadsafety', '#speedkills', '#newdriver', '#drivingtips', '#Rotherham'].map(tag => (
              <span key={tag} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: 64, paddingTop: 36, borderTop: '2px solid #f0ede8' }}>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 18, color: '#111', marginBottom: 18 }}>More from the blog</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {related.map(r => (
              <Link key={r.href} to={r.href} style={{ fontSize: 15, color: '#dc2626', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
                → {r.title}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
