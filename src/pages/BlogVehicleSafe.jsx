import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const related = [
  { href: '/blog/how-to-get-rid-of-nerves', title: 'How to Get Rid of Driving Test Nerves in 3 Simple Steps' },
  { href: '/blog/3-things-nervous-drivers-do-on-test', title: '3 Things Every Nervous Driver Does on Their Test (And How to Stop)' },
  { href: '/blog/show-me-tell-me-2026', title: 'Show Me Tell Me Questions — Complete Guide' },
]

const predriveChecks = [
  { icon: '🪟', label: 'Windscreen & windows', detail: 'Clear, clean, no major chips or cracks obstructing your view' },
  { icon: '💡', label: 'Lights', detail: 'All working — headlights, brake lights, indicators, hazards' },
  { icon: '🛑', label: 'Brakes', detail: 'Firm pedal, no pulling to one side, no grinding noise' },
]

const underBonnetChecks = [
  { icon: '🛢️', title: 'Engine oil', text: "Low oil is one of the most common causes of engine damage. Check the dipstick when the engine is cold. Takes 30 seconds." },
  { icon: '🌡️', title: 'Coolant', text: "Check the expansion tank — the small translucent bottle near the radiator. It should sit between the MIN and MAX lines." },
  { icon: '⚙️', title: 'Brake fluid', text: "Located under the bonnet in a small reservoir. If it's below the minimum line, get it checked by a garage immediately." },
  { icon: '🔋', title: 'Battery', text: "If your car is slow to start or the electrics are playing up, the battery may be failing. Don't ignore it." },
  { icon: '💧', title: 'Washer fluid', text: "Sounds minor — until you're doing 70mph behind a lorry spraying mud and your washer bottle runs dry." },
]

const routine = [
  { num: '1', label: 'Walk around the car', detail: 'Look for obvious damage, flat tyres, or lights left on' },
  { num: '2', label: 'Check your mirrors', detail: 'Adjust before you move, not while you\'re driving' },
  { num: '3', label: 'Scan the dashboard', detail: 'Any warning lights you haven\'t seen before? Find out what they mean' },
  { num: '4', label: 'Test the brakes', detail: 'Press the pedal before you pull away — it should feel firm' },
]

