import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const whereToBuy = [
  { icon: '🏪', title: 'Trader or Dealer', desc: 'Look for an established firm with a good reputation. A trade association sign (like the Retail Motor Industry Federation) is a good sign. You have the strongest legal protection buying this way.', risk: 'Low Risk' },
  { icon: '🔨', title: 'Auction', desc: "Riskier — you probably won't have the same legal protection as buying from a trader. Read the terms and conditions carefully before making a bid.", risk: 'Higher Risk' },
  { icon: '📱', title: 'eBay / Facebook Marketplace', desc: "Very common but be careful. PayPal purchase protection doesn't apply to cars, and neither does eBay's buyer protection. Research current scams before buying.", risk: 'Variable Risk' },
]

const visualChecks = [
  'Bodywork and chassis for dents and scratches',
  'Wheels and tyres for tread depth and scuffs',
  'Oil level',
  'Interior and electrics',
  'Windows for cracks and chips',
]

const paymentOptions = [
  { icon: '💳', title: 'Finance', pros: 'Spread the cost over time', cons: 'More expensive overall — check you can afford the monthly payments', colour: '#1EABC7' },
  { icon: '💵', title: 'Cash', pros: 'Can get a discount, simple transaction', cons: "Less protection if something goes wrong", colour: '#4a7c59' },
  { icon: '🏦', title: 'Credit Card', pros: 'Protection for purchases between £100–£30,000', cons: 'Interest rates often higher than finance agreements', colour: '#c8501a' },
]

const noRightsIf = [
  'You were told about the fault when you bought the car',
  'You inspected the car and should have spotted the problem (e.g. a dent)',
  'You caused the fault',
  'The fault is normal wear and tear for how much the car has been used',
]

const docChecklist = [
  'V5 logbook — both parties sign and notify DVLA of change of keeper',
  'MOT certificate — check registration and chassis number match the car',
  'All manuals and the servicing booklet',
  'Signed receipt specifying price, date, make, model, engine size and registration',
]

const tags = ['First Car', 'Buying a Car', 'Used Car', 'Car Buying Tips', 'New Drivers', 'Finance', 'MOT', 'DVLA', 'Learner Driver', 'Car Insurance']

