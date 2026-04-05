import { Link } from 'react-router-dom'

const questions = [
  { num: '1', q: 'On a scale of 1–10, how much effort did I put into preparing?' },
  { num: '2', q: 'What is one thing I could improve with my preparation?' },
]

const fourSkills = [
  { icon: '👁️', title: 'Effective Observation', desc: 'See everything — not just what is directly in front of you. Scan the full picture constantly.' },
  { icon: '🗺️', title: 'Good Planning', desc: 'Think ahead. Anticipate what other drivers, cyclists and pedestrians are likely to do next.' },
  { icon: '🧠', title: 'Awareness', desc: 'Know what you are doing and stay conscious of everything happening around you at all times.' },
  { icon: '⚖️', title: 'Good Judgement', desc: 'Make the right call at the right time — speed, distance, priority. Confidence built through preparation.' },
]

const tags = ['Driving Test', 'Mindset', 'Test Preparation', 'Failing Your Test', 'Learner Driver', 'Driving Tips', 'Mental Health', 'Success', 'Driving Lessons']

const s = {
  hero: { background: '#1a1512', color: '#f5f0e8', padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(200,80,26,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(74,124,89,0.15) 0%, transparent 50%)', pointerEvents: 'none' },
  heroTag: { display: 'inline-block', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 999, padding: '5px 16px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 28 },
  h1: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 800, lineHeight: 1.12, maxWidth: 820, margin: '0 auto 16px', color: '#f5f0e8' },
  em: { fontStyle: 'italic', fontWeight: 300, color: '#d4905a' },
  heroSub: { fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.7 },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.4)' },
  back: { color: 'rgba(255,255,255,0.55)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32, textDecoration: 'none' },
  content: { maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' },
  introBox: { background: '#e8f0ea', borderLeft: '4px solid #4a7c59', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: 48, fontSize: '1.05rem', color: '#2d4a36', lineHeight: 1.75, fontWeight: 400 },
  h2: { fontFamily: 'Raleway, sans-serif', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.25, color: '#1a1512', margin: '56px 0 18px' },
  p: { marginBottom: 20, lineHeight: 1.8, fontWeight: 300, color: '#2a2a2a' },
  blockquote: { borderLeft: '3px solid #c8501a', margin: '40px 0', padding: '20px 28px', background: '#fdf8f4', borderRadius: '0 10px 10px 0' },
  bqP: { fontFamily: 'Raleway, sans-serif', fontSize: '1.3rem', fontStyle: 'italic', fontWeight: 300, color: '#1a1512', margin: 0 },
  questionBox: { background: '#1a1512', borderRadius: 14, padding: '28px 32px', margin: '32px 0' },
  questionLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#d4905a', marginBottom: 20 },
  questionItem: { display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 },
  questionNum: { fontFamily: 'Raleway, sans-serif', fontSize: '2rem', fontWeight: 800, color: '#c8501a', lineHeight: 1, flexShrink: 0, width: 36 },
  questionText: { fontSize: '1rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, margin: 0, paddingTop: 4 },
  calloutBox: { background: '#fff8f0', border: '2px solid #f0c060', borderRadius: 14, padding: '24px 28px', margin: '40px 0' },
  calloutLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8501a', marginBottom: 10 },
  calloutText: { fontSize: '1.05rem', color: '#1a1512', lineHeight: 1.75, margin: 0, fontWeight: 400 },
  tipGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, margin: '32px 0' },
  tipCard: { background: '#fff', border: '1px solid #ddd6c8', borderRadius: 14, padding: '22px 20px', borderTop: '3px solid #4a7c59' },
  tipIcon: { fontSize: '1.8rem', marginBottom: 10, display: 'block' },
  tipTitle: { fontFamily: 'Raleway, sans-serif', display: 'block', fontSize: '0.95rem', fontWeight: 700, marginBottom: 8, color: '#1a1512' },
  tipDesc: { fontSize: '0.875rem', color: '#555', margin: 0, lineHeight: 1.65 },
  darkBox: { background: '#1a3a2a', borderRadius: 14, padding: '24px 28px', margin: '40px 0' },
  darkLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4ade80', marginBottom: 10 },
  darkText: { fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, margin: 0 },
  cta: { textAlign: 'center', background: 'linear-gradient(135deg, #1a3a2a, #2d5a40)', color: 'white', padding: '64px 24px' },
  ctaH2: { fontFamily: 'Raleway, sans-serif', color: 'white', marginTop: 0, fontSize: '2rem', fontWeight: 700, marginBottom: 16 },
  ctaP: { color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 },
  ctaBtns: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' },
  ctaBtn: { display: 'inline-block', background: '#ffe135', color: '#1a1512', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: 50, textDecoration: 'none' },
  ctaBtnOutline: { display: 'inline-block', background: 'transparent', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' },
  tagsSection: { background: '#f5f0e8', padding: '40px 24px', borderTop: '1px solid #ddd6c8' },
  tagsLabel: { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a8070', marginBottom: 14 },
  tagsWrap: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  tag: { background: 'white', border: '1px solid #ddd6c8', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#8a8070' },
}

export default function BlogFailureToPrepare() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.heroTag}>Mindset · Test Preparation</div>
          <h1 style={s.h1}>
            Failure to Prepare is<br />
            <span style={s.em}>Preparing to Fail</span>
          </h1>
          <p style={s.heroSub}>What happens when you judge your driving test result by effort, not outcome — and why it changes everything.</p>
          <p style={s.heroMeta}>✍️ Mike Hinton · Feb 2025 · 2 min read</p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <div style={s.introBox}>
            Failing your test can be a tough pill to swallow. Most of us are hardwired to judge our success based on whether or not we achieved the result we set out to achieve. But once you begin to judge your result based on your <strong>effort</strong>, rather than your outcome — you will never truly fail again.
          </div>

          <h2 style={s.h2}>We Live in a Results-Driven Society</h2>
          <p style={s.p}>Results are in our faces all the time — in exams, uni applications, jobs, even in family life. Being relentless about staying focused on effort instead of results is incredibly difficult, but it's achievable — and necessary for high levels of success.</p>
          <p style={s.p}>It's completely normal to get down on yourself when you're not achieving what you set out to do, especially if you fail your driving test. But what you do with that feeling makes all the difference.</p>

          <blockquote style={s.blockquote}>
            <p style={s.bqP}>"Directing your focus to what you can do differently in the future is so much more efficient than beating yourself up for the result."</p>
          </blockquote>

          <h2 style={s.h2}>Next Time You're Facing Failure — Ask Yourself This</h2>
          <p style={s.p}>Force yourself to answer these two questions honestly before you do anything else:</p>
          <div style={s.questionBox}>
            <div style={s.questionLabel}>🤔 Two Questions to Ask Yourself</div>
            {questions.map(q => (
              <div key={q.num} style={{ ...s.questionItem, ...(q.num === '2' ? { marginBottom: 0 } : {}) }}>
                <div style={s.questionNum}>{q.num}.</div>
                <p style={s.questionText}>{q.q}</p>
              </div>
            ))}
          </div>
          <p style={s.p}>Doing so will prepare you far better to succeed next time than dwelling on what went wrong.</p>

          <h2 style={s.h2}>Your Instructor Prepares You — But the Day Is Yours</h2>
          <div style={s.calloutBox}>
            <div style={s.calloutLabel}>⚠️ Important</div>
            <p style={s.calloutText}>Your driving instructor will always ensure you have the skills and ability to pass the driving test. But on the day, it's down to <strong>you</strong>. Adequate preparation is vital — mentally, emotionally, and physically.</p>
          </div>

          <h2 style={s.h2}>The Four Key Skills for Test Day Success</h2>
          <p style={s.p}>Apply these four skills on test day, and you give yourself every chance of passing:</p>
          <div style={s.tipGrid}>
            {fourSkills.map(skill => (
              <div key={skill.title} style={s.tipCard}>
                <span style={s.tipIcon}>{skill.icon}</span>
                <strong style={s.tipTitle}>{skill.title}</strong>
                <p style={s.tipDesc}>{skill.desc}</p>
              </div>
            ))}
          </div>

          <div style={s.darkBox}>
            <div style={s.darkLabel}>✓ Remember This</div>
            <p style={s.darkText}>
              Success on your driving test isn't just about what your hands do on the wheel. It's about how well-prepared your mind is before you even sit down in that car. Preparation — done properly — removes doubt. And doubt is what fails most people, not ability.
            </p>
          </div>

        </div>

        <section style={s.cta}>
          <h2 style={s.ctaH2}>Let's Prepare You Properly</h2>
          <p style={s.ctaP}>Mike works with you on the mental side of driving as well as the practical. Get in touch to find out how lessons are structured to set you up for success.</p>
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
      </main>
    </>
  )
}