const s = {
  page: { fontFamily: 'system-ui, sans-serif', color: '#1a1a1a' },

  hero: { background: '#0f1f0f', padding: '64px 0 0', position: 'relative', overflow: 'hidden' },
  heroStripe: { position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #dc2626, #f59e0b, #16a34a)' },
  heroInner: { maxWidth: 700, margin: '0 auto', padding: '0 24px' },
  back: { color: 'rgba(255,255,255,0.45)', fontWeight: 500, fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 28, textDecoration: 'none' },
  pill: { display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.4)', borderRadius: 999, padding: '4px 14px', fontSize: 11, color: '#f87171', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 },
  h1: { fontFamily: 'Raleway, sans-serif', fontWeight: 900, fontSize: 'clamp(26px,5vw,46px)', lineHeight: 1.06, color: '#fff', marginBottom: 20 },
  h1Red: { color: '#f87171' },
  lead: { fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 },
  metaRow: { display: 'flex', gap: 20, flexWrap: 'wrap', paddingBottom: 32 },
  metaBadge: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.4)' },
  metaVal: { color: 'rgba(255,255,255,0.7)', fontWeight: 500 },

  content: { maxWidth: 700, margin: '0 auto', padding: '52px 24px 80px' },
  intro: { fontSize: 18, fontWeight: 300, lineHeight: 1.8, color: '#444', marginBottom: 40, paddingBottom: 36, borderBottom: '2px solid #f0ede8' },

  /* Warning box */
  warningBox: { background: '#fff5f5', border: '2px solid #dc2626', borderRadius: 14, padding: '28px 32px', margin: '40px 0', textAlign: 'center' },
  warningLabel: { fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#dc2626', marginBottom: 12 },
  warningFine: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(32px,7vw,56px)', fontWeight: 900, color: '#dc2626', lineHeight: 1, marginBottom: 8 },
  warningDetail: { fontSize: 14, color: '#666', lineHeight: 1.6 },
  warningNote: { fontSize: 13, color: '#999', marginTop: 10, fontStyle: 'italic' },

  /* Section heading */
  sectionH2: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 'clamp(20px,4vw,26px)', color: '#0f0f0f', marginBottom: 6, marginTop: 48 },
  sectionSub: { fontSize: 15, fontWeight: 300, color: '#666', marginBottom: 24, lineHeight: 1.6 },

  /* Pre-drive check cards */
  checkGrid: { display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 8 },
  checkCard: { display: 'flex', alignItems: 'flex-start', gap: 16, background: '#fff', border: '1px solid #e8e4dd', borderRadius: 12, padding: '16px 20px' },
  checkIcon: { fontSize: 26, flexShrink: 0, marginTop: 2 },
  checkLabel: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0f0f0f', marginBottom: 3 },
  checkDetail: { fontSize: 14, fontWeight: 300, color: '#555', lineHeight: 1.6 },
  checkTime: { fontSize: 12, color: '#16a34a', fontWeight: 700, marginTop: 8 },

  /* Tyre spotlight */
  tyreBox: { background: 'linear-gradient(135deg, #0f1f0f 0%, #1a3a1a 100%)', borderRadius: 16, padding: '32px 28px', margin: '48px 0' },
  tyreTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 },
  tyreStat: { fontFamily: 'Raleway, sans-serif', fontSize: 52, fontWeight: 900, color: '#4ade80', lineHeight: 1, marginBottom: 4 },
  tyreStatLabel: { fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 20 },
  tyrePence: { background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: 10, padding: '16px 20px', marginTop: 16 },
  tyrePenceTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 14, color: '#4ade80', marginBottom: 6 },
  tyrePenceText: { fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 },

  /* Under bonnet grid */
  bonnetGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginBottom: 8 },
  bonnetCard: { background: '#fafaf8', border: '1px solid #e8e4dd', borderRadius: 12, padding: '18px 20px' },
  bonnetIcon: { fontSize: 22, marginBottom: 8 },
  bonnetTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0f0f0f', marginBottom: 6 },
  bonnetText: { fontSize: 13, fontWeight: 300, color: '#555', lineHeight: 1.65 },

  /* New driver warning */
  newDriverBox: { background: '#fffbeb', border: '2px solid #f59e0b', borderRadius: 14, padding: '24px 28px', margin: '48px 0' },
  newDriverTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 800, fontSize: 18, color: '#92400e', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 },
  newDriverText: { fontSize: 15, color: '#78350f', lineHeight: 1.7, margin: 0 },

  /* 2-min routine */
  routineList: { display: 'flex', flexDirection: 'column', gap: 12, margin: '24px 0 40px' },
  routineItem: { display: 'flex', alignItems: 'flex-start', gap: 16, padding: '14px 20px', background: '#fff', border: '1px solid #e8e4dd', borderRadius: 12 },
  routineNum: { fontFamily: 'Raleway, sans-serif', fontSize: 22, fontWeight: 900, color: '#1EABC7', lineHeight: 1, flexShrink: 0, width: 28, textAlign: 'center' },
  routineLabel: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0f0f0f', marginBottom: 3 },
  routineDetail: { fontSize: 13, color: '#666', fontWeight: 300 },

  /* Bottom line */
  bottomLine: { background: '#0f1f0f', borderRadius: 16, padding: '32px 28px', marginTop: 48 },
  bottomH2: { fontFamily: 'Raleway, sans-serif', fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 12 },
  bottomP: { fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 20 },
  bottomBtn: { display: 'inline-block', background: '#16a34a', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: 13, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '13px 28px', borderRadius: 8, textDecoration: 'none' },

  /* Related */
  related: { marginTop: 52, paddingTop: 36, borderTop: '2px solid #f0ede8' },
  relatedLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9a9088', marginBottom: 16 },
  relatedLinks: { display: 'flex', flexDirection: 'column', gap: 8 },
  relatedLink: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderRadius: 10, border: '1px solid #e8e4dd', textDecoration: 'none' },
  relatedTitle: { fontSize: 14, fontWeight: 400, color: '#0f0f0f', lineHeight: 1.4 },
  relatedArrow: { color: '#1EABC7', fontWeight: 700, flexShrink: 0, marginLeft: 12 },
}

