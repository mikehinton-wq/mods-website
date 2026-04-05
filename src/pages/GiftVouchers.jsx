const amounts = [
  { value: '£30', desc: 'A great starter gift towards a first lesson', icon: '🎁' },
  { value: '£50', desc: 'Towards a full lesson — a thoughtful practical gift', icon: '⭐' },
  { value: '£100', desc: 'A block of lessons to really get started', icon: '🏆' },
  { value: 'Custom', desc: 'Any amount you choose — we\'ll match it to a package', icon: '✨' },
]

export default function GiftVouchers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Gift Vouchers</span>
          <h1>Give the Gift of Learning to Drive</h1>
          <p>The perfect present for birthdays, Christmas, or celebrating exam results.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--grey-700)', lineHeight: 1.8, marginBottom: 40 }}>
            Driving lessons make a brilliant, memorable gift. Mike Hinton Driving School gift vouchers
            are available in any amount and can be put towards any lesson type — from beginner
            lessons to refresher sessions or intensive courses.
          </p>

          <h2 style={{ marginBottom: 20 }}>Popular Voucher Amounts</h2>
          <div className="two-col-equal" style={{ marginBottom: 40 }}>
            {amounts.map(a => (
              <div key={a.value} className="card" style={{ borderTop: '3px solid var(--primary)', display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ fontSize: '2rem' }}>{a.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Raleway', fontWeight: 800, fontSize: '1.4rem', color: 'var(--primary)', lineHeight: 1 }}>{a.value}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--grey-600)', marginTop: 4 }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ marginBottom: 16 }}>How It Works</h2>
          <div className="four-col" style={{ marginBottom: 40 }}>
            {[
              { step: '1', label: 'Choose your amount' },
              { step: '2', label: 'Contact Mike to arrange' },
              { step: '3', label: 'Receive a personalised voucher' },
              { step: '4', label: 'Recipient books their lessons' },
            ].map(s => (
              <div key={s.step} style={{ textAlign: 'center', background: 'var(--pale-blue)', borderRadius: 'var(--radius)', padding: '20px 12px' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'var(--primary)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Raleway', fontWeight: 800, fontSize: '1.1rem',
                  margin: '0 auto 10px',
                }}>{s.step}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="highlight-box" style={{ marginBottom: 32 }}>
            <p style={{ fontSize: '0.92rem', color: 'var(--grey-700)' }}>
              <strong>Validity:</strong> Vouchers are valid for 12 months from the date of purchase.
              They can be used towards any lesson type and redeemed in full or in part.
            </p>
          </div>

          <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--white)', marginBottom: 10 }}>Order a Gift Voucher</h3>
            <p style={{ color: 'var(--light-blue)', marginBottom: 24, fontSize: '0.95rem' }}>
              Just get in touch to arrange — we'll sort the rest.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:07915999994" className="btn btn-primary">📞 07915 999994</a>
              <a href="https://wa.me/447915999994" className="btn btn-white" target="_blank" rel="noreferrer" style={{ color: 'var(--navy)' }}>💬 WhatsApp</a>
              <a href="mailto:mikejhinton@outlook.com" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'var(--light-blue)' }}>✉️ Email</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
