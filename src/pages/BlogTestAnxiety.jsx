import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const stats = [
  { num: '37%', desc: 'of 18–24 year olds experience driving anxiety frequently' },
  { num: '4×', desc: 'more likely to suffer driving anxiety than drivers over 65' },
  { num: '48%', desc: 'of learners fail the practical test on their first attempt' },
]

const fixes = [
  {
    icon: '🎯',
    title: 'Preparation',
    desc: 'The more you\'ve done something in a low-stakes environment, the more automatic it becomes — which means anxiety has less to disrupt. Mock tests that closely replicate the real thing are one of the most effective tools an instructor can offer, not just to practise the driving, but to practise the feeling of being assessed so it becomes familiar.',
  },
  {
    icon: '🌬️',
    title: 'Controlled Breathing',
    desc: 'Specific techniques like controlled breathing have strong evidence behind them. Slow, deliberate breathing activates your parasympathetic nervous system — the part that calms you down — and can physically lower your heart rate within minutes.',
  },
]

const tags = ['Driving Test', 'Test Anxiety', 'Nerves', 'Learner Driver', 'Driving Test Tips', 'UK Driving', 'DVSA', 'Driving Lessons', 'Pass Rate', 'Mental Health', 'Young Drivers']

const s = {
  hero: { background: '#0f1f2e', color: '#f0f6ff', padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 20%, rgba(30,171,199,0.15) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(200,80,26,0.12) 0%, transparent 50%)', pointerEvents: 'none' },
  heroTag: { display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '5px 16px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 28 },
  h1: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 800, lineHeight: 1.12, maxWidth: 820, margin: '0 auto 16px', color: '#f0f6ff' },
  heroAccent: { color: '#1EABC7' },
  heroSub: { fontSize: '1.1rem', color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '16px auto 36px', fontStyle: 'italic' },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.35)' },
  content: { maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' },
  introBox: { background: '#e8f4f8', borderLeft: '4px solid #1EABC7', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: 48, fontSize: '1.05rem', color: '#0a2d3d', lineHeight: 1.75, fontWeight: 400 },
  h2: { fontFamily: 'Raleway, sans-serif', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.25, color: '#0C3C60', margin: '56px 0 18px' },
  p: { marginBottom: 20, lineHeight: 1.8, fontWeight: 300, color: '#2a2a2a' },
  researchBox: { background: '#0C3C60', borderRadius: 14, padding: '28px 32px', margin: '32px 0', color: '#fff' },
  researchLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1EABC7', marginBottom: 12 },
  researchText: { fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, margin: 0 },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, margin: '40px 0' },
  statCard: { background: '#0C3C60', borderRadius: 14, padding: '24px 20px', textAlign: 'center' },
  statNum: { fontFamily: 'Raleway, sans-serif', fontSize: '2.4rem', fontWeight: 800, color: '#1EABC7', lineHeight: 1, marginBottom: 10 },
  statDesc: { fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 },
  calloutBox: { background: '#fff8f0', border: '2px solid #f0c060', borderRadius: 14, padding: '24px 28px', margin: '40px 0' },
  calloutLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8501a', marginBottom: 10 },
  calloutText: { fontSize: '1.05rem', color: '#1a1512', lineHeight: 1.75, margin: 0, fontWeight: 400 },
  tipGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, margin: '32px 0' },
  tipCard: { background: '#fff', border: '1px solid #dde8f0', borderRadius: 14, padding: '24px 22px', borderTop: '3px solid #1EABC7' },
  tipIcon: { fontSize: '1.8rem', marginBottom: 10, display: 'block' },
  tipTitle: { fontFamily: 'Raleway, sans-serif', display: 'block', fontSize: '1rem', fontWeight: 700, marginBottom: 10, color: '#0C3C60' },
  tipDesc: { fontSize: '0.88rem', color: '#555', margin: 0, lineHeight: 1.7 },
  blockquote: { borderLeft: '3px solid #1EABC7', margin: '40px 0', padding: '20px 28px', background: '#f0f8fc', borderRadius: '0 10px 10px 0' },
  bqP: { fontFamily: 'Raleway, sans-serif', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 300, color: '#0C3C60', margin: '0 0 8px' },
  bqCite: { fontSize: '0.8rem', color: '#8a8070', fontStyle: 'normal', letterSpacing: '0.05em' },
  waitBox: { background: '#1a1512', color: '#f5f0e8', borderRadius: 14, padding: '28px 32px', margin: '32px 0' },
  waitLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ffc94d', marginBottom: 12 },
  waitNum: { fontFamily: 'Raleway, sans-serif', fontSize: '3rem', fontWeight: 800, color: '#ffc94d', lineHeight: 1, marginBottom: 8 },
  waitText: { fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: 0 },
  cta: { textAlign: 'center', background: 'linear-gradient(135deg, #0C3C60, #1a5a8a)', color: 'white', padding: '64px 24px' },
  ctaH2: { fontFamily: 'Raleway, sans-serif', color: 'white', marginTop: 0, fontSize: '2rem', fontWeight: 700, marginBottom: 16 },
  ctaP: { color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 },
  ctaBtn: { display: 'inline-block', background: '#1EABC7', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '16px 36px', borderRadius: 50, textDecoration: 'none', letterSpacing: '0.02em' },
  tagsSection: { background: '#f5f8fa', padding: '40px 24px', borderTop: '1px solid #dde8f0' },
  tagsLabel: { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a8070', marginBottom: 14 },
  tagsWrap: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  tag: { background: 'white', border: '1px solid #dde8f0', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#8a8070' },
  back: { color: 'rgba(255,255,255,0.55)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32, textDecoration: 'none' },
}

export default function BlogTestAnxiety() {
  return (
    <>
      <Helmet>
        <title>Does Driving Test Anxiety Actually Cause Failures? | Mike Hinton Driving School</title>
        <meta name="description" content="Can nerves really make you fail your driving test? The truth about test anxiety, what the examiner is actually looking for, and how to stay calm on the day." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/driving-test-anxiety-causes-failures" />
        <meta property="og:title" content="Does Driving Test Anxiety Actually Cause Failures?" />
        <meta property="og:description" content="The truth about driving test anxiety and how to manage nerves on test day." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/driving-test-anxiety-causes-failures" />
        <meta property="og:type" content="article" />
      </Helmet>
      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.heroTag}>Driving Test · Anxiety &amp; Nerves</div>
          <h1 style={s.h1}>
            Does Driving Test Anxiety<br />
            <span style={s.heroAccent}>Actually Cause Failures?</span>
          </h1>
          <p style={s.heroSub}>"Yes — Here's the Proof"</p>
          <p style={{ ...s.p, color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', marginBottom: 8 }}>
            You're not imagining it. Nerves really do affect your result — and the data backs it up.
          </p>
          <p style={s.heroMeta}>By Mike Hinton Driving School · 5 min read</p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          {/* Intro */}
          <div style={s.introBox}>
            If you've ever walked out of a driving test thinking "I can drive better than that" — you're probably right. And you're definitely not alone. Driving test nerves are one of the most talked-about things amongst learner drivers, but they're often dismissed as something you just have to push through. In reality, anxiety doesn't just feel bad on test day — it directly interferes with your performance. And the science to prove it has been around for years.
          </div>

          {/* Research */}
          <h2 style={s.h2}>What the Research Actually Shows</h2>
          <div style={s.researchBox}>
            <div style={s.researchLabel}>📊 Study Finding</div>
            <p style={s.researchText}>
              A study published in the journal <em>Transportation Research</em> tracked real learner drivers through their actual DVSA practical test and measured both their heart rate and self-reported anxiety levels throughout. The results were striking: candidates who failed showed significantly higher heart rates and anxiety scores during the exam compared to those who passed — even though there was no meaningful difference between the two groups during normal lessons or mock tests.
            </p>
          </div>

          <blockquote style={s.blockquote}>
            <p style={s.bqP}>"The anxiety kicked in specifically on test day, and it was linked directly to failure. It wasn't about skill. It was about nerves."</p>
            <cite style={s.bqCite}>— Transportation Research Journal</cite>
          </blockquote>

          {/* Stats */}
          <div style={s.statsRow} className="mobile-1col">
            {stats.map(stat => (
              <div key={stat.num} style={s.statCard}>
                <div style={s.statNum}>{stat.num}</div>
                <div style={s.statDesc}>{stat.desc}</div>
              </div>
            ))}
          </div>

          {/* Why young drivers */}
          <h2 style={s.h2}>Why Are Young Drivers So Much More Anxious?</h2>
          <p style={s.p}>It's not a coincidence that young people feel this the hardest. A large-scale UK survey found that drivers aged 18 to 24 are four times more likely than over-65s to experience driving anxiety on a frequent basis — 37% of that age group say it affects them regularly, versus just 9% of drivers overall.</p>
          <p style={s.p}>First, the test itself is genuinely high-stakes for a young person. It represents freedom, independence, and often the ability to get to work or college. The weight of that expectation — particularly the fear of failing in front of family and friends who are waiting to hear the result — creates enormous pressure.</p>
          <p style={s.p}>Second, the current waiting times for tests in the UK are making things significantly worse.</p>

          <div style={s.waitBox}>
            <div style={s.waitLabel}>⏱️ Current UK Test Waiting Times</div>
            <div style={s.waitNum}>22 weeks</div>
            <p style={s.waitText}>Average wait for a practical driving test as of early 2025 — with nearly three-quarters of all UK test centres already at the maximum 24-week waiting time. When you've waited six months for an appointment, the stakes of each test feel impossibly high.</p>
          </div>

          {/* Important callout */}
          <div style={s.calloutBox}>
            <div style={s.calloutLabel}>⚠️ Important to understand</div>
            <p style={s.calloutText}>Feeling nervous before your driving test does not mean you can't drive. It means you care about passing — and that the pressure of the situation is getting to you. Those are two completely different things.</p>
          </div>

          {/* What to do */}
          <h2 style={s.h2}>So What Can You Do About It?</h2>
          <p style={s.p}>The good news is that test anxiety is manageable. Knowing what it is — and that it's a completely normal, physiological response rather than evidence you're a bad driver — is actually the first step to dealing with it.</p>

          <div style={s.tipGrid} className="mobile-1col">
            {fixes.map(fix => (
              <div key={fix.title} style={s.tipCard}>
                <span style={s.tipIcon}>{fix.icon}</span>
                <strong style={s.tipTitle}>{fix.title}</strong>
                <p style={s.tipDesc}>{fix.desc}</p>
              </div>
            ))}
          </div>

          <p style={s.p}>And if you've failed before, know this: one failed test tells you almost nothing about whether you can drive well. It tells you that on one particular day, anxiety got the better of you. That's a solvable problem.</p>

        </div>

        {/* CTA */}
        <section style={s.cta}>
          <h2 style={s.ctaH2}>Let's Work on It Together</h2>
          <p style={s.ctaP}>At Mike Hinton Driving School, mock test sessions are built into the learning process — so test day feels familiar, not frightening. Get in touch to find out more.</p>
          <Link to="/contact" style={s.ctaBtn}>Book a Lesson</Link>
        </section>

        {/* Tags */}
        <section style={s.tagsSection}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p style={s.tagsLabel}>Tags &amp; Categories</p>
            <div style={s.tagsWrap}>
              {tags.map(tag => <span key={tag} style={s.tag}>{tag}</span>)}
            </div>
          </div>
        </section>
      <div className="blog-content" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}><MailchimpSignup /></div>
      </main>
    </>
  )
}
