import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MailchimpSignup from '../components/MailchimpSignup'

const tips = [
  { icon: '🎯', title: 'Find a Neurodivergent-Specialist Instructor', desc: 'This is the single most important step. A specialist instructor will know when to give you breaks, how to explain concepts differently, and how to pace lessons to suit your brain.' },
  { icon: '🗺️', title: 'Learn in Your Local Area', desc: 'Try to take lessons in the area you\'ll actually be driving in after you pass. Familiarity with local roads massively reduces anxiety and cognitive load on test day.' },
  { icon: '⏸️', title: 'Take Breaks After Manoeuvres', desc: 'A short five-minute pause after each manoeuvre gives your brain time to reset before moving on. This is a technique used by specialist instructors with great results.' },
  { icon: '📝', title: 'Use Memory Aids', desc: 'Cue cards, notes on your phone, or coloured stickers on the dashboard are brilliant tools. Coloured dots can remind you which way is left, where to look, and where key controls are.' },
  { icon: '🎥', title: 'Watch Videos & Use Maps', desc: 'Many driving instructors post tutorials on YouTube. Google Earth and Street View are fantastic for exploring test routes before you drive them in real life.' },
  { icon: '🚗', title: 'Consider an Automatic Car', desc: 'Automatic cars remove clutch control from the equation entirely, which can significantly reduce stress. Many neurodivergent drivers find automatics transformative.' },
]

const faqs = [
  { q: 'Can someone with ADHD learn to drive?', a: 'Yes, absolutely. Many people with ADHD pass their driving test and go on to be confident drivers. The key is working with an instructor who understands how ADHD affects learning, taking regular breaks, and using memory tools to reduce cognitive load during lessons.' },
  { q: 'Is an automatic car better for dyspraxic learners?', a: "Automatic cars are often recommended for people with dyspraxia as they remove the challenge of clutch control. However, if you pass in an automatic you cannot legally drive a manual, so many UK learners prefer to pass in a manual and switch to automatic afterwards." },
  { q: 'How many lessons will I need as a neurodivergent learner?', a: "This varies enormously from person to person. You may need more lessons than the average learner, and that's completely fine. What's more important is that you feel truly ready when you sit your test, rather than rushing the process." },
  { q: 'Should I tell my driving instructor about my diagnosis?', a: 'Yes — the more your instructor knows about how you learn and what challenges you face, the better they can support you. A good instructor will use this information to adapt their approach, not to write you off.' },
  { q: 'Do I need to declare a neurodivergent condition to the DVLA?', a: "Some medical conditions must be declared to the DVLA, but most neurodivergent conditions such as ADHD and dyspraxia do not need to be declared unless they significantly affect your ability to drive safely. It's always worth checking the latest DVLA guidance or speaking to your GP if you're unsure." },
]

const tags = ['ADHD', 'Dyspraxia', 'Neurodivergent', 'Learning to Drive', 'Driving Lessons', 'Automatic Cars', 'Driving Test Tips', 'Learner Driver', 'UK Driving', 'ADHD Tips', 'Dyspraxia Driving', 'Neurodiversity', 'Driving Instructor', 'Special Needs Driving', 'Autism', 'Mental Health', 'Driving School']

