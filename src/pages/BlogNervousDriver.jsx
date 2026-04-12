import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const things = [
  {
    num: '01',
    label: 'Thing #1',
    title: 'They go too slow — and it actually makes things worse',
    body: [
      <>When nerves kick in, your brain goes into "be careful" mode. So you slow down. You creep up to junctions. You sit at 20mph on a 30 road. It feels safe — but to your examiner, <strong>driving too slowly is actually a fault</strong>.</>,
      <>It signals a lack of confidence and awareness. It can hold up traffic. And according to the DVSA's own data, <em>not responding correctly to speed limits</em> is one of the most consistent reasons learners pick up faults on their test.</>,
    ],
    stat: { num: '48%', text: 'of UK driving tests result in failure — and hesitation and loss of confidence are among the top contributing factors' },
    fix: <>In your lessons, ask your instructor to call you out <strong>every single time</strong> you're going under the limit when there's no reason to. Make matching the speed limit your default, not your exception. By test day it needs to feel automatic — because nerves will try to slow you down.</>,
  },
  {
    num: '02',
    label: 'Thing #2',
    title: 'They forget mirrors — the one thing the examiner is definitely watching',
    body: [
      <>Here's the thing about mirrors: when you're calm, checking them is automatic. You've done it thousands of times in lessons. But the moment anxiety hits, your attention narrows. You're thinking about the next junction, about whether you just made a mistake, about the examiner scribbling on their clipboard — and the mirror check just... doesn't happen.</>,
      <><strong>Failing to check mirrors effectively is the #2 most common reason for failing a UK driving test</strong>, right behind junction observations. It's not a skill gap — it's an anxiety gap. You know how to do it. Nerves made you forget to do it.</>,
    ],
    tip: { label: 'Why this matters to the examiner', text: "They're not watching to catch you out. They're checking whether you're safe to drive alone. A driver who doesn't check mirrors before changing direction is genuinely dangerous on real roads — which is exactly why it's marked so heavily." },
    fix: <>Drill the <strong>MSM routine until it's verbal</strong>. In your lessons, literally say out loud "mirror, signal, manoeuvre" every time you do it. It sounds ridiculous, but saying it out loud means it stays conscious — and it won't disappear when anxiety makes your brain go quiet. By test day you won't need to say it, but the habit is locked in.</>,
  },
  {
    num: '03',
    label: 'Thing #3',
    title: 'They make one mistake — then immediately make three more',
    body: [
      <>This is the big one. You stall at a junction. Or you go slightly wide on a left turn. You know it happened. And instead of moving on, your brain starts a whole internal conversation: <em>"That was a serious fault. I've failed. What do I text my mum? Can I cry in the test centre?"</em></>,
      <><strong>One small mistake has turned into four.</strong> This is how most driving test failures actually happen — not from one big error, but from the spiral that follows a small one.</>,
      <>Remember: you're allowed up to 15 minor faults and still pass. The first mistake almost certainly wasn't a fail. The spiral that followed might be.</>,
    ],
    tip: { label: 'What the examiner actually writes down', text: "Not every pen movement is a serious fault. Examiners write throughout the test — noting observations, recording minors, documenting the route. The sound of their pen is not the sound of failure." },
    fix: <>Practise recovering in mock tests. Ask your instructor to set up realistic test conditions and <strong>deliberately let small things happen</strong> so you can practise the recovery, not just the driving. The mental skill of letting a mistake go is learnable — but only if you've actually practised it. Tell yourself: <strong>"That was one fault. Back to driving."</strong> Three words. That's it.</>,
  },
]

const related = [
  { href: '/blog/how-to-calm-driving-test-nerves', title: 'How to calm driving test nerves: a guide for 17–20 year olds' },
  { href: '/blog/made-a-mistake-on-driving-test', title: 'Made a mistake on your driving test? Here\'s exactly what to do' },
  { href: '/blog/driving-test-anxiety-causes-failures', title: 'Does driving test anxiety actually cause failures? Yes — here\'s the proof' },
]

