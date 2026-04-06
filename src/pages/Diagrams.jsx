import { Helmet } from 'react-helmet-async'

const diagrams = [
  { title: 'Pull push steering',            url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/72973e32-66de-4ed1-b21e-c0a0a1d2fceb~110/original?tenant=vbu-digital' },
  { title: 'Gears',                         url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/7b2e21ca-48e9-4c7b-b438-d652a6a12726~110/original?tenant=vbu-digital' },
  { title: 'Clutch',                        url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/3dd777a3-6fda-4902-821b-61f055ce88d7~110/original?tenant=vbu-digital' },
  { title: 'Biting range',                  url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/e43240ff-7d74-4feb-9ac6-127ac13c5095~110/original?tenant=vbu-digital' },
  { title: 'Mirrors',                       url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/999491b0-68fb-4cd0-b938-9dcbe8444c11~110/original?tenant=vbu-digital' },
  { title: 'Move off / Stop',               url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/90156055-bae2-423d-a6ac-353ddfcf0995~110/original?tenant=vbu-digital' },
  { title: 'Approaching corners to turn left',  url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/ead71229-1bf5-491f-a7f3-ae2b3d6afad4~110/original?tenant=vbu-digital' },
  { title: 'Approaching corners to turn right', url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/ead71229-1bf5-491f-a7f3-ae2b3d6afad4~110/original?tenant=vbu-digital' },
  { title: 'T junctions left',              url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/eb7b794d-bf12-42cf-aff0-d4cdbd2e1cb0~110/original?tenant=vbu-digital' },
  { title: 'T junctions right',             url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/75cf54bc-5588-4b14-a2e9-f42927b57a76~110/original?tenant=vbu-digital' },
  { title: 'Zones of vision',               url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/2ed7a7c6-b6f1-4d13-b165-bb6a7d6fe34f~110/original?tenant=vbu-digital' },
  { title: 'Crossroads 1',                  url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/fcf2dcd0-d93d-4094-8a28-34919ace0d9e~110/original?tenant=vbu-digital' },
  { title: 'Crossroads 2',                  url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/bbd09aac-5e04-4226-862d-6390e2974bea~110/original?tenant=vbu-digital' },
  { title: 'Crossroads 3',                  url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/2e39afd4-2302-45d2-8453-843a143789dd~110/original?tenant=vbu-digital' },
  { title: 'Emergency stop',                url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/4d81b441-80e5-4d03-a153-a17724e64f30~110/original?tenant=vbu-digital' },
  { title: 'Skidding',                      url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/9524b71a-dba7-49a3-9edf-9d94236e8f6f~110/original?tenant=vbu-digital' },
  { title: 'Pedestrian crossings 1',        url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/3018b575-4568-44b0-ac6f-288af799ef88~110/original?tenant=vbu-digital' },
  { title: 'Pedestrian crossings 2',        url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/9cad605e-3872-4b4b-bde0-1eb323dff686~110/original?tenant=vbu-digital' },
  { title: 'Signals',                       url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/893ea15b-1f72-4ada-bba1-83ad2903a32e~110/original?tenant=vbu-digital' },
  { title: 'Anticipation',                  url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/7c40d379-d578-425d-a061-a243b3e63330~110/original?tenant=vbu-digital' },
  { title: 'Traffic signs',                 url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/06cc1d42-bbb4-4c21-89b9-8c2355a3f065~110/original?tenant=vbu-digital' },
  { title: 'Meeting other traffic',         url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/404fc20f-33eb-431f-9afe-aeed9ef1dc17~110/original?tenant=vbu-digital' },
  { title: 'Allow adequate clearance',      url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/0915068e-6f79-4192-824a-1e6b9bd1a7c0d~110/original?tenant=vbu-digital' },
  { title: 'Overtaking',                    url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/291b52ce-07fe-4308-a862-f28fc6f2be89~110/original?tenant=vbu-digital' },
  { title: 'Turn in the road',              url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/4c2e195c-e8a7-4392-b8a9-cfdf1d5fc152~110/original?tenant=vbu-digital' },
  { title: 'Reversing to the left',         url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/574f131c-a5d4-4611-a262-ea9f0de6f34c~110/original?tenant=vbu-digital' },
  { title: 'Reversing to the right',        url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/5d3da5fc-4424-41d4-bddc-315b97ba4ee4~110/original?tenant=vbu-digital' },
  { title: 'Parallel park',                 url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/11eda50a-69df-4eb9-a770-dd287c4a1bb9~110/original?tenant=vbu-digital' },
  { title: 'Parking in a car park',         url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/7f9e8021-f1a5-4551-9bf2-c9a230629e3e~110/original?tenant=vbu-digital' },
  { title: 'Roundabouts',                   url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/f5693b49-e662-4fd7-acd2-0a525193b320~110/original?tenant=vbu-digital' },
  { title: 'Mini-roundabouts',              url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/5d9348bb-919c-41cf-b50e-41359240438a~110/original?tenant=vbu-digital' },
  { title: 'Night driving',                 url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/190d0b92-2e86-47cf-b436-4de34b62a6c9~110/original?tenant=vbu-digital' },
  { title: 'Dual carriageways 1',           url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/2e8b7da2-9854-47db-b335-fc244202513a~110/original?tenant=vbu-digital' },
  { title: 'Dual carriageways 2',           url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/20a9f0f3-4bc8-4926-a051-1cc1cf16ea15~110/original?tenant=vbu-digital' },
  { title: 'Motorway driving',              url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/f9d09560-ba55-4775-827c-f0ed85d3c4b3~110/original?tenant=vbu-digital' },
  { title: 'Vehicle control',               url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/914aa7cb-27c6-4618-a59d-59985a8c5151~110/original?tenant=vbu-digital' },
  { title: 'Cornering',                     url: 'http://c-cluster-110.uploads.documents.cimpress.io/v1/uploads/d0401eef-c112-40ce-b095-933674edd949~110/original?tenant=vbu-digital' },
]

export default function Diagrams() {
  return (
    <>
      <Helmet>
        <title>Driving Diagrams | Mike Hinton Driving School Rotherham</title>
        <meta name="description" content="Visual driving diagrams to help learner drivers understand key skills including junctions, roundabouts, parking and more. From Mike Hinton Driving School, Rotherham." />
        <link rel="canonical" href="https://www.mikehintondrivingschool.co.uk/diagrams" />
        <meta property="og:title" content="Driving Diagrams | Mike Hinton Driving School" />
        <meta property="og:description" content="Visual diagrams covering junctions, roundabouts, parking and key driving skills." />
        <meta property="og:url" content="https://www.mikehintondrivingschool.co.uk/diagrams" />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-primary" style={{ marginBottom: 14 }}>Resources</span>
          <h1>Driving Diagrams</h1>
          <p>Click on a diagram below to help develop your driving skills and assist your learning. Your instructor may use a different diagram but the lesson is still the same.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {diagrams.map(({ title, url }) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  background: 'var(--pale-blue)',
                  border: '1.5px solid var(--light-blue)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--navy)',
                  textDecoration: 'none',
                  transition: 'var(--transition)',
                  cursor: 'pointer',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = 'var(--primary)'
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.borderColor = 'var(--primary)'
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'var(--pale-blue)'
                  e.currentTarget.style.color = 'var(--navy)'
                  e.currentTarget.style.borderColor = 'var(--light-blue)'
                }}
              >
                <span>{title}</span>
                <span style={{ fontSize: '1rem', flexShrink: 0, marginLeft: 8 }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
