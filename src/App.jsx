import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import SpecialistLearners from './pages/SpecialistLearners'
import TestRoutes from './pages/TestRoutes'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import BlogRotherham from './pages/BlogRotherham'
import BlogShowMe from './pages/BlogShowMe'
import BlogNervousDriver from './pages/BlogNervousDriver'
import BlogNeurodivergent from './pages/BlogNeurodivergent'
import BlogTestAnxiety from './pages/BlogTestAnxiety'
import Diagrams from './pages/Diagrams'
import DrivingSkills from './pages/DrivingSkills'
import DrivingSyllabus2 from './pages/DrivingSyllabus2'
import TheDrivingTest from './pages/TheDrivingTest'
import ShowMeTellMe from './pages/ShowMeTellMe'
import BlogBuyFirstCar from './pages/BlogBuyFirstCar'
import BlogFailureToPrepare from './pages/BlogFailureToPrepare'
import BlogLearningPartnership from './pages/BlogLearningPartnership'
import BlogChooseInstructor from './pages/BlogChooseInstructor'
import BlogConsistency from './pages/BlogConsistency'
import BlogBestSelf from './pages/BlogBestSelf'
import FAQs from './pages/FAQs'
import DrivingSyllabus from './pages/DrivingSyllabus'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import HowTestIsMarked from './pages/HowTestIsMarked'
import DrivingHeavyTraffic from './pages/DrivingHeavyTraffic'
import DrivingFiveKeySkills from './pages/DrivingFiveKeySkills'
import DrivingClutchControl from './pages/DrivingClutchControl'
import DrivingDefensive from './pages/DrivingDefensive'
import DrivingSpeedAwareness from './pages/DrivingSpeedAwareness'
import DrivingWetConditions from './pages/DrivingWetConditions'
import DrivingInTheDark from './pages/DrivingInTheDark'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                          element={<Home />} />
          <Route path="/about"                     element={<About />} />
          <Route path="/pricing"                   element={<Pricing />} />
          <Route path="/specialist-learners"       element={<SpecialistLearners />} />
          <Route path="/test-routes"               element={<TestRoutes />} />
          <Route path="/testimonials"              element={<Testimonials />} />
          <Route path="/blog"                      element={<Blog />} />
          <Route path="/blog/rotherham-test-centre"element={<BlogRotherham />} />
          <Route path="/blog/show-me-tell-me-2026" element={<BlogShowMe />} />
          <Route path="/blog/3-things-nervous-drivers-do-on-test" element={<BlogNervousDriver />} />
          <Route path="/blog/learning-to-drive-neurodivergent" element={<BlogNeurodivergent />} />
          <Route path="/blog/driving-test-anxiety-causes-failures" element={<BlogTestAnxiety />} />
          <Route path="/diagrams" element={<Diagrams />} />
          <Route path="/driving-skills" element={<DrivingSkills />} />
          <Route path="/driving-syllabus-2" element={<DrivingSyllabus2 />} />
          <Route path="/the-driving-test" element={<TheDrivingTest />} />
          <Route path="/show-me-tell-me" element={<ShowMeTellMe />} />
          <Route path="/blog/how-to-buy-your-first-car" element={<BlogBuyFirstCar />} />
          <Route path="/blog/failure-to-prepare" element={<BlogFailureToPrepare />} />
          <Route path="/blog/learning-partnership" element={<BlogLearningPartnership />} />
          <Route path="/blog/how-to-choose-a-driving-instructor" element={<BlogChooseInstructor />} />
          <Route path="/blog/consistency-beats-intensity" element={<BlogConsistency />} />
          <Route path="/blog/when-you-are-your-best-self" element={<BlogBestSelf />} />
          <Route path="/faqs"                      element={<FAQs />} />
          <Route path="/driving-syllabus"          element={<DrivingSyllabus />} />
          <Route path="/contact"                   element={<Contact />} />
          <Route path="/terms"                     element={<Terms />} />
          <Route path="/how-test-is-marked"        element={<HowTestIsMarked />} />
          <Route path="/driving-skills/heavy-traffic" element={<DrivingHeavyTraffic />} />
          <Route path="/driving-skills/5-key-skills" element={<DrivingFiveKeySkills />} />
          <Route path="/driving-skills/clutch-control" element={<DrivingClutchControl />} />
          <Route path="/driving-skills/defensive-driving" element={<DrivingDefensive />} />
          <Route path="/driving-skills/speed-awareness" element={<DrivingSpeedAwareness />} />
          <Route path="/driving-skills/wet-conditions" element={<DrivingWetConditions />} />
          <Route path="/driving-skills/driving-in-the-dark" element={<DrivingInTheDark />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
