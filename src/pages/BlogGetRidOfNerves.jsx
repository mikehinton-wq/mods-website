import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const steps = [
  {
    num: '01',
    label: 'Step 1',
    title: 'Breathe. Properly.',
    body: [
      <>When you're anxious, your breathing becomes shallow and fast. Shallow breathing reduces oxygen to your brain, which makes you more panicked, which makes your breathing worse. It's a cycle — and you can break it.</>,
      <>Before you get in the car, try this:</>,
    ],
    breathe: [
      { icon: '↓', label: 'Breathe in', detail: 'through your nose for 4 counts' },
      { icon: '○', label: 'Hold', detail: 'for 4 counts' },
      { icon: '↑', label: 'Breathe out', detail: 'slowly through your mouth for 6 counts' },
      { icon: '↺', label: 'Repeat', detail: '4 times' },
    ],
    tip: { label: 'Why it works', text: "This activates your parasympathetic nervous system — the body's natural calm-down response. It takes less than two minutes. Do it in the waiting room, in the car before you start, and at red lights if you need to during the test." },
    fix: <>The breathing technique isn't a trick — it's biology. Your nervous system responds to the rhythm of your breath whether you believe in it or not. Do it consistently in lessons so it becomes your automatic response to pressure on test day.</>,
  },
  {
    num: '02',
    label: 'Step 2',
    title: 'Reframe what the test actually is.',
    body: [
      <>Most learners walk into the test centre thinking: <em>"I am about to be judged."</em> That framing creates enormous pressure. You're on trial. You need to perform. One mistake and it's over.</>,
      <>Here's a more accurate framing: <em>"I am about to go for a 40-minute drive with someone sitting next to me."</em></>,
      <>That's literally all a driving test is. You've done hundreds of drives. You've had people sitting next to you the entire time. Today is no different — except the person next to you has a clipboard instead of an instructor's brake pedal.</>,
    ],
    stat: { num: '15', text: "minor faults are allowed and you still pass. The examiner expects imperfection. They're not hoping you fail — they'd rather pass you." },
    fix: <>Before you get in the car, say this out loud: <strong>"This is a 40-minute drive. I've done this hundreds of times."</strong> It sounds simple. Do it anyway. The words you use to describe a situation change how threatening your brain perceives it to be.</>,
  },
  {
    num: '03',
    label: 'Step 3',
    title: 'Have a plan for when things go wrong.',
    body: [
      <>The single biggest source of test nerves is the fear of making a mistake. "What if I stall? What if I go the wrong way? What if I miss a sign?"</>,
      <>The answer to all of those questions is the same: <strong>have a plan.</strong></>,
    ],
    scenarios: [
      { label: 'If you stall', text: 'Stay calm. Handbrake on. Restart. Check mirrors and blind spot. Move off safely. A stall is a minor fault. Panicking after it is what causes the serious ones.' },
      { label: 'If you go the wrong way', text: "It doesn't matter. The examiner will redirect you. You won't fail for taking a wrong turn. You will fail for reacting dangerously to it." },
      { label: 'If you're unsure at a junction', text: 'Take the safe option and wait. Never rush because you feel pressured.' },
    ],
    fix: <>When you have a plan, the fear of mistakes shrinks. You're not hoping everything goes perfectly — you're <strong>prepared for the moments it doesn't.</strong> Run through these scenarios in your head the night before so they feel familiar, not frightening.</>,
  },
]

const related = [
  { href: '/blog/3-things-nervous-drivers-do-on-test', title: '3 Things Every Nervous Driver Does on Their Test (And How to Stop)' },
  { href: '/blog/driving-test-anxiety-causes-failures', title: 'Does Driving Test Anxiety Actually Cause Failures?' },
  { href: '/blog/when-you-are-your-best-self', title: 'When You Are Your Best Self, the Possibilities Are Endless' },
]

const s = {
  hero: { background: '#1a2e3a', padding: '52px 0 60px', position: 'relative', overflow: 'hidden' },
  heroInner: { maxWidth: 680, margin: '0 auto', padding: '0 24px' },
  tag: { display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, padding: '5px 12px', fontSize: 12, color: 'rgba(255,255,255,0.75)', marginBottom: 20, letterSpacing: '0.04em' },
  tagSpan: { color: '#1EABC7', fontWeight: 600 },
  h1: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(26px,5vw,42px)', lineHeight: 1.08, color: '#fff', marginBottom: 16 },
  em: { color: '#1EABC7', fontStyle: 'normal' },
  sub: { fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: 520, marginBottom: 28 },
  meta: { display: 'flex', gap: 20, flexWrap: 'wrap' },
  metaItem: { fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: 5 },
  metaStrong: { color: 'rgba(255,255,255,0.8)', fontWeight: 400 },
  content: { maxWidth: 660, margin: '0 auto', padding: '48px 24px 80px' },
  intro: { fontSize: 18, fontWeight: 300, lineHeight: 1.7, color: '#2a2a2a', marginBottom: 32, paddingBottom: 32, borderBottom: '1px solid #e3dfd7' },
  step: { position: 'relative', padding: '36px 0', borderBottom: '1px solid #e3dfd7' },
  stepNum: { fontFamily: 'Raleway, sans-serif', fontSize: 72, fontWeight: 800, color: '#e3dfd7', lineHeight: 1, position: 'absolute', top: 28, right: 0, userSelect: 'none', pointerEvents: 'none' },
  stepLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a7068', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 },
  stepLabelLine: { display: 'inline-block', width: 20, height: 2, background: '#1EABC7', borderRadius: 2 },
  stepTitle: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(20px,4vw,26px)', fontWeight: 800, lineHeight: 1.15, color: '#0f0f0f', marginBottom: 16, maxWidth: 480 },
  stepBody: { fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: '#333', marginBottom: 12 },
  breatheGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, margin: '16px 0 20px' },
  breatheCard: { background: '#f8f7f5', borderRadius: 10, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 },
  breatheIcon: { fontFamily: 'Raleway, sans-serif', fontSize: 22, fontWeight: 800, color: '#1EABC7', width: 28, flexShrink: 0, textAlign: 'center' },
  breatheLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 12, fontWeight: 700, color: '#0f0f0f', display: 'block', marginBottom: 2 },
  breatheDetail: { fontSize: 12, color: '#7a7068', fontWeight: 300 },
  stat: { background: '#1EABC7', borderRadius: 8, padding: '16px 20px', margin: '20px 0', display: 'flex', alignItems: 'baseline', gap: 12 },
  statNum: { fontFamily: 'Raleway, sans-serif', fontSize: 36, fontWeight: 800, color: '#fff', lineHeight: 1, whiteSpace: 'nowrap' },
  statText: { fontSize: 13, color: '#fff', fontWeight: 400, lineHeight: 1.4 },
  tip: { background: '#fff', border: '1px solid #e3dfd7', borderLeft: '3px solid #1EABC7', borderRadius: '0 8px 8px 0', padding: '14px 18px', margin: '20px 0', fontSize: 14, color: '#333', lineHeight: 1.6 },
  tipLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 4, color: '#0f0f0f' },
  scenarios: { display: 'flex', flexDirection: 'column', gap: 10, margin: '16px 0 20px' },
  scenario: { background: '#fff', border: '1px solid #e3dfd7', borderRadius: 8, padding: '14px 18px' },
  scenarioLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 12, fontWeight: 700, color: '#1a2e3a', display: 'block', marginBottom: 4 },
  scenarioText: { fontSize: 14, color: '#333', fontWeight: 300, lineHeight: 1.6 },
  fix: { background: '#1a2e3a', borderRadius: 10, padding: '20px 22px', marginTop: 4 },
  fixLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1EABC7', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 },
  fixText: { fontSize: 15, fontWeight: 400, lineHeight: 1.65, color: 'rgba(255,255,255,0.88)' },
  bottomLine: { background: '#0f0f0f', borderRadius: 12, padding: '32px 28px', marginTop: 48 },
  bottomH2: { fontFamily: 'Raleway, sans-serif', fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 12 },
  bottomP: { fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, marginBottom: 22 },
  bottomBtn: { display: 'inline-block', background: '#1EABC7', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '12px 24px', borderRadius: 6, textDecoration: 'none' },
  related: { marginTop: 48, paddingTop: 32, borderTop: '1px solid #e3dfd7' },
  relatedLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7a7068', marginBottom: 16 },
  relatedLinks: { display: 'flex', flexDirection: 'column', gap: 10 },
  relatedLink: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff', border: '1px solid #e3dfd7', borderRadius: 8, padding: '14px 16px', textDecoration: 'none' },
  relatedTitle: { fontSize: 14, fontWeight: 400, color: '#0f0f0f', lineHeight: 1.4 },
  relatedArrow: { fontSize: 16, color: '#7a7068', flexShrink: 0, marginLeft: 12 },
  back: { color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20, textDecoration: 'none' },
}

