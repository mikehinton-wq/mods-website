import { Helmet } from 'react-helmet-async'

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Mike Hinton Driving School Rotherham</title>
        <meta name="description" content="Read the terms and conditions for driving lessons with Mike Hinton Driving School in Rotherham, including pricing, cancellation policy and complaints procedure." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/terms" />
      </Helmet>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p>Please read these terms carefully — you and your instructor will both agree to them.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820, margin: '0 auto' }}>

          <p style={{ color: 'var(--grey-700)', lineHeight: 1.8, marginBottom: 32, fontSize: '1.02rem' }}>
            These Terms and Conditions are an important part of your driving tuition and you and
            your instructor will both sign and agree to these terms.
          </p>

          {/* Instructor obligations */}
          <h2 style={{ marginBottom: 12 }}>As Your Driving Instructor, I Will:</h2>
          <div className="divider" />
          <ul className="check-list" style={{ marginBottom: 40 }}>
            <li>Provide a clean, tidy and roadworthy car in compliance with the law</li>
            <li>Not smoke or vape in the vehicle at any time</li>
            <li>Display a valid DVSA licence</li>
            <li>Provide tuition for the entirety of the agreed lesson time</li>
            <li>Base any recommendation for test application upon an honest and objective appraisal of your progress. I reserve the right to withdraw the use of my car for tests without prior notice, should you prove to be unsafe and not up to test standard.</li>
            <li>Provide a vehicle for your test providing you are deemed ready to proceed</li>
            <li>Be punctual and respectful — I will contact you if I am going to be later than 15 minutes for your driving lesson. The time lost will be added to the end of the lesson if possible, or added to another lesson at a later date.</li>
          </ul>

          <h2 style={{ marginBottom: 12 }}>By Learning With Us, You Agree To:</h2>
          <div className="divider" />

          {/* Cancellation */}
          <h3 style={{ marginTop: 28, marginBottom: 10 }}>Cancellation Policy</h3>
          <ul className="check-list" style={{ marginBottom: 24 }}>
            <li>48 hours (2 days) notice is required to cancel any driving lesson. No fee is due.</li>
            <li>All cancellations between 24–48 hours (1 day) before your lesson is due — half the lesson fee must be paid.</li>
            <li>If less than 24 hours (1 day) notice is given — the full lesson fee must be paid.</li>
            <li>If you suspend taking your driving lessons within a block of pre-paid lessons for a period of 12 weeks or more, any remaining lessons will be forfeited.</li>
            <li>Should your instructor cancel your driving lesson for any reason, no financial penalty will apply and your lesson will be re-arranged at no additional charge to you.</li>
          </ul>

          {/* Payments */}
          <h3 style={{ marginBottom: 10 }}>Lesson Payments</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            All payments must be made at the beginning of each lesson, and can be by cash or online banking.
            Block bookings must be paid for in full on the first lesson of that block. If cancelled you will
            be refunded the price of lessons had you paid full price.
          </p>

          {/* Punctuality */}
          <h3 style={{ marginBottom: 10 }}>Punctuality</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            You agree to be punctual and ready to commence your lesson at the agreed time and location.
          </p>

          {/* Behaviour */}
          <h3 style={{ marginBottom: 10 }}>Behaviour</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            You will be respectful. Any aggression or violent behaviour will not be tolerated. Should this
            occur, any agreement or contract between you and your instructor will be terminated and money
            will be refunded for any lessons booked over 48 hours in advance.
          </p>

          {/* Fitness to Drive */}
          <h3 style={{ marginBottom: 10 }}>Fitness to Drive</h3>
          <ul className="check-list" style={{ marginBottom: 24 }}>
            <li>You must hold a current and valid driving licence, provisional or full depending on tuition, and be able to produce this on request.</li>
            <li>Wear suitable footwear (flat shoes are best with thin soles) — no flip flops or open-toed sandals.</li>
            <li>Wear glasses or contact lenses should you need them to meet the required eyesight criteria as laid out by the DVSA.</li>
            <li>Smoking or vaping is not permitted in the vehicle.</li>
            <li>Please do not drink alcohol at least 24 hours before your lesson — responsibility starts here!</li>
            <li>If you are suspected of having any drugs or alcohol in your system, you will be unable to take your lesson and you will lose your fee.</li>
            <li>Please check with your GP for any prescription drugs you may be taking to ensure that you are safe to drive.</li>
            <li>If your instructor believes you are unfit to drive for failing to meet any of these conditions, the lesson will be cancelled at your expense.</li>
          </ul>

          {/* Communications */}
          <h3 style={{ marginBottom: 10 }}>Communications Devices</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 32 }}>
            The use of mobile phones during lessons is prohibited by law and must be turned onto silent
            mode for the duration of the lesson to avoid unnecessary distractions.
          </p>

          <h2 style={{ marginBottom: 12 }}>Additional Terms &amp; Conditions</h2>
          <div className="divider" />

          {/* Suspension */}
          <h3 style={{ marginTop: 28, marginBottom: 10 }}>Suspension of Lessons</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            If you suspend your lessons, your space cannot be guaranteed when you want to resume. You may
            need to join the waiting list until a free space comes up. If you suspend taking any pre-paid
            tuition for a period of 12 weeks or more, any remaining tuition owed will be forfeited. Prices
            may be adjusted at any time with reasonable notice.
          </p>

          {/* Accompanied */}
          <h3 style={{ marginBottom: 10 }}>Accompanied Lessons</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            Mike Hinton Driving School will only teach on a one-to-one basis unless the pupil has asked to
            have someone accompany them and the instructor is in agreement. In this instance the extra person
            must be seated in the back of the car and their presence must not be a detriment to the lesson.
            You will always receive the full lesson time you have paid for. Your instructor will be happy to
            start and finish your lesson from different locations, providing these are agreed at least one
            week in advance, and that both are within the usual area of their work.
          </p>

          {/* Driving offences */}
          <h3 style={{ marginBottom: 10 }}>Driving Offences / Penalties</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            Whenever you are driving in the tuition vehicle, you will be under close supervision. However,
            Mike Hinton Driving School cannot be held responsible for any infringement of the law. Any fines
            that are incurred will be the responsibility of the driver.
          </p>

          {/* Pricing */}
          <h3 style={{ marginBottom: 10 }}>Pricing</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            Lesson prices shown on the website can be changed at any time with no prior warning. Students
            already taking tuition lessons will be given two weeks notice of a price change.
          </p>

          {/* Practical tests */}
          <h3 style={{ marginBottom: 10 }}>Practical Tests</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            You must try to maintain regular lessons leading up to your test otherwise your test date might
            have to be moved back to give you more time to prepare. In the interest of road safety, Mike
            Hinton reserves the right to withdraw the use of his car for tests without prior notice, should
            you prove to be unsafe and not up to test standard.
          </p>

          {/* Damage */}
          <h3 style={{ marginBottom: 10 }}>Damage to the School Car</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            During lessons, Mike Hinton will make every effort to avoid damage to the car. However, if he
            considers that you were driving in a dangerous or unpredictable way during a lesson and actual
            damage is caused despite best efforts made, you will be expected to pay towards repairs. This
            will be discussed at the time of the damage. This also applies during the driving test.
          </p>

          {/* Complaints */}
          <h3 style={{ marginBottom: 10 }}>Complaints</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 24 }}>
            If you are unhappy with your driving instructor, or you have any comments or complaints, you
            may contact him at{' '}
            <a href="mailto:mikejhinton@outlook.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>mikejhinton@outlook.com</a>{' '}
            or in writing at their registered address: 15 Elton Lane, Sunnyside, Rotherham, S66 3RU.
          </p>

          {/* Data Protection */}
          <h3 style={{ marginBottom: 10 }}>Data Protection</h3>
          <p style={{ color: 'var(--grey-700)', lineHeight: 1.75, marginBottom: 40 }}>
            For the purpose of the Data Protection Act 1998, any information you provide to Mike Hinton
            Driving School will only be used for administration purposes and where prior agreement has been
            approved for marketing purposes. We may send you information about us or promotional material
            from time to time. If you wish to be removed from our mailing list, please inform us by email
            at{' '}
            <a href="mailto:mikejhinton@outlook.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>mikejhinton@outlook.com</a>{' '}
            and we will remove your data from our marketing. Recordings made in the car are for insurance
            and evaluation purposes and will not be used on social media or shared with another person
            without your consent.
          </p>

          <div className="highlight-box">
            <p style={{ color: 'var(--grey-700)', fontSize: '0.92rem', lineHeight: 1.7 }}>
              These terms and conditions are applicable to every driving lesson that you will receive.
              Occasionally you will be requested to sign an additional copy. Additional contracts are also
              available on request.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
