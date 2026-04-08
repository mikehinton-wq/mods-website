import { Helmet } from 'react-helmet-async'

const sections = [
  {
    name: "Asda's Roundabout",
    videos: [
      "Doncaster Road - Left",
      "Doncaster Road - Ahead",
      "Doncaster Road - Right",
      "HVR - Left",
      "HVR - Ahead",
      "HVR - Right",
      "HVR - Right",
      "Aldwarke - Left",
      "Aldwarke - Ahead",
      "Aldwarke - Right",
      "Fitzwilliam - Left",
      "Fitzwilliam - Ahead",
      "Fitzwilliam - Right",
    ],
  },
  {
    name: "St Annes Roundabout",
    videos: [
      "Fitzwilliam - Left",
      "Fitzwilliam - Ahead",
      "Fitzwilliam - Right",
      "St Annes Rd - Left",
      "St Annes Rd - Ahead",
      "St Annes Rd - Right",
      "Centenary Way - Left",
      "Centenary Way - Ahead",
      "Centenary Way - Right",
    ],
  },
  {
    name: "College Roundabout",
    videos: [
      "Centenary Way - Left",
      "Centenary Way - Ahead",
      "Centenary Way - Right",
      "Centenary Way - Left",
      "Centenary Way - Ahead",
      "Centenary Way - Right",
      "New Wortley Rd - Left",
      "New Wortley Rd - Ahead",
      "New Wortley Rd - Right",
      "Greasbrough St - Left",
      "Greasbrough St - Ahead",
      "Greasbrough St - Right",
    ],
  },
  {
    name: "Park Gate Roundabout",
    videos: [
      "Broad Street - Left",
      "Broad Street - Ahead",
      "Broad Street - Right",
      "Great Eastern Way - Ahead",
      "Great Eastern Way - Right",
      "Rotherham Road - Left",
      "Rotherham Road - Ahead",
      "Rotherham Road - Right",
      "Mangham Road - Left",
      "Mangham Road - Ahead",
      "Mangham Road - Right",
    ],
  },
  {
    name: "Brinsworth Roundabout",
    videos: [
      "Centenary Way - Right",
      "Bawtry Road - Left",
    ],
  },
  {
    name: "Ickles Roundabout",
    videos: [
      "Centenary Way (N) - Ahead",
      "Centenary Way (N) - Right",
      "Centenary Way (S) - Left",
      "Centenary Way (S) - Ahead",
      "Sheffield Road (from TC) - Right",
      "Sheffield Road (from TC) - Ahead",
    ],
  },
  {
    name: "Rhymers Roundabout",
    videos: [
      "New Wortley Road - Left",
      "New Wortley Road - Ahead",
      "New Wortley Road - Right",
      "Wilton Gardens - Ahead",
      "Wilton Gardens - Right",
      "Wortley Road - Left",
      "Wortley Road - Ahead",
      "Wortley Road - Right",
      "Fenton Road - Left",
      "Fenton Road - Ahead",
      "Fenton Road - Right",
    ],
  },
]

