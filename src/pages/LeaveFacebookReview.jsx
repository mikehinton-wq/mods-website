import { Helmet } from 'react-helmet-async'

export default function LeaveFacebookReview() {
  return (
    <>
      <Helmet>
        <title>Leave a Facebook Review — Mike Hinton Driving School</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Leave a Facebook Review — Mike Hinton Driving School" />
        <meta property="og:description" content="Enjoyed your lessons with Mike? Leave us a Facebook review — it only takes 2 minutes and helps other learners in Rotherham find us." />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/leave-a-facebook-review" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leave a Facebook Review — Mike Hinton Driving School" />
        <meta name="twitter:description" content="Enjoyed your lessons? Leave us a Facebook review — it only takes 2 minutes." />
        <meta name="twitter:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
      </Helmet>

      <style>{`
        .fbr-page {
          background: #071e35;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, 'Segoe UI', sans-serif;
          padding: 24px;
        }
        .fbr-card {
          background: #0a3252;
          border-radius: 24px;
          width: 100%;
          max-width: 420px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,171,199,0.15);
          position: relative;
        }
        .fbr-card::before {
          content: '';
          display: block;
          height: 4px;
          background: linear-gradient(90deg, #1EABC7, #39c4e0, #1EABC7);
        }
        .fbr-inner {
          padding: 40px 36px 44px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .fbr-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
        }
        .fbr-brand-icon {
          width: 40px;
          height: 40px;
          background: #1EABC7;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .fbr-brand-name {
          text-align: left;
          line-height: 1.15;
        }
        .fbr-brand-name strong {
          display: block;
          font-family: 'Raleway', -apple-system, 'Segoe UI', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          color: #ffffff;
          letter-spacing: 0.01em;
        }
        .fbr-brand-name span {
          font-size: 0.72rem;
          color: #1EABC7;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .fbr-divider {
          width: 40px;
          height: 2px;
          background: #1EABC7;
          border-radius: 2px;
          margin-bottom: 28px;
          opacity: 0.5;
        }
        .fbr-stars {
          display: flex;
          gap: 6px;
          margin-bottom: 28px;
        }
        .fbr-star {
          font-size: 2rem;
          line-height: 1;
          animation: fbrStarPop 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .fbr-star:nth-child(1) { animation-delay: 0.05s; }
        .fbr-star:nth-child(2) { animation-delay: 0.12s; }
        .fbr-star:nth-child(3) { animation-delay: 0.19s; }
        .fbr-star:nth-child(4) { animation-delay: 0.26s; }
        .fbr-star:nth-child(5) { animation-delay: 0.33s; }
        @keyframes fbrStarPop {
          from { opacity: 0; transform: scale(0.4) rotate(-15deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @media (prefers-reduced-motion: reduce) { .fbr-star { animation: none; } }
        .fbr-headline {
          font-family: 'Raleway', -apple-system, 'Segoe UI', sans-serif;
          font-weight: 800;
          font-size: clamp(1.6rem, 5vw, 2rem);
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }
        .fbr-headline em {
          font-style: normal;
          color: #1EABC7;
        }
        .fbr-body {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 300px;
        }
        .fbr-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1877F2;
          color: #fff;
          font-family: 'Raleway', -apple-system, 'Segoe UI', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          padding: 16px 28px;
          border-radius: 50px;
          text-decoration: none;
          width: 100%;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(24,119,242,0.35);
          margin-bottom: 20px;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .fbr-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(24,119,242,0.45);
          color: #fff;
        }
        .fbr-footnote {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
        }
        .fbr-footnote a {
          color: #1EABC7;
          text-decoration: none;
        }
        .fbr-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(30,171,199,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      <div className="fbr-page">
        <div className="fbr-card">
          <div className="fbr-glow" />
          <div className="fbr-inner">

            <div className="fbr-brand">
              <div className="fbr-brand-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                  <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fbr-brand-name">
                <strong>Mike Hinton Driving School</strong>
                <span>Rotherham · 07915 999994</span>
              </div>
            </div>

            <div className="fbr-divider" />

            <div className="fbr-stars" aria-label="5 stars">
              <span className="fbr-star">⭐</span>
              <span className="fbr-star">⭐</span>
              <span className="fbr-star">⭐</span>
              <span className="fbr-star">⭐</span>
              <span className="fbr-star">⭐</span>
            </div>

            <h1 className="fbr-headline">Did you enjoy<br />your <em>lessons?</em></h1>

            <p className="fbr-body">
              Your review means everything to us — it helps other learners in Rotherham find the right instructor. It only takes 2 minutes.
            </p>

            <a className="fbr-btn" href="https://www.facebook.com/mikehintondrivingschool/reviews" target="_blank" rel="noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Leave a Review on Facebook
            </a>

            <p className="fbr-footnote">
              Or visit <a href="https://www.facebook.com/mikehintondrivingschool/reviews">facebook.com/mikehintondrivingschool</a>
            </p>

          </div>
        </div>
      </div>
    </>
  )
}
