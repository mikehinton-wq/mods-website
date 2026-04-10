import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const tags = ['Mindset', 'Learning to Drive', 'Driving Lessons', 'Practice', 'Progress', 'Learner Driver', 'Driving Tips']

const s = {
  hero: {
    background: '#1a1200',
    color: '#fff',
    padding: '80px 24px 72px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at 50% 0%, rgba(255,193,7,0.18) 0%, transparent 65%), radial-gradient(ellipse at 80% 100%, rgba(255,140,0,0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  heroTag: {
    display: 'inline-block', border: '1px solid rgba(255,193,7,0.35)', borderRadius: 999,
    padding: '5px 16px', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'rgba(255,193,7,0.8)', marginBottom: 32,
  },
  drop: {
    fontSize: '4rem', marginBottom: 16, display: 'block', lineHeight: 1,
  },
  h1: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 'clamp(2.4rem, 6vw, 4rem)',
    fontWeight: 800,
    lineHeight: 1.08,
    maxWidth: 700,
    margin: '0 auto 12px',
    color: '#fff',
    letterSpacing: '-0.01em',
  },
  heroAccent: { color: '#FFC107' },
  heroSub: {
    fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)',
    maxWidth: 460, margin: '16px auto 36px', lineHeight: 1.7,
  },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.3)' },
  back: {
    color: 'rgba(255,255,255,0.45)', fontWeight: 600, fontSize: '0.88rem',
    display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 36, textDecoration: 'none',
  },
  content: { maxWidth: 720, margin: '0 auto', padding: '72px 24px 80px' },
  bigQuote: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
    fontWeight: 800,
    color: '#1a1200',
    lineHeight: 1.25,
    textAlign: 'center',
    margin: '0 auto 56px',
    padding: '48px 32px',
    background: '#fffbea',
    borderRadius: 20,
    borderBottom: '5px solid #FFC107',
    maxWidth: 640,
  },
  bigQuoteAccent: { color: '#e67e00' },
  p: { marginBottom: 22, lineHeight: 1.85, fontWeight: 300, color: '#2a2a2a', fontSize: '1.05rem' },
  comparisonWrap: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, margin: '40px 0' },
  compCard: (bad) => ({
    borderRadius: 16,
    padding: '28px 24px',
    background: bad ? '#1a1200' : '#1a3a1a',
    border: `2px solid ${bad ? 'rgba(255,80,80,0.3)' : 'rgba(100,200,100,0.3)'}`,
    textAlign: 'center',
  }),
  compIcon: { fontSize: '2.8rem', display: 'block', marginBottom: 12 },
  compLabel: (bad) => ({
    fontFamily: 'Raleway, sans-serif',
    fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: bad ? 'rgba(255,100,100,0.7)' : 'rgba(100,220,100,0.7)',
    marginBottom: 10,
  }),
  compTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#fff', marginBottom: 8 },
  compDesc: { fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 },
  dividerDrop: {
    textAlign: 'center', fontSize: '1.8rem', margin: '8px 0', opacity: 0.5, userSelect: 'none',
  },
  statBox: {
    background: '#1a1200',
    borderRadius: 16,
    padding: '40px 32px',
    textAlign: 'center',
    margin: '48px 0',
  },
  statTitle: {
    fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,193,7,0.7)', marginBottom: 20,
  },
  statRow: { display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' },
  statItem: { textAlign: 'center' },
  statNum: {
    fontFamily: 'Raleway, sans-serif', fontSize: '2.8rem', fontWeight: 800,
    color: '#FFC107', lineHeight: 1, display: 'block', marginBottom: 6,
  },
  statDesc: { fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, maxWidth: 120 },
  blockquote: {
    margin: '48px 0',
    padding: '0 0 0 24px',
    borderLeft: '4px solid #FFC107',
  },
  bqText: {
    fontFamily: 'Raleway, sans-serif', fontSize: '1.35rem', fontStyle: 'italic',
    fontWeight: 300, color: '#1a1200', lineHeight: 1.6, margin: 0,
  },
  bqAuthor: { marginTop: 12, fontSize: '0.85rem', color: '#888', fontWeight: 600 },
  amberBox: {
    background: '#fffbea', border: '2px solid #FFC107', borderRadius: 14,
    padding: '28px 32px', margin: '40px 0',
  },
  amberLabel: {
    fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase', color: '#e67e00', marginBottom: 12,
  },
  amberText: { fontSize: '1.05rem', color: '#1a1200', lineHeight: 1.8, margin: 0 },
  finalStatement: {
    background: 'linear-gradient(135deg, #1a1200 0%, #2d2000 100%)',
    borderRadius: 20, padding: '48px 40px', margin: '48px 0', textAlign: 'center',
  },
  finalBig: {
    fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)',
    fontWeight: 800, color: '#FFC107', lineHeight: 1.1, marginBottom: 16,
  },
  finalSub: { fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 },
  cta: {
    textAlign: 'center',
    background: 'linear-gradient(135deg, #1a1200 0%, #2d2000 100%)',
    color: 'white', padding: '64px 24px',
  },
  ctaH2: {
    fontFamily: 'Raleway, sans-serif', color: 'white', marginTop: 0,
    fontSize: '2rem', fontWeight: 700, marginBottom: 16,
  },
  ctaP: {
    color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem',
    maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7,
  },
  ctaBtns: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' },
  ctaBtn: {
    display: 'inline-block', background: '#FFC107', color: '#1a1200',
    fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '1rem',
    padding: '14px 32px', borderRadius: 50, textDecoration: 'none',
  },
  ctaBtnOutline: {
    display: 'inline-block', background: 'transparent', color: 'white',
    fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem',
    padding: '14px 32px', borderRadius: 50, textDecoration: 'none',
    border: '2px solid rgba(255,255,255,0.3)',
  },
  tagsSection: { background: '#faf8f0', padding: '40px 24px', borderTop: '1px solid #e8e0c8' },
  tagsLabel: { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a8070', marginBottom: 14 },
  tagsWrap: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  tag: { background: 'white', border: '1px solid #e8e0c8', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#8a8070' },
}

export default function BlogConsistency() {
  return (
    <>
      <Helmet>
        <title>Consistency Beats Intensity — How Often Should You Take Driving Lessons? | Mike Hinton</title>
        <meta name="description" content="Is it better to take driving lessons every day or once a week? Why regular, consistent lessons beat intensive cramming — and how to plan your learning for best results." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/consistency-beats-intensity" />
        <meta property="og:title" content="Consistency Beats Intensity — How Often Should You Take Driving Lessons?" />
        <meta property="og:description" content="Why regular lessons beat intensive cramming when learning to drive." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/consistency-beats-intensity" />
        <meta property="og:type" content="article" />
      </Helmet>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.heroTag}>Mindset · Practice</div>
          <span style={s.drop}>💧</span>
          <h1 style={s.h1}>
            Consistency<br />
            <span style={s.heroAccent}>Beats Intensity</span>
          </h1>
          <p style={s.heroSub}>You don't need to go harder. You need to keep going.</p>
          <p style={s.heroMeta}>✍️ Mike Hinton · April 2026 · 2 min read</p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <div style={s.bigQuote}>
            "Drop by drop, water carves through rock.<br />
            <span style={s.bigQuoteAccent}>Not by force — by persistence."</span>
          </div>

          <p style={s.p}>When you're learning to drive, it's natural to want to get there as quickly as possible. So you focus hard, push yourself in every lesson, and bring everything you've got every single time. And that intensity? It's a good thing.</p>
          <p style={s.p}>But is it the <em>most</em> important thing?</p>

          <h2 style={{ fontFamily: 'Raleway, sans-serif', fontSize: '1.7rem', fontWeight: 700, color: '#1a1200', margin: '40px 0 16px' }}>The Bucket vs The Drop</h2>
          <p style={s.p}>Think about it this way:</p>

          <div style={s.comparisonWrap} className="mobile-1col">
            <div style={s.compCard(true)}>
              <span style={s.compIcon}>🪣</span>
              <div style={s.compLabel(true)}>Intensity alone</div>
              <div style={s.compTitle}>Throw a bucket of water at a rock</div>
              <p style={s.compDesc}>Big effort. Impressive splash. But when it's over — the rock is exactly as it was. Nothing changed.</p>
            </div>
            <div style={s.compCard(false)}>
              <span style={s.compIcon}>💧</span>
              <div style={s.compLabel(false)}>Consistency over time</div>
              <div style={s.compTitle}>Let one drop fall every single day</div>
              <p style={s.compDesc}>Quiet. Unimpressive at first. But over time, that drop carves a hole in solid rock. Nothing can stop it.</p>
            </div>
          </div>

          <div style={s.dividerDrop}>💧 💧 💧</div>

          <p style={s.p}>Driving is the same. One intense session won't rewire your instincts. But ten consistent lessons — where you show up, stay engaged, and build on what came before — will.</p>

          <div style={s.statBox}>
            <div style={s.statTitle}>Why consistency works</div>
            <div style={s.statRow}>
              <div style={s.statItem}>
                <span style={s.statNum}>🔁</span>
                <span style={s.statDesc}>Repetition builds muscle memory that intensity alone never can</span>
              </div>
              <div style={s.statItem}>
                <span style={s.statNum}>📈</span>
                <span style={s.statDesc}>Regular short sessions retain more than infrequent marathon ones</span>
              </div>
              <div style={s.statItem}>
                <span style={s.statNum}>🧠</span>
                <span style={s.statDesc}>The brain consolidates skills between sessions, not during them</span>
              </div>
            </div>
          </div>

          <blockquote style={s.blockquote}>
            <p style={s.bqText}>"The students who progress fastest aren't the ones who try the hardest in any single lesson. They're the ones who turn up regularly, stay curious, and don't give up when it gets hard."</p>
            <p style={s.bqAuthor}>— Mike Hinton, Driving Instructor</p>
          </blockquote>

          <p style={s.p}>It doesn't matter if you feel like you're not making big leaps in every session. Progress in driving is often invisible until suddenly — it isn't. You'll find yourself doing something automatically that used to take all your concentration. That's consistency doing its work.</p>

          <div style={s.amberBox}>
            <div style={s.amberLabel}>💡 What this means in practice</div>
            <p style={s.amberText}>Regular weekly lessons will get you to test day faster than sporadic intense ones. Between lessons, a short drive with a trusted adult keeps the drop falling. Stay consistent. Trust the process. The rock will give way.</p>
          </div>

          <div style={s.finalStatement}>
            <div style={s.finalBig}>Consistency beats intensity.</div>
            <p style={s.finalSub}>This is what matters. Not how hard you go once — but how reliably you keep going. Show up. Stay consistent. The rest follows.</p>
          </div>

        </div>

        <section style={s.cta}>
          <h2 style={s.ctaH2}>Ready to Build That Consistency?</h2>
          <p style={s.ctaP}>Mike structures every learning journey around steady, confident progress — not pressure. Get in touch to start yours.</p>
          <div style={s.ctaBtns}>
            <a href="tel:07915999994" style={s.ctaBtn}>📞 07915 999994</a>
            <a href="https://wa.me/447915999994" target="_blank" rel="noreferrer" style={s.ctaBtnOutline}>💬 WhatsApp</a>
            <Link to="/contact" style={s.ctaBtnOutline}>Contact Form</Link>
          </div>
        </section>

        <section style={s.tagsSection}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
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