export default function BlogVehicleSafe() {
  return (
    <div style={s.page}>
      <Helmet>
        <title>Is Your Car Safe to Drive? UK Vehicle Safety Checks Explained | Mike Hinton</title>
        <meta name="description" content="A valid MOT doesn't mean your car is roadworthy today. UK law requires you to check your vehicle before every journey. Here's exactly what to check — and the £2,500 fine most drivers don't know about." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/is-your-car-safe-to-drive" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Is Your Car Safe to Drive? UK Vehicle Safety Checks Explained" />
        <meta property="og:description" content="A valid MOT doesn't mean your car is roadworthy today. Here's what UK law requires you to check before every journey — and the £2,500 fine most drivers don't know about." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/is-your-car-safe-to-drive" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Is Your Car Safe to Drive? UK Vehicle Safety Checks Explained" />
        <meta name="twitter:description" content="A valid MOT doesn't mean your car is roadworthy today. Here's what UK law requires you to check — and the £2,500 fine most drivers don't know about." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Is Your Car Safe to Drive? UK Vehicle Safety Checks Explained",
          "description": "A valid MOT doesn't mean your car is roadworthy today. UK law requires you to check your vehicle before every journey. Here's exactly what to check — and the £2,500 fine most drivers don't know about.",
          "url": "https://www.mikehintondrivingschool.co.uk/blog/is-your-car-safe-to-drive",
          "datePublished": "2026-04-15",
          "dateModified": "2026-04-15",
          "author": { "@type": "Person", "name": "Mike Hinton", "jobTitle": "DVSA Approved Driving Instructor", "url": "https://www.mikehintondrivingschool.co.uk/about" },
          "publisher": { "@type": "Organization", "name": "Mike Hinton Driving School", "url": "https://www.mikehintondrivingschool.co.uk", "logo": { "@type": "ImageObject", "url": "https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" } }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does a valid MOT mean my car is safe to drive?",
              "acceptedAnswer": { "@type": "Answer", "text": "No. An MOT proves your car was roadworthy on the day it was tested — nothing more. You are legally responsible for ensuring your vehicle is safe to drive before every journey, regardless of when it last passed an MOT." }
            },
            {
              "@type": "Question",
              "name": "What should I check before driving my car?",
              "acceptedAnswer": { "@type": "Answer", "text": "Before every drive you must check: windscreen, windows and mirrors are clean and clear; all lights are working; brakes are functioning properly. You should also regularly check engine oil, coolant, brake fluid, battery and tyre condition." }
            },
            {
              "@type": "Question",
              "name": "What is the legal minimum tyre tread depth in the UK?",
              "acceptedAnswer": { "@type": "Answer", "text": "The legal minimum tyre tread depth for cars in the UK is 1.6mm across the central three-quarters of the tyre, all the way around. Driving on illegal tyres can result in a fine of up to £2,500 and 3 penalty points per tyre." }
            },
            {
              "@type": "Question",
              "name": "What is the 20p tyre tread test?",
              "acceptedAnswer": { "@type": "Answer", "text": "Insert a 20p coin into the tread grooves of your tyre. If you can see the outer band of the coin, your tread depth is likely below the legal minimum of 1.6mm and you should have your tyres checked or replaced immediately." }
            },
            {
              "@type": "Question",
              "name": "What is the fine for driving an unsafe vehicle in the UK?",
              "acceptedAnswer": { "@type": "Answer", "text": "You can be fined up to £2,500, receive 3 penalty points and be banned from driving for driving a vehicle in a dangerous condition. This applies whether or not you knew about the fault." }
            }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mikehintondrivingschool.co.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mikehintondrivingschool.co.uk/blog" },
            { "@type": "ListItem", "position": 3, "name": "Is Your Car Safe to Drive?", "item": "https://www.mikehintondrivingschool.co.uk/blog/is-your-car-safe-to-drive" }
          ]
        })}</script>
      </Helmet>

      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroStripe} />
        <div style={s.heroInner}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.pill}>⚠️ Vehicle Safety</div>
          <h1 style={s.h1}>
            Is Your Car Actually<br />
            <span style={s.h1Red}>Safe to Drive?</span>
          </h1>
          <p style={s.lead}>
            Most drivers have no idea they're legally responsible for their vehicle's roadworthiness — every single journey. A valid MOT is not enough.
          </p>
          <div style={s.metaRow}>
            <span style={s.metaBadge}>✍️ <span style={s.metaVal}>Mike Hinton</span></span>
            <span style={s.metaBadge}>📍 <span style={s.metaVal}>Rotherham</span></span>
            <span style={s.metaBadge}>🕐 <span style={s.metaVal}>4 min read</span></span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main style={s.content}>
        <p style={s.intro}>
          You can own a car with a valid MOT, fully taxed and insured — and still be breaking the law every time you drive it. The MOT proves your car was roadworthy on the day it was tested. It says nothing about the day after. <strong>You</strong> are legally responsible for keeping your vehicle safe, every single journey.
        </p>

        {/* Fine box */}
        <div style={s.warningBox}>
          <div style={s.warningLabel}>The Fine Nobody Talks About</div>
          <div style={s.tyreStat} >£2,500</div>
          <div style={s.tyreStatLabel}>maximum fine for driving a vehicle in a dangerous condition</div>
          <div style={s.warningDetail}>Plus a driving ban. Plus <strong>3 penalty points</strong>.</div>
          <div style={s.warningNote}>Not knowing about a fault is not a defence. Not checking is the problem.</div>
        </div>

        {/* Pre-drive checks */}
        <h2 style={s.sectionH2}>What UK Law Requires You to Check Before Every Drive</h2>
        <p style={s.sectionSub}>These three checks are legally required before every journey under UK law. They take less than 60 seconds.</p>
        <div style={s.checkGrid}>
          {predriveChecks.map((c, i) => (
            <div key={i} style={s.checkCard}>
              <span style={s.checkIcon}>{c.icon}</span>
              <div>
                <div style={s.checkLabel}>{c.label}</div>
                <div style={s.checkDetail}>{c.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tyre spotlight */}
        <div style={s.tyreBox}>
          <div style={s.tyreTitle}>🔄 Tyres: The One That Fails the Most Drivers</div>
          <div style={s.tyreStat}>1.6mm</div>
          <div style={s.tyreStatLabel}>Legal minimum tread depth for cars — across the central three-quarters of the tyre, all the way around</div>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 8 }}>
            Driving on illegal tyres carries a fine of up to <strong style={{ color: '#4ade80' }}>£2,500 and 3 penalty points — per tyre</strong>. Four illegal tyres. Twelve points. No licence.
          </div>
          <div style={s.tyrePence}>
            <div style={s.tyrePenceTitle}>🪙 The 20p Test</div>
            <div style={s.tyrePenceText}>Insert a 20p coin into the tread grooves. If you can see the outer band of the coin, your tread is likely below the legal limit. Check all four tyres. Takes 30 seconds.</div>
          </div>
        </div>

        {/* Under bonnet */}
        <h2 style={s.sectionH2}>Under the Bonnet: Regular Vehicle Safety Checks</h2>
        <p style={s.sectionSub}>Your vehicle handbook tells you how often to check these. Most drivers never open it — don't be one of them.</p>
        <div style={s.bonnetGrid}>
          {underBonnetChecks.map((c, i) => (
            <div key={i} style={s.bonnetCard}>
              <div style={s.bonnetIcon}>{c.icon}</div>
              <div style={s.bonnetTitle}>{c.title}</div>
              <div style={s.bonnetText}>{c.text}</div>
            </div>
          ))}
        </div>

        {/* New driver warning */}
        <div style={s.newDriverBox}>
          <div style={s.newDriverTitle}>⚠️ New Driver? This Is Critical for You</div>
          <p style={s.newDriverText}>
            In your first two years of driving, you're on a <strong>probationary licence</strong>. Accumulate 6 penalty points and your licence is automatically revoked — you go back to square one. Three illegal tyres. Six points. No licence. It's not a hypothetical. It happens.
          </p>
        </div>

        {/* 2-minute routine */}
        <h2 style={s.sectionH2}>The 2-Minute Pre-Drive Vehicle Safety Routine</h2>
        <p style={s.sectionSub}>Build this into every journey. You don't need to be a mechanic — you just need to notice when something looks different from normal.</p>
        <div style={s.routineList}>
          {routine.map((r, i) => (
            <div key={i} style={s.routineItem}>
              <div style={s.routineNum}>{r.num}</div>
              <div>
                <div style={s.routineLabel}>{r.label}</div>
                <div style={s.routineDetail}>{r.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Source + internal link */}
        <p style={{ fontSize: 13, color: '#999', marginTop: 40, lineHeight: 1.7 }}>
          All requirements on this page are sourced from official UK government guidance at{' '}
          <a href="https://www.gov.uk/check-vehicle-safe" target="_blank" rel="noreferrer" style={{ color: '#1EABC7' }}>gov.uk/check-vehicle-safe</a>.
          {' '}Learner drivers: these checks are also tested in your{' '}
          <Link to="/show-me-tell-me" style={{ color: '#1EABC7' }}>Show Me Tell Me questions</Link> at the start of your practical driving test.
        </p>

        {/* Bottom CTA */}
        <div style={s.bottomLine}>
          <h2 style={s.bottomH2}>The bottom line</h2>
          <p style={s.bottomP}>
            A valid MOT is not a safety guarantee. It's a snapshot. The road doesn't care when your last test was. Two minutes of checks, done consistently, will keep your car legal, protect your licence, and protect everyone on the road with you.
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
      </main>
    </div>
  )
}
