import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const related = [
  { href: '/blog/3-things-nervous-drivers-do-on-test', title: '3 Things Every Nervous Driver Does on Their Test (And How to Stop)' },
  { href: '/blog/driving-test-anxiety-causes-failures', title: 'Does Driving Test Anxiety Actually Cause Failures?' },
  { href: '/blog/when-you-are-your-best-self', title: 'When You Are Your Best Self, the Possibilities Are Endless' },
]

const s = {
  page: { fontFamily: 'system-ui, sans-serif', color: '#1a1a1a' },

  /* ── Hero ── */
  hero: { background: 'linear-gradient(135deg, #0d2233 0%, #1a3a4a 100%)', padding: '64px 0 0', position: 'relative', overflow: 'hidden' },
  heroDecor: { position: 'absolute', top: -40, right: -40, width: 320, height: 320, borderRadius: '50%', background: 'rgba(30,171,199,0.08)', pointerEvents: 'none' },
  heroDecor2: { position: 'absolute', bottom: -60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(30,171,199,0.05)', pointerEvents: 'none' },
  heroInner: { maxWidth: 700, margin: '0 auto', padding: '0 24px 0' },
  back: { color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 28, textDecoration: 'none', letterSpacing: '0.02em' },
  pill: { display: 'inline-flex', gap: 6, alignItems: 'center', background: 'rgba(30,171,199,0.15)', border: '1px solid rgba(30,171,199,0.3)', borderRadius: 999, padding: '4px 14px', fontSize: 11, color: '#1EABC7', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 },
  h1: { fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,5.5vw,48px)', lineHeight: 1.05, color: '#fff', marginBottom: 20, letterSpacing: '-0.01em' },
  h1Accent: { color: '#1EABC7' },
  lead: { fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 540, marginBottom: 32 },
  metaRow: { display: 'flex', gap: 20, flexWrap: 'wrap', paddingBottom: 32 },
  metaBadge: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.45)' },
  metaVal: { color: 'rgba(255,255,255,0.75)', fontWeight: 500 },

  /* Steps progress bar */
  stepsBar: { background: 'rgba(255,255,255,0.06)', borderTop: '1px solid rgba(255,255,255,0.08)' },
  stepsBarInner: { maxWidth: 700, margin: '0 auto', padding: '0 24px', display: 'flex' },
  stepsBarItem: (active) => ({
    flex: 1, padding: '14px 0', textAlign: 'center', fontSize: 12, fontWeight: active ? 700 : 400,
    color: active ? '#1EABC7' : 'rgba(255,255,255,0.35)',
    borderBottom: active ? '2px solid #1EABC7' : '2px solid transparent',
    letterSpacing: '0.04em',
  }),

  /* ── Content ── */
  content: { maxWidth: 700, margin: '0 auto', padding: '56px 24px 80px' },
  intro: { fontSize: 18, fontWeight: 300, lineHeight: 1.8, color: '#444', marginBottom: 48, paddingBottom: 40, borderBottom: '2px solid #f0ede8' },
  introStrong: { color: '#0d2233', fontWeight: 700 },

  /* Step card */
  stepWrap: { marginBottom: 48 },
  stepCard: (color) => ({
    borderRadius: 16,
    overflow: 'hidden',
    border: `1px solid ${color}22`,
    boxShadow: `0 2px 24px ${color}11`,
  }),
  stepHeader: (color) => ({
    background: color,
    padding: '24px 28px 20px',
    display: 'flex', alignItems: 'flex-start', gap: 20,
  }),
  stepHeaderNum: { fontFamily: 'Raleway, sans-serif', fontSize: 52, fontWeight: 900, color: 'rgba(255,255,255,0.2)', lineHeight: 1, flexShrink: 0, marginTop: -4 },
  stepHeaderText: { flex: 1 },
  stepHeaderLabel: { fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 6 },
  stepHeaderTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(18px,3.5vw,24px)', color: '#fff', lineHeight: 1.2 },
  stepBody: { background: '#fff', padding: '28px 28px 0' },
  stepP: { fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: '#444', marginBottom: 16 },

  /* Breathing grid */
  breathGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, margin: '8px 0 20px' },
  breathCard: { background: '#f8f7f5', borderRadius: 10, padding: '14px 16px' },
  breathNum: { fontFamily: 'Raleway, sans-serif', fontSize: 28, fontWeight: 900, color: '#1EABC7', lineHeight: 1, marginBottom: 4 },
  breathLabel: { fontSize: 13, fontWeight: 600, color: '#0d2233', marginBottom: 2 },
  breathSub: { fontSize: 11, color: '#9a9088', fontWeight: 300 },

  /* Quote block */
  quote: (color) => ({
    borderLeft: `4px solid ${color}`, background: '#fafaf8', padding: '16px 20px', margin: '4px 0 20px', borderRadius: '0 10px 10px 0',
    fontSize: 15, color: '#333', lineHeight: 1.7, fontStyle: 'italic',
  }),

  /* Stat strip */
  statStrip: (color) => ({
    background: `linear-gradient(90deg, ${color} 0%, ${color}cc 100%)`,
    padding: '18px 28px', display: 'flex', alignItems: 'center', gap: 16,
  }),
  statNum: { fontFamily: 'Raleway, sans-serif', fontSize: 42, fontWeight: 900, color: '#fff', lineHeight: 1, flexShrink: 0 },
  statText: { fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 400, lineHeight: 1.5 },

  /* Scenario list */
  scenarios: { display: 'flex', flexDirection: 'column', gap: 8, margin: '4px 0 20px' },
  scenario: { display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px solid #f0ede8' },
  scenarioIcon: { width: 30, height: 30, borderRadius: 8, background: '#f0ede8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0, marginTop: 1 },
  scenarioContent: { flex: 1 },
  scenarioLabel: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 13, color: '#0d2233', marginBottom: 4 },
  scenarioText: { fontSize: 13, fontWeight: 300, color: '#555', lineHeight: 1.65 },

  /* Takeaway footer of each step */
  takeaway: (color) => ({
    background: `${color}0d`, borderTop: `1px solid ${color}22`,
    padding: '20px 28px 24px',
  }),
  takeawayLabel: (color) => ({
    fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
    textTransform: 'uppercase', color, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6,
  }),
  takeawayText: { fontSize: 14, fontWeight: 400, lineHeight: 1.7, color: '#333' },

  /* Bottom CTA */
  cta: { background: '#0d2233', borderRadius: 16, padding: '36px 32px', marginTop: 52 },
  ctaH2: { fontFamily: 'Raleway, sans-serif', fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 12 },
  ctaP: { fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 24 },
  ctaBtn: { display: 'inline-block', background: '#1EABC7', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '13px 28px', borderRadius: 8, textDecoration: 'none' },

  /* Related */
  related: { marginTop: 52, paddingTop: 36, borderTop: '2px solid #f0ede8' },
  relatedLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9a9088', marginBottom: 16 },
  relatedLinks: { display: 'flex', flexDirection: 'column', gap: 8 },
  relatedLink: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderRadius: 10, border: '1px solid #e8e4dd', textDecoration: 'none', transition: 'border-color 0.15s' },
  relatedTitle: { fontSize: 14, fontWeight: 400, color: '#0d2233', lineHeight: 1.4 },
  relatedArrow: { color: '#1EABC7', fontWeight: 700, flexShrink: 0, marginLeft: 12 },
}

