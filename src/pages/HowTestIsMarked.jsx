import { Helmet } from 'react-helmet-async'

const faultTypes = [
  {
    type: 'Driving Fault',
    colour: '#f59e0b',
    border: '#fde68a',
    bg: '#fffbeb',
    icon: '⚠️',
    limit: 'Up to 15 allowed',
    desc: 'A driving fault is not in itself potentially dangerous. You are allowed up to 15 driving faults on your driving test. However, if you habitually commit a driving fault in one aspect of driving throughout the test — demonstrating an inability to deal with certain situations — this cannot be regarded as competent driving. That fault alone must be seen as potentially dangerous, which means you will fail your test.',
  },
  {
    type: 'Serious Fault',
    colour: '#ea580c',
    border: '#fed7aa',
    bg: '#fff7ed',
    icon: '🚨',
    limit: '1 = automatic fail',
    desc: 'A serious fault is one which is potentially dangerous. If you receive one of these, you will fail your test and return to the test centre.',
  },
  {
    type: 'Dangerous Fault',
    colour: '#dc2626',
    border: '#fecaca',
    bg: '#fef2f2',
    icon: '🛑',
    limit: 'Test may be terminated immediately',
    desc: 'A dangerous fault involves actual danger to the examiner, candidate, the general public or property. In some instances the test may be terminated immediately depending on the nature of the fault, or you will return immediately to the test centre.',
  },
]

const s = {
  hero: {
    background: 'linear-gradient(135deg, #0C3C60 0%, #1a5a8a 100%)',
    color: '#fff',
    padding: '80px 24px 64px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 70% 20%, rgba(30,171,199,0.25) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  heroTag: {
    display: 'inline-block',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: 20,
    padding: '5px 18px',
    fontSize: 12,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 24,
  },
  h1: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: 'clamp(2rem,5vw,3rem)',
    fontWeight: 800,
    lineHeight: 1.15,
    maxWidth: 760,
    margin: '0 auto 16px',
    color: '#fff',
  },
  heroAccent: { color: '#1EABC7' },
  heroSub: {
    fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.65)',
    maxWidth: 520,
    margin: '0 auto',
    lineHeight: 1.7,
  },
  content: { maxWidth: 780, margin: '0 auto', padding: '60px 24px 80px' },
  introBox: {
    background: 'linear-gradient(135deg, #e8f4f8, #f0f9fb)',
    borderLeft: '5px solid #1EABC7',
    borderRadius: '0 14px 14px 0',
    padding: '24px 28px',
    marginBottom: 48,
    fontSize: '1.05rem',
    color: '#0a2d3d',
    lineHeight: 1.8,
  },
  h2: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '1.7rem',
    fontWeight: 700,
    color: '#0C3C60',
    margin: '52px 0 20px',
  },
  p: { marginBottom: 18, lineHeight: 1.8, color: '#2a2a2a', fontWeight: 300 },
  faultGrid: { display: 'grid', gap: 20, margin: '32px 0' },
  ipadBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    background: '#0C3C60',
    borderRadius: 14,
    padding: '24px 28px',
    margin: '32px 0',
  },
  ipadIcon: { fontSize: '2.8rem', flexShrink: 0 },
  ipadText: { color: 'rgba(255,255,255,0.88)', fontSize: '0.95rem', lineHeight: 1.75, margin: 0 },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16,
    margin: '36px 0',
  },
  summaryCard: {
    background: '#0C3C60',
    borderRadius: 14,
    padding: '22px 18px',
    textAlign: 'center',
  },
  summaryNum: {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#1EABC7',
    lineHeight: 1,
    marginBottom: 10,
  },
  summaryLabel: { fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 },
  reportBox: {
    background: '#f0f8fc',
    border: '1px solid #b8dff0',
    borderRadius: 14,
    padding: '28px',
    margin: '32px 0',
    textAlign: 'center',
  },
  reportTitle: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    color: '#0C3C60',
    fontSize: '1.1rem',
    marginBottom: 10,
  },
  dl25Box: {
    background: '#fff8f0',
    border: '2px solid #f0c060',
    borderRadius: 14,
    padding: '24px 28px',
    margin: '32px 0',
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  dl25Icon: { fontSize: '2.4rem', flexShrink: 0 },
  dl25Text: { fontSize: '0.95rem', color: '#1a1512', lineHeight: 1.7 },
  cta: {
    textAlign: 'center',
    background: 'linear-gradient(135deg, #0C3C60, #1a5a8a)',
    color: 'white',
    padding: '64px 24px',
  },
  ctaH2: {
    fontFamily: 'Raleway, sans-serif',
    color: 'white',
    marginTop: 0,
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: 16,
  },
  ctaP: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1.05rem',
    maxWidth: 500,
    margin: '0 auto 32px',
    lineHeight: 1.7,
  },
  ctaBtns: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' },
  ctaBtn: {
    display: 'inline-block',
    background: '#1EABC7',
    color: 'white',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '14px 32px',
    borderRadius: 50,
    textDecoration: 'none',
  },
  ctaBtnOutline: {
    display: 'inline-block',
    background: 'transparent',
    color: 'white',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '14px 32px',
    borderRadius: 50,
    textDecoration: 'none',
    border: '2px solid rgba(255,255,255,0.4)',
  },
}

