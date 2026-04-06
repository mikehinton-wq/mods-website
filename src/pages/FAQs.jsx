import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const faqs = [
  {
    q: 'How many lessons will I need?',
    a: 'The DVSA recommends an average of 45 hours of professional instruction combined with 22 hours of private practice. In reality, it varies — some people pass in fewer hours, others need more. Mike will give you an honest assessment as your learning progresses.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Mike covers the Rotherham area including Dalton, Sunnyside, Woodlaithes, Flanderwell, Wickersley, Bramley, Ravenfield, Braithwell, Micklebring, Maltby, Brecks, East Denes, Herringthorpe, and Rawmarsh. If you\'re unsure whether your area is covered, just get in touch.',
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
    a: 'We currently provide manual driving lessons.',
  },
  {
    q: 'Do you offer intensive driving courses?',
    a: 'At the moment we are not able to offer intensive courses. Please contact Mike if you wish to discuss what we can offer.',
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
    q: 'Do you have a waiting list / how long is your waiting list?',
    a: 'As the driving test waiting times are so long at the moment, this means that the waiting list to start lessons is also quite a while.\n\nWe do have a waiting list. The best advice is to get in touch using the Message Us buttons on the home page of this site where you will be advised on the current waiting time and if we are able to add you to the waiting list.',
  },
  {
    q: 'Can I postpone my lessons until nearer my test?',
    a: 'If you suspend your lessons, your space cannot be guaranteed when you want to resume your lessons. You may need to join the waiting list until a free space comes up. If you suspend taking any pre-paid tuition for a period of 12 weeks or more, any remaining tuition owed will be forfeited. Prices may be adjusted at any time with reasonable notice.',
  },
  {
    q: 'Can I do anything in between lessons to accelerate my progress?',
    a: 'Some of the things you can do to minimise the time you are paying for in a car are:\n\nPrivate Practice: We encourage students to do some practice between lessons with parents, family members, or a partner where possible. We will always give advice on what kind of practice would be most beneficial. It is important to remember that anyone supervising a learner driver must be at least 21 years old and have held a full UK driving licence for at least 3 years.\n\nWatch Videos: Quite often, you can use YouTube (your instructor can recommend good videos) to watch videos on the topics you are learning, need to improve on, or even the next lesson\'s topics. That way you will minimise the time needed for your instructor to give you the knowledge and they can just help you put your knowledge into practice.\n\nObserve your parents/friends driving: We spend a lot of time in cars, but most people don\'t ask or observe others driving. Just asking whoever is driving you what they are doing and why — and observing if you would have done the same — can help you massively.\n\nReflective Logs: Completing a reflective log between lessons will keep your learning points and aims fresh in your mind. The purpose is to help you self reflect on what has gone well, where you need to develop further, and set the objective for your next lesson.\n\nUse handouts: Does your driving instructor have handouts or other learning material you can use? If so, use them!',
  },
  {
    q: 'Should I practise in my own car?',
    a: 'Absolutely. We encourage students to do some practice between lessons with parents, family members, or a partner where possible. We will always give advice on what kind of practice would be most beneficial. It is important to remember that anyone supervising a learner driver must be at least 21 years old and have held a full UK driving licence for at least 3 years.',
  },
  {
    q: 'How will I know when I am ready for my driving test?',
    a: 'Your instructor will agree to book your driving test once you have met the required criteria and have passed a mock test assessment to prove your readiness. You must be able to demonstrate the ability to drive completely independently without any instructor intervention, except for giving directions, and to the required standard.',
  },
  {
    q: 'Will I fail for taking the wrong turn on my driving test?',
    a: 'Taking the wrong turn on a driving test is not a big problem in itself. Driving faults, both minor and serious, are only awarded if there are errors with your driving skills. So as long as every action is safely carried out, no marks will appear on your test report.\n\nRemember that you can ask examiners to repeat or confirm directions if you are unsure. This also applies to the independent driving exercise where you will follow directions given to you by an examiner or from a sat-nav system.',
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
          {faq.a.split('\n\n').map((para, i) => (
            <p key={i} style={{ color: 'var(--grey-700)', fontSize: '0.93rem', lineHeight: 1.7, marginBottom: i < faq.a.split('\n\n').length - 1 ? 12 : 0 }}>{para}</p>
          ))}
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
