import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'rotherham-test-centre',
    title: 'What to Expect at Rotherham Driving Test Centre',
    excerpt: 'Everything you need to know before your practical test at Rotherham — routes, pass rates, what to bring, and tips for the day.',
    date: 'March 2026',
    readTime: '5 min read',
    tag: 'Test Prep',
  },
  {
    slug: 'show-me-tell-me-2026',
    title: 'Show Me Tell Me Questions 2026 — The Complete List',
    excerpt: 'The full list of vehicle safety questions the examiner may ask at the start of your driving test, with answers explained clearly.',
    date: 'March 2026',
    readTime: '7 min read',
    tag: 'Theory',
  },
]

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Blog</span>
          <h1>Driving Tips &amp; Guides</h1>
          <p>Helpful advice for learner drivers in Rotherham and Worksop.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {posts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="card" style={{
                  borderLeft: '4px solid var(--primary)',
                  display: 'grid', gridTemplateColumns: '1fr auto',
                  gap: 16, alignItems: 'center',
                  cursor: 'pointer',
                }}>
                  <div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                      <span className="badge badge-primary">{post.tag}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--grey-400)' }}>{post.date} · {post.readTime}</span>
                    </div>
                    <h3 style={{ marginBottom: 8, fontSize: '1.1rem' }}>{post.title}</h3>
                    <p style={{ color: 'var(--grey-600)', fontSize: '0.9rem', lineHeight: 1.6 }}>{post.excerpt}</p>
                  </div>
                  <div style={{ color: 'var(--primary)', fontSize: '1.4rem', flexShrink: 0 }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
