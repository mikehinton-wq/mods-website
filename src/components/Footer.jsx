import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img
              src="/images/Mike Hinton Logo Cropped.jpg"
              alt="Mike Hinton Driving School"
              style={{ height: 60, width: 'auto', display: 'block', borderRadius: 6 }}
            />
          </div>
          <p className="footer__tagline">
            DVSA Qualified Driving Instructor<br />
            Rotherham
          </p>
          <p className="footer__address">
            15 Elton Lane, Dalton<br />Rotherham, S66 3RU
          </p>
          <div className="footer__contact-links">
            <a href="tel:07915999994">📞 07915 999994</a>
            <a href="https://wa.me/447915999994" target="_blank" rel="noreferrer">💬 WhatsApp</a>
            <a href="mailto:mikejhinton@outlook.com">✉️ Email</a>
            <a href="https://www.facebook.com/mikehintondrivingschool" target="_blank" rel="noreferrer">📘 Facebook</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Lessons</h4>
          <Link to="/what-we-offer">What We Offer</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/specialist-learners">Specialist Learners</Link>
          <Link to="/driving-syllabus">Driving Syllabus</Link>
        </div>

        <div className="footer__col">
          <h4>Information</h4>
          <Link to="/about">About Mike</Link>
          <Link to="/test-routes">Test Routes</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>

        <div className="footer__col">
          <div>
            <h4>Areas Covered</h4>
            <p style={{ color: 'var(--light-blue)', fontSize: '0.88rem', marginTop: 8, lineHeight: 1.8 }}>
              Dalton · Sunnyside · Woodlaithes · Flanderwell · Wickersley ·
              Bramley · Ravenfield · Braithwell · Micklebring · Maltby ·
              Brecks · East Denes · Herringthorpe · Rawmarsh
            </p>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Mike Hinton Driving School · DVSA Approved · Rotherham</p>
          <p style={{ marginTop: 4 }}>
            <Link to="/faqs">FAQs</Link> ·{' '}
            <Link to="/contact">Contact</Link> ·{' '}
            <Link to="/terms">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
