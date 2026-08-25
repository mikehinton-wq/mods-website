import { Helmet } from 'react-helmet-async'

const testimonials = [
  {
    quote: "What a great instructor and an all round lovely bloke! My son got on great with Mike and most importantly he has taught him to drive well, which has resulted in a first time pass. So thank you for teaching him and having the patience of a saint ☺️ We would highly recommend you to anyone.",
    name: 'Victoria Attwood',
    centre: 'Rotherham Test Centre',
    date: 'August 2026',
    initial: 'V',
  },
  {
    quote: "Mike is a brilliant driving instructor — highly recommended. I only started having lessons 6 months ago and passed on Friday. He always made me feel comfortable and was always supportive throughout. Thank you!",
    name: 'McKenzie Churm',
    centre: 'Rotherham Test Centre',
    date: 'August 2026',
    initial: 'M',
  },
  {
    quote: "I recently passed my driving test with Mike Hinton and would highly recommend him. He was always calm, reliable, and supportive throughout my lessons. His teaching style made everything easy to understand, and he helped me improve my confidence and driving skills step by step. Thank you for all your help!",
    name: 'Darcy Scarafile',
    centre: 'Rotherham Test Centre',
    date: 'August 2026',
    initial: 'D',
  },
  {
    quote: "Learning to drive has been a long and sometimes challenging journey for me, especially as someone with autism. In the past, I struggled to find an instructor who truly understood my needs — many didn't take the time to listen or acknowledge my anxieties. That all changed when I met Mike.\n\nMike took the time to understand how I learn best and adapted every lesson to suit my pace. He never rushed me or made me feel pressured, and his calm, patient approach gave me the confidence I needed to keep going. He didn't just teach me how to drive — he taught me valuable coping strategies and techniques that I now use in my everyday life.\n\nFor anyone who learns differently, experiences anxiety, or simply wants an instructor who truly cares, I couldn't recommend Mike more highly.",
    name: 'Lucy',
    centre: 'Braithwell',
    date: 'May 2026',
    initial: 'L',
    tag: 'Autism & Neurodivergent',
    featured: true,
  },
  {
    quote: "As a parent of a 17 year old who has just passed first time with Mike I can honestly say he's been amazing. He put her at ease from the very first 5 minutes of her lesson. Mike pushed her out of her comfort zone but still kept her 100% safe all the way. To watch her confidence and driving skills grow each week has been amazing.\n\nMike made sure she drove in all conditions, at all different times of the day — busy towns, fast country lanes, rush hour, dark, rain, bright sunshine. He really made sure she was totally ready for her test and the results paid off.\n\nWe will be sending our youngest Mike's way when she turns 17 too! Highly recommend.",
    name: 'Marie',
    centre: 'Bramley',
    date: 'June 2026',
    initial: 'M',
    tag: 'Parent Review',
    featured: true,
  },
  {
    quote: "Mike was incredibly patient with me — I'd failed with another instructor twice before. He completely changed my approach and I passed first time at Rotherham. Cannot recommend him enough.",
    name: 'Sarah T.',
    centre: 'Rotherham Test Centre',
    date: 'January 2026',
    initial: 'S',
  },
  {
    quote: "I have dyslexia and was really worried about the theory test. Mike pointed me to the right resources and helped me understand what to focus on. Passed theory and practical both first time.",
    name: 'James M.',
    centre: 'Rotherham Test Centre',
    date: 'November 2025',
    initial: 'J',
  },
  {
    quote: "I'm an anxious person in general and was dreading learning to drive. Mike made it feel manageable from the very first lesson. His patience is unbelievable.",
    name: 'Liam H.',
    centre: 'Rotherham Test Centre',
    date: 'October 2025',
    initial: 'L',
  },
  {
    quote: "Had a gap of 10 years before refresher lessons with Mike. He quickly identified what I needed to work on and I felt road-ready after just a few sessions.",
    name: 'Carol B.',
    centre: 'Refresher — Rotherham',
    date: '2025',
    initial: 'C',
  },
  {
    quote: "Straightforward, professional, and very knowledgeable about the test routes. Did my mock test on the actual Rotherham route which gave me a massive confidence boost.",
    name: 'Ryan P.',
    centre: 'Rotherham Test Centre',
    date: 'September 2025',
    initial: 'R',
  },
]

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Student Reviews & Testimonials | Mike Hinton Driving School Rotherham</title>
        <meta name="description" content="Read real reviews from students who passed their driving test with Mike Hinton Driving School in Rotherham. 5-star rated driving instructor." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/testimonials" />
        <meta property="og:title" content="Student Reviews | Mike Hinton Driving School" />
        <meta property="og:description" content="See what students say about learning to drive with Mike Hinton in Rotherham." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/testimonials" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Student Reviews | Mike Hinton Driving School" />
        <meta name="twitter:description" content="See what students say about learning to drive with Mike Hinton in Rotherham." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DrivingSchool",
          "name": "Mike Hinton Driving School",
          "url": "https://www.mikehintondrivingschool.co.uk",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "50"
          },
          "review": [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Sarah T." },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "Mike was incredibly patient with me — I'd failed with another instructor twice before. He completely changed my approach and I passed first time at Rotherham. Cannot recommend him enough.",
              "datePublished": "2026-01-01"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "James M." },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "I have dyslexia and was really worried about the theory test. Mike pointed me to the right resources and helped me understand what to focus on. Passed theory and practical both first time.",
              "datePublished": "2025-11-01"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Lucy" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "Learning to drive has been a long and sometimes challenging journey for me, especially as someone with autism. Mike took the time to understand how I learn best and adapted every lesson to suit my pace. He didn't just teach me how to drive — he taught me valuable coping strategies and techniques that I now use in my everyday life.",
              "datePublished": "2026-05-01"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Marie" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "As a parent of a 17 year old who has just passed first time with Mike I can honestly say he's been amazing. He put her at ease from the very first 5 minutes of her lesson. Mike made sure she drove in all conditions — busy towns, fast country lanes, rush hour, dark, rain, bright sunshine. We will be sending our youngest Mike's way when she turns 17 too!",
              "datePublished": "2026-06-01"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Liam H." },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "I'm an anxious person in general and was dreading learning to drive. Mike made it feel manageable from the very first lesson. His patience is unbelievable.",
              "datePublished": "2025-10-01"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Carol B." },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "Had a gap of 10 years before refresher lessons with Mike. He quickly identified what I needed to work on and I felt road-ready after just a few sessions.",
              "datePublished": "2025-01-01"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Ryan P." },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "Straightforward, professional, and very knowledgeable about the test routes. Did my mock test on the actual Rotherham route which gave me a massive confidence boost.",
              "datePublished": "2025-09-01"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Darcy Scarafile" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "I recently passed my driving test with Mike Hinton and would highly recommend him. He was always calm, reliable, and supportive throughout my lessons. His teaching style made everything easy to understand, and he helped me improve my confidence and driving skills step by step. Thank you for all your help!",
              "datePublished": "2026-08-01"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "McKenzie Churm" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": "Mike is a brilliant driving instructor — highly recommended. I only started having lessons 6 months ago and passed on Friday. He always made me feel comfortable and was always supportive throughout. Thank you!",
              "datePublished": "2026-08-01"
            }
          ]
        })}</script>
      </Helmet>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Reviews</span>
          <h1>What My Students Say</h1>
          <p style={{ color: 'var(--white)', fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Raleway, sans-serif', marginTop: 10, marginBottom: 4 }}>
            See why we have a{' '}
            <span style={{ color: '#1EABC7' }}>⭐⭐⭐⭐⭐ 5 star rating</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://g.page/r/CbOjeyUtMbrYEB0/review"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#fff', color: '#444',
                  border: '1.5px solid #dadce0',
                  fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem',
                  padding: '13px 24px', borderRadius: 50, textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Leave a Google Review
              </a>
              <a
                href="https://www.facebook.com/mikehintondrivingschool/reviews"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#1877F2', color: '#fff',
                  fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem',
                  padding: '14px 24px', borderRadius: 50, textDecoration: 'none',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Leave a Facebook Review
              </a>
            </div>
          </div>

          {/* Featured review — full width */}
          {testimonials.filter(t => t.featured).map(t => (
            <div key={t.name} style={{
              background: 'linear-gradient(135deg, #f0f9fb, #e8f4f8)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow)',
              padding: '36px 40px',
              borderLeft: '5px solid var(--primary)',
              marginBottom: 32,
              position: 'relative',
            }}>
              <div style={{ fontSize: '4rem', color: 'var(--primary)', lineHeight: 0.7, fontFamily: 'Georgia', opacity: 0.35, marginBottom: 8 }}>"</div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <span style={{ background: '#1EABC7', color: '#fff', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.75rem', padding: '4px 14px', borderRadius: 50 }}>⭐ Featured Review</span>
                {t.tag && <span style={{ background: 'rgba(30,171,199,0.1)', color: '#0C3C60', fontFamily: 'Raleway, sans-serif', fontWeight: 600, fontSize: '0.75rem', padding: '4px 14px', borderRadius: 50 }}>{t.tag}</span>}
              </div>
              {t.quote.split('\n\n').map((para, i) => (
                <p key={i} style={{ color: 'var(--grey-700)', fontStyle: 'italic', lineHeight: 1.8, fontSize: '0.97rem', marginBottom: i < 2 ? 14 : 20 }}>
                  {para}
                </p>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(30,171,199,0.2)', paddingTop: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'var(--primary)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Raleway', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0,
                }}>{t.initial}</div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--navy)' }}>{t.name}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--grey-400)' }}>{t.centre} · {t.date}</span>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: '1.1rem', color: '#f5a623', letterSpacing: 2 }}>★★★★★</div>
              </div>
            </div>
          ))}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {testimonials.filter(t => !t.featured).map(t => (
              <div key={t.name} style={{
                background: 'var(--white)', borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow)', padding: '28px',
                borderTop: '3px solid var(--primary)',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ fontSize: '3.5rem', color: 'var(--primary)', lineHeight: 0.8, fontFamily: 'Georgia', opacity: 0.5, marginBottom: 8 }}>"</div>
                <p style={{ color: 'var(--grey-700)', fontStyle: 'italic', lineHeight: 1.7, fontSize: '0.93rem', flex: 1, marginBottom: 20 }}>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid var(--grey-200)', paddingTop: 16 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--primary)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Raleway', fontWeight: 700, fontSize: '1rem', flexShrink: 0,
                  }}>{t.initial}</div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--navy)' }}>{t.name}</strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--grey-400)' }}>{t.centre} · {t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <span style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--navy)' }}>Read More Reviews</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 16, marginTop: 24, flexWrap: 'wrap' }}>
            <div className="elfsight-app-a8fdbcd6-2bb7-42f8-a307-3e274cc31116" data-elfsight-app-lazy></div>
            <div className="elfsight-app-64c02bc2-4726-47d5-8ef3-b5d2c9a9441f" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>
    </>
  )
}
