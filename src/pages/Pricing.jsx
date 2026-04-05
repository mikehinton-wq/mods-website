import { Link } from 'react-router-dom'

const packages = [
  { label: 'Single Lesson',   duration: '1 hour',    price: '£38',              highlight: false },
  { label: 'Single Lesson',   duration: '1.5 hours', price: '£57',              highlight: false },
  { label: 'Single Lesson',   duration: '2 hours',   price: '£75',              highlight: false },
  { label: 'Motorway Session',duration: '1 hour',    price: '£40',              highlight: false },
  { label: 'Refresher Lesson',duration: '1–2 hours', price: 'Contact for price',highlight: false },
]

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Pricing</span>
          <h1>Pricing</h1>
          <p>Transparent pricing with no hidden costs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>

            <div className="guarantee-box" style={{ marginBottom: 32 }}>
              <h4 style={{ color: 'var(--green)', marginBottom: 8 }}>✓ Theory Test Fee Guarantee — included with all lessons</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--grey-700)' }}>
                If you don't pass your theory test after completing the required structured learning plan,
                your test fee will be refunded. No small print. Terms and Conditions apply.{' '}
                <a href="https://drivingtestsuccess.com/app-pass-guarantee/" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Click HERE for details.</a>
              </p>
            </div>

            <h2 style={{ marginBottom: 20 }}>Lesson Prices</h2>

            <div className="table-scroll" style={{ marginBottom: 32 }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
                <thead>
                  <tr style={{ background: 'var(--navy)', color: 'var(--white)' }}>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontFamily: 'Raleway', fontWeight: 700 }}>Lesson Type</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontFamily: 'Raleway', fontWeight: 700 }}>Duration</th>
                    <th style={{ padding: '14px 20px', textAlign: 'left', fontFamily: 'Raleway', fontWeight: 700 }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg, i) => (
                    <tr key={i} style={{
                      background: pkg.highlight ? 'var(--pale-blue)' : i % 2 === 0 ? 'var(--white)' : 'var(--grey-50)',
                      borderBottom: '1px solid var(--grey-200)',
                    }}>
                      <td style={{ padding: '13px 20px', fontWeight: pkg.highlight ? 700 : 400, color: pkg.highlight ? 'var(--primary)' : 'var(--navy)' }}>
                        {pkg.label} {pkg.highlight && <span className="badge badge-primary" style={{ marginLeft: 8, fontSize: '0.72rem' }}>Best Value</span>}
                      </td>
                      <td style={{ padding: '13px 20px', color: 'var(--grey-600)' }}>{pkg.duration}</td>
                      <td style={{ padding: '13px 20px', color: 'var(--grey-700)', fontWeight: 600 }}>{pkg.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>

            <h3 style={{ marginBottom: 14 }}>Payment</h3>
            <p style={{ color: 'var(--grey-700)', marginBottom: 24, lineHeight: 1.7 }}>
              Payment is accepted by cash or bank transfer at the end of each lesson (or in advance
              for block bookings). Block bookings represent a saving on the standard hourly rate.
            </p>

            <h3 style={{ marginBottom: 14 }}>Cancellation Policy</h3>
            <div className="three-col" style={{ marginBottom: 32 }}>
              {[
                { time: '48hrs+ notice', charge: 'No charge', col: 'var(--green-light)', border: 'var(--green)' },
                { time: '24–48hrs notice', charge: '50% of lesson fee', col: 'var(--amber-light)', border: 'var(--amber)' },
                { time: 'Under 24hrs', charge: 'Full lesson fee', col: '#fff1f2', border: '#dc2626' },
              ].map(c => (
                <div key={c.time} style={{
                  background: c.col, border: `1.5px solid ${c.border}`,
                  borderRadius: 'var(--radius)', padding: '16px', textAlign: 'center',
                }}>
                  <div style={{ fontWeight: 700, fontFamily: 'Raleway', fontSize: '0.85rem', marginBottom: 4, color: 'var(--navy)' }}>{c.time}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--grey-700)' }}>{c.charge}</div>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--grey-600)', fontSize: '0.88rem', marginBottom: 32 }}>
              This policy is in place to protect your lesson slot — late cancellations mean that
              time cannot be offered to another student. Full details are in the{' '}
              <Link to="/terms" style={{ color: 'var(--primary)' }}>Terms &amp; Conditions</Link>.
            </p>

            <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--white)', marginBottom: 10 }}>Book Your First Lesson</h3>
              <p style={{ color: 'var(--light-blue)', marginBottom: 24, fontSize: '0.95rem' }}>
                Get in touch to discuss your needs and arrange your first lesson.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:07915999994" className="btn btn-primary">📞 07915 999994</a>
                <a href="https://wa.me/447915999994" className="btn btn-white" target="_blank" rel="noreferrer" style={{ color: 'var(--navy)' }}>💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