const s = {
  hero: { background: '#0C3C60', color: '#fff', padding: '64px 24px 48px', textAlign: 'center' },
  heroTag: { display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '5px 16px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 20 },
  h1: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, color: '#fff', margin: '0 0 12px' },
  heroSub: { color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: 540, margin: '0 auto' },
  badge: { display: 'inline-block', background: '#1EABC7', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.8rem', padding: '4px 12px', borderRadius: 20, marginTop: 20 },
  page: { maxWidth: 1100, margin: '0 auto', padding: '48px 24px 80px' },
  sectionWrap: { marginBottom: 56 },
  sectionHeader: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 },
  sectionIcon: { fontSize: '1.6rem' },
  sectionTitle: { fontFamily: 'Raleway, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: '#0C3C60', margin: 0 },
  sectionCount: { fontSize: '0.8rem', color: '#8a9ab0', fontWeight: 600, marginLeft: 4 },
  divider: { height: 3, background: 'linear-gradient(90deg, #1EABC7, transparent)', borderRadius: 2, marginBottom: 24 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 },
  card: { background: '#fff', border: '1px solid #dde8f0', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 8px rgba(12,60,96,0.06)' },
  placeholder: { background: '#e8f2f8', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 },
  placeholderIcon: { fontSize: '2.5rem', opacity: 0.4 },
  placeholderText: { fontSize: '0.75rem', color: '#5a7a9a', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' },
  cardBody: { padding: '14px 16px' },
  cardTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0C3C60', margin: 0 },
  cardSub: { fontSize: '0.78rem', color: '#8a9ab0', marginTop: 4 },
  lockBanner: { background: '#fff8e8', border: '1px solid #f0d080', borderRadius: 14, padding: '20px 24px', marginBottom: 40, display: 'flex', alignItems: 'center', gap: 16 },
  lockIcon: { fontSize: '2rem', flexShrink: 0 },
  lockTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, color: '#8a5a00', fontSize: '0.95rem', marginBottom: 4 },
  lockText: { fontSize: '0.85rem', color: '#6a4a00', margin: 0 },
  subscribeBtn: { display: 'inline-block', background: '#1EABC7', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '12px 28px', borderRadius: 50, textDecoration: 'none', marginTop: 8 },
}

const directionColour = (title) => {
  if (title.includes('Left')) return '#22c55e'
  if (title.includes('Right')) return '#f59e0b'
  if (title.includes('Ahead')) return '#1EABC7'
  return '#8a9ab0'
}

const directionLabel = (title) => {
  if (title.includes('Left')) return '← Left'
  if (title.includes('Right')) return 'Right →'
  if (title.includes('Ahead')) return '↑ Ahead'
  return ''
}

export default function Members() {
  return (
    <>
      <Helmet>
        <title>Members Area — Rotherham Roundabout Course | Mike Hinton Driving School</title>
        <meta name="description" content="Subscriber-only video course covering every Rotherham roundabout. Left, ahead and right approaches for all 8 major roundabouts." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <header style={s.hero}>
        <div style={s.heroTag}>Members Area</div>
        <h1 style={s.h1}>Rotherham Roundabout Course</h1>
        <p style={s.heroSub}>63 videos covering every approach to every major roundabout on the Rotherham test routes.</p>
        <div style={s.badge}>🔒 Subscribers Only · £11/month</div>
      </header>

      <main style={s.page}>

        <div style={s.lockBanner}>
          <span style={s.lockIcon}>🔒</span>
          <div>
            <div style={s.lockTitle}>Subscriber Access Required</div>
            <p style={s.lockText}>This content is available to subscribers only. Subscribe for £11/month to unlock all 63 videos — cancel anytime.</p>
            <a href="/subscribe" style={s.subscribeBtn}>Subscribe for £11/month</a>
          </div>
        </div>

        {sections.map((section, si) => (
          <div key={si} style={s.sectionWrap}>
            <div style={s.sectionHeader}>
              <span style={s.sectionIcon}>🔄</span>
              <div>
                <h2 style={s.sectionTitle}>
                  {section.name}
                  <span style={s.sectionCount}> · {section.videos.length} videos</span>
                </h2>
              </div>
            </div>
            <div style={s.divider} />
            <div style={s.grid}>
              {section.videos.map((video, vi) => {
                const approach = video.split(' - ')[0]
                const direction = video.split(' - ')[1]
                return (
                  <div key={vi} style={s.card}>
                    <div style={s.placeholder}>
                      <span style={s.placeholderIcon}>▶</span>
                      <span style={s.placeholderText}>Video coming soon</span>
                    </div>
                    <div style={s.cardBody}>
                      <div style={s.cardTitle}>{approach}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                        <span style={{ background: directionColour(video), color: '#fff', fontSize: '0.72rem', fontWeight: 700, padding: '2px 10px', borderRadius: 20 }}>
                          {directionLabel(video)}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </main>
    </>
  )
}
