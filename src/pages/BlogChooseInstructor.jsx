import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const valueItems = [
  { icon: '🧠', title: 'Knowledge', desc: 'Years of experience on the road and in the classroom — knowing not just how to drive, but how to teach.' },
  { icon: '🎯', title: 'Experience', desc: 'A skilled instructor has seen every type of learner and knows exactly how to adapt to your needs.' },
  { icon: '🤝', title: 'Support', desc: 'Beyond the lesson — someone who encourages you, reassures you, and keeps you on track through the tough moments.' },
  { icon: '💰', title: 'Value for Money', desc: 'The cheapest option often takes the most hours. A skilled teacher gets you there faster and with more confidence.' },
  { icon: '📋', title: 'Accountability', desc: 'A professional instructor tracks your progress, gives honest feedback, and takes responsibility for your development.' },
  { icon: '⭐', title: 'Professionalism', desc: 'Punctual, prepared, and fully qualified. Every lesson should feel structured, not improvised.' },
  { icon: '🛡️', title: 'Keeping You Safe', desc: 'You are learning in a real car on real roads. Your safety — and the safety of others — is always the priority.' },
  { icon: '🏁', title: 'Seeing You Through', desc: 'The goal is your licence. A great instructor is as invested in your success as you are.' },
]

const tags = ['Choosing a Driving Instructor', 'Learning to Drive', 'Driving Lessons', 'Value for Money', 'Driving Instructor', 'Learner Driver', 'Rotherham', 'Advice']

