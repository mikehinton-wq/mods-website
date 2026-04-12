import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const mindsetTools = [
  {
    icon: '💪',
    title: 'Self-Belief',
    quote: '"I can and will do this."',
    desc: 'Not "I hope I will pass." Hope is passive. Belief is active. Go into your test knowing you have done the work — because you have.',
  },
  {
    icon: '🚗',
    title: 'Visualise the Freedom',
    quote: 'See the life on the other side.',
    desc: 'Where will you drive first? Who will you take? What will independence feel like? Keep that picture in your mind before and during the test.',
  },
  {
    icon: '🎯',
    title: 'Visualise Good Driving',
    quote: 'See it, then deliver it.',
    desc: 'Picture yourself driving smoothly, checking mirrors, making safe decisions. The brain responds to vivid mental rehearsal just as it does to practice.',
  },
  {
    icon: '↩️',
    title: 'Let Mistakes Go',
    quote: 'Move on immediately.',
    desc: "If something goes wrong, don't dwell — drive on. It might not be as bad as you think. One small fault won't fail you. The spiral that follows it might.",
  },
]

const tags = ['Mindset', 'Driving Test', 'Anxiety & Nerves', 'Confidence', 'Self Belief', 'Learner Driver', 'Test Preparation', 'Mental Health']