const s = {
  hero: { background: '#1a1512', color: '#f5f0e8', padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  heroBg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 65% 25%, rgba(30,171,199,0.15) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(200,80,26,0.1) 0%, transparent 50%)', pointerEvents: 'none' },
  heroTag: { display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '5px 16px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 28 },
  h1: { fontFamily: 'Raleway, sans-serif', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 800, lineHeight: 1.12, maxWidth: 820, margin: '0 auto 16px', color: '#f5f0e8' },
  heroAccent: { color: '#1EABC7' },
  heroSub: { fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.7 },
  heroMeta: { fontSize: 13, color: 'rgba(255,255,255,0.35)' },
  back: { color: 'rgba(255,255,255,0.55)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32, textDecoration: 'none' },
  content: { maxWidth: 760, margin: '0 auto', padding: '64px 24px 80px' },
  introBox: { background: '#e8f4f8', borderLeft: '4px solid #1EABC7', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: 48, fontSize: '1.05rem', color: '#0a2d3d', lineHeight: 1.75, fontWeight: 400 },
  h2: { fontFamily: 'Raleway, sans-serif', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1.25, color: '#0C3C60', margin: '56px 0 18px' },
  p: { marginBottom: 20, lineHeight: 1.8, fontWeight: 300, color: '#2a2a2a' },
  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, margin: '28px 0' },
  whereCard: { background: '#fff', border: '1px solid #dde8f0', borderRadius: 14, padding: '22px 18px', borderTop: '3px solid #1EABC7', display: 'flex', flexDirection: 'column' },
  whereIcon: { fontSize: '1.8rem', marginBottom: 10 },
  whereTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0C3C60', marginBottom: 8 },
  whereDesc: { fontSize: '0.84rem', color: '#555', lineHeight: 1.65, flex: 1, marginBottom: 12 },
  riskBadge: { display: 'inline-block', background: '#e8f4f8', color: '#0C3C60', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '0.75rem', padding: '3px 10px', borderRadius: 20 },
  warningBox: { background: '#fff8f0', border: '2px solid #f0c060', borderRadius: 14, padding: '20px 24px', margin: '28px 0', display: 'flex', gap: 16, alignItems: 'flex-start' },
  warningIcon: { fontSize: '1.8rem', flexShrink: 0 },
  warningTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, color: '#c8501a', fontSize: '0.95rem', marginBottom: 6 },
  warningText: { fontSize: '0.88rem', color: '#444', lineHeight: 1.65, margin: 0 },
  checklistBox: { background: '#f0f8fc', border: '1px solid #c0dff0', borderRadius: 14, padding: '24px 28px', margin: '24px 0' },
  checkItem: { display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10, fontSize: '0.9rem', color: '#2a2a2a', lineHeight: 1.6 },
  checkTick: { color: '#1EABC7', fontWeight: 700, flexShrink: 0, marginTop: 2 },
  payGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, margin: '28px 0' },
  payCard: { background: '#fff', border: '1px solid #dde8f0', borderRadius: 14, padding: '22px 18px', display: 'flex', flexDirection: 'column' },
  payIcon: { fontSize: '1.8rem', marginBottom: 8 },
  payTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 10 },
  payPros: { fontSize: '0.82rem', color: '#4a7c59', fontWeight: 600, marginBottom: 6, display: 'flex', alignItems: 'flex-start', gap: 6 },
  payCons: { fontSize: '0.82rem', color: '#c8501a', fontWeight: 500, display: 'flex', alignItems: 'flex-start', gap: 6 },
  darkBox: { background: '#0C3C60', borderRadius: 14, padding: '24px 28px', margin: '28px 0' },
  darkLabel: { fontFamily: 'Raleway, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1EABC7', marginBottom: 10 },
  darkText: { fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, margin: 0 },
  noRightsBox: { background: '#fff0f0', border: '1.5px solid #f8c0c0', borderRadius: 14, padding: '24px 28px', margin: '24px 0' },
  noRightsTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, color: '#c0392b', fontSize: '0.95rem', marginBottom: 14 },
  noRightsItem: { display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10, fontSize: '0.88rem', color: '#444', lineHeight: 1.6 },
  cross: { color: '#c0392b', fontWeight: 700, flexShrink: 0, marginTop: 2 },
  docBox: { background: '#f0fdf4', border: '1.5px solid #d1fae5', borderRadius: 14, padding: '24px 28px', margin: '24px 0' },
  docTitle: { fontFamily: 'Raleway, sans-serif', fontWeight: 700, color: '#1a3a2a', fontSize: '0.95rem', marginBottom: 14 },
  cta: { textAlign: 'center', background: 'linear-gradient(135deg, #0C3C60, #1a5a8a)', color: 'white', padding: '64px 24px' },
  ctaH2: { fontFamily: 'Raleway, sans-serif', color: 'white', marginTop: 0, fontSize: '2rem', fontWeight: 700, marginBottom: 16 },
  ctaP: { color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 },
  ctaBtns: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' },
  ctaBtn: { display: 'inline-block', background: '#1EABC7', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: 50, textDecoration: 'none' },
  ctaBtnOutline: { display: 'inline-block', background: 'transparent', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: 50, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' },
  tagsSection: { background: '#f5f8fa', padding: '40px 24px', borderTop: '1px solid #dde8f0' },
  tagsLabel: { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a8070', marginBottom: 14 },
  tagsWrap: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  tag: { background: 'white', border: '1px solid #dde8f0', borderRadius: 20, padding: '6px 14px', fontSize: 13, color: '#8a8070' },
}

export default function BlogBuyFirstCar() {
  return (
    <>
      <Helmet>
        <title>How to Buy Your First Car After Passing Your Test | Mike Hinton Driving School</title>
        <meta name="description" content="Just passed your driving test? Here's everything you need to know about buying your first car — budget, what to look for, where to buy, and how to avoid getting ripped off." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/blog/how-to-buy-your-first-car" />
        <meta property="og:title" content="How to Buy Your First Car After Passing Your Test" />
        <meta property="og:description" content="A complete guide to buying your first car — budget, insurance, what to check and where to buy." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/blog/how-to-buy-your-first-car" />
        <meta property="og:type" content="article" />
      </Helmet>
      <header style={s.hero}>
        <div style={s.heroBg} aria-hidden />
        <div style={{ position: 'relative' }}>
          <Link to="/blog" style={s.back}>← Back to Blog</Link>
          <div style={s.heroTag}>New Drivers · Car Buying</div>
          <h1 style={s.h1}>
            How to Choose &amp; Buy<br />
            <span style={s.heroAccent}>Your First Car</span>
          </h1>
          <p style={s.heroSub}>One of the most common conversations I have with students. Here's a complete guide so you're fully informed before you spend a penny.</p>
          <p style={s.heroMeta}>By Mike Hinton, ADI · Mike Hinton Driving School</p>
        </div>
      </header>

      <main>
        <div style={s.content}>

          <div style={s.introBox}>
            One of the most common conversations I have with students is about buying a car. It's a big decision — especially your first one. This guide walks you through everything you need to know, from where to look to what to check, so you buy with confidence and avoid the common pitfalls.
          </div>

          {/* Where to buy */}
          <h2 style={s.h2}>Where to Start Looking</h2>
          <p style={s.p}>You don't need to trawl through classified ads any more. There are several ways to buy a used car — each with its own advantages and risks.</p>
          <div style={s.cardGrid} className="mobile-1col">
            {whereToBuy.map(w => (
              <div key={w.title} style={s.whereCard}>
                <div style={s.whereIcon}>{w.icon}</div>
                <div style={s.whereTitle}>{w.title}</div>
                <p style={s.whereDesc}>{w.desc}</p>
                <span style={s.riskBadge}>{w.risk}</span>
              </div>
            ))}
          </div>

          {/* Price warning */}
          <h2 style={s.h2}>Consider the Price Carefully</h2>
          <div style={s.warningBox}>
            <div style={s.warningIcon}>⚠️</div>
            <div>
              <div style={s.warningTitle}>If it sounds too good to be true, it likely is</div>
              <p style={s.warningText}>If the price is below what similar models are generally going for, it could be a sign that it's a scam or the car has an underlying issue. Always compare prices for the same make, model, year and mileage before committing.</p>
            </div>
          </div>

          {/* Online checks */}
          <h2 style={s.h2}>You've Found the Car — Now What?</h2>
          <p style={s.p}>Before you go anywhere near the car in person, do your online checks. This takes minutes and can save you thousands.</p>
          <div style={s.darkBox}>
            <div style={s.darkLabel}>🔍 Online Checks to Do First</div>
            <p style={s.darkText}>
              Use the <strong style={{ color: '#1EABC7' }}>DVLA's free vehicle information checker</strong> to confirm everything the seller tells you matches the records — registration numbers, MOT test numbers, mileage, make and model.<br /><br />
              Also check the <strong style={{ color: '#1EABC7' }}>free government MOT history service</strong> to confirm the car has a valid, continuous MOT record. Ask the seller about any gaps.
            </p>
          </div>

          {/* Visual inspection */}
          <h2 style={s.h2}>Check the Car Over Yourself</h2>
          <p style={s.p}>Once you're ready to view in person, inspect the car carefully before anything else.</p>
          <div style={s.checklistBox}>
            {visualChecks.map((item, i) => (
              <div key={i} style={{ ...s.checkItem, ...(i === visualChecks.length - 1 ? { marginBottom: 0 } : {}) }}>
                <span style={s.checkTick}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Test drive */}
          <h2 style={s.h2}>Take the Car for a Test Drive</h2>
          <div style={s.warningBox}>
            <div style={s.warningIcon}>🚗</div>
            <div>
              <div style={s.warningTitle}>Never skip the test drive</div>
              <p style={s.warningText}>Is it a bumpy ride? Does the clutch slip? Does the car pull in one direction? These are things you'll only discover by driving it. A short test drive could save you from a very expensive mistake.</p>
            </div>
          </div>

          {/* Negotiate */}
          <h2 style={s.h2}>Negotiate the Price</h2>
          <p style={s.p}>Haggling isn't just for Sunday markets — when buying from a dealer, it's virtually expected. Start low and let the seller work the price up. Only pay what you can afford.</p>
          <div style={s.darkBox}>
            <div style={s.darkLabel}>💡 Negotiation Tips</div>
            <p style={s.darkText}>
              Look for things that could throw up costs in the near future — a short MOT, worn tyres, missing service history — and use them as bargaining tools. Paying in cash? Ask if there's a discount available.
            </p>
          </div>

          {/* Payment */}
          <h2 style={s.h2}>How Will You Pay?</h2>
          <div style={s.payGrid} className="mobile-1col">
            {paymentOptions.map(opt => (
              <div key={opt.title} style={{ ...s.payCard, borderTop: `3px solid ${opt.colour}` }}>
                <div style={s.payIcon}>{opt.icon}</div>
                <div style={{ ...s.payTitle, color: opt.colour }}>{opt.title}</div>
                <div style={s.payPros}><span>✓</span><span>{opt.pros}</span></div>
                <div style={s.payCons}><span>✗</span><span>{opt.cons}</span></div>
              </div>
            ))}
          </div>

          {/* Docs */}
          <h2 style={s.h2}>What Documents Should You Receive?</h2>
          <div style={s.docBox}>
            <div style={s.docTitle}>✅ Documentation Checklist</div>
            {docChecklist.map((item, i) => (
              <div key={i} style={{ ...s.checkItem, ...(i === docChecklist.length - 1 ? { marginBottom: 0 } : {}) }}>
                <span style={s.checkTick}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Other things */}
          <h2 style={s.h2}>Other Things to Remember</h2>
          <div style={s.warningBox}>
            <div style={s.warningIcon}>📋</div>
            <div>
              <div style={s.warningTitle}>Tax and insurance before you drive away</div>
              <p style={s.warningText}>Check how much road tax you'll need to pay and whether you can afford the insurance on your chosen car. You must tax your car before driving it, and you need insurance before you even take ownership — even if you're not driving it yet.</p>
            </div>
          </div>

          {/* Rights */}
          <h2 style={s.h2}>What Are Your Rights If Things Go Wrong?</h2>
          <p style={s.p}>If there's a problem with your used car after you buy it, you have legal rights. You may be entitled to a repair, the cost of a repair, or some or all of your money back — if the vehicle is damaged, doesn't work, or doesn't match the advert.</p>
          <p style={s.p}><strong>However, you won't be entitled to anything if:</strong></p>
          <div style={s.noRightsBox}>
            <div style={s.noRightsTitle}>🚫 No rights in these situations</div>
            {noRightsIf.map((item, i) => (
              <div key={i} style={{ ...s.noRightsItem, ...(i === noRightsIf.length - 1 ? { marginBottom: 0 } : {}) }}>
                <span style={s.cross}>✗</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <section style={s.cta}>
          <h2 style={s.ctaH2}>Ready to Get on the Road?</h2>
          <p style={s.ctaP}>Get in touch with Mike to book your driving lessons. The sooner you pass, the sooner you can enjoy that first car.</p>
          <div style={s.ctaBtns}>
            <a href="tel:07915999994" style={s.ctaBtn}>📞 07915 999994</a>
            <a href="https://wa.me/447915999994" target="_blank" rel="noreferrer" style={s.ctaBtnOutline}>💬 WhatsApp</a>
            <Link to="/contact" style={s.ctaBtnOutline}>Contact Form</Link>
          </div>
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
      </main>
    </>
  )
}