const s = {
  hero: { background: 'linear-gradient(135deg, #0C3C60 0%, #1a5a8a 60%, #39729B 100%)', color: '#fff', padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 75% 20%, rgba(30,171,199,0.25) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(255,255,255,0.04) 0%, transparent 50%)', pointerEvents: 'none' },
  heroTag: { display: 'inline-block', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 999, padding: '5px 16px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 28 },
  h1: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(1.9rem,5vw,3.2rem)', fontWeight: 800, lineHeight: 1.12, maxWidth: 820, margin: '0 auto 16px', color: '#fff' },
  heroAccent: { color: '#1EABC7' },
  heroSub: { fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.7 },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.35)' },
  back: { color: 'rgba(255,255,255,0.55)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32, textDecoration: 'none' },
  content: { maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' },
  introBox: { background: '#e8f4f8', borderLeft: '4px solid #1EABC7', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: 48, fontSize: '1.05rem', color: '#0a2d3d', lineHeight: 1.75 },
  h2: { fontFamily: 'Raleway, sans-serif', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.25, color: '#0C3C60', margin: '56px 0 18px' },
  p: { marginBottom: 20, lineHeight: 1.8, fontWeight: 300, color: '#2a2a2a' },
  blockquote: { borderLeft: '3px solid #1EABC7', margin: '40px 0', padding: '20px 28px', background: '#f0f8fc', borderRadius: '0 10px 10px 0' },
  bqP: { fontFamily: 'Raleway, sans-serif', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 300, color: '#0C3C60', margin: 0 },
  valueGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, margin: '32px 0' },
  valueCard: { background: '#fff', border: '1px solid #dde8f0', borderRadius: 14, padding: '22px 20px', borderTop: '3px solid #1EABC7' },
  valueIcon: { fontSize: '1.8rem', marginBottom: 10, display: 'block' },
  valueTitle: { fontFamily: 'Raleway, sans-serif', display: 'block', fontSize: '0.95rem', fontWeight: 700, marginBottom: 8, color: '#0C3C60' },
  valueDesc: { fontSize: '0.875rem', color: '#555', margin: 0, lineHeight: 1.65 },
  priceBanner: { background: '#0C3C60', borderRadius: 14, padding: '32px 36px', margin: '40px 0', textAlign: 'center' },
  priceNum: { fontFamily: 'Raleway, sans-serif', fontSize: '3rem', fontWeight: 800, color: '#1EABC7', lineHeight: 1, marginBottom: 12 },
  priceText: { fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, margin: 0 },
  calloutBox: { background: '#fff8f0', border: '2px solid #f0c060', borderRadius: 14, padding: '24px 28px', margin: '40px 0' },
  calloutLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c8501a', marginBottom: 10 },
  calloutText: { fontSize: '1.05rem', color: '#1a1512', lineHeight: 1.75, margin: 0, fontWeight: 400 },
  darkBox: { background: '#0C3C60', borderRadius: 14, padding: '28px 32px', margin: '40px 0' },
  darkLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1EABC7', marginBottom: 12 },
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

export default function BlogChooseInstructor() {
  return (
    <>
      <Helmet>
        <title>How to Choose the Right Driving Instructor in Rotherham | Mike Hinton</title>
        <meta name="description" content="What to look for when choosing a driving instructor in Rotherham. Why the cheapest option often costs you more — and what really matters when picking who teaches you." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/how-to-choose-a-driving-instructor" />
        <meta property="og:title" content="How to Choose the Right Driving Instructor in Rotherham" />
        <meta property="og:description" content="What really matters when choosing a driving instructor — and why cheapest often costs more." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/how-to-choose-a-driving-instructor" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Choose the Right Driving Instructor in Rotherham" />
        <meta name="twitter:description" content="What to look for when choosing a driving instructor in Rotherham. Why the cheapest option often costs you more — and what really matters when picking who teaches you." />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"How to Choose the Right Driving Instructor in Rotherham","description":"What to look for when choosing a driving instructor in Rotherham. Why the cheapest option often costs you more — and what really matters when picking who teaches you.","url":"https://www.mikehintondrivingschool.co.uk/blog/how-to-choose-a-driving-instructor","datePublished":"2026-01-01","dateModified":"2026-01-01","author":{"@type":"Person","name":"Mike Hinton","jobTitle":"DVSA Approved Driving Instructor","url":"https://www.mikehintondrivingschool.co.uk/about"},"publisher":{"@type":"Organization","name":"Mike Hinton Driving School","url":"https://www.mikehintondrivingschool.co.uk","logo":{"@type":"ImageObject","url":"https://www.mikehintondrivingschool.co.uk/images/og-image.jpg"}}}</script>
      </Helmet>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.heroTag}>Advice · Choosing an Instructor</div>
          <h1 style={s.h1}>
            Don't Just Choose the<br />
            <span style={s.heroAccent}>Cheapest Instructor</span>
          </h1>
          <p style={s.heroSub}>Price is the easiest thing to compare. But it tells you the least about what you're actually getting.</p>
          <p style={s.heroMeta}>✍️ Mike Hinton · April 2026 · 3 min read</p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <div style={s.introBox}>
            How do you choose a driving instructor? What influences you when buying any service? Is it the quality they provide, the skills they have — or simply the price? Making a choice based on price alone is not the full picture.
          </div>

          <h2 style={s.h2}>What Are You Actually Paying For?</h2>
          <p style={s.p}>When you pay for driving lessons, you're not just paying for an hour in a car. You're paying for everything that instructor brings to that hour — their training, their patience, their ability to read you as a learner and adapt on the spot.</p>
          <p style={s.p}>Here's what a great instructor actually provides:</p>

          <div style={s.valueGrid} className="mobile-1col">
            {valueItems.map(item => (
              <div key={item.title} style={s.valueCard}>
                <span style={s.valueIcon}>{item.icon}</span>
                <strong style={s.valueTitle}>{item.title}</strong>
                <p style={s.valueDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={s.p}>Just to name a few. That's what you're really buying — and none of it shows up in an hourly rate.</p>

          <blockquote style={s.blockquote}>
            <p style={s.bqP}>"The cheapest instructor rarely gives you the cheapest overall experience. More hours at a lower rate often costs more — in money, time, and confidence."</p>
          </blockquote>

          <h2 style={s.h2}>The Real Cost of Learning to Drive</h2>
          <p style={s.p}>Most people focus on cost per lesson. But the real question is: <strong>how many lessons will it take?</strong> A skilled instructor who teaches you properly from the start, adapts to how you learn, and builds genuine confidence gets you to test day faster.</p>

          <div style={s.priceBanner}>
            <div style={s.priceNum}>Hours × Rate</div>
            <p style={s.priceText}>This is the only maths that matters. A higher hourly rate with fewer total hours almost always works out cheaper — and you'll be a better driver at the end of it.</p>
          </div>

          <h2 style={s.h2}>Making a Choice Based on Price Alone Isn't Fair</h2>
          <p style={s.p}>It's not fair to the instructor who has invested years into their skills, qualifications, and knowledge. And more importantly — it's not fair to yourself. You're trusting this person to teach you a skill you'll use for the rest of your life, on roads shared with other people.</p>

          <div style={s.calloutBox}>
            <div style={s.calloutLabel}>💡 Think about it this way</div>
            <p style={s.calloutText}>You wouldn't choose a surgeon based on who charges the least. You'd want to know their experience, their track record, and whether they'll take the time to understand your situation. Learning to drive deserves the same thought.</p>
          </div>

          <h2 style={s.h2}>Choose Wisely</h2>
          <p style={s.p}>If you want a skill for life, invest in a skilled teacher — someone with the advanced knowledge, patience, and determination to see you through to the end. That is worth more than an hourly rate.</p>
          <p style={s.p}>Only by understanding all the elements involved in learning to drive can you estimate the actual cost — both in money and in value.</p>

          <div style={s.darkBox}>
            <div style={s.darkLabel}>✓ The bottom line</div>
            <p style={s.darkText}>
              Ask about experience. Ask about pass rates. Ask how they adapt to different learners. Ask what happens if you're nervous, or struggle with a particular skill. <strong>The answers to those questions will tell you far more than a price list ever could.</strong>
            </p>
          </div>

        </div>

        <section style={s.cta}>
          <h2 style={s.ctaH2}>Ready to Make the Right Choice?</h2>
          <p style={s.ctaP}>Mike brings years of experience, a genuine passion for teaching, and a track record of getting students to test day ready and confident. Get in touch to find out more.</p>
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
