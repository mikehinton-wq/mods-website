import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Mike Hinton Driving School</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="section" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: 560 }}>
          <div style={{ fontSize: '4rem', marginBottom: 16 }}>🚦</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: 12 }}>404 — Page Not Found</h1>
          <p style={{ color: 'var(--grey-600)', fontSize: '1.05rem', marginBottom: 32, lineHeight: 1.7 }}>
            Looks like you've taken a wrong turn. The page you're looking for doesn't exist or may have moved.
          </p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </section>
    </>
  )
}
