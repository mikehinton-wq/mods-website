import { useState } from 'react'

export default function MailchimpSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div style={{
      background: '#0C3C60',
      borderRadius: 16,
      padding: '36px 32px',
      textAlign: 'center',
      margin: '48px 0',
    }}>
      <div style={{
        display: 'inline-block',
        background: '#1EABC7',
        color: '#fff',
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 700,
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        padding: '4px 14px',
        borderRadius: 20,
        marginBottom: 14,
      }}>Free Driving Tips</div>

      <h3 style={{
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 800,
        fontSize: '1.4rem',
        color: '#fff',
        margin: '0 0 10px',
      }}>Get Free Driving Tips & Test Advice</h3>

      <p style={{
        color: 'rgba(255,255,255,0.7)',
        fontSize: '0.9rem',
        margin: '0 0 24px',
        maxWidth: 420,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        Join learners across Rotherham getting expert advice straight to their inbox. No spam — just useful tips to help you pass.
      </p>

      {submitted ? (
        <div style={{
          background: 'rgba(34,197,94,0.15)',
          border: '1px solid #22c55e',
          borderRadius: 10,
          padding: '14px 20px',
          color: '#22c55e',
          fontWeight: 700,
          fontSize: '0.95rem',
          display: 'inline-block',
        }}>
          Thanks for subscribing! Check your inbox to confirm.
        </div>
      ) : (
        <form
          action="https://mikehintondrivingschool.us10.list-manage.com/subscribe/post?u=021425114ac83abbcd145b6c9&id=7850ef83fe&f_id=0006d5e3f0"
          method="post"
          target="_blank"
          onSubmit={() => setSubmitted(true)}
          style={{
            display: 'flex',
            gap: 10,
            maxWidth: 460,
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <input
            type="email"
            name="EMAIL"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            style={{
              flex: 1,
              minWidth: 220,
              padding: '12px 18px',
              borderRadius: 50,
              border: 'none',
              fontSize: '0.95rem',
              outline: 'none',
            }}
          />
          {/* Mailchimp honeypot — do not remove */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_021425114ac83abbcd145b6c9_7850ef83fe" tabIndex="-1" defaultValue="" />
          </div>
          <button
            type="submit"
            style={{
              background: '#1EABC7',
              color: '#fff',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '12px 28px',
              borderRadius: 50,
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Subscribe Free
          </button>
        </form>
      )}

      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: 14, marginBottom: 0 }}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  )
}
