const phases = [
  {
    phase: 'Phase 1',
    title: 'Introduction & Controls',
    colour: 'var(--primary)',
    items: [
      'Cockpit drill — mirrors, seat, seatbelt, steering wheel',
      'Controls — accelerator, brake, clutch, gears, indicators',
      'Moving off and stopping safely',
      'Steering and basic manoeuvring',
      'Using the mirrors correctly',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Roads & Traffic',
    colour: 'var(--accent)',
    items: [
      'Road positioning and lane discipline',
      'Junctions — turning left and right',
      'Emerging and giving way',
      'Crossroads and unmarked junctions',
      'Roundabouts — approach and exit',
      'Traffic lights and pedestrian crossings',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Manoeuvres',
    colour: 'var(--navy)',
    items: [
      'Reversing safely',
      'Bay parking — forward and reverse',
      'Parallel parking',
      'Pulling up on the right and reversing',
      'Emergency stop',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Complex Situations',
    colour: '#7c3aed',
    items: [
      'Dual carriageways and national speed limit roads',
      'Overtaking safely',
      'Rural and country roads',
      'Night driving awareness',
      'All-weather driving',
    ],
  },
  {
    phase: 'Phase 5',
    title: 'Independent Driving & Test Prep',
    colour: 'var(--green)',
    items: [
      'Independent driving using sat-nav',
      'Following road signs',
      'Full mock test on real test routes',
      'Show Me Tell Me questions',
      'Test day guidance and debrief',
    ],
  },
]

const resources = [
  {
    icon: '📖',
    title: 'Highway Code',
    desc: 'The Highway Code keeps people safe by giving everyone the same rules to follow. You should be familiar with the rules of the road when you drive.',
    links: [
      { label: 'View the Highway Code online', href: 'https://www.gov.uk/highway-code' },
      { label: 'Test your knowledge', href: 'https://www.gov.uk/take-a-practice-theory-test' },
    ],
  },
  {
    icon: '📋',
    title: 'DVSA Car Driving Syllabus',
    desc: 'The official DVSA syllabus for all drivers. It covers what you will learn on lessons, what you need to be able to do, and what you need to know and understand.',
    links: [
      { label: 'View the DVSA Car Driving Syllabus', href: 'https://www.gov.uk/guidance/learning-to-drive-a-car-syllabus/introduction-to-the-car-and-light-van-driving-syllabus-category-b' },
    ],
  },
  {
    icon: '🚦',
    title: 'Traffic Signs',
    desc: 'A comprehensive guide to the vast majority of signs a road user is likely to encounter. You need to be familiar with all types of road sign.',
    links: [
      { label: 'Download the traffic signs guide', href: 'https://www.gov.uk/government/publications/know-your-traffic-signs' },
      { label: 'Test your knowledge', href: 'https://www.gov.uk/take-a-practice-theory-test' },
    ],
  },
  {
    icon: '🎥',
    title: 'Explanatory Videos',
    desc: 'Videos produced by the DVSA covering the theory test, hazard perception test, Show Me Tell Me questions, and the practical driving test.',
    links: [
      { label: 'Watch DVSA videos', href: 'https://www.youtube.com/user/dvsagovuk' },
    ],
  },
  {
    icon: '🚗',
    title: 'Show Me Tell Me',
    desc: 'The Show Me, Tell Me questions test your knowledge on basic car maintenance and safety — asked by examiners at the start of the practical test.',
    links: [
      { label: 'View the Show Me Tell Me questions', href: '/show-me-tell-me' },
    ],
  },
  {
    icon: '📕',
    title: 'Driving — The Essential Skills',
    desc: 'Packed full of advice to help you stay safe on the roads. This comprehensive guide is the industry standard driving manual — learn the correct skills, attitude and behaviour.',
    links: [
      { label: 'Buy a copy', href: 'https://www.amazon.co.uk/official-DVSA-guide-driving-essential/dp/0115541225/ref=sr_1_1?crid=KTCEH5VMRIA5&dib=eyJ2IjoiMSJ9.mbLozOAQyXBgXxhFnSrBnmduFSs5Y8TvnjjcFZGbVJU9ahHRspBFisqgjgsE9YQKKrcMTXJR66LBZWLwDB_6Zg-5w_K_jlaFHK_Ss8u2kf4-_DA6uW5RYcJOGRSHBIH37qBKnjiog64tbc9dsEU8Kfcvn_OcUTJKx-4gnQ6n8mLHw7fVMLfw3GrF3PpK8ArKDCMn9ApK2X1JJjqofCPQB1JkJAOYdmJV9Wbh_p1Nb3g.wEGLpBtlARWxkfrkO2sI3C_84lZVfWJpwzBVUiFC4sY&dib_tag=se&keywords=official+guide+to+driving&qid=1775414815&s=books&sprefix=official+guide+to+drivi%2Cstripbooks%2C215&sr=1-1' },
    ],
  },
  {
    icon: '🚔',
    title: 'Roadcraft',
    desc: 'The most authoritative, evidence-based guidance on advanced driving skills. Expert guidance not just for police drivers, but for anyone who wants to become a better, safer driver.',
    links: [
      { label: 'Buy a copy', href: 'https://www.amazon.co.uk/Roadcraft-Police-Drivers-Handbook-Foundation/dp/0117095044/ref=sr_1_1?crid=O5BEY2WFJO2Q&dib=eyJ2IjoiMSJ9.2gKFenelN106WMeGimxaC1pAEfqd7PywbZtzOKVUJliBbEEDY5hUXsIShysgbM9yzp0xHnYygSifWZlm5HdjJqr3wiwDGMzluB-Jw5z2n6WiJ5VHV6CrqarZC582AX8hwsCHXob2y7rRXggTcG49tdFFmmqlreBnKBqXjdapAhBLvmOkOHJbOXboOUwaRNz0CmzO2uaM0LLD-5G5zMIESGtPFzoa-uqlp1yHztDs8xg.kykYvvmhb4Gpe7du74aPygeLKF3hkOpGdQjeOq8G9zg&dib_tag=se&keywords=roadcraft&qid=1775414879&s=books&sprefix=roadcraf%2Cstripbooks%2C215&sr=1-1&ufe=app_do%3Aamzn1.fos.95fd378e-6299-4723-b1f1-3952ffba15af' },
    ],
  },
]

export default function DrivingSyllabus() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Syllabus</span>
          <h1>Driving Lessons Syllabus</h1>
          <p>Key information and links to the core driving syllabus you will learn during your driving journey.</p>
        </div>
      </section>

      {/* App callout */}
      <section className="section-sm" style={{ background: 'var(--pale-blue)', borderBottom: '1px solid var(--light-blue)' }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '2.5rem' }}>📱</div>
            <div>
              <h3 style={{ marginBottom: 8 }}>Your Own Dedicated App</h3>
              <p style={{ color: 'var(--grey-700)', lineHeight: 1.7 }}>
                Quickly and easily access your driving syllabus progress, see when your next lesson is,
                get real-time updates from your instructor, book extra lessons using the Lesson Gap feature, and much more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson subjects / phases */}
      <section className="section">
        <div className="container" style={{ maxWidth: 880, margin: '0 auto' }}>
          <h2 style={{ marginBottom: 8 }}>Driving Lesson Subjects</h2>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 12 }}>
            To support the DVSA syllabus, there are core subjects you will learn on your driving lessons.
            These will become the basis of what you are assessed on during your driving test.
          </p>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 40 }}>
            The syllabus is a guide, not a rigid timetable. If you need more time on any topic, you'll get it.
            Your progress drives the lesson plan — not the other way around.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {phases.map(p => (
              <div key={p.phase} className="syllabus-card">
                <div style={{
                  background: p.colour, color: 'white',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  alignItems: 'center', padding: '24px 16px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '0.78rem', fontFamily: 'Raleway', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85, marginBottom: 4 }}>
                    {p.phase}
                  </div>
                  <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.3 }}>
                    {p.title}
                  </div>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <ul className="check-list">
                    {p.items.map(item => <li key={item} style={{ fontSize: '0.92rem' }}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section" style={{ background: 'var(--grey-50)', borderTop: '1px solid var(--grey-200)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 8 }}>Learning Resources</h2>
          <p style={{ color: 'var(--grey-700)', marginBottom: 40 }}>
            Useful guides, official publications, and links to support your learning outside of lessons.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {resources.map(r => (
              <div key={r.title} className="card" style={{ borderTop: '3px solid var(--primary)' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 10 }}>{r.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>{r.title}</h3>
                <p style={{ color: 'var(--grey-700)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: 14 }}>{r.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {r.links.map(l => (
                    <a key={l.label} href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>
                      → {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div style={{ marginTop: 0, background: 'var(--pale-blue)', borderRadius: 'var(--radius-lg)', padding: '28px 32px', maxWidth: 760, margin: '0 auto' }}>
            <h3 style={{ marginBottom: 10 }}>After Every Lesson</h3>
            <p style={{ color: 'var(--grey-700)', lineHeight: 1.7 }}>
              You'll receive a brief summary of what was covered in the session, what to practise
              before next time, and what you'll be working on next. This keeps you informed and
              progressing — even between lessons.
            </p>
          </div>

          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <a href="tel:07915999994" className="btn btn-primary" style={{ marginRight: 12 }}>📞 Book a Lesson</a>
            <a href="https://wa.me/447915999994" className="btn btn-outline" target="_blank" rel="noreferrer">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
