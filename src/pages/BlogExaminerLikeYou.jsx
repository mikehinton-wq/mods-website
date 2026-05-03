import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const related = [
  { href: '/blog/how-to-get-rid-of-nerves', title: 'How to Get Rid of Driving Test Nerves in 3 Simple Steps' },
  { href: '/blog/3-things-nervous-drivers-do-on-test', title: '3 Things Every Nervous Driver Does on Their Test (And How to Stop)' },
  { href: '/blog/rotherham-test-centre', title: 'What to Expect at Rotherham Driving Test Centre' },
]

const beforeYouLeave = [
  { icon: '🪪', tip: 'Photocard licence in your hand', note: 'Not buried in a bag — hand it directly to the examiner' },
  { icon: '📵', tip: 'Phone off completely', note: 'Not on silent. Off. A vibrating pocket mid-test is a distraction.' },
  { icon: '⏰', tip: 'Arrive 15 minutes early', note: 'Being settled before your name is called changes everything' },
  { icon: '👕', tip: 'Dress comfortably', note: "Smart enough to show you're serious. Practical enough to move freely." },
]

const duringTest = [
  {
    num: '01',
    heading: 'Greet them like a human being',
    body: "A simple \"good morning\" and a smile sets a warmer tone. The examiner is not your enemy — DVSA guidance literally trains them to help you feel at ease.",
    color: '#22d3ee',
  },
  {
    num: '02',
    heading: 'Listen to every instruction fully',
    body: "Don't anticipate the end of a direction. Let them finish. Then move. Cutting off instructions and driving the wrong way wastes time and rattles confidence.",
    color: '#a78bfa',
  },
  {
    num: '03',
    heading: 'Recover calmly from mistakes',
    body: "Everyone makes small errors. The examiner is watching how you respond. Stay calm, correct, move on. Dwelling on a mistake causes the next one.",
    color: '#34d399',
  },
  {
    num: '04',
    heading: "Drive with confidence, not timidity",
    body: "Crawling at 20 in a 40 zone is a fault. So is hesitating at a clear roundabout. Nervous, over-cautious driving is markable — confidence is not just nice to have.",
    color: '#f59e0b',
  },
  {
    num: '05',
    heading: "Don't narrate your every move",
    body: "Examiners observe actions — they don't need a running commentary. Saying \"checking mirror, signalling, moving off\" continuously is more distracting than helpful.",
    color: '#f87171',
  },
]

const bodyLanguage = [
  { emoji: '🪑', point: 'Sit up straight', detail: 'Proper posture allows better breathing and signals control' },
  { emoji: '🙆', point: 'Open posture in the waiting room', detail: 'Arms folded and legs crossed builds physical tension — literally' },
  { emoji: '👁️', point: 'Make your observations visible', detail: "Examiners watch your eyes. A head-bob isn't enough — actually scan" },
  { emoji: '🤝', point: 'No fidgeting', detail: 'Repeatedly adjusting mirrors or gripping the handbrake signals unreadiness' },
]

