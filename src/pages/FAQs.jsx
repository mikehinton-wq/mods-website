import { useState } from 'react'

const faqs = [
  {
    q: 'How many lessons will I need?',
    a: 'The DVSA recommends an average of 45 hours of professional instruction combined with 22 hours of private practice. In reality, it varies — some people pass in fewer hours, others need more. Mike will give you an honest assessment as your learning progresses.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Mike covers Rotherham, Worksop, and surrounding areas including Maltby, Wickersley, Bramley, Brinsworth, Dinnington, Mexborough, Swinton, and Hellaby. If you\'re unsure whether your area is covered, just get in touch.',
  },
  {
    q: 'Do you offer lessons for nervous or anxious learners?',
    a: 'Yes — this is a specialist area. Mike has experience working with learners who have Anxiety, Dyslexia, Dyspraxia, ADHD, and Autism. Lessons are adapted to your needs and run entirely at your pace. See the Specialist Learners page for more information.',
  },
  {
    q: 'What is the Theory Test Guarantee?',
    a: 'If you don\'t pass your theory test after completing the required structured learning plan, your test fee will be refunded. No small print. Terms and Conditions apply. See the guarantee details page for full information.',
  },
  {
    q: 'How do I book a lesson?',
    a: 'Call or text Mike on 07915 999994, send a WhatsApp message, or email mikejhinton@outlook.com. There\'s no online booking system — Mike prefers to have a quick chat first to understand your needs and arrange a lesson that suits you.',
  },
  {
    q: 'What is the cancellation policy?',
    a: '48 hours or more notice: no charge. 24–48 hours notice: 50% of lesson fee. Less than 24 hours notice: full lesson fee. This policy protects your booked slot — if you cancel late, that time cannot be offered to another student.',
  },
  {
    q: 'Do you offer automatic or manual lessons?',
    a: 'Contact Mike to confirm current availability of manual and automatic lessons. Both may be available — get in touch to discuss your preference.',
  },
  {
    q: 'Do you offer intensive driving courses?',
    a: 'Yes. Intensive courses can be arranged to suit your schedule — they\'re suitable for people with some prior experience who need to pass by a deadline. Contact Mike to discuss what\'s possible.',
  },
  {
    q: 'Can I have refresher lessons if I already have a full licence?',
    a: 'Yes. Refresher lessons are available for fully licenced drivers who haven\'t driven for a while or who want to build confidence in specific areas. Motorway driving sessions are also available for post-test drivers.',
  },
  {
    q: 'Are lessons one-to-one?',
    a: 'Yes — all lessons are one-to-one unless otherwise agreed in advance. There is no sharing with other learners.',
  },
  {
    q: 'Do you offer gift vouchers?',
    a: 'Please contact Mike directly to discuss gift vouchers.',
  },
  {
    q: 'How do I contact Mike with a complaint?',
    a: 'Contact Mike directly at mikejhinton@outlook.com. All concerns are taken seriously and responded to promptly.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      border: '1px solid var(--grey-200)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      marginBottom: 10,
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '16px 20px',
          background: open ? 'var(--pale-blue)' : 'var(--white)',
          border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16,
          transition: 'background 0.15s',
        }}
      >
        <span style={{ fontFamily: 'Raleway', fontWeight: 700, color: 'var(--navy)', fontSize: '0.97rem' }}>
          {faq.q}
        </span>
        <span style={{ color: 'var(--primary)', fontSize: '1.2rem', flexShrink: 0, fontWeight: 700 }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div style={{ padding: '14px 20px 18px', background: 'var(--white)', borderTop: '1px solid var(--light-blue)' }}>
          <p style={{ color: 'var(--grey-700)', fontSize: '0.93rem', lineHeight: 1.7 }}>{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>FAQs</span>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know before booking with Mike Hinton Driving School.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
          {faqs.map(faq => <FAQItem key={faq.q} faq={faq} />)}

          <div style={{ marginTop: 40, background: 'var(--pale-blue)', borderRadius: 'var(--radius-lg)', padding: '28px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: 8 }}>Still Have a Question?</h3>
            <p style={{ color: 'var(--grey-700)', marginBottom: 20 }}>
              Get in touch — Mike is happy to chat through anything before you commit to booking.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:07915999994" className="btn btn-primary">📞 07915 999994</a>
              <a href="https://wa.me/447915999994" className="btn btn-outline" target="_blank" rel="noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