const STEP_COLORS = ['#1EABC7', '#2e7d5e', '#e06c2a']

export default function BlogGetRidOfNerves() {
  return (
    <div style={s.page}>
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

      {/* ── Hero ── */}
      <header style={s.hero}>
        <div style={s.heroDecor} />
        <div style={s.heroDecor2} />
        <div style={s.heroInner}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.pill}>Anxiety &amp; Nerves</div>
          <h1 style={s.h1}>
            How to Get Rid of Nerves<br />
            <span style={s.h1Accent}>in 3 Simple Steps</span>
          </h1>
          <p style={s.lead}>
            Nerves are normal — every learner feels them. The difference between passing and failing isn't the absence of nerves. It's knowing how to handle them.
          </p>
          <div style={s.metaRow}>
            <span style={s.metaBadge}>✍️ <span style={s.metaVal}>Mike Hinton</span></span>
            <span style={s.metaBadge}>📍 <span style={s.metaVal}>Rotherham</span></span>
            <span style={s.metaBadge}>🕐 <span style={s.metaVal}>4 min read</span></span>
          </div>
        </div>
        {/* Step progress bar */}
        <nav style={s.stepsBar} aria-label="Steps">
          <div style={s.stepsBarInner} className="nerves-steps-bar">
            {['Step 1 — Breathe', 'Step 2 — Reframe', 'Step 3 — Plan'].map((label, i) => (
              <div key={i} style={s.stepsBarItem(i === 0)}>{label}</div>
            ))}
          </div>
        </nav>
      </header>

      {/* ── Content ── */}
      <main style={s.content}>
        <p style={s.intro}>
          Most learners try to <span style={s.introStrong}>suppress</span> nerves on test day. That doesn't work — and it makes things worse. These three steps don't remove nerves. They give you something better: a way to manage them so your training can do what it's supposed to do.
        </p>

        {/* ── STEP 1 ── */}
        <div style={s.stepWrap}>
          <div style={s.stepCard(STEP_COLORS[0])}>
            <div style={s.stepHeader(STEP_COLORS[0])}>
              <div style={s.stepHeaderNum}>01</div>
              <div style={s.stepHeaderText}>
                <div style={s.stepHeaderLabel}>Step One</div>
                <div style={s.stepHeaderTitle}>Breathe. Properly.</div>
              </div>
            </div>
            <div style={s.stepBody}>
              <p style={s.stepP}>When you're anxious, your breathing becomes shallow and fast. Shallow breathing reduces oxygen to your brain, which makes you more panicked, which makes your breathing worse. It's a cycle — and you can break it.</p>
              <p style={s.stepP}>Before you get in the car, try this:</p>
              <div style={s.breathGrid} className="nerves-breathe-grid">
                {[
                  { count: '4', label: 'Breathe in', sub: 'through your nose' },
                  { count: '4', label: 'Hold', sub: 'steady' },
                  { count: '6', label: 'Breathe out', sub: 'slowly through your mouth' },
                  { count: '×4', label: 'Repeat', sub: 'four full cycles' },
                ].map((b, i) => (
                  <div key={i} style={s.breathCard}>
                    <div style={s.breathNum}>{b.count}</div>
                    <div style={s.breathLabel}>{b.label}</div>
                    <div style={s.breathSub}>{b.sub}</div>
                  </div>
                ))}
              </div>
              <p style={{ ...s.stepP, fontStyle: 'italic', color: '#666' }}>
                Do it in the waiting room. Do it in the car before you start. Do it at red lights if you need to during the test.
              </p>
            </div>
            <div style={s.takeaway(STEP_COLORS[0])}>
              <div style={s.takeawayLabel(STEP_COLORS[0])}>▸ Why it works</div>
              <p style={{ ...s.takeawayText, margin: 0 }}>This activates your parasympathetic nervous system — the body's natural calm-down response. It takes less than two minutes. Your nervous system responds to the rhythm of your breath whether you believe in it or not. Practise it in lessons so it becomes your automatic response to pressure.</p>
            </div>
          </div>
        </div>

        {/* ── STEP 2 ── */}
        <div style={s.stepWrap}>
          <div style={s.stepCard(STEP_COLORS[1])}>
            <div style={s.stepHeader(STEP_COLORS[1])}>
              <div style={s.stepHeaderNum}>02</div>
              <div style={s.stepHeaderText}>
                <div style={s.stepHeaderLabel}>Step Two</div>
                <div style={s.stepHeaderTitle}>Reframe what the test actually is.</div>
              </div>
            </div>
            <div style={s.stepBody}>
              <p style={s.stepP}>Most learners walk into the test centre thinking:</p>
              <p style={s.quote(STEP_COLORS[1])}>"I am about to be judged."</p>
              <p style={s.stepP}>That framing creates enormous pressure. You're on trial. You need to perform. One mistake and it's over.</p>
              <p style={s.stepP}>Here's a more accurate framing:</p>
              <p style={s.quote(STEP_COLORS[1])}>"I am about to go for a 40-minute drive with someone sitting next to me."</p>
              <p style={s.stepP}>That's literally all a driving test is. You've done hundreds of drives. You've had people sitting next to you the entire time. The examiner isn't your enemy — they'd rather pass you than fail you.</p>
            </div>
            <div style={s.statStrip(STEP_COLORS[1])}>
              <div style={s.statNum}>15</div>
              <div style={s.statText}>minor faults are allowed and you still pass. The examiner expects imperfection — it's built into the marking.</div>
            </div>
            <div style={s.takeaway(STEP_COLORS[1])}>
              <div style={s.takeawayLabel(STEP_COLORS[1])}>▸ Put it into practice</div>
              <p style={{ ...s.takeawayText, margin: 0 }}>Before you get in the car, say this out loud: <strong>"This is a 40-minute drive. I've done this hundreds of times."</strong> The words you use to describe a situation change how threatening your brain perceives it to be.</p>
            </div>
          </div>
        </div>

        {/* ── STEP 3 ── */}
        <div style={s.stepWrap}>
          <div style={s.stepCard(STEP_COLORS[2])}>
            <div style={s.stepHeader(STEP_COLORS[2])}>
              <div style={s.stepHeaderNum}>03</div>
              <div style={s.stepHeaderText}>
                <div style={s.stepHeaderLabel}>Step Three</div>
                <div style={s.stepHeaderTitle}>Have a plan for when things go wrong.</div>
              </div>
            </div>
            <div style={s.stepBody}>
              <p style={s.stepP}>The single biggest source of test nerves is the fear of making a mistake. "What if I stall? What if I go the wrong way? What if I miss a sign?"</p>
              <p style={{ ...s.stepP, fontWeight: 600, color: '#0d2233' }}>The answer to all of those questions is the same: have a plan.</p>
              <div style={s.scenarios}>
                {[
                  { icon: '⚙️', label: 'If you stall', text: 'Stay calm. Handbrake on. Restart. Check mirrors and blind spot. Move off safely. A stall is a minor fault. Panicking after it is what causes the serious ones.' },
                  { icon: '↩️', label: 'If you go the wrong way', text: "It doesn't matter. The examiner will redirect you. You won't fail for taking a wrong turn. You will fail for reacting dangerously to it." },
                  { icon: '⏸️', label: "If you're unsure at a junction", text: 'Take the safe option and wait. Never rush because you feel pressured. Hesitation is a minor. Emerging unsafely is a fail.' },
                ].map((sc, i) => (
                  <div key={i} style={{ ...s.scenario, borderBottom: i < 2 ? '1px solid #f0ede8' : 'none' }}>
                    <div style={s.scenarioIcon}>{sc.icon}</div>
                    <div style={s.scenarioContent}>
                      <div style={s.scenarioLabel}>{sc.label}</div>
                      <div style={s.scenarioText}>{sc.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={s.takeaway(STEP_COLORS[2])}>
              <div style={s.takeawayLabel(STEP_COLORS[2])}>▸ Put it into practice</div>
              <p style={{ ...s.takeawayText, margin: 0 }}>When you have a plan, the fear of mistakes shrinks. You're not hoping everything goes perfectly — you're <strong>prepared for the moments it doesn't.</strong> Run through these scenarios the night before so they feel familiar, not frightening.</p>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={s.cta}>
          <h2 style={s.ctaH2}>The bottom line</h2>
          <p style={s.ctaP}>
            Nerves are normal. They show up because you care. But they don't have to take over. Breathe. Reframe. Have a plan. Then drive the way you've been practising.
          </p>
        </div>

        {/* ── Related ── */}
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

      </main>
    </div>
  )
}
