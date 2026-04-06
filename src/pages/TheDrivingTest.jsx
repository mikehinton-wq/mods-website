import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const stats = [
  { num: '51%', desc: 'First-time pass rate at Rotherham test centre' },
  { num: '40', desc: 'Minutes — the total length of your practical test' },
  { num: '15', desc: 'Minor faults allowed before you fail' },
]

const testDaySteps = [
  { icon: '🕐', title: 'Arrive 10 minutes early', desc: 'Late arrival can mean your test is cancelled — leave plenty of time.' },
  { icon: '🪪', title: 'Bring your photocard licence', desc: 'You must have your provisional driving licence with you. No licence = no test.' },
  { icon: '🚗', title: 'Your instructor waits outside', desc: "Mike will wait while you take the test. You won't be alone right up until you drive off." },
  { icon: '📋', title: 'Examiner introduction', desc: "The examiner will introduce themselves and explain exactly what to expect before you set off." },
]

const routes = [
  'Dual carriageways on Centenary Way, New Wortley Road and Fitzwilliam Road',
  'Town centre junctions including Wellgate, Clifton Park, Moorgate Road and Drummond Street',
  'Residential areas in Greasbrough, Kimberworth, Rawmarsh, Upper Haugh and Swinton',
  'Roundabouts including St Annes, College Roundabout, Dalton Asda, Parkgate, Ickles, Aldwarke and Brinsworth',
  'Independent driving sections using sat-nav and road signs',
  'Reversing manoeuvres',
]

const tips = [
  { icon: '😴', title: 'Sleep well the night before', desc: "A tired brain makes more mistakes. Aim for a full night's sleep — not a late-night cram session." },
  { icon: '🚗', title: 'Book a morning lesson', desc: "Have a lesson with Mike on the morning of your test if possible. It warms you up and settles your nerves before you walk in." },
  { icon: '🐢', title: "Don't rush", desc: 'Methodical and safe beats fast and unsure every time. The examiner wants to see you drive confidently — not quickly.' },
  { icon: '🔄', title: 'Move on from mistakes', desc: "If you make a mistake, don't dwell on it. One minor fault won't fail you. The spiral that follows a mistake is what causes failures." },
  { icon: '✅', title: 'Trust your preparation', desc: "If you're in for the test, Mike believes you're ready. Your preparation is already done — test day is just you showing what you already know." },
]

const tags = ['Rotherham', 'Driving Test', 'Test Centre', 'Test Prep', 'DVSA', 'Learner Driver', 'Practical Test', 'Rotherham Driving Test Centre', 'Pass Rate', 'Test Routes']

const s = {
  hero: { background: '#0C3C60', color: '#fff', padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 75% 25%, rgba(30,171,199,0.2) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(255,255,255,0.05) 0%, transparent 50%)', pointerEvents: 'none' },
  heroTag: { display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '5px 16px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 28 },
  h1: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, lineHeight: 1.12, maxWidth: 820, margin: '0 auto 16px', color: '#fff' },
  heroAccent: { color: '#1EABC7' },
  heroSub: { fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.7 },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.35)' },
  content: { maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' },
  introBox: { background: '#e8f4f8', borderLeft: '4px solid #1EABC7', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: 48, fontSize: '1.05rem', color: '#0a2d3d', lineHeight: 1.75, fontWeight: 400 },
  h2: { fontFamily: 'Raleway, sans-serif', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.25, color: '#0C3C60', margin: '56px 0 18px' },
  p: { marginBottom: 20, lineHeight: 1.8, fontWeight: 300, color: '#2a2a2a' },
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, margin: '40px 0' },
  statCard: { background: '#0C3C60', borderRadius: 14, padding: '24px 20px', textAlign: 'center' },
  statNum: { fontFamily: 'Raleway, sans-serif', fontSize: '2.4rem', fontWeight: 800, color: '#1EABC7', lineHeight: 1, marginBottom: 10 },
  statDesc: { fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 },
  addressBox: { background: '#0C3C60', borderRadius: 14, padding: '24px 28px', margin: '24px 0', display: 'flex', alignItems: 'center', gap: 20 },
  addressPin: { fontSize: '2.5rem', flexShrink: 0 },
  addressTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, color: '#1EABC7', fontSize: '1rem', marginBottom: 4 },
  addressText: { color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 },
  tipGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, margin: '32px 0' },
  tipCard: { background: '#fff', border: '1px solid #dde8f0', borderRadius: 14, padding: '22px 20px', borderTop: '3px solid #1EABC7' },
  tipIcon: { fontSize: '1.8rem', marginBottom: 10, display: 'block' },
  tipTitle: { fontFamily: 'Raleway, sans-serif', display: 'block', fontSize: '0.95rem', fontWeight: 700, marginBottom: 8, color: '#0C3C60' },
  tipDesc: { fontSize: '0.875rem', color: '#555', margin: 0, lineHeight: 1.65 },
  routeBox: { background: '#f0f8fc', border: '1px solid #c0dff0', borderRadius: 14, padding: '24px 28px', margin: '24px 0' },
  routeItem: { display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12, fontSize: '0.9rem', color: '#2a2a2a', lineHeight: 1.6 },
  routeTick: { color: '#1EABC7', fontWeight: 700, marginTop: 2, flexShrink: 0 },
  minorBox: { background: '#fff8f0', border: '2px solid #f0c060', borderRadius: 14, padding: '24px 28px', margin: '32px 0', display: 'flex', alignItems: 'center', gap: 24 },
  minorNum: { fontFamily: 'Raleway, sans-serif', fontSize: '3.5rem', fontWeight: 800, color: '#c8501a', lineHeight: 1, flexShrink: 0 },
  minorText: { fontSize: '0.95rem', color: '#1a1512', lineHeight: 1.7 },
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

