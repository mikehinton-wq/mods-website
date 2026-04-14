import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const posts = [
  {
    slug: 'how-to-get-rid-of-nerves',
    title: 'How to Get Rid of Driving Test Nerves in 3 Simple Steps',
    excerpt: 'Nerves are normal — every learner feels them. The difference between passing and failing is knowing how to handle them. Here are three steps that actually work.',
    date: 'April 2026',
    readTime: '4 min read',
    tag: 'Anxiety & Nerves',
  },
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
      <Helmet>
        <title>Driving Tips & Guides | Mike Hinton Driving School Blog</title>
        <meta name="description" content="Driving tips, test advice and guides for learner drivers in Rotherham. Written by DVSA-approved instructor Mike Hinton." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog" />
        <meta property="og:title" content="Driving Tips & Guides | Mike Hinton Blog" />
        <meta property="og:description" content="Driving tips, test advice and guides for learner drivers in Rotherham." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="page-hero">
        <div className="container">
          <div className="blog-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <span className="badge badge-primary" style={{ marginBottom: 14 }}>Blog</span>
              <h1>Driving Tips &amp; Guides</h1>
              <p>The driving test pass rate in the UK is currently 48%. Increase your chances of passing by keeping up to date with helpful advice, driving test tips and useful articles to help you secure that 1st time pass.</p>
            </div>
            <div className="blog-signup-box" style={{ minWidth: 260, maxWidth: 320 }}>
              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '20px 18px' }}>
                <p style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#fff', margin: '0 0 4px' }}>
                  📧 Get free driving tips in your inbox
                </p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', margin: '0 0 12px' }}>No spam. Just tips.</p>
                <form
                  action="https://mikehintondrivingschool.us10.list-manage.com/subscribe/post?u=021425114ac83abbcd145b6c9&id=7850ef83fe&f_id=0006d5e3f0"
                  method="post"
                  target="_blank"
                  style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                >
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Your email address"
                    required
                    style={{ padding: '9px 14px', borderRadius: 50, border: 'none', fontSize: '0.85rem', outline: 'none', width: '100%' }}
                  />
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_021425114ac83abbcd145b6c9_7850ef83fe" tabIndex="-1" defaultValue="" />
                  </div>
                  <button type="submit" style={{
                    background: '#1EABC7', color: '#fff',
                    fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.85rem',
                    padding: '9px 18px', borderRadius: 50, border: 'none', cursor: 'pointer',
                  }}>
                    Subscribe Free
                  </button>
                </form>
              </div>
            </div>
          </div>
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
                <div className="card blog-post-card" style={{
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
                  <div className="blog-arrow" style={{ color: 'var(--primary)', fontSize: '1.4rem', flexShrink: 0 }}>→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
