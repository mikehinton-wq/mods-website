import { Helmet } from 'react-helmet-async'

export default function LeaveGoogleReview() {
  return (
    <>
      <Helmet>
        <title>Leave a Google Review — Mike Hinton Driving School</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Leave a Google Review — Mike Hinton Driving School" />
        <meta property="og:description" content="Enjoyed your lessons with Mike? Leave us a Google review — it only takes 2 minutes and helps other learners in Rotherham find us." />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/leave-a-google-review" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leave a Google Review — Mike Hinton Driving School" />
        <meta name="twitter:description" content="Enjoyed your lessons? Leave us a Google review — it only takes 2 minutes." />
        <meta name="twitter:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
      </Helmet>

      <style>{`
        .grp-page {
          background: #071e35;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, 'Segoe UI', sans-serif;
          padding: 24px;
        }
        .grp-card {
          background: #0a3252;
          border-radius: 24px;
          width: 100%;
          max-width: 420px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,171,199,0.15);
          position: relative;
        }
        .grp-card::before {
          content: '';
          display: block;
          height: 4px;
          background: linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335);
        }
        .grp-inner {
          padding: 40px 36px 44px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .grp-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 32px;
        }
        .grp-brand-icon {
          width: 40px;
          height: 40px;
          background: #1EABC7;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .grp-brand-name {
          text-align: left;
          line-height: 1.15;
        }
        .grp-brand-name strong {
          display: block;
          font-family: 'Raleway', -apple-system, 'Segoe UI', sans-serif;
          font-weight: 800;
          font-size: 0.95rem;
          color: #ffffff;
          letter-spacing: 0.01em;
        }
        .grp-brand-name span {
          font-size: 0.72rem;
          color: #1EABC7;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .grp-divider {
          width: 40px;
          height: 2px;
          background: #1EABC7;
          border-radius: 2px;
          margin-bottom: 28px;
          opacity: 0.5;
        }
        .grp-logo { margin-bottom: 24px; }
        .grp-stars {
          display: flex;
          gap: 6px;
          margin-bottom: 28px;
        }
        .grp-star {
          font-size: 2rem;
          line-height: 1;
          animation: grpStarPop 0.4s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .grp-star:nth-child(1) { animation-delay: 0.05s; }
        .grp-star:nth-child(2) { animation-delay: 0.12s; }
        .grp-star:nth-child(3) { animation-delay: 0.19s; }
        .grp-star:nth-child(4) { animation-delay: 0.26s; }
        .grp-star:nth-child(5) { animation-delay: 0.33s; }
        @keyframes grpStarPop {
          from { opacity: 0; transform: scale(0.4) rotate(-15deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @media (prefers-reduced-motion: reduce) { .grp-star { animation: none; } }
        .grp-headline {
          font-family: 'Raleway', -apple-system, 'Segoe UI', sans-serif;
          font-weight: 800;
          font-size: clamp(1.6rem, 5vw, 2rem);
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }
        .grp-headline em {
          font-style: normal;
          color: #1EABC7;
        }
        .grp-body {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 300px;
        }
        .grp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #444;
          font-family: 'Raleway', -apple-system, 'Segoe UI', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          padding: 16px 28px;
          border-radius: 50px;
          text-decoration: none;
          width: 100%;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          margin-bottom: 20px;
          border: 1.5px solid #dadce0;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .grp-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
          color: #444;
        }
        .grp-footnote {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
        }
        .grp-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(30,171,199,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      <div className="grp-page">
        <div className="grp-card">
          <div className="grp-glow" />
          <div className="grp-inner">

            <div className="grp-brand">
              <div className="grp-brand-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                  <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="grp-brand-name">
                <strong>Mike Hinton Driving School</strong>
                <span>Rotherham · 07915 999994</span>
              </div>
            </div>

            <div className="grp-divider" />

            <div className="grp-logo">
              <svg width="80" height="26" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                <path fill="#4285F4" d="M35.29 41.41V32h31.51c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 35.28.36 16.67 16.32 1.21 35.1 1.21c10.49 0 17.96 4.1 23.58 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.93-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.31.07z"/>
              </svg>
            </div>

            <div className="grp-stars" aria-label="5 stars">
              <span className="grp-star">⭐</span>
              <span className="grp-star">⭐</span>
              <span className="grp-star">⭐</span>
              <span className="grp-star">⭐</span>
              <span className="grp-star">⭐</span>
            </div>

            <h1 className="grp-headline">Enjoying your<br /><em>lessons?</em></h1>

            <p className="grp-body">
              A Google review helps other learners in Rotherham find us — and it makes a huge difference to a small local business. It only takes 2 minutes.
            </p>

            <a className="grp-btn" href="https://g.page/r/CbOjeyUtMbrYEB0/review" target="_blank" rel="noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Leave a Google Review
            </a>

            <p className="grp-footnote">Opens directly in Google — no account needed on mobile</p>

          </div>
        </div>
      </div>
    </>
  )
}