const s = {
  hero: { background: '#1a1512', color: '#f5f0e8', padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  heroBefore: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 30%, rgba(200,80,26,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(74,124,89,0.15) 0%, transparent 50%)', pointerEvents: 'none' },
  heroTag: { display: 'inline-block', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 20, padding: '5px 16px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 28 },
  h1: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 800, lineHeight: 1.12, maxWidth: 820, margin: '0 auto 24px', color: '#f5f0e8' },
  em: { fontStyle: 'italic', fontWeight: 300, color: '#d4905a' },
  heroSub: { fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto 36px' },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.4)' },
  content: { maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' },
  introBox: { background: '#e8f0ea', borderLeft: '4px solid #4a7c59', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: 48, fontSize: '1.05rem', color: '#2d4a36', lineHeight: 1.7 },
  h2: { fontFamily: 'Raleway, sans-serif', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.25, color: '#1a1512', margin: '56px 0 18px' },
  h3rust: { fontFamily: 'Raleway, sans-serif', fontSize: '1.2rem', fontWeight: 700, margin: '36px 0 12px', color: '#c8501a' },
  p: { marginBottom: 20, lineHeight: 1.75, fontWeight: 300 },
  tipGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, margin: '32px 0' },
  tipCard: { background: '#fff', border: '1px solid #ddd6c8', borderRadius: 14, padding: '22px 20px' },
  tipIcon: { fontSize: '1.8rem', marginBottom: 10, display: 'block' },
  tipTitle: { display: 'block', fontSize: '0.95rem', fontWeight: 500, marginBottom: 6, color: '#1a1512' },
  tipDesc: { fontSize: '0.875rem', color: '#8a8070', margin: 0, lineHeight: 1.6 },
  blockquote: { borderLeft: '3px solid #c8501a', margin: '40px 0', padding: '20px 28px', background: '#fdf8f4', borderRadius: '0 10px 10px 0' },
  bqP: { fontFamily: 'Raleway, sans-serif', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 300, color: '#1a1512', margin: '0 0 8px' },
  bqCite: { fontSize: '0.8rem', color: '#8a8070', fontStyle: 'normal', letterSpacing: '0.05em' },
  doDont: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '32px 0' },
  doBox: { background: '#e8f0ea', border: '1px solid #b0d4bb', borderRadius: 12, padding: 20 },
  dontBox: { background: '#fdf0eb', border: '1px solid #f0c4ac', borderRadius: 12, padding: 20 },
  doH4: { color: '#4a7c59', marginBottom: 12, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' },
  dontH4: { color: '#c8501a', marginBottom: 12, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' },
  li: { marginBottom: 8, fontSize: '0.9rem', lineHeight: 1.6 },
  faq: { background: '#1a1512', color: '#f5f0e8', padding: '64px 24px' },
  faqH2: { fontFamily: 'Raleway, sans-serif', color: '#f5f0e8', textAlign: 'center', marginTop: 0, marginBottom: 40, fontSize: '1.8rem', fontWeight: 700 },
  faqItem: { maxWidth: 760, margin: '0 auto 28px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 28 },
  faqQ: { fontFamily: 'Raleway, sans-serif', color: '#d4905a', marginTop: 0, marginBottom: 10, fontSize: '1.05rem', fontWeight: 600 },
  faqA: { color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', margin: 0, lineHeight: 1.7 },
  cta: { textAlign: 'center', background: 'linear-gradient(135deg, #c8501a, #a03d12)', color: 'white', padding: '64px 24px' },
  ctaH2: { fontFamily: 'Raleway, sans-serif', color: 'white', marginTop: 0, fontSize: '2rem', fontWeight: 700, marginBottom: 16 },
  ctaP: { color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 32px' },
  ctaBtn: { display: 'inline-block', background: 'white', color: '#c8501a', fontWeight: 500, fontSize: '1rem', padding: '16px 36px', borderRadius: 50, textDecoration: 'none' },
  tagsSection: { background: '#f5f0e8', padding: '40px 24px', borderTop: '1px solid #ddd6c8' },
  tagsLabel: { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a8070', marginBottom: 14 },
  tagsWrap: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  tag: { background: 'white', border: '1px solid #ddd6c8', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#8a8070' },
  back: { color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32, textDecoration: 'none' },
}

export default function BlogNeurodivergent() {
  return (
    <>
      <Helmet>
        <title>Learning to Drive with ADHD, Dyslexia or Autism | Mike Hinton Driving School Rotherham</title>
        <meta name="description" content="Practical advice for neurodivergent learner drivers — ADHD, dyslexia, autism, dyspraxia. How to find the right instructor and get the most from your lessons in Rotherham." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/learning-to-drive-neurodivergent" />
        <meta property="og:title" content="Learning to Drive with ADHD, Dyslexia or Autism" />
        <meta property="og:description" content="Practical tips for neurodivergent learner drivers — ADHD, dyslexia, autism and dyspraxia." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/learning-to-drive-neurodivergent" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.mikehintondrivingschool.co.uk/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learning to Drive with ADHD, Dyslexia or Autism" />
        <meta name="twitter:description" content="Practical advice for neurodivergent learner drivers — ADHD, dyslexia, autism, dyspraxia. How to find the right instructor and get the most from your lessons in Rotherham." />
        <script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"Learning to Drive with ADHD, Dyslexia or Autism","description":"Practical advice for neurodivergent learner drivers — ADHD, dyslexia, autism, dyspraxia. How to find the right instructor and get the most from your lessons in Rotherham.","url":"https://www.mikehintondrivingschool.co.uk/blog/learning-to-drive-neurodivergent","datePublished":"2026-02-01","dateModified":"2026-02-01","author":{"@type":"Person","name":"Mike Hinton","jobTitle":"DVSA Approved Driving Instructor","url":"https://www.mikehintondrivingschool.co.uk/about"},"publisher":{"@type":"Organization","name":"Mike Hinton Driving School","url":"https://www.mikehintondrivingschool.co.uk","logo":{"@type":"ImageObject","url":"https://www.mikehintondrivingschool.co.uk/images/og-image.jpg"}}}</script>
      </Helmet>
      {/* Hero */}
      <header style={s.hero}>
        <div style={s.heroBefore} aria-hidden />
        <div style={{ position: 'relative' }}>
          <Link to="/blog" style={{ ...s.back, color: 'rgba(255,255,255,0.6)' }}>← Back to Blog</Link>
          <div style={s.heroTag}>Learner Driver Advice</div>
          <h1 style={s.h1}>
            Learning to Drive with ADHD <span style={s.em}>or</span> Dyspraxia
          </h1>
          <p style={s.heroSub}>Everything neurodivergent learners need to know — from finding the right instructor to passing your test with confidence.</p>
          <p style={s.heroMeta}>By Mike Hinton Driving School · October 2025 · 6 min read</p>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div style={s.content}>

          <div style={s.introBox}>
            If you have ADHD, dyspraxia, autism, dyslexia or another neurodivergent condition, you might have been told that driving isn't for you — or that it'll be much harder than it is for everyone else. That simply isn't true. With the right support, the right instructor, and the right strategies, neurodivergent people pass their driving tests every single day. This guide is here to help you do the same.
          </div>

          <h2 style={s.h2}>Why Neurodivergent Learners Sometimes Struggle</h2>
          <p style={s.p}>Learning to drive involves juggling a huge number of tasks at once — steering, checking mirrors, signalling, managing the clutch, reading road signs, and processing what other drivers are doing. For neurodivergent learners, this kind of multi-tasking can be especially demanding. ADHD can make it difficult to sustain attention or filter out distractions. Dyspraxia can affect coordination, clutch control, and spatial awareness. But these challenges are manageable — and in some areas, neurodivergent learners actually have a natural edge.</p>

          <h2 style={s.h2}>What Neurodivergent People Are Often <em>Really Good</em> At</h2>
          <p style={s.p}>It's important not to focus only on the challenges. Many neurodivergent learners are excellent at breaking down and practising step-by-step sequences — a skill that comes in very handy for manoeuvres. Once a skill enters muscle memory, it can feel second nature. The key is finding the learning method that works for your brain, not the standard one-size-fits-all approach.</p>

          <h2 style={s.h2}>Top Tips for Neurodivergent Learner Drivers</h2>
          <div style={s.tipGrid} className="mobile-1col">
            {tips.map(tip => (
              <div key={tip.title} style={s.tipCard}>
                <span style={s.tipIcon}>{tip.icon}</span>
                <strong style={s.tipTitle}>{tip.title}</strong>
                <p style={s.tipDesc}>{tip.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={s.h2}>Manual vs Automatic: What You Need to Know</h2>
          <p style={s.p}>Automatic cars have been the standard in North America for decades, and they're often recommended for dyspraxic learners who struggle with clutch control. However, there's an important trade-off to consider: if you pass your test in an automatic, you won't be legally permitted to drive a manual car on UK roads.</p>
          <p style={s.p}>Because manual cars are still very common in the UK, most neurodivergent learners choose to pass in a manual, then switch to an automatic once they've got their licence. The good news is that clutch control, like many physical skills, tends to become easier with practice — even if it feels impossible at first.</p>

          <blockquote style={s.blockquote}>
            <p style={s.bqP}>"Don't assume you'll necessarily always struggle with clutch control because you're dyspraxic. Once it's in your muscle memory, you might be brilliant at it."</p>
            <cite style={s.bqCite}>— Maxine Roper, Author & Dyspraxic ADHD writer (British Psychological Society, 2025)</cite>
          </blockquote>

          <h2 style={s.h2}>Motorways: Scary or Surprisingly Manageable?</h2>
          <p style={s.p}>Many neurodivergent drivers are pleasantly surprised by motorways. Unlike town driving, motorways are predictable — lanes move in one direction, junctions are clearly signed, and there are no unexpected hazards like pedestrians stepping out or cyclists. Some neurodivergent drivers actually find motorway driving far more comfortable than navigating busy local roads.</p>

          <h2 style={s.h2}>Know What Affects Your Driving</h2>
          <p style={s.p}>This one is important and often overlooked. Alcohol and being hungover are obvious no-gos, but many common over-the-counter medications carry warnings about driving. If you take ADHD medication, it should generally improve your focus and driving ability — though in rare cases it can cause drowsiness when you first start taking it, so be mindful if you're newly medicated.</p>
          <p style={s.p}>It's also worth thinking about wider lifestyle factors. Sleep quality, stress levels, and even hormonal cycles can all affect concentration, coordination, and how your neurodivergent traits present on any given day. Getting to know your own patterns helps you plan lessons at times when you're at your best.</p>

          <h2 style={s.h2}>What to Avoid</h2>
          <div style={s.doDont}>
            <div style={s.doBox}>
              <h4 style={s.doH4}>✅ Do</h4>
              <ul>
                {['Tell your instructor about your condition early on', 'Ask for step-by-step breakdowns of manoeuvres', 'Use YouTube tutorials between lessons', 'Practice theory with interactive apps', 'Take breaks whenever you need to', 'Learn on roads you know'].map(item => (
                  <li key={item} style={s.li}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={s.dontBox}>
              <h4 style={s.dontH4}>🚫 Don't</h4>
              <ul>
                {['Read internet forums about driving — they can be discouraging', 'Compare your progress to neurotypical friends', "Rush your test if you don't feel ready", "Take lessons when you're tired or unwell", 'Assume your difficulties are permanent'].map(item => (
                  <li key={item} style={s.li}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 style={s.h2}>Choosing the Right Driving Instructor</h2>
          <p style={s.p}>Not all driving instructors are experienced with neurodivergent learners, and that's okay — but finding one who is makes an enormous difference. Look for instructors who explicitly mention working with ADHD or dyspraxic learners on their website. Ask them directly about their approach, how they handle breaks, and whether they're willing to adapt their teaching style to your needs.</p>
          <p style={s.p}>The relationship between a learner and their instructor is built on trust. A good instructor will celebrate your progress and adapt their methods — not just repeat the same explanation louder and slower until something clicks.</p>

          <h2 style={s.h2}>You Can Do This</h2>
          <p style={s.p}>Driving might take you a bit longer than it takes some of your friends. You might need more lessons. You might have setbacks. That's all completely normal — for neurodivergent <em>and</em> neurotypical learners alike. What matters is finding the right support, being patient with yourself, and not giving up.</p>
          <p style={s.p}>Thousands of neurodivergent people drive safely every single day. There's no reason you can't be one of them.</p>
        </div>

        {/* FAQ */}
        <section style={s.faq}>
          <h2 style={s.faqH2}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ ...s.faqItem, ...(i === faqs.length - 1 ? { borderBottom: 'none' } : {}) }}>
              <h3 style={s.faqQ}>{faq.q}</h3>
              <p style={s.faqA}>{faq.a}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={s.cta}>
          <h2 style={s.ctaH2}>Ready to Get Started?</h2>
          <p style={s.ctaP}>At Mike Hinton Driving School, we have experience working with neurodivergent learners. Get in touch to chat about how we can support you.</p>
          <Link to="/contact" style={s.ctaBtn}>Get in Touch</Link>
        </section>

        {/* Tags */}
        <section style={s.tagsSection}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <p style={s.tagsLabel}>Tags &amp; Categories</p>
            <div style={s.tagsWrap}>
              {tags.map(tag => <span key={tag} style={s.tag}>{tag}</span>)}
            </div>
          </div>
        </section>
      <div className="blog-content" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}><MailchimpSignup /></div>
      </main>
    </>
  )
}