export default function HowTestIsMarked() {
  return (
    <>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <div style={s.heroTag}>Driving Test · Rotherham</div>
          <h1 style={s.h1}>
            How Is Your Driving Test<br />
            <span style={s.heroAccent}>Actually Marked?</span>
          </h1>
          <p style={s.heroSub}>
            Understand exactly what the examiner is assessing — and what the faults on your report really mean.
          </p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <div style={s.introBox}>
            Ever wondered what criteria the examiner is assessing your driving against on your driving test? At the end of your test, you will receive a report explaining what was assessed and how many driving faults were made. Understanding that report — and what leads to each type of fault — gives you a real advantage before you walk in.
          </div>

          <div style={s.summaryGrid} className="mobile-1col">
            <div style={s.summaryCard}>
              <div style={s.summaryNum}>3</div>
              <div style={s.summaryLabel}>Types of driving fault</div>
            </div>
            <div style={s.summaryCard}>
              <div style={s.summaryNum}>15</div>
              <div style={s.summaryLabel}>Maximum minor faults before you fail</div>
            </div>
            <div style={s.summaryCard}>
              <div style={s.summaryNum}>1</div>
              <div style={s.summaryLabel}>Serious or dangerous fault = automatic fail</div>
            </div>
          </div>

          <div style={s.ipadBox}>
            <div style={s.ipadIcon}>📱</div>
            <p style={s.ipadText}>
              <strong style={{ color: '#1EABC7' }}>How does the examiner record faults?</strong><br />
              The examiner uses an iPad to assess your driving throughout the test. Your fault report is emailed to you after the test is complete.
            </p>
          </div>

          <h2 style={s.h2}>The 3 Types of Driving Fault</h2>

          <div style={s.faultGrid}>
            {faultTypes.map(fault => (
              <div
                key={fault.type}
                style={{
                  background: fault.bg,
                  border: `2px solid ${fault.border}`,
                  borderLeft: `6px solid ${fault.colour}`,
                  borderRadius: 14,
                  padding: '24px 28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                  <span style={{ fontSize: '1.8rem' }}>{fault.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      color: fault.colour,
                      marginBottom: 2,
                    }}>
                      {fault.type}
                    </div>
                    <div style={{
                      display: 'inline-block',
                      background: fault.colour,
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: 20,
                      letterSpacing: '0.04em',
                    }}>
                      {fault.limit}
                    </div>
                  </div>
                </div>
                <p style={{ margin: 0, color: '#1a1a1a', fontSize: '0.93rem', lineHeight: 1.75 }}>
                  {fault.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={s.reportBox}>
            <p style={s.reportTitle}>📋 Official DVSA Fault Report Information</p>
            <p style={{ color: '#2a2a2a', fontSize: '0.93rem', lineHeight: 1.7, margin: '0 0 18px' }}>
              To fully understand your fault report which is emailed to you after the test, the official DVSA guidance explains each assessed category in detail.
            </p>
            <a
              href="https://www.gov.uk/guidance/understanding-your-driving-test-result/car-driving-test"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                background: '#0C3C60',
                color: '#fff',
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '12px 28px',
                borderRadius: 50,
                textDecoration: 'none',
              }}
            >
              View Official DVSA Guidance →
            </a>
          </div>

          <div style={s.dl25Box}>
            <div style={s.dl25Icon}>📄</div>
            <div style={s.dl25Text}>
              <strong style={{ display: 'block', marginBottom: 6, color: '#0C3C60', fontFamily: 'Raleway, sans-serif' }}>
                Paper Form — DL25 Driving Test Marking Sheet
              </strong>
              In special circumstances, a paper form will be used to assess your driving instead of the iPad. A copy of the DL25 driving test marking sheet can be downloaded from the DVSA website.
              {' '}
              <a
                href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://assets.publishing.service.gov.uk/media/62a7437cd3bf7f03667c667a/dl25-driving-test-report.pdf&ved=2ahUKEwiSqb341deTAxX4UkEAHXHBDFgQFnoECAwQAQ&usg=AOvVaw2UePdl5pclrkuw1AmUZXZ5"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#c8501a', fontWeight: 700 }}
              >
                Download DL25 →
              </a>
            </div>
          </div>

        </div>

        <section style={s.cta}>
          <h2 style={s.ctaH2}>Ready to Prepare for Your Test?</h2>
          <p style={s.ctaP}>
            Mike builds every Rotherham test route into your lessons — so by the time test day arrives, the roads and the process will already feel familiar.
          </p>
          <div style={s.ctaBtns}>
            <a href="tel:07915999994" style={s.ctaBtn}>📞 07915 999994</a>
            <a href="https://wa.me/447915999994" target="_blank" rel="noreferrer" style={s.ctaBtnOutline}>💬 WhatsApp</a>
          </div>
        </section>
      </main>
    </>
  )
}