const s = {
  hero: {
    background: 'linear-gradient(135deg, #2d0050 0%, #5b0ea6 50%, #8b2fc9 100%)',
    color: '#fff',
    padding: '88px 24px 72px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 90% 110%, rgba(255,200,100,0.15) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  heroStars: {
    position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.15,
    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  },
  heroTag: {
    display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999,
    padding: '5px 16px', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)', marginBottom: 28,
  },
  filmBadge: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 8, padding: '8px 16px', fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.6)', marginBottom: 24, letterSpacing: '0.05em',
  },
  h1: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 'clamp(2rem, 5.5vw, 3.6rem)',
    fontWeight: 800, lineHeight: 1.1,
    maxWidth: 800, margin: '0 auto 20px', color: '#fff',
  },
  heroAccent: { color: '#f9c74f' },
  heroSub: {
    fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)',
    maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.7,
  },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.3)' },
  back: {
    color: 'rgba(255,255,255,0.45)', fontWeight: 600, fontSize: '0.88rem',
    display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 36, textDecoration: 'none',
  },
  content: { maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' },
  p: { marginBottom: 22, lineHeight: 1.85, fontWeight: 300, color: '#2a2a2a', fontSize: '1.02rem' },
  h2: {
    fontFamily: 'Raleway, sans-serif', fontSize: '1.75rem', fontWeight: 700,
    color: '#2d0050', margin: '56px 0 18px', lineHeight: 1.25,
  },
  introBox: {
    background: 'linear-gradient(135deg, #f5eeff, #ede0ff)',
    borderLeft: '4px solid #8b2fc9',
    borderRadius: '0 14px 14px 0',
    padding: '24px 28px', marginBottom: 48,
    fontSize: '1.05rem', color: '#2d0050', lineHeight: 1.8,
  },
  splitWrap: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
    margin: '40px 0', borderRadius: 16, overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(45,0,80,0.15)',
  },
  splitLeft: {
    background: '#2d0050', padding: '36px 28px', textAlign: 'center',
  },
  splitRight: {
    background: '#8b2fc9', padding: '36px 28px', textAlign: 'center',
  },
  splitNum: {
    fontFamily: 'Raleway, sans-serif', fontSize: '4rem', fontWeight: 800,
    color: '#f9c74f', lineHeight: 1, marginBottom: 8,
  },
  splitTitle: {
    fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem',
    color: '#fff', marginBottom: 10,
  },
  splitDesc: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, margin: 0 },
  workBox: {
    background: '#fdf9ff', border: '2px solid #e0c8ff', borderRadius: 16,
    padding: '32px 28px', margin: '40px 0',
  },
  workLabel: {
    fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8b2fc9', marginBottom: 14,
  },
  workText: { fontSize: '1.02rem', color: '#2a2a2a', lineHeight: 1.8, margin: 0 },
  blockquote: {
    margin: '48px 0', padding: '28px 32px',
    background: 'linear-gradient(135deg, #2d0050, #5b0ea6)',
    borderRadius: 16, textAlign: 'center',
  },
  bqText: {
    fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
    fontStyle: 'italic', fontWeight: 300, color: '#fff', lineHeight: 1.5, margin: 0,
  },
  bqAccent: { color: '#f9c74f', fontStyle: 'normal', fontWeight: 700 },
  toolsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '32px 0' },
  toolCard: {
    background: '#fff', border: '1px solid #e0c8ff',
    borderRadius: 16, padding: '24px 20px',
    borderTop: '4px solid #8b2fc9',
  },
  toolIcon: { fontSize: '2rem', marginBottom: 10, display: 'block' },
  toolTitle: {
    fontFamily: 'Raleway, sans-serif', display: 'block', fontSize: '1rem',
    fontWeight: 700, marginBottom: 6, color: '#2d0050',
  },
  toolQuote: {
    display: 'block', fontSize: '0.85rem', color: '#8b2fc9',
    fontStyle: 'italic', fontWeight: 600, marginBottom: 10,
  },
  toolDesc: { fontSize: '0.875rem', color: '#555', margin: 0, lineHeight: 1.65 },
  anxietyBox: {
    background: '#fff8f0', border: '2px solid #f9c74f', borderRadius: 14,
    padding: '28px 32px', margin: '40px 0',
  },
  anxietyLabel: {
    fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8501a', marginBottom: 12,
  },
  anxietyText: { fontSize: '1.05rem', color: '#1a1512', lineHeight: 1.8, margin: 0 },
  finalBox: {
    background: 'linear-gradient(135deg, #2d0050 0%, #5b0ea6 100%)',
    borderRadius: 20, padding: '48px 40px', margin: '48px 0', textAlign: 'center',
  },
  finalBig: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
    fontWeight: 800, color: '#f9c74f', lineHeight: 1.2, marginBottom: 16,
  },
  finalSub: { fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, margin: 0 },
  fbBox: {
    background: '#e8f0fe', border: '2px solid #3b5998',
    borderRadius: 14, padding: '24px 28px', margin: '40px 0',
    display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
  },
  fbIcon: { fontSize: '2.5rem', flexShrink: 0 },
  fbText: { fontSize: '1rem', color: '#1a1a2e', lineHeight: 1.7, margin: 0, flex: 1 },
  fbLink: {
    display: 'inline-block', background: '#3b5998', color: '#fff',
    fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.9rem',
    padding: '10px 22px', borderRadius: 50, textDecoration: 'none', flexShrink: 0,
  },
  cta: {
    textAlign: 'center',
    background: 'linear-gradient(135deg, #2d0050 0%, #5b0ea6 100%)',
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
    display: 'inline-block', background: '#f9c74f', color: '#2d0050',
    fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: '1rem',
    padding: '14px 32px', borderRadius: 50, textDecoration: 'none',
  },
  ctaBtnOutline: {
    display: 'inline-block', background: 'transparent', color: 'white',
    fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem',
    padding: '14px 32px', borderRadius: 50, textDecoration: 'none',
    border: '2px solid rgba(255,255,255,0.35)',
  },
  tagsSection: { background: '#faf8ff', padding: '40px 24px', borderTop: '1px solid #e0c8ff' },
  tagsLabel: { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8878aa', marginBottom: 14 },
  tagsWrap: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  tag: { background: 'white', border: '1px solid #e0c8ff', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#8878aa' },
}

export default function BlogBestSelf() {
  return (
    <>
      <Helmet>
        <title>When You Are Your Best Self — The Mindset Behind Passing Your Driving Test | Mike Hinton</title>
        <meta name="description" content="The mental side of learning to drive. How self-belief, visualisation and letting go of mistakes can be the difference between passing and failing your driving test." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/when-you-are-your-best-self" />
        <meta property="og:title" content="When You Are Your Best Self — The Mindset Behind Passing Your Driving Test" />
        <meta property="og:description" content="The mental side of learning to drive and how mindset affects your test result." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/when-you-are-your-best-self" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="When You Are Your Best Self — The Mindset Behind Passing Your Driving Test" />
        <meta name="twitter:description" content="The mental side of learning to drive. How self-belief, visualisation and letting go of mistakes can be the difference between passing and failing your driving test." />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"When You Are Your Best Self — The Mindset Behind Passing Your Driving Test","description":"The mental side of learning to drive. How self-belief, visualisation and letting go of mistakes can be the difference between passing and failing your driving test.","url":"https://www.mikehintondrivingschool.co.uk/blog/when-you-are-your-best-self","datePublished":"2026-01-01","dateModified":"2026-01-01","author":{"@type":"Person","name":"Mike Hinton","jobTitle":"DVSA Approved Driving Instructor","url":"https://www.mikehintondrivingschool.co.uk/about"},"publisher":{"@type":"Organization","name":"Mike Hinton Driving School","url":"https://www.mikehintondrivingschool.co.uk","logo":{"@type":"ImageObject","url":"https://www.mikehintondrivingschool.co.uk/images/og-image.jpg"}}}</script>
      </Helmet>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={s.heroStars} aria-hidden />
        <div style={{ position: 'relative' }}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.heroTag}>Mindset · Confidence</div>
          <div style={s.filmBadge}>🎬 Inspired by a great line from the movies</div>
          <h1 style={s.h1}>
            When You Are Your<br />
            <span style={s.heroAccent}>Best Self</span> —<br />
            The Possibilities Are Endless
          </h1>
          <p style={s.heroSub}>Confidence, self-belief, and a calm mind aren't optional extras for your driving test. They're half the battle.</p>
          <p style={s.heroMeta}>✍️ Mike Hinton · April 2026 · 3 min read</p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <div style={s.introBox}>
            There's a phrase from a movie that has always stuck with me: <strong>"When you are your best self, the possibilities are endless."</strong> When we have high confidence, strong self-belief, and real motivation — it really is possible to achieve anything. Including passing your driving test.
          </div>

          <h2 style={s.h2}>Anxiety Is Normal. It's Also Controllable.</h2>
          <p style={s.p}>When you start driving, everything makes you nervous — because it's all new. But as you build skills, your confidence grows. So does your self-belief and your motivation. The anxiety doesn't disappear — but it gets smaller. It becomes manageable.</p>
          <p style={s.p}>Think about your first day in a new job. You were probably anxious, overthinking every little thing. But after a while, look at where you are. That same anxiety is barely noticeable — because now you know what you're doing. <strong>Learning to drive works exactly the same way.</strong></p>

          <div style={s.workBox}>
            <div style={s.workLabel}>💼 The First Day Feeling</div>
            <p style={s.workText}>New job: nervous, unsure, second-guessing. Six months later: confident, capable, in your element. The job didn't get easier — <strong>you got better</strong>. Every learner driver goes through the same transformation. You're not behind. You're just at the beginning.</p>
          </div>

          <h2 style={s.h2}>The Test Is 50/50</h2>
          <p style={s.p}>Every student worries about their driving test. But here's something worth understanding:</p>

          <div style={s.splitWrap} className="mobile-1col">
            <div style={s.splitLeft}>
              <div style={s.splitNum}>50%</div>
              <div style={s.splitTitle}>Your Driving</div>
              <p style={s.splitDesc}>All the skills you've worked on. The observations, the manoeuvres, the judgement. <strong style={{ color: '#f9c74f' }}>You would not have been put forward for your test if you were not ready.</strong></p>
            </div>
            <div style={s.splitRight}>
              <div style={s.splitNum}>50%</div>
              <div style={s.splitTitle}>Your Mind</div>
              <p style={s.splitDesc}>The mental and psychological side. Controlling anxiety, staying present, recovering from small errors. This half is entirely within your control.</p>
            </div>
          </div>

          <p style={s.p}>The test is not about perfect driving. It's about demonstrating that you are making safe decisions and driving safely using all the skills you've been taught. You already have those skills. The question is whether you let your mind work with you or against you.</p>

          <blockquote style={s.blockquote}>
            <p style={s.bqText}>"Anxiety is normal. It's who you are — you can't change it. <span style={s.bqAccent}>But you absolutely can control it.</span>"</p>
          </blockquote>

          <h2 style={s.h2}>Four Tools to Control Your Mind on Test Day</h2>
          <p style={s.p}>These aren't just nice ideas — they're skills you can practise just like any other part of driving:</p>

          <div style={s.toolsGrid} className="mobile-1col">
            {mindsetTools.map(tool => (
              <div key={tool.title} style={s.toolCard}>
                <span style={s.toolIcon}>{tool.icon}</span>
                <strong style={s.toolTitle}>{tool.title}</strong>
                <span style={s.toolQuote}>{tool.quote}</span>
                <p style={s.toolDesc}>{tool.desc}</p>
              </div>
            ))}
          </div>

          <div style={s.anxietyBox}>
            <div style={s.anxietyLabel}>⚡ The key insight</div>
            <p style={s.anxietyText}>If you can control your mind, it will have a <strong>direct positive impact on your driving.</strong> Talk to your instructor about the mental side of your test — a good instructor will work on this with you, not just the practical skills.</p>
          </div>

          <div style={s.finalBox}>
            <div style={s.finalBig}>"When you are your best self,<br />the possibilities are endless."</div>
            <p style={s.finalSub}>Show up as your best self on test day. Trust your preparation. Control your mind. The rest is already there.</p>
          </div>

          <div style={s.fbBox}>
            <span style={s.fbIcon}>📘</span>
            <p style={s.fbText}>Follow our Facebook page for top tips on learning to drive, the driving test, and coping with test nerves — useful for every learner driver.</p>
            <a href="https://www.facebook.com/mikehintondrivingschool" target="_blank" rel="noreferrer" style={s.fbLink}>Follow on Facebook</a>
          </div>

        </div>

        <section style={s.cta}>
          <h2 style={s.ctaH2}>Ready to Be Your Best Self?</h2>
          <p style={s.ctaP}>Mike works with you on the mental side of driving as well as the practical — because both matter. Get in touch to find out how.</p>
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
