import { Link } from 'react-router-dom'

export default function DrivingSkills() {
  const skills = [
    {
      icon: '🚗',
      title: '5 Key Driving Skills',
      desc: 'To be a safe driver it is vital that you master the 5 key skills of driving so that you are capable of navigating any road system. These skills are: Car Control & Coordination, Effective Observation, Awareness & Anticipation, Planning & Judgment, Self-Evaluation.',
    },
    {
      icon: '⚙️',
      title: 'Clutch Control',
      desc: 'If you want to smoothly drive a car with a manual gearbox, it is essential to have good clutch control. In order to develop the skill of operating the clutch pedal smoothly, you need to understand what the clutch is, how it works and how to use it correctly when driving.',
    },
    {
      icon: '🛡️',
      title: 'Defensive Driving',
      desc: 'Defensive driving is a form of training or practice for drivers to drive in such a way that they consciously reduce the dangers associated with driving. They do this by anticipating dangerous scenarios, which could range from bad weather to other motorists driving badly.',
    },
    {
      icon: '🌧️',
      title: 'Driving in Wet Conditions',
      desc: 'Heavy rain can quickly reduce your visibility and create slippery and dangerous road conditions. Taking simple precautions and knowing what to do if you get caught in an extreme weather storm will help keep you safe.',
    },
    {
      icon: '❄️',
      title: 'Driving in Snow',
      desc: "Even if you can drive well, driving in snow can be very dangerous. Don't tempt fate: if you don't have somewhere you have to be, watch the snow from indoors. If you do venture out, then visit our guide to driving in the snow.",
    },
    {
      icon: '☀️',
      title: 'Driving in Bright Sun',
      desc: 'Bright sunlight is underestimated as a dangerous driving condition. It is a contributing factor for many accidents. The glare and dazzling from the sun is a serious hazard. Visit our top tips for driving safely in bright sunlight.',
    },
    {
      icon: '🚦',
      title: 'Speed Awareness',
      desc: 'Learning to drive requires more than knowing the theory of driving and an acceptable standard of practice skills. You need to be aware of the driving environment around you and how your vehicle interacts within it. Fundamental to this is the ability to control the speed of the car.',
    },
    {
      icon: '🌙',
      title: 'Driving in the Dark',
      desc: 'Driving in the dark presents more risk. Many accidents occur in the dark so knowing how to drive in the dark will ensure your safety and the safety of those travelling with you. Check out some useful tips below.',
    },
    {
      icon: '🧊',
      title: 'Driving in Icy Conditions',
      desc: 'Ice is particularly dangerous, especially Black Ice, and you can easily get caught out. You might wonder how to keep on driving safely and minimise the risk of an accident. If you have never driven in icy conditions before, you might find these tips useful.',
    },
    {
      icon: '💨',
      title: 'Driving in High Wind',
      desc: 'Driving in strong wind is extremely hazardous and presents situations which you need to deal with quickly and be properly prepared for. If you do decide to drive in high wind, visit our expert top tips on how to stay safe.',
    },
    {
      icon: '🚧',
      title: 'Driving in Heavy Traffic',
      desc: 'Few things are more frustrating than getting stuck in a massive traffic jam, or trying to get somewhere when the traffic is really busy. Whether caused by a road accident, road works, or general rush hour traffic, driving in heavy traffic is a difficult skill to master and requires all your concentration. Here are 10 tips for dealing with heavy traffic.',
      to: '/driving-skills/heavy-traffic',
    },
  ]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Resources</span>
          <h1>Driving Skills</h1>
          <p>Below you will find key information and links to additional driving skills that will enhance your driving ability.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }} className="mobile-1col">
            {skills.map(skill => (
              <div key={skill.title} className="card" style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{skill.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: 10, color: 'var(--navy)' }}>{skill.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--grey-700)', lineHeight: 1.7, flex: 1 }}>{skill.desc}</p>
                {skill.to && (
                  <div style={{ marginTop: 14 }}>
                    <Link to={skill.to} className="btn btn-primary" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
                      Read More →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .driving-skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
