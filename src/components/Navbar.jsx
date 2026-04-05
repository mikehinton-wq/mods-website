import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home',               to: '/' },
  { label: 'About',              to: '/about' },
  { label: 'Testimonials',       to: '/testimonials' },
  {
    label: 'Driving Test',
    children: [
      { label: 'Driving Test Routes', to: '/test-routes' },
      { label: 'What to Expect',       to: '/the-driving-test' },
      { label: 'Show Me Tell Me',     to: '/show-me-tell-me' },
      { label: 'How the Test is Marked', to: '/how-test-is-marked' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Driving Syllabus',   to: '/driving-syllabus' },
      { label: 'Driving Diagrams',   to: '/diagrams' },
      { label: 'Driving Skills',     to: '/driving-skills' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'FAQs',               to: '/faqs' },
    ],
  },
  { label: 'Blog',               to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    setOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    const handleClickOutside = e => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <img
            src="/images/Mike Hinton Logo Cropped.jpg"
            alt="Mike Hinton Driving School"
            style={{ height: 60, width: 'auto', display: 'block', borderRadius: 6 }}
          />
        </Link>

        <nav className={`navbar__links${open ? ' open' : ''}`} ref={navRef}>
          {navLinks.map(link =>
            link.children ? (
              <div
                key={link.label}
                className={`navbar__dropdown${activeDropdown === link.label ? ' active' : ''}`}
              >
                <button
                  className="navbar__link dropdown-toggle"
                  onClick={() => setActiveDropdown(a => a === link.label ? null : link.label)}
                >
                  {link.label} <span className="caret">▾</span>
                </button>
                <div className="dropdown__menu">
                  {link.children.map(child => (
                    <NavLink key={child.to} to={child.to} className="dropdown__item">
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            )
          )}
          <a href="tel:07915999994" className="btn btn-primary navbar__cta">
            📞 07915 999994
          </a>
        </nav>

        <button className={`burger${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
