export default function Diagrams() {
  const diagrams = [
    'Pull push steering',
    'Gears',
    'Clutch',
    'Biting range',
    'Mirrors',
    'Move off/stop',
    'Approaching corners to turn left',
    'Approaching Corners to turn right',
    'T junctions left',
    'T Junctions right',
    'Zones of vision',
    'Crossroads 1',
    'Crossroads 2',
    'Crossroads 3',
    'Emergency stop',
    'Skidding',
    'Pedestrian crossings 1',
    'Pedestrian crossings 2',
    'Signals',
    'Anticipation',
    'Traffic signs',
    'Meeting other traffic',
    'Allow adequate clearance',
    'Overtaking',
    'Turn in the road',
    'Reversing to the left',
    'Reversing to the right',
    'Parallel park',
    'Parking in a car park',
    'Roundabouts',
    'Mini-roundabouts',
    'Night driving',
    'Dual carriageways 1',
    'Dual carriageways 2',
    'Motorway driving',
    'Vehicle control',
    'Cornering',
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Resources</span>
          <h1>Driving Diagrams</h1>
          <p>Click on a diagram below to help develop your driving skills and assist your learning. Your instructor may use a different diagram but the lesson is still the same.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
            {diagrams.map(title => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  background: 'var(--pale-blue)',
                  border: '1.5px solid var(--light-blue)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--navy)',
                }}
              >
                <span>{title}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Link coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