export default function TheDrivingTest() {
  return (
    <>
      <Helmet>
        <title>What to Expect on Your Driving Test at Rotherham | Mike Hinton</title>
        <meta name="description" content="Everything you need to know about the Rotherham driving test — pass rates, routes, what happens on the day, managing driving test nerves and top tips. From DVSA-approved instructor Mike Hinton." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/the-driving-test" />
        <meta property="og:title" content="The Driving Test at Rotherham — What to Expect" />
        <meta property="og:description" content="Pass rates, test routes, managing driving test nerves and top tips for Rotherham test centre." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/the-driving-test" />
        <meta property="og:type" content="article" />
      </Helmet>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Test Prep · Rotherham</div>
          <h1 style={s.h1}>
            The Driving Test —<br />
            <span style={s.heroAccent}>What to Expect at Rotherham</span>
          </h1>
          <p style={s.heroSub}>Everything you need to know before you arrive — routes, pass rates, what to bring, and tips for the day.</p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <div style={s.introBox}>
            Taking your practical driving test at Rotherham? Here's everything you need to know before you arrive, so there are no surprises on the day. The more familiar you are with what to expect, the calmer you'll feel when it matters most.
          </div>

          <div style={s.statsRow}>
            {stats.map(stat => (
              <div key={stat.num} style={s.statCard}>
                <div style={s.statNum}>{stat.num}</div>
                <div style={s.statDesc}>{stat.desc}</div>
              </div>
            ))}
          </div>

          <h2 style={s.h2}>Where is Rotherham Test Centre?</h2>
          <div style={s.addressBox}>
            <div style={s.addressPin}>📍</div>
            <div>
              <div style={s.addressTitle}>Rotherham Driving Test Centre</div>
              <p style={s.addressText}>Unit 3, Malta Trading Estate, Mangham Way, S61 4RL<br />Parking is available nearby and the centre is accessible by public transport.</p>
            </div>
          </div>

          <h2 style={s.h2}>What is the Pass Rate at Rotherham?</h2>
          <p style={s.p}>The current first-time pass rate at Rotherham test centre is around <strong>51%</strong> — broadly in line with the national average. With the right preparation, there is absolutely no reason you can't be in the majority. Mike builds real test routes into your lessons throughout your learning journey, so you'll already know them well before test day.</p>

          <h2 style={s.h2}>What Happens on Test Day?</h2>
          <div style={s.tipGrid} className="mobile-1col">
            {testDaySteps.map(step => (
              <div key={step.title} style={s.tipCard}>
                <span style={s.tipIcon}>{step.icon}</span>
                <strong style={s.tipTitle}>{step.title}</strong>
                <p style={s.tipDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
          <p style={s.p}>The test lasts approximately <strong>40 minutes</strong>. You'll be asked a Show Me / Tell Me vehicle safety question at the start, then drive for around 20 minutes independently using a sat-nav or road signs, with the examiner giving directions for the rest.</p>

          <h2 style={s.h2}>What Routes Will I Drive?</h2>
          <p style={s.p}>The test routes from Rotherham cover a mix of town centre roads, dual carriageway, and residential areas. Common areas include:</p>
          <div style={s.routeBox}>
            {routes.map((route, i) => (
              <div key={i} style={{ ...s.routeItem, ...(i === routes.length - 1 ? { marginBottom: 0 } : {}) }}>
                <span style={s.routeTick}>✓</span>
                <span>{route}</span>
              </div>
            ))}
          </div>

          <h2 style={s.h2}>How Many Minors Are Allowed?</h2>
          <div style={s.minorBox}>
            <div style={s.minorNum}>15</div>
            <p style={s.minorText}>You can receive up to <strong>15 minor (driving) faults</strong> and still pass. One serious or dangerous fault means an automatic fail. Your examiner will go through the result sheet with you at the end — whether you pass or not.</p>
          </div>

          <h2 style={s.h2}>Top Tips for Test Day</h2>
          <div style={s.tipGrid} className="mobile-1col">
            {tips.map(tip => (
              <div key={tip.title} style={s.tipCard}>
                <span style={s.tipIcon}>{tip.icon}</span>
                <strong style={s.tipTitle}>{tip.title}</strong>
                <p style={s.tipDesc}>{tip.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={s.h2}>Managing Driving Test Nerves</h2>
          <div style={{ background: '#fff', border: '1px solid #dde8f0', borderRadius: 14, padding: '28px', borderTop: '3px solid #1EABC7', display: 'flex', alignItems: 'flex-start', gap: 20, margin: '16px 0' }}>
            <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>🧘</span>
            <div>
              <p style={{ ...s.p, marginBottom: 16 }}>Being able to manage your nerves is a really important skill – and not just for your driving test. So learning how to manage your nerves is a vital skill for new drivers.</p>
              <p style={{ ...s.p, marginBottom: 16 }}>Follow this link for tips and useful articles on how to manage your nerves on test day.</p>
              <a href="https://readytopass.campaign.gov.uk/driving-test-nerves/" target="_blank" rel="noreferrer" style={{ display: 'inline-block', background: '#1EABC7', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.95rem', padding: '12px 24px', borderRadius: 50, textDecoration: 'none' }}>
                Tips for Managing Test Nerves →
              </a>
            </div>
          </div>

        </div>

        <section style={s.cta}>
          <h2 style={s.ctaH2}>Ready to Prepare for Your Test?</h2>
          <p style={s.ctaP}>Mike builds every Rotherham test route into your lessons. By the time test day comes, the roads will already feel familiar. Get in touch to get started.</p>
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