const s = {
  hero: { background: '#1a3a2a', padding: '52px 0 60px', position: 'relative', overflow: 'hidden' },
  heroInner: { maxWidth: 680, margin: '0 auto', padding: '0 24px' },
  tag: { display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, padding: '5px 12px', fontSize: 12, color: 'rgba(255,255,255,0.75)', marginBottom: 20, letterSpacing: '0.04em' },
  tagSpan: { color: '#ffe135', fontWeight: 600 },
  h1: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', lineHeight: 1.08, color: '#fff', marginBottom: 16 },
  em: { color: '#ffe135', fontStyle: 'normal' },
  sub: { fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 520, marginBottom: 28 },
  meta: { display: 'flex', gap: 20, flexWrap: 'wrap' },
  metaItem: { fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 5 },
  metaStrong: { color: 'rgba(255,255,255,0.8)', fontWeight: 400 },
  content: { maxWidth: 660, margin: '0 auto', padding: '48px 24px 80px' },
  intro: { fontSize: 18, fontWeight: 300, lineHeight: 1.7, color: '#2a2a2a', marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid #e3dfd7' },
  thing: { position: 'relative', padding: '36px 0', borderBottom: '1px solid #e3dfd7' },
  thingNum: { fontFamily: 'Raleway, sans-serif', fontSize: 72, fontWeight: 800, color: '#e3dfd7', lineHeight: 1, position: 'absolute', top: 28, right: 0, userSelect: 'none', pointerEvents: 'none' },
  thingLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a7068', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 },
  thingLabelLine: { display: 'inline-block', width: 20, height: 2, background: '#ffe135', borderRadius: 2 },
  thingTitle: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 800, lineHeight: 1.15, color: '#0f0f0f', marginBottom: 16, maxWidth: 480 },
  thingBody: { fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: '#333', marginBottom: 16 },
  stat: { background: '#ffe135', borderRadius: 8, padding: '16px 20px', margin: '20px 0', display: 'flex', alignItems: 'baseline', gap: 12 },
  statNum: { fontFamily: 'Raleway, sans-serif', fontSize: 36, fontWeight: 800, color: '#0f0f0f', lineHeight: 1, whiteSpace: 'nowrap' },
  statText: { fontSize: 13, color: '#0f0f0f', fontWeight: 400, lineHeight: 1.4 },
  tip: { background: '#fff', border: '1px solid #e3dfd7', borderLeft: '3px solid #ffe135', borderRadius: '0 8px 8px 0', padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#333', lineHeight: 1.6 },
  tipLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 4, color: '#0f0f0f' },
  fix: { background: '#1a3a2a', borderRadius: 10, padding: '20px 22px', marginTop: 4 },
  fixLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffe135', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 },
  fixText: { fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)' },
  bottomLine: { background: '#0f0f0f', borderRadius: 12, padding: '32px 28px', marginTop: 48 },
  bottomH2: { fontFamily: 'Raleway, sans-serif', fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 12 },
  bottomP: { fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 22 },
  bottomBtn: { display: 'inline-block', background: '#ffe135', color: '#0f0f0f', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '12px 24px', borderRadius: 6, textDecoration: 'none' },
  related: { marginTop: 48, paddingTop: 32, borderTop: '1px solid #e3dfd7' },
  relatedLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7a7068', marginBottom: 16 },
  relatedLinks: { display: 'flex', flexDirection: 'column', gap: 10 },
  relatedLink: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #e3dfd7', borderRadius: 8, padding: '14px 16px', textDecoration: 'none' },
  relatedTitle: { fontSize: 14, fontWeight: 400, color: '#0f0f0f', lineHeight: 1.4 },
  relatedArrow: { fontSize: 16, color: '#7a7068', flexShrink: 0, marginLeft: 12 },
  back: { color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20, textDecoration: 'none' },
}

