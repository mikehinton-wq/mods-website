import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const related = [
  { href: '/blog/learning-to-drive-neurodivergent', title: 'Learning to Drive with ADHD or Dyspraxia' },
  { href: '/blog/how-to-get-rid-of-nerves', title: 'How to Get Rid of Driving Test Nerves in 3 Simple Steps' },
  { href: '/blog/make-the-driving-examiner-like-you', title: 'The Secret of Making the Driving Examiner Like You' },
]

const challenges = [
  { icon: '🔢', title: 'Speed limits', body: 'Matching a number on a sign to a position on a dial speedometer requires number-sense under time pressure — exactly what dyscalculia makes difficult.' },
  { icon: '📏', title: 'Gap and distance judgement', body: 'Pulling out at junctions, merging, parking — all rely on estimating whether there is enough space. Dyscalculic learners often feel genuinely uncertain here.' },
  { icon: '⏱️', title: 'Timing gaps in traffic', body: "Is that car close enough to be a risk? Working out speed vs. distance in real time is one of driving's hardest tasks for dyscalculic minds." },
  { icon: '🔄', title: 'Roundabout exits', body: '"Take the third exit" means counting exits under pressure while managing mirrors, signals and lane position at the same time.' },
  { icon: '🗺️', title: 'Road numbers', body: "A34, M1, B4095 — holding multi-digit road numbers in working memory while also driving is genuinely hard when numbers don't stick." },
  { icon: '↔️', title: 'Left and right', body: 'Left/right confusion co-occurs with dyscalculia far more often than people realise — and it compounds every junction, roundabout and lane change.' },
]

const carTips = [
  {
    heading: 'Go automatic',
    body: "Removing gear changes eliminates a whole layer of sequential, numerical cognitive load. The British Dyslexia Association specifically recommends automatic cars for learners with number-processing difficulties. One less thing to think about = more headspace for the road.",
    tag: 'Biggest win',
    tagColor: '#16a34a',
    tagBg: '#f0fdf4',
  },
  {
    heading: "Use a digital speedometer",
    body: "Matching a displayed number to a sign is far easier than reading a dial and inferring where an unmarked speed sits between two graduations. Many modern cars have digital displays — use them. Some sat-navs also show current speed.",
    tag: 'Quick fix',
    tagColor: '#0369a1',
    tagBg: '#f0f9ff',
  },
  {
    heading: "Colour-code left and right",
    body: "Small coloured stickers on the dashboard — red on the left, green on the right — give you an instant reference without thinking. The DVSA permits these during the practical test. Some learners mark their thumbnails with L and R before lessons.",
    tag: 'DVSA approved',
    tagColor: '#7c3aed',
    tagBg: '#f5f0ff',
  },
  {
    heading: "Driver's side / passenger's side",
    body: "Replace left/right entirely with \"driver's side\" and \"passenger's side.\" These are concrete, consistent, and tied to your physical position in the car — no abstract number-direction mapping needed.",
    tag: 'Instructor tip',
    tagColor: '#b45309',
    tagBg: '#fffbeb',
  },
  {
    heading: "Name roundabout exits by landmark",
    body: "Instead of \"take the third exit,\" practise saying \"take the exit by the petrol station\" or \"the one past the traffic lights.\" Landmark navigation removes ordinal number counting entirely until your confidence builds.",
    tag: 'Instructor tip',
    tagColor: '#b45309',
    tagBg: '#fffbeb',
  },
  {
    heading: "Telephone pole timing for signals",
    body: "UK telephone poles are roughly 100 feet apart — use them as physical distance markers. \"Signal when you pass the second pole before the junction\" gives you a concrete, repeatable cue that doesn't rely on distance estimation.",
    tag: 'Distance hack',
    tagColor: '#0369a1',
    tagBg: '#f0f9ff',
  },
]