const schemaLD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "headline": "The Secret of Making the Driving Examiner Like You",
      "description": "What driving examiners actually look for beyond technical skill — and how your attitude, body language and composure can indirectly affect your driving test result.",
      "datePublished": "2026-05-03",
      "dateModified": "2026-05-03",
      "author": { "@type": "Person", "name": "Mike Hinton" },
      "publisher": {
        "@type": "Organization",
        "name": "Mike Hinton Driving School",
        "url": "https://www.mikehintondrivingschool.co.uk"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.mikehintondrivingschool.co.uk/blog/make-the-driving-examiner-like-you"
      },
      "keywords": ["driving examiner tips", "driving test tips UK", "how to impress driving examiner", "driving test nerves", "DVSA driving test", "passing driving test Rotherham"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can being polite to the driving examiner help you pass?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Politeness won't turn a fail into a pass — examiners follow strict DVSA marking criteria. However, being calm and pleasant creates a more comfortable atmosphere, and confidence directly produces better, less fault-prone driving."
          }
        },
        {
          "@type": "Question",
          "name": "Should I talk to my driving examiner during the test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DVSA's own guidance says that talking to the examiner can help you relax and makes the test feel more like normal driving. However, staying quiet to concentrate is equally fine. The key is not to over-chat to the point where it distracts from your driving."
          }
        },
        {
          "@type": "Question",
          "name": "Do driving examiners have pass quotas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. DVSA examiners do not have pass or fail quotas. The result is determined entirely by the faults recorded during the test — minor, serious, or dangerous. There is no harder day of the week or variation between test centres in standards."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I make a mistake on my driving test?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stay calm, correct the error where safe to do so, and move on. The examiner is watching how you respond to mistakes, not just the mistake itself. Dwelling on an error or panicking typically causes further mistakes and more faults."
          }
        },
        {
          "@type": "Question",
          "name": "Is it rude not to talk to the driving examiner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not at all. Some candidates prefer to stay quiet to help them concentrate, and examiners understand this completely. You will not be marked down for being quiet — just answer their questions and listen to directions clearly."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mikehintondrivingschool.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mikehintondrivingschool.co.uk/blog" },
        { "@type": "ListItem", "position": 3, "name": "The Secret of Making the Driving Examiner Like You", "item": "https://www.mikehintondrivingschool.co.uk/blog/make-the-driving-examiner-like-you" }
      ]
    }
  ]
})