export default function BlogNervousDriver() {
  return (
    <>
      <Helmet>
        <title>3 Things Every Nervous Driver Does on Test Day (And How to Stop) | Mike Hinton</title>
        <meta name="description" content="Nervous about your driving test? These are the 3 most common mistakes anxious drivers make on test day — and exactly how to avoid them." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/3-things-nervous-drivers-do-on-test" />
        <meta property="og:title" content="3 Things Every Nervous Driver Does on Test Day" />
        <meta property="og:description" content="The 3 most common mistakes nervous drivers make on test day — and how to stop them." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/3-things-nervous-drivers-do-on-test" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3 Things Every Nervous Driver Does on Test Day (And How to Stop)" />
        <meta name="twitter:description" content="Nervous about your driving test? These are the 3 most common mistakes anxious drivers make on test day — and exactly how to avoid them." />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"3 Things Every Nervous Driver Does on Test Day (And How to Stop)","description":"Nervous about your driving test? These are the 3 most common mistakes anxious drivers make on test day — and exactly how to avoid them.","url":"https://www.mikehintondrivingschool.co.uk/blog/3-things-nervous-drivers-do-on-test","datePublished":"2026-02-01","dateModified":"2026-02-01","author":{"@type":"Person","name":"Mike Hinton","jobTitle":"DVSA Approved Driving Instructor","url":"https://www.mikehintondrivingschool.co.uk/about"},"publisher":{"@type":"Organization","name":"Mike Hinton Driving School","url":"https://www.mikehintondrivingschool.co.uk","logo":{"@type":"ImageObject","url":"https://www.mikehintondrivingschool.co.uk/images/og-image.jpg"}}}</script>
      </Helmet>
      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroInner}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.tag}><span style={s.tagSpan}>Driving Test</span> · Anxiety &amp; Nerves</div>
          <h1 style={s.h1}>
            3 Things Every Nervous Driver Does on Their Test<br />
            <span style={s.em}>(And How to Stop)</span>
          </h1>
          <p style={s.sub}>
            These aren't random mistakes. They're the same three things that happen to almost every anxious learner — and once you know about them, you can actually do something.
          </p>
          <div style={s.meta}>
            <span style={s.metaItem}>✍️ <strong style={s.metaStrong}>Mike Hinton</strong>, Driving Instructor</span>
            <span style={s.metaItem}>📍 <strong style={s.metaStrong}>Rotherham</strong></span>
            <span style={s.metaItem}>🕐 <strong style={s.metaStrong}>3 min read</strong></span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={s.content}>
        <p style={s.intro}>
          I've sat in the passenger seat for hundreds of driving tests. And I'll tell you something — nervous drivers don't each make random mistakes. They make the <strong>same three mistakes</strong>, every time, in pretty much the same order. The good news? All three are completely fixable once you know what to look for.
        </p>

        <div>
          {things.map(thing => (
            <div key={thing.num} style={s.thing}>
              <div style={s.thingNum}>{thing.num}</div>
              <div style={s.thingLabel}><span style={s.thingLabelLine} />{thing.label}</div>
              <h2 style={s.thingTitle}>{thing.title}</h2>
              {thing.body.map((para, i) => (
                <p key={i} style={s.thingBody}>{para}</p>
              ))}
              {thing.stat && (
                <div style={s.stat}>
                  <div style={s.statNum}>{thing.stat.num}</div>
                  <div style={s.statText}>{thing.stat.text}</div>
                </div>
              )}
              {thing.tip && (
                <div style={s.tip}>
                  <strong style={s.tipLabel}>{thing.tip.label}</strong>
                  {thing.tip.text}
                </div>
              )}
              <div style={s.fix}>
                <div style={s.fixLabel}>✓ The Fix</div>
                <p style={s.fixText}>{thing.fix}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div style={s.bottomLine}>
          <h2 style={s.bottomH2}>The honest truth</h2>
          <p style={s.bottomP}>
            None of these are driving problems. They're anxiety problems. And the reason I know that is because I've watched the same students drive brilliantly in lessons, then do all three of these things the moment an examiner sits down. Your driving is good enough. What needs practice is staying calm when it counts.
          </p>
          <p style={s.bottomP}>
            If this sounds like you, come for a lesson specifically focused on mock test conditions. We'll work on the mental side — not just the driving.
          </p>
          <Link to="/contact" style={s.bottomBtn}>Book a lesson →</Link>
        </div>

        {/* Related */}
        <div style={s.related}>
          <div style={s.relatedLabel}>Read Next</div>
          <div style={s.relatedLinks}>
            {related.map(r => (
              <Link key={r.href} to={r.href} style={s.relatedLink}>
                <span style={s.relatedTitle}>{r.title}</span>
                <span style={s.relatedArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      <div className="blog-content" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}><MailchimpSignup /></div>
      </main>
    </>
  )
}