const theoryTips = [
  { icon: '🧠', tip: 'Learn stopping distances as patterns, not sums', detail: 'At 30 mph: thinking = 3 car lengths, braking = 6 car lengths, total = 9. At 70 mph: 21 + 75 = 96 feet. Rhymes and visual patterns beat arithmetic.' },
  { icon: '🃏', tip: 'Flashcards with pictures, not numbers', detail: 'Draw car lengths visually. Your brain processes image-based distance better than abstract numbers.' },
  { icon: '🖥️', tip: 'Use the voiceover option in the test', detail: 'The theory test offers a voiceover that reads every question and answer aloud through headphones. No evidence needed — just request it when booking.' },
  { icon: '⏰', tip: 'Apply for extra time', detail: "You're entitled to up to double time on the theory test with supporting documentation. That's 1 hour 57 minutes instead of 57 minutes. Don't sit a pressured time-limited test when you don't have to." },
  { icon: '🔁', tip: 'Repeat hazard perception clips', detail: "Hazard perception rewards pattern recognition — not calculation. Practice repeatedly. Your brain will start recognising developing hazards automatically." },
]

const adjustments = [
  { label: 'Up to double time', detail: 'Theory test: 57 mins becomes up to 1 hr 57 mins', icon: '⏳' },
  { label: 'Voiceover', detail: 'Questions and answers read aloud — no evidence needed', icon: '🔊' },
  { label: 'Coloured stickers', detail: 'Left/right dashboard markers permitted in the practical test', icon: '🟢' },
  { label: 'Simplified instructions', detail: 'Examiner gives no more than two directions at a time', icon: '💬' },
  { label: 'Hand gestures', detail: 'Directions accompanied by pointing, not just words', icon: '👉' },
  { label: 'Route diagram', detail: 'Independent driving map printed on cream paper to reduce visual noise', icon: '🗺️' },
]

const schemaLD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "Learning to Drive with Dyscalculia: Techniques That Actually Work",
      "description": "Dyscalculia affects speed awareness, gap judgement, roundabout exits and left/right directions. Here are the practical techniques, adaptations and DVSA accommodations that help dyscalculic learners pass their driving test.",
      "datePublished": "2026-05-06",
      "dateModified": "2026-05-06",
      "author": { "@type": "Person", "name": "Mike Hinton" },
      "publisher": {
        "@type": "Organization",
        "name": "Mike Hinton Driving School",
        "url": "https://www.mikehintondrivingschool.co.uk"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.mikehintondrivingschool.co.uk/blog/learning-to-drive-with-dyscalculia"
      },
      "keywords": ["dyscalculia driving", "learning to drive dyscalculia", "dyscalculia driving test UK", "DVSA reasonable adjustments dyscalculia", "neurodivergent driving tips", "dyscalculia techniques driving school Rotherham"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you learn to drive if you have dyscalculia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dyscalculia is not a barrier to driving. With the right instructor, practical adaptations and DVSA reasonable adjustments, dyscalculic learners can and do pass their test and become safe, confident drivers."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to tell the DVLA I have dyscalculia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Dyscalculia does not need to be declared to the DVLA when applying for a provisional licence and is not a bar to obtaining a standard car driving licence."
          }
        },
        {
          "@type": "Question",
          "name": "What DVSA adjustments are available for dyscalculia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For the theory test: up to double time, a voiceover reading questions aloud (no evidence needed), and a reader/recorder. For the practical test: the examiner can give no more than two directions at a time, use hand gestures alongside verbal instructions, and candidates are permitted to use coloured dashboard stickers for left/right reference."
          }
        },
        {
          "@type": "Question",
          "name": "Is an automatic car better for dyscalculic learners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — the British Dyslexia Association specifically recommends automatic cars for learners with number-processing difficulties. Removing gear changes eliminates a layer of sequential cognitive load, freeing up mental capacity for road awareness, speed management and positioning."
          }
        },
        {
          "@type": "Question",
          "name": "How do you remember stopping distances with dyscalculia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Learn them as visual patterns and rhymes rather than calculations. At 30 mph: 3 car lengths thinking + 6 car lengths braking = 9 total. Use flashcards with drawn car lengths rather than abstract numbers. Repeated practice with hazard perception clips also builds pattern recognition that bypasses number calculation."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mikehintondrivingschool.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mikehintondrivingschool.co.uk/blog" },
        { "@type": "ListItem", "position": 3, "name": "Learning to Drive with Dyscalculia", "item": "https://www.mikehintondrivingschool.co.uk/blog/learning-to-drive-with-dyscalculia" }
      ]
    }
  ]
})

