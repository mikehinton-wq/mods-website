export default function DrivingSyllabus2() {
  const cards = [
    {
      title: 'Highway Code',
      desc: "Why is the Highway Code important? Mainly because it keeps people safe. It means that everyone has the same rules to follow. You should be familiar with the rules of the road when you drive.",
      links: [
        { label: 'Click HERE to view the online version', href: null },
        { label: 'Take a quick quiz to test your knowledge', href: null },
      ],
    },
    {
      title: 'DVSA Car Driving Syllabus',
      desc: 'This syllabus is for all drivers. It covers: what you will learn on lessons, what you need to be able to do, and what you need to know and understand.',
      links: [{ label: 'Click HERE to download', href: null }],
    },
    {
      title: 'Traffic Signs',
      desc: 'Although The Highway Code shows many of the signs commonly in use, this link also explains the vast majority of signs the road user is likely to encounter. You need to be familiar with all types of road sign.',
      links: [
        { label: 'Click HERE to download', href: null },
        { label: 'Take a quick quiz to test your knowledge', href: null },
      ],
    },
    {
      title: 'Explanatory Videos',
      desc: 'These videos are produced by the DVSA and their purpose is to give you knowledge on the various aspects of learning to drive: Theory test, Hazard perception test, Show Me Tell Me questions, Practical Driving Test.',
      links: [{ label: 'Click HERE to go to the videos', href: null }],
    },
    {
      title: 'Show Me Tell Me',
      desc: 'The Show Me, Tell Me questions test your knowledge on basic car maintenance and safety. This link takes you to the questions that driving examiners can ask in car driving tests.',
      links: [{ label: 'Click HERE to go to the page', href: null }],
    },
    {
      title: 'Driving — The Essential Skills',
      desc: 'This publication is packed full of advice that will help you stay safe on our roads. This comprehensive guide is THE industry standard driving manual. Learn how to get the most enjoyment from your driving with the correct skills, attitude and behaviour.',
      links: [{ label: 'Click HERE to buy a copy', href: null }],
    },
    {
      title: 'Roadcraft',
      desc: 'This is the most authoritative, evidence-based guidance on advanced driving skills. It contains expert guidance — not just for police drivers, but for anyone who wants to become a better, safer driver and learn new skills.',
      links: [{ label: 'Click HERE to buy a copy', href: null }],
    },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Resources</span>
          <h1>Driving Syllabus</h1>
          <p>Below you will find key information and links to the core driving syllabus you will learn during your driving journey.</p>
        </div>
      </section>

      {/* App callout */}
      <section style={{ background: 'var(--navy)', padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div style={{
              width: 140, height: 140, flexShrink: 0,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', gap: 8,
            }}>
              <span style={{ fontSize: '2rem' }}>🖼️</span>
              <span>Image to follow</span>
            </div>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: 10 }}>Remember</span>
              <h2 style={{ color: 'var(--white)', fontFamily: 'Raleway, sans-serif', marginBottom: 10 }}>You get your own dedicated app</h2>
              <p style={{ color: 'var(--light-blue)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 600 }}>
                Quickly and easily access your driving syllabus progress, see when your next lesson is, get real time updates from your instructor, book extra lessons using the 'Lesson Gap' feature and much more...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="section">
        <div className="container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {cards.map(card => (
              <div key={card.title} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Image placeholder */}
                <div style={{
                  width: '100%', height: 180,
                  background: 'var(--pale-blue)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderBottom: '1px solid var(--grey-200)', flexShrink: 0,
                }}>
                  <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 6 }}>🖼️</div>
                    <div style={{ fontSize: '0.78rem', fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}>Image to follow</div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: 10, color: 'var(--navy)' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--grey-700)', lineHeight: 1.7, flex: 1 }}>{card.desc}</p>
                  <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {card.links.map((link, i) => (
                      link.href ? (
                        <a key={i} href={link.href} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
                          {link.label}
                        </a>
                      ) : (
                        <span key={i} style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                          {link.label} — <em>link coming soon</em>
                        </span>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
