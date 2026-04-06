import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', postcode: '', type: '', experience: '', availability: '', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // In production this would submit to a backend/email service
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact Mike Hinton | Book Driving Lessons in Rotherham</title>
        <meta name="description" content="Get in touch with Mike Hinton Driving School to book driving lessons in Rotherham. Call 07915 999994, WhatsApp, or use our contact form." />
        <link rel="canonical" href="https://mikehintondrivingschool.co.uk/contact" />
        <meta property="og:title" content="Contact Mike Hinton | Driving Lessons Rotherham" />
        <meta property="og:description" content="Book driving lessons in Rotherham. Call 07915 999994 or send a message." />
        <meta property="og:url" content="https://mikehintondrivingschool.co.uk/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Contact</span>
          <h1>Get in Touch</h1>
          <p>Call, WhatsApp, email, or fill in the form — Mike will get back to you promptly.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col-rev" style={{ maxWidth: 960, margin: '0 auto' }}>

          {/* Contact Details */}
          <div>
            <h2 style={{ marginBottom: 20 }}>Contact Details</h2>

            {[
              { icon: '📞', label: 'Phone / Text', value: '07915 999994', href: 'tel:07915999994' },
              { icon: '💬', label: 'WhatsApp', value: 'Message instantly', href: 'https://wa.me/447915999994' },
              { icon: '✉️', label: 'Email', value: 'mikejhinton@outlook.com', href: 'mailto:mikejhinton@outlook.com' },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  background: 'var(--pale-blue)', borderRadius: 'var(--radius)',
                  padding: '16px 20px', marginBottom: 12,
                  textDecoration: 'none', transition: 'var(--transition)',
                  border: '1.5px solid var(--light-blue)',
                }}
              >
                <div style={{ fontSize: '1.5rem' }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontFamily: 'Raleway', color: 'var(--navy)', fontSize: '0.9rem' }}>{c.label}</div>
                  <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem' }}>{c.value}</div>
                </div>
              </a>
            ))}

            <div style={{ marginTop: 28, background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '20px' }}>
              <h4 style={{ color: 'var(--white)', marginBottom: 8 }}>📍 Address</h4>
              <p style={{ color: 'var(--light-blue)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                15 Elton Lane, Dalton<br />Rotherham, S66 3RU
              </p>
              <p style={{ color: 'var(--grey-400)', fontSize: '0.8rem', marginTop: 10 }}>
                Lessons depart from your home address within the coverage area.
              </p>
            </div>

          </div>

          {/* Form */}
          <div>
            <h2 style={{ marginBottom: 20 }}>Send a Message</h2>
            {sent ? (
              <div className="guarantee-box" style={{ padding: '28px', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✅</div>
                <h3 style={{ color: 'var(--green)', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: 'var(--grey-700)' }}>
                  Thanks for getting in touch. Mike will respond as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'e.g. Jane Smith', required: true },
                  { name: 'phone', label: 'Phone / Mobile', type: 'tel', placeholder: 'e.g. 07700 000000', required: false },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'e.g. jane@example.com', required: true },
                  { name: 'postcode', label: 'Postcode', type: 'text', placeholder: 'e.g. S66 3RU', required: false },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ display: 'block', fontFamily: 'Raleway', fontWeight: 700, fontSize: '0.88rem', color: 'var(--navy)', marginBottom: 6 }}>
                      {field.label} {field.required && <span style={{ color: 'var(--primary)' }}>*</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.name]}
                      onChange={handleChange}
                      style={{
                        width: '100%', padding: '11px 14px',
                        border: '1.5px solid var(--grey-200)', borderRadius: 'var(--radius)',
                        fontFamily: 'Open Sans', fontSize: '0.93rem', color: 'var(--navy)',
                        outline: 'none', transition: 'border-color 0.2s',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ display: 'block', fontFamily: 'Raleway', fontWeight: 700, fontSize: '0.88rem', color: 'var(--navy)', marginBottom: 6 }}>
                    Type of Lesson
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '11px 14px',
                      border: '1.5px solid var(--grey-200)', borderRadius: 'var(--radius)',
                      fontFamily: 'Open Sans', fontSize: '0.93rem', color: 'var(--navy)',
                      background: 'white', outline: 'none',
                    }}
                  >
                    <option value="">Select…</option>
                    <option>Beginner lessons</option>
                    <option>Nervous / neurodiverse learner</option>
                    <option>Refresher lessons</option>
                    <option>Motorway driving</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Raleway', fontWeight: 700, fontSize: '0.88rem', color: 'var(--navy)', marginBottom: 6 }}>
                    Do you have any driving experience?
                  </label>
                  <select
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '11px 14px',
                      border: '1.5px solid var(--grey-200)', borderRadius: 'var(--radius)',
                      fontFamily: 'Open Sans', fontSize: '0.93rem', color: 'var(--navy)',
                      background: 'white', outline: 'none',
                    }}
                  >
                    <option value="">Select…</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'Raleway', fontWeight: 700, fontSize: '0.88rem', color: 'var(--navy)', marginBottom: 6 }}>
                    Please let us know what days and times you are available for lessons and any additional information
                  </label>
                  <textarea
                    name="availability"
                    rows={3}
                    placeholder="e.g. Weekday mornings, Saturday afternoons…"
                    value={form.availability}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '11px 14px',
                      border: '1.5px solid var(--grey-200)', borderRadius: 'var(--radius)',
                      fontFamily: 'Open Sans', fontSize: '0.93rem', color: 'var(--navy)',
                      resize: 'vertical', outline: 'none',
                    }}
                  />
                </div>


                <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', padding: '14px' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
