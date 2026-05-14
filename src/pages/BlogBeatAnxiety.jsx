import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const related = [
  { href: '/blog/how-to-get-rid-of-nerves', title: 'How to Get Rid of Driving Test Nerves in 3 Simple Steps' },
  { href: '/blog/driving-test-anxiety-causes-failures', title: 'Does Driving Test Anxiety Actually Cause Failures?' },
  { href: '/blog/make-the-driving-examiner-like-you', title: 'The Secret of Making the Driving Examiner Like You' },
]

const tips = [
  {
    num: '01',
    emoji: '🧠',
    title: 'Distract Your Brain',
    colour: '#f59e0b',
    colourLight: '#fffbeb',
    colourBorder: '#fde68a',
    body: "The 24 hours before your test is prime overthinking time. Left to its own devices, your brain will replay every mistake you've ever made behind the wheel.",
    action: "Don't sit at home visualising failure. Go for a walk. See a film. Meet friends. Keep your brain too busy to spiral — because an idle mind is anxiety's best friend.",
    tip: 'Plan something enjoyable for the evening before. Not a late night out — just something that keeps your mind occupied and your mood positive.',
  },
  {
    num: '02',
    emoji: '🏃',
    title: 'Burn Off the Cortisol',
    colour: '#10b981',
    colourLight: '#f0fdf4',
    colourBorder: '#a7f3d0',
    body: "Anxiety is a physical response. Cortisol and adrenaline flood your body, making your heart race and your hands shake. Sitting still makes it worse — the chemicals have nowhere to go.",
    action: "A quick 20-minute walk on the morning of your test is one of the most effective things you can do. It burns off stress hormones, clears your head, and settles those stomach butterflies before you even get in the car.",
    tip: "Don't go for a run — you want to arrive calm, not exhausted. A brisk walk is perfect.",
  },
  {
    num: '03',
    emoji: '☕',
    title: 'Watch the Caffeine',
    colour: '#8b5cf6',
    colourLight: '#f5f3ff',
    colourBorder: '#ddd6fe',
    body: "Most of us can't function without coffee — but test day is not the day to discover your limit. Too much caffeine on an already-anxious system means shaky hands, a racing heart and heightened nerves.",
    action: "Eat a light, balanced meal before your test. Keep your caffeine intake normal — or slightly lower than usual. Avoid energy drinks entirely. A steady blood sugar level helps keep your mood and reactions consistent.",
    tip: "If you normally have one coffee in the morning, have one coffee. Don't skip it entirely (you'll feel off) and don't add extra for 'focus'.",
  },
  {
    num: '04',
    emoji: '👟',
    title: 'Prioritise Pedal Feel',
    colour: '#0ea5e9',
    colourLight: '#f0f9ff',
    colourBorder: '#bae6fd',
    body: "Test day is not the day for a fashion statement. What you wear has a real, practical impact on how you drive — particularly your footwear.",
    action: "Wear light, breathable clothes so you're comfortable for the full duration of the test. Most importantly — flat, thin-soled shoes. You need to feel the bite point and the brake response clearly. Thick-soled trainers or heels reduce that sensitivity exactly when you need it most.",
    tip: "Wear what you've practised in. Your body adapts to familiar clothes and footwear — switching to something new on test day adds an unnecessary variable.",
  },
  {
    num: '05',
    emoji: '🐢',
    title: 'Slow. Everything. Down.',
    colour: '#ef4444',
    colourLight: '#fff5f5',
    colourBorder: '#fecaca',
    body: "Nerves make you rush. Rushing causes mistakes. The examiner is not looking for speed or perfection — they are looking for safety.",
    action: "Take that extra second at junctions. Check your mirrors twice if you want to. Signal early. When the examiner gives you a direction, take a breath before responding. Slow, deliberate, safe driving is exactly what passes the test.",
    tip: "Your instructor would not have let you book your test if you were not ready. Trust that judgement. You have been assessed by someone who knows exactly what the standard is.",
  },
]

const schemaLD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "5 Ways to BEAT Driving Test Anxiety (and actually pass!)",
      "description": "Most people don't fail their driving test because they can't drive — they fail because nerves take over. Here are 5 proven ways to beat driving test anxiety and stay calm on the day.",
      "datePublished": "2026-05-14",
      "dateModified": "2026-05-14",
      "author": { "@type": "Person", "name": "Mike Hinton" },
      "publisher": {
        "@type": "Organization",
        "name": "Mike Hinton Driving School",
        "url": "https://www.mikehintondrivingschool.co.uk"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.mikehintondrivingschool.co.uk/blog/beat-driving-test-anxiety"
      },
      "keywords": ["driving test anxiety", "beat driving test nerves", "driving test tips UK", "how to calm nerves driving test", "driving test pass tips Rotherham"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I calm my nerves before a driving test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Keep busy the evening before to avoid overthinking. On the morning, go for a 20-minute walk to burn off cortisol. Eat a light meal, keep caffeine normal, wear comfortable flat shoes, and take your time on the test — slow and safe beats fast and flustered."
          }
        },
        {
          "@type": "Question",
          "name": "Does anxiety actually cause driving test failures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. With the UK pass rate at just 48.5%, nerves are one of the biggest contributing factors to failure. Anxiety causes rushing, hesitation and concentration lapses — all of which produce faults on the test sheet."
          }
        },
        {
          "@type": "Question",
          "name": "Should I drink coffee before my driving test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stick to your normal caffeine intake. If you usually have one coffee, have one coffee. Too much caffeine amplifies anxiety symptoms — shaky hands, racing heart and heightened nerves. Avoid energy drinks entirely on test day."
          }
        },
        {
          "@type": "Question",
          "name": "What should I wear for my driving test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wear light, comfortable clothes you have practised in. Most importantly, wear flat thin-soled shoes — you need to clearly feel the clutch bite point and brake response. Thick soles or heels reduce that pedal sensitivity."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mikehintondrivingschool.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mikehintondrivingschool.co.uk/blog" },
        { "@type": "ListItem", "position": 3, "name": "5 Ways to BEAT Driving Test Anxiety", "item": "https://www.mikehintondrivingschool.co.uk/blog/beat-driving-test-anxiety" }
      ]
    }
  ]
})

