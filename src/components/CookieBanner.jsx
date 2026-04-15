import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'mhds_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setVisible(true)
    } else if (stored === 'accepted') {
      grantConsent()
    }
  }, [])

  function grantConsent() {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
      })
    }
  }

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    grantConsent()
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: '#0C3C60', borderTop: '3px solid #1EABC7',
      padding: '16px 24px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      boxShadow: '0 -4px 24px rgba(0,0,0,0.2)',
    }}>
      <p style={{
        fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)',
        margin: 0, flex: 1, minWidth: 240, lineHeight: 1.6,
      }}>
        We use cookies to analyse site traffic and improve your experience.
        By clicking <strong style={{ color: '#fff' }}>Accept</strong>, you consent to our use of analytics cookies.{' '}
        <Link to="/privacy-policy" style={{ color: '#1EABC7', fontWeight: 600 }}>Privacy Policy</Link>
      </p>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button
          onClick={handleDecline}
          style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.3)',
            color: 'rgba(255,255,255,0.7)', fontFamily: 'Raleway, sans-serif',
            fontWeight: 600, fontSize: '0.85rem', padding: '8px 20px',
            borderRadius: 50, cursor: 'pointer',
          }}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: '#1EABC7', border: 'none', color: '#fff',
            fontFamily: 'Raleway, sans-serif', fontWeight: 700,
            fontSize: '0.85rem', padding: '8px 20px',
            borderRadius: 50, cursor: 'pointer',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