export default function BlogExaminerLikeYou() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#1a1a1a' }}>
      <Helmet>
        <title>The Secret of Making the Driving Examiner Like You | Mike Hinton Driving School</title>
        <meta name="description" content="What driving examiners actually look for beyond technical skill — and how your attitude, body language and composure can indirectly affect your driving test result." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/make-the-driving-examiner-like-you" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="The Secret of Making the Driving Examiner Like You" />
        <meta property="og:description" content="What examiners look for beyond technical skill — and how your attitude and composure indirectly affect your result." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/make-the-driving-examiner-like-you" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{schemaLD}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg, #1a1035 0%, #0d0820 100%)', padding: '64px 0 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #a78bfa, #22d3ee, #34d399)' }} />
        <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 28, textDecoration: 'none' }}>← Back to blog</Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.4)', borderRadius: 999, padding: '4px 14px', fontSize: 11, color: '#c4b5fd', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: 20 }}>Test Prep</div>
          <h1 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(26px,5vw,46px)', lineHeight: 1.06, color: '#fff', marginBottom: 20 }}>
            The Secret of Making the{' '}
            <span style={{ color: '#c4b5fd' }}>Driving Examiner</span>{' '}
            Like You
          </h1>
          <p style={{ fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, maxWidth: 520, marginBottom: 32 }}>
            It is not about charm or flattery. The examiner has one job: to see if you can drive safely.
            But here is the thing — <em>how</em> you show up has more impact than most learners realise.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', paddingBottom: 32 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>📅 <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>May 2026</span></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>⏱ <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>4 min read</span></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.38)' }}>✍️ <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Mike Hinton</span></span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '52px 24px 80px' }}>

        <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.85, color: '#444', marginBottom: 40, paddingBottom: 36, borderBottom: '2px solid #f0ede8' }}>
          Driving examiners follow strict DVSA criteria. There are no quotas, no personality scores,
          no easier days of the week. A pass or fail comes down to faults — minor, serious, dangerous.
          But your attitude, composure and preparation have a very real <em>indirect</em> effect on the
          quality of your driving. And that is what this post is about.
        </p>

        {/* Key truth callout */}
        <div style={{ background: '#f5f0ff', border: '2px solid #a78bfa', borderRadius: 14, padding: '28px 32px', margin: '0 0 48px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7c3aed', marginBottom: 10 }}>DVSA guidance says this</p>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(15px,2.5vw,18px)', fontWeight: 700, color: '#4c1d95', lineHeight: 1.5, marginBottom: 0, fontStyle: 'italic' }}>
            "The examiner simply wants to see you drive safely. They are on your side."
          </p>
        </div>

        {/* Before you leave the house */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6, marginTop: 0 }}>Before You Leave the House</h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
          The impression starts before you say a word. These four things cost nothing and take zero skill.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 48 }} className="examiner-tips-grid">
          {beforeYouLeave.map(item => (
            <div key={item.tip} style={{ background: '#fafafa', border: '1.5px solid #e8e8e8', borderRadius: 12, padding: '20px 18px' }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
              <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 15, color: '#111', marginBottom: 6 }}>{item.tip}</div>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.55, margin: 0 }}>{item.note}</p>
            </div>
          ))}
        </div>

        {/* During the test */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6 }}>During the Test</h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 28, lineHeight: 1.6 }}>
          Five things that separate candidates who feel composed from those who unravel.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 52 }}>
          {duringTest.map(item => (
            <div key={item.num} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: '#fff', border: '1.5px solid #ebebeb', borderRadius: 14, padding: '20px 20px' }}>
              <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 22, color: item.color, flexShrink: 0, lineHeight: 1, marginTop: 2 }}>{item.num}</div>
              <div>
                <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 16, color: '#111', marginBottom: 6 }}>{item.heading}</div>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Body language */}
        <h2 style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6 }}>Body Language Matters More Than You Think</h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
          Examiners are trained observers. Your posture and habits signal confidence or anxiety before you turn the key.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1.5px solid #e5e5e5', borderRadius: 14, overflow: 'hidden', marginBottom: 52 }}>
          {bodyLanguage.map((item, i) => (
            <div key={item.point} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '18px 20px', background: i % 2 === 0 ? '#fff' : '#fafafa', borderBottom: i < bodyLanguage.length - 1 ? '1px solid #eee' : 'none' }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{item.emoji}</span>
              <div>
                <div style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 15, color: '#111', marginBottom: 4 }}>{item.point}</div>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.55, margin: 0 }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* The examiner is on your side */}
        <div style={{ background: 'linear-gradient(135deg, #1a1035, #0d0820)', border: '1.5px solid rgba(167,139,250,0.3)', borderRadius: 16, padding: '32px 28px', margin: '0 0 48px' }}>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 20, color: '#c4b5fd', marginBottom: 14 }}>The Examiner Is Not Your Enemy</p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: 14 }}>
            DVSA guidance instructs examiners to greet you pleasantly, offer reassurance if you are visibly nervous,
            and give clear unambiguous instructions. They are trained to set you up to succeed.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.75, marginBottom: 0 }}>
            The most powerful thing you can do is walk in knowing that — and drive like the capable driver
            your instructor already knows you are.
          </p>
        </div>

        {/* Recovery reminder */}
        <div style={{ background: '#f0fdf4', border: '2px solid #16a34a', borderRadius: 14, padding: '24px 28px', marginBottom: 52 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#16a34a', marginBottom: 10 }}>Remember this</p>
          <p style={{ fontSize: 16, fontWeight: 600, color: '#14532d', lineHeight: 1.6, margin: 0 }}>
            One minor fault will not fail you. Even two or three will not fail you.
            The examiner is watching how you <em>respond</em> to mistakes — not just that you made them.
            Stay calm. Correct. Move on.
          </p>
        </div>

        {/* Bottom line */}
        <div style={{ textAlign: 'center', background: '#1a1035', borderRadius: 16, padding: '36px 28px', marginBottom: 0 }}>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(18px,4vw,24px)', color: '#fff', marginBottom: 20 }}>The Bottom Line</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left', maxWidth: 400, margin: '0 auto 0' }}>
            {[
              "Arrive early, licence in hand, phone off",
              "Greet them, listen carefully, drive with confidence",
              "Make your observations visible — don't just head-bob",
              "If you make a mistake, recover calmly and carry on",
              "Remember: they want you to pass",
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                <span style={{ color: '#c4b5fd', fontWeight: 700, flexShrink: 0 }}>→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: 64, paddingTop: 36, borderTop: '2px solid #f0ede8' }}>
          <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 18, color: '#111', marginBottom: 18 }}>More from the blog</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {related.map(r => (
              <Link key={r.href} to={r.href} style={{ fontSize: 15, color: '#4c1d95', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
                → {r.title}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