export default function BlogBeatAnxiety() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#1a1a1a' }}>
      <Helmet>
        <title>5 Ways to BEAT Driving Test Anxiety (and actually pass!) | Mike Hinton Driving School</title>
        <meta name="description" content="Most people don't fail their driving test because they can't drive — they fail because nerves take over. Here are 5 proven ways to beat driving test anxiety and stay calm on the day." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/beat-driving-test-anxiety" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="5 Ways to BEAT Driving Test Anxiety (and actually pass!)" />
        <meta property="og:description" content="Most people don't fail because they can't drive — they fail because nerves take over. Here are 5 ways to stay calm and pass." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/beat-driving-test-anxiety" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5 Ways to BEAT Driving Test Anxiety (and actually pass!)" />
        <meta name="twitter:description" content="Most people don't fail because they can't drive — they fail because nerves take over. 5 ways to stay calm and pass." />
        <script type="application/ld+json">{schemaLD}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #7c1d1d 0%, #450a0a 100%)', padding: '64px 0 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #f59e0b, #ef4444, #f97316)' }} />
        <div style={{ position: 'absolute', top: -80, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 28, textDecoration: 'none' }}>← Back to blog</Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.45)', borderRadius: 999, padding: '4px 14px', fontSize: 11, color: '#fca5a5', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 20 }}>Anxiety &amp; Nerves</div>
          <h1 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5.5vw,50px)', lineHeight: 1.04, color: '#fff', marginBottom: 20 }}>
            5 Ways to{' '}
            <span style={{ color: '#fbbf24', fontStyle: 'italic' }}>BEAT</span>{' '}
            Driving Test Anxiety
            <br />
            <span style={{ fontSize: '0.72em', color: 'rgba(255,255,255,0.7)', fontStyle: 'normal' }}>(and actually pass!)</span>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 520, marginBottom: 32 }}>
            Most people don't fail their driving test because they can't drive.
            They fail because the nerves take over. Here's how to make sure that doesn't happen to you.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', paddingBottom: 32 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>📅 <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>May 2026</span></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>⏱ <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>3 min read</span></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>✍️ <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Mike Hinton</span></span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '52px 24px 80px' }}>

        {/* Stat callout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'center', background: '#fff5f5', border: '2px solid #fecaca', borderRadius: 16, padding: '28px 28px', marginBottom: 48 }} className="beat-anxiety-stat-box">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,8vw,56px)', color: '#dc2626', lineHeight: 1 }}>48.5%</div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ef4444', marginTop: 4 }}>UK pass rate</div>
          </div>
          <div>
            <p style={{ fontSize: 16, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.6, marginBottom: 6 }}>Staying calm is half the battle.</p>
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.65, margin: 0 }}>The average UK driving test pass rate sits at just 48.5%. Nerves — not skill — are one of the biggest reasons people fail. The tips below change that.</p>
          </div>
        </div>

        {/* 5 Tips */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 52 }}>
          {tips.map(tip => (
            <div key={tip.num} style={{ background: tip.colourLight, border: `2px solid ${tip.colourBorder}`, borderRadius: 16, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
              {/* Background number */}
              <div style={{ position: 'absolute', top: -10, right: 16, fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 80, color: tip.colourBorder, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>{tip.num}</div>
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{tip.emoji}</span>
                  <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(17px,3vw,20px)', color: tip.colour }}>{tip.title}</span>
                </div>
                <p style={{ fontSize: 15, color: '#333', lineHeight: 1.75, marginBottom: 10 }}>{tip.body}</p>
                <p style={{ fontSize: 15, color: '#111', lineHeight: 1.75, fontWeight: 500, marginBottom: 16 }}>{tip.action}</p>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'rgba(255,255,255,0.7)', borderRadius: 10, padding: '12px 14px' }}>
                  <span style={{ color: tip.colour, fontWeight: 700, flexShrink: 0, fontSize: 14 }}>💡</span>
                  <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>{tip.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* You've got this */}
        <div style={{ background: 'linear-gradient(135deg, #7c1d1d, #450a0a)', borderRadius: 16, padding: '40px 32px', textAlign: 'center', marginBottom: 0 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(22px,4vw,30px)', color: '#fbbf24', marginBottom: 16 }}>You've Got This.</p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 20px' }}>
            Your instructor would not have let you book your test if you were not ready.
            That decision is based on hours of observation — not a guess.
            Trust the process. Trust your training. Go show them what you can do.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
            {['#drivingtips', '#DrivingAnxiety', '#drivingtest', '#newdriver', '#youvegotthis'].map(tag => (
              <span key={tag} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{tag}</span>
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