export default function BlogDyscalculia() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#1a1a1a' }}>
      <Helmet>
        <title>Learning to Drive with Dyscalculia: Techniques That Actually Work | Mike Hinton Driving School</title>
        <meta name="description" content="Dyscalculia affects speed awareness, gap judgement, roundabout exits and left/right directions. Here are the practical techniques, adaptations and DVSA accommodations that help." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/learning-to-drive-with-dyscalculia" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Learning to Drive with Dyscalculia: Techniques That Actually Work" />
        <meta property="og:description" content="Practical techniques, car adaptations and DVSA adjustments for dyscalculic learner drivers in the UK." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/learning-to-drive-with-dyscalculia" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{schemaLD}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #0c1f3f 0%, #071628 100%)', padding: '64px 0 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #38bdf8, #818cf8, #e879f9)' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -60, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 28, textDecoration: 'none' }}>← Back to blog</Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.4)', borderRadius: 999, padding: '4px 14px', fontSize: 11, color: '#7dd3fc', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 20 }}>Neurodivergent</div>
          <h1 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(26px,5vw,44px)', lineHeight: 1.07, color: '#fff', marginBottom: 20 }}>
            Learning to Drive with{' '}
            <span style={{ color: '#7dd3fc' }}>Dyscalculia</span>
            <br />Techniques That Actually Work
          </h1>
          <p style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, maxWidth: 520, marginBottom: 32 }}>
            Numbers are everywhere in driving — speed limits, distances, roundabout exits, gap judgement.
            If numbers have always been your enemy, driving can feel impossible. It is not.
            Here is what actually helps.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', paddingBottom: 32 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>📅 <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>May 2026</span></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>⏱ <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>6 min read</span></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>✍️ <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Mike Hinton</span></span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '52px 24px 80px' }}>

        {/* Intro */}
        <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.85, color: '#444', marginBottom: 16, paddingBottom: 0 }}>
          Dyscalculia affects around 1 in 20 people — roughly the same prevalence as dyslexia. It is a
          neurological difference in how the brain processes numerical information. It is not about
          being bad at maths. It is not laziness. And it is absolutely not a bar to driving.
        </p>
        <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.85, color: '#444', marginBottom: 40, paddingBottom: 36, borderBottom: '2px solid #f0ede8' }}>
          But driving is a number-heavy skill. Speed limits. Stopping distances. Roundabout exits.
          Gap judgement. Left and right. If dyscalculia is part of your life, these are the exact
          areas that will feel hardest — and where the right techniques make all the difference.
        </p>

        {/* What is dyscalculia */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6, marginTop: 0 }}>What Is Dyscalculia?</h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 24, lineHeight: 1.6 }}>A quick, no-jargon explanation.</p>

        <div style={{ background: '#f0f9ff', border: '2px solid #38bdf8', borderRadius: 14, padding: '28px 28px', marginBottom: 48 }}>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#0c4a6e', marginBottom: 14 }}>
            Dyscalculia is a specific learning difference that affects the ability to understand, recall and work with numbers.
            People with dyscalculia often struggle to:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 20px' }} className="dyscalculia-two-col">
            {['Retain number facts', 'Judge distances and time intervals', 'Count backwards or in sequences', 'Read timetables or clocks accurately', 'Distinguish similar digits (6 and 9)', 'Follow multi-step numerical directions'].map(item => (
              <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 14, color: '#0c4a6e', padding: '4px 0' }}>
                <span style={{ color: '#0369a1', fontWeight: 700, flexShrink: 0 }}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#0369a1', marginTop: 16, marginBottom: 0, fontStyle: 'italic' }}>
            It is not a measure of intelligence — it is a different neurological wiring. Under the Equality Act 2010, it can be recognised as a disability.
          </p>
        </div>

        {/* How it affects driving */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6 }}>How Dyscalculia Affects Driving</h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
          These are the six areas where dyscalculic learners most commonly struggle — and where targeted techniques matter most.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 52 }} className="dyscalculia-challenges-grid">
          {challenges.map(c => (
            <div key={c.title} style={{ background: '#fafafa', border: '1.5px solid #e5e5e5', borderRadius: 12, padding: '20px 18px' }}>
              <div style={{ fontSize: 26, marginBottom: 10 }}>{c.icon}</div>
              <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 15, color: '#111', marginBottom: 8 }}>{c.title}</div>
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>

        {/* Techniques in the car */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6 }}>Techniques That Work in the Car</h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 28, lineHeight: 1.6 }}>
          These are practical, proven adaptations — not workarounds or crutches. They work because they replace
          number-dependent thinking with concrete, visual or physical cues.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 52 }}>
          {carTips.map(tip => (
            <div key={tip.heading} style={{ background: '#fff', border: '1.5px solid #e8e8e8', borderRadius: 14, padding: '22px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 16, color: '#111' }}>{tip.heading}</div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', background: tip.tagBg, color: tip.tagColor, borderRadius: 999, padding: '3px 10px' }}>{tip.tag}</span>
              </div>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: 0 }}>{tip.body}</p>
            </div>
          ))}
        </div>

        {/* Theory test */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6 }}>Tackling the Theory Test</h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
          Stopping distances and number-heavy questions are the theory test's hardest challenge for dyscalculic candidates. These five approaches get results.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1.5px solid #e5e5e5', borderRadius: 14, overflow: 'hidden', marginBottom: 52 }}>
          {theoryTips.map((item, i) => (
            <div key={item.tip} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '20px 20px', background: i % 2 === 0 ? '#fff' : '#fafafa', borderBottom: i < theoryTips.length - 1 ? '1px solid #eee' : 'none' }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 15, color: '#111', marginBottom: 5 }}>{item.tip}</div>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DVSA adjustments */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6 }}>Your DVSA Rights</h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 8, lineHeight: 1.6 }}>
          You are entitled to reasonable adjustments. Most learners with dyscalculia never claim them — do not make that mistake.
        </p>
        <p style={{ fontSize: 14, color: '#999', marginBottom: 24, fontStyle: 'italic' }}>
          Note: You do not need to tell the DVLA about dyscalculia to get a provisional licence. It is not a bar to driving.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 16 }} className="dyscalculia-adjustments-grid">
          {adjustments.map(a => (
            <div key={a.label} style={{ background: 'linear-gradient(135deg, #0c1f3f, #071628)', border: '1.5px solid rgba(56,189,248,0.2)', borderRadius: 12, padding: '18px 16px' }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{a.icon}</div>
              <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 6 }}>{a.label}</div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, margin: 0 }}>{a.detail}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: '#999', marginBottom: 52, lineHeight: 1.6 }}>
          To apply for theory test adjustments requiring evidence, call <strong>0300 200 1122</strong> rather than booking online. Bring documentation from a teacher, GP or recognised screening tool.
        </p>

        {/* Reassurance */}
        <div style={{ background: 'linear-gradient(135deg, #0c1f3f, #071628)', border: '1.5px solid rgba(56,189,248,0.25)', borderRadius: 16, padding: '32px 28px', marginBottom: 0 }}>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 22, color: '#7dd3fc', marginBottom: 14 }}>Dyscalculia Is Not a Barrier to Driving</p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 14 }}>
            With the right instructor, the right adaptations and the right test accommodations,
            dyscalculic learners pass their test and become safe, confident drivers every day.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: 0 }}>
            If you have been putting driving off because of dyscalculia, the techniques in this post exist
            because they work. The question is not whether you <em>can</em> drive — it is finding
            the approach that works for <em>you</em>.
          </p>
        </div>

        {/* Related */}
        <div style={{ marginTop: 64, paddingTop: 36, borderTop: '2px solid #f0ede8' }}>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 18, color: '#111', marginBottom: 18 }}>More from the blog</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {related.map(r => (
              <Link key={r.href} to={r.href} style={{ fontSize: 15, color: '#0369a1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
                → {r.title}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
