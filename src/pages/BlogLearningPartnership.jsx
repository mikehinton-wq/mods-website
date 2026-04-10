import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const learningStyles = [
  { icon: '🗣️', title: 'How directions are given', desc: 'The words your instructor uses when guiding you matter. Some learners need early warnings; others prefer last-minute prompts. Tell your instructor what works for you.' },
  { icon: '⏱️', title: 'Processing time', desc: 'Some people need a moment to absorb information before acting. Others prefer to keep moving. Neither is wrong — your instructor can adapt.' },
  { icon: '🔁', title: 'Repetition and practice', desc: 'Do you need to do something ten times before it clicks? Or do you learn better by understanding the theory first? Be honest about this from the start.' },
  { icon: '🎵', title: 'Music or silence', desc: 'Some learners focus better with background music; others need complete quiet to concentrate. It sounds small — but it can make a real difference.' },
]

const tags = ['Learning to Drive', 'Driving Lessons', 'Learning Style', 'Mindset', 'Driving Instructor', 'Learner Driver', 'Partnership', 'Passing Your Test']

const s = {
  hero: { background: '#0C3C60', color: '#fff', padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 25%, rgba(30,171,199,0.2) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(255,255,255,0.04) 0%, transparent 50%)', pointerEvents: 'none' },
  heroTag: { display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '5px 16px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 28 },
  h1: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, lineHeight: 1.12, maxWidth: 820, margin: '0 auto 16px', color: '#fff' },
  heroAccent: { color: '#1EABC7' },
  heroSub: { fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.7 },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.35)' },
  back: { color: 'rgba(255,255,255,0.55)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32, textDecoration: 'none' },
  content: { maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' },
  introBox: { background: '#e8f4f8', borderLeft: '4px solid #1EABC7', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: 48, fontSize: '1.05rem', color: '#0a2d3d', lineHeight: 1.75, fontWeight: 400 },
  h2: { fontFamily: 'Raleway, sans-serif', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.25, color: '#0C3C60', margin: '56px 0 18px' },
  p: { marginBottom: 20, lineHeight: 1.8, fontWeight: 300, color: '#2a2a2a' },
  blockquote: { borderLeft: '3px solid #1EABC7', margin: '40px 0', padding: '20px 28px', background: '#f0f8fc', borderRadius: '0 10px 10px 0' },
  bqP: { fontFamily: 'Raleway, sans-serif', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 300, color: '#0C3C60', margin: 0 },
  statRow: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, margin: '40px 0' },
  statCard: { background: '#0C3C60', borderRadius: 14, padding: '28px 24px', textAlign: 'center' },
  statNum: { fontFamily: 'Raleway, sans-serif', fontSize: '2.6rem', fontWeight: 800, color: '#1EABC7', lineHeight: 1, marginBottom: 10 },
  statDesc: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 },
  tipGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, margin: '32px 0' },
  tipCard: { background: '#fff', border: '1px solid #dde8f0', borderRadius: 14, padding: '22px 20px', borderTop: '3px solid #1EABC7' },
  tipIcon: { fontSize: '1.8rem', marginBottom: 10, display: 'block' },
  tipTitle: { fontFamily: 'Raleway, sans-serif', display: 'block', fontSize: '0.95rem', fontWeight: 700, marginBottom: 8, color: '#0C3C60' },
  tipDesc: { fontSize: '0.875rem', color: '#555', margin: 0, lineHeight: 1.65 },
  calloutBox: { background: '#fff8f0', border: '2px solid #f0c060', borderRadius: 14, padding: '24px 28px', margin: '40px 0' },
  calloutLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8501a', marginBottom: 10 },
  calloutText: { fontSize: '1.05rem', color: '#1a1512', lineHeight: 1.75, margin: 0, fontWeight: 400 },
  darkBox: { background: '#1a3a2a', borderRadius: 14, padding: '28px 32px', margin: '40px 0' },
  darkLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4ade80', marginBottom: 12 },
  darkText: { fontSize: '1rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, margin: 0 },
  cta: { textAlign: 'center', background: 'linear-gradient(135deg, #0C3C60, #1a5a8a)', color: 'white', padding: '64px 24px' },
  ctaH2: { fontFamily: 'Raleway, sans-serif', color: 'white', marginTop: 0, fontSize: '2rem', fontWeight: 700, marginBottom: 16 },
  ctaP: { color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 },
  ctaBtns: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' },
  ctaBtn: { display: 'inline-block', background: '#1EABC7', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: 50, textDecoration: 'none' },
  ctaBtnOutline: { display: 'inline-block', background: 'transparent', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' },
  tagsSection: { background: '#f5f8fa', padding: '40px 24px', borderTop: '1px solid #dde8f0' },
  tagsLabel: { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a8070', marginBottom: 14 },
  tagsWrap: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  tag: { background: 'white', border: '1px solid #dde8f0', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#8a8070' },
}

export default function BlogLearningPartnership() {
  return (
    <>
      <Helmet>
        <title>The Learning Partnership — Getting the Most From Your Driving Lessons | Mike Hinton</title>
        <meta name="description" content="How to build the right relationship with your driving instructor to learn faster and get more from every lesson. The learning partnership explained." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/learning-partnership" />
        <meta property="og:title" content="The Learning Partnership — Getting the Most From Your Driving Lessons" />
        <meta property="og:description" content="How to work with your instructor to learn faster and get more from every lesson." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/learning-partnership" />
        <meta property="og:type" content="article" />
      </Helmet>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.heroTag}>Mindset · Learning to Drive</div>
          <h1 style={s.h1}>
            Take Advantage of the<br />
            <span style={s.heroAccent}>Learning Partnership</span>
          </h1>
          <p style={s.heroSub}>Understanding how you learn — and communicating that with your instructor — is one of the most powerful things you can do to pass your test.</p>
          <p style={s.heroMeta}>✍️ Mike Hinton · February 2025 · 1 min read</p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <div style={s.introBox}>
            Everyone in this world is dealt a different hand in terms of how they learn. Some are quick to learn, others take more time. But what is more important is <strong>how you play the hand you are dealt</strong>. That is what builds character — and with great character comes great reward and, ultimately, great success.
          </div>

          <h2 style={s.h2}>No Two Learners Are the Same</h2>
          <p style={s.p}>This is something I see every single week. Two students of the same age, similar experience, same car — and completely different ways of processing information. One needs calm and quiet. One needs to talk through every step out loud. Both pass. Both needed something different to get there.</p>

          <blockquote style={s.blockquote}>
            <p style={s.bqP}>"Understanding how you like to learn isn't a weakness — it's one of the most important things you can bring to your first lesson."</p>
          </blockquote>

          <div style={s.statRow} className="mobile-1col">
            <div style={s.statCard}>
              <div style={s.statNum}>🤝</div>
              <div style={s.statDesc}>When instructor and learner work as a true partnership, progress accelerates dramatically</div>
            </div>
            <div style={s.statCard}>
              <div style={s.statNum}>💬</div>
              <div style={s.statDesc}>One honest conversation about your learning style can save hours of frustration on the road</div>
            </div>
          </div>

          <h2 style={s.h2}>What to Talk to Your Instructor About</h2>
          <p style={s.p}>Make sure you have a conversation with your instructor about your learning style from the very start. Think about the things that genuinely help you concentrate and absorb information:</p>
          <div style={s.tipGrid} className="mobile-1col">
            {learningStyles.map(item => (
              <div key={item.title} style={s.tipCard}>
                <span style={s.tipIcon}>{item.icon}</span>
                <strong style={s.tipTitle}>{item.title}</strong>
                <p style={s.tipDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={s.calloutBox}>
            <div style={s.calloutLabel}>💡 The key insight</div>
            <p style={s.calloutText}>There is no "standard" way to learn to drive. A good instructor doesn't have one method they apply to everyone — they adapt to <strong>you</strong>. But they can only do that if you tell them what you need.</p>
          </div>

          <h2 style={s.h2}>The Partnership That Gets You There</h2>
          <p style={s.p}>If you and your instructor both understand how you learn best and work together as a genuine partnership, you will go on to achieve great things — ultimately passing your driving test.</p>
          <p style={s.p}>It sounds simple, but it's one of the most overlooked things in learning to drive. Students spend hours worrying about manoeuvres and mirror checks, when a five-minute conversation at the start could have made everything easier.</p>

          <div style={s.darkBox}>
            <div style={s.darkLabel}>✓ The bottom line</div>
            <p style={s.darkText}>
              Know yourself. Speak up. Work together. That combination — more than any amount of extra lessons — is what separates students who struggle from students who pass.
            </p>
          </div>

        </div>

        <section style={s.cta}>
          <h2 style={s.ctaH2}>Ready to Start Your Partnership?</h2>
          <p style={s.ctaP}>Every lesson with Mike starts with understanding you — how you learn, what you need, and how to get the best out of every session together.</p>
          <div style={s.ctaBtns}>
            <a href="tel:07915999994" style={s.ctaBtn}>📞 07915 999994</a>
            <a href="https://wa.me/447915999994" target="_blank" rel="noreferrer" style={s.ctaBtnOutline}>💬 WhatsApp</a>
            <Link to="/contact" style={s.ctaBtnOutline}>Contact Form</Link>
          </div>
        </section>

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
