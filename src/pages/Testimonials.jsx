import { Helmet } from 'react-helmet-async'

const testimonials = [
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
            "reviewCount": "47"
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
