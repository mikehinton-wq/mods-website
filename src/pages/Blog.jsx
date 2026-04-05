import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'driving-test-anxiety-causes-failures',
    title: 'Does Driving Test Anxiety Actually Cause Failures?',
    excerpt: "You're not imagining it. Nerves really do affect your result — and the data backs it up. Here's what the research shows and what you can do about it.",
    date: 'April 2026',
    readTime: '5 min read',
    tag: 'Anxiety & Nerves',
  },
  {
    slug: 'learning-to-drive-neurodivergent',
    title: 'Learning to Drive with ADHD or Dyspraxia',
    excerpt: 'Everything neurodivergent learners need to know — from finding the right instructor to passing your test with ADHD or dyspraxia.',
    date: 'October 2025',
    readTime: '6 min read',
    tag: 'Neurodivergent',
  },
  {
    slug: '3-things-nervous-drivers-do-on-test',
    title: '3 Things Every Nervous Driver Does on Their Test (And How to Stop)',
    excerpt: 'Nervous about your driving test? Here are the 3 things anxious learners almost always do — and exactly how to stop them happening to you.',
    date: 'April 2026',
    readTime: '3 min read',
    tag: 'Anxiety & Nerves',
  },
  {
    slug: 'rotherham-test-centre',
    title: 'What to Expect at Rotherham Driving Test Centre',
    excerpt: 'Everything you need to know before your practical test at Rotherham — routes, pass rates, what to bring, and tips for the day.',
    date: 'March 2026',
    readTime: '5 min read',
    tag: 'Test Prep',
  },
  {
    slug: 'failure-to-prepare',
    title: 'Failure to Prepare is Preparing to Fail',
    excerpt: "Failing your test can be a tough pill to swallow. But once you judge your result by effort rather than outcome, you'll never truly fail again.",
    date: 'February 2025',
    readTime: '2 min read',
    tag: 'Mindset',
  },
  {
    slug: 'how-to-buy-your-first-car',
    title: 'How to Choose and Buy Your First Car',
    excerpt: "One of the most common conversations I have with students. A complete guide to buying your first car — where to look, what to check, how to negotiate, and what your rights are.",
    date: 'April 2026',
    readTime: '8 min read',
    tag: 'New Drivers',
  },
  {
    slug: 'learning-partnership',
    title: 'Take Advantage of the Learning Partnership',
    excerpt: "Understanding how you learn — and communicating that with your instructor — is one of the most powerful things you can do to pass your test.",
    date: 'February 2025',
    readTime: '1 min read',
    tag: 'Mindset',
  },
  {
    slug: 'when-you-are-your-best-self',
    title: 'When You Are Your Best Self, the Possibilities Are Endless',
    excerpt: "Confidence, self-belief, and a calm mind aren't optional extras on test day — they make up half the battle. Here's how to harness them.",
    date: 'April 2026',
    readTime: '3 min read',
    tag: 'Mindset',
  },
  {
    slug: 'consistency-beats-intensity',
    title: 'Consistency Beats Intensity',
    excerpt: "Intense effort has its place — but it's not what carves the rock. Here's why showing up regularly matters more than going all-out occasionally.",
    date: 'April 2026',
    readTime: '2 min read',
    tag: 'Mindset',
  },
  {
    slug: 'how-to-choose-a-driving-instructor',
    title: "Don't Just Choose the Cheapest Instructor",
    excerpt: "Price is the easiest thing to compare — but it tells you the least about what you're actually getting. Here's what you should really be looking for.",
    date: 'April 2026',
    readTime: '3 min read',
    tag: 'Advice',
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