export default function BlogGetRidOfNerves() {
  return (
    <>
      <Helmet>
        <title>How to Get Rid of Driving Test Nerves in 3 Simple Steps | Mike Hinton</title>
        <meta name="description" content="Nervous about your driving test? These 3 simple steps will help you manage anxiety, stay calm, and drive the way you've been practising. Works even the night before." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/how-to-get-rid-of-nerves" />
        <meta property="og:title" content="How to Get Rid of Driving Test Nerves in 3 Simple Steps" />
        <meta property="og:description" content="3 practical steps to manage driving test anxiety — breathing, reframing, and having a plan for when things go wrong." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/how-to-get-rid-of-nerves" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Get Rid of Driving Test Nerves in 3 Simple Steps" />
        <meta name="twitter:description" content="Nervous about your driving test? These 3 simple steps will help you manage anxiety and drive the way you've been practising." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "How to Get Rid of Driving Test Nerves in 3 Simple Steps",
          "description": "Nervous about your driving test? These 3 simple steps will help you manage anxiety, stay calm, and drive the way you've been practising.",
          "url": "https://www.mikehintondrivingschool.co.uk/blog/how-to-get-rid-of-nerves",
          "datePublished": "2026-04-14",
          "dateModified": "2026-04-14",
          "author": { "@type": "Person", "name": "Mike Hinton", "jobTitle": "DVSA Approved Driving Instructor", "url": "https://www.mikehintondrivingschool.co.uk/about" },
          "publisher": { "@type": "Organization", "name": "Mike Hinton Driving School", "url": "https://www.mikehintondrivingschool.co.uk", "logo": { "@type": "ImageObject", "url": "https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" } }
        })}</script>
      </Helmet>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroInner}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.tag}><span style={s.tagSpan}>Anxiety &amp; Nerves</span> · Test Prep</div>
          <h1 style={s.h1}>
            How to Get Rid of Nerves<br />
            <span style={s.em}>in 3 Simple Steps</span>
          </h1>
          <p style={s.sub}>
            Your test is coming up. Nerves are normal — every learner feels them. The difference between passing and failing isn't the absence of nerves. It's knowing how to handle them.
          </p>
          <div style={s.meta}>
            <span style={s.metaItem}>✍️ <strong style={s.metaStrong}>Mike Hinton</strong>, Driving Instructor</span>
            <span style={s.metaItem}>📍 <strong style={s.metaStrong}>Rotherham</strong></span>
            <span style={s.metaItem}>🕐 <strong style={s.metaStrong}>4 min read</strong></span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={s.content}>
        <p style={s.intro}>
          Most learners try to suppress nerves on test day. That doesn't work — and it makes things worse. These three steps don't remove nerves. They give you something better: a way to manage them so your training can do what it's supposed to do.
        </p>

        <div>
          {steps.map(step => (
            <div key={step.num} style={s.step}>
              <div style={s.stepNum}>{step.num}</div>
              <div style={s.stepLabel}><span style={s.stepLabelLine} />{step.label}</div>
              <h2 style={s.stepTitle}>{step.title}</h2>
              {step.body.map((para, i) => (
                <p key={i} style={s.stepBody}>{para}</p>
              ))}
              {step.breathe && (
                <div style={s.breatheGrid}>
                  {step.breathe.map((b, i) => (
                    <div key={i} style={s.breatheCard}>
                      <span style={s.breatheIcon}>{b.icon}</span>
                      <div>
                        <span style={s.breatheLabel}>{b.label}</span>
                        <span style={s.breatheDetail}>{b.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {step.tip && (
                <div style={s.tip}>
                  <strong style={s.tipLabel}>{step.tip.label}</strong>
                  {step.tip.text}
                </div>
              )}
              {step.stat && (
                <div style={s.stat}>
                  <div style={s.statNum}>{step.stat.num}</div>
                  <div style={s.statText}>{step.stat.text}</div>
                </div>
              )}
              {step.scenarios && (
                <div style={s.scenarios}>
                  {step.scenarios.map((sc, i) => (
                    <div key={i} style={s.scenario}>
                      <strong style={s.scenarioLabel}>If {sc.label.toLowerCase().replace('if ', '')}</strong>
                      <p style={{ ...s.scenarioText, margin: 0 }}>{sc.text}</p>
                    </div>
                  ))}
                </div>
              )}
              <div style={s.fix}>
                <div style={s.fixLabel}>✓ Put it into practice</div>
                <p style={s.fixText}>{step.fix}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div style={s.bottomLine}>
          <h2 style={s.bottomH2}>The bottom line</h2>
          <p style={s.bottomP}>
            Nerves are normal. They show up because you care. But they don't have to take over. Breathe. Reframe. Have a plan. Then drive the way you've been practising.
          </p>
          <p style={s.bottomP}>
            If anxiety is affecting your lessons or you're struggling with test nerves, get in touch — I specialise in helping nervous learners pass with confidence.
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

        <div className="blog-content" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <MailchimpSignup />
        </div>
      </main>
    </>
  )
}
