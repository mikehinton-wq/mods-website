import { Helmet } from 'react-helmet-async'

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


      <section className="section-sm">
        <div className="container">
          <div style={{ marginTop: 0, background: 'var(--pale-blue)', borderRadius: 'var(--radius-lg)', padding: '28px 32px', maxWidth: 760, margin: '0 auto' }}>
            <h3 style={{ marginBottom: 10 }}>After Every Lesson</h3>
            <p style={{ color: 'var(--grey-700)', lineHeight: 1.7 }}>
              You'll receive a brief summary, from the FREE dedicated app, of what was covered in the session, what to practise
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
