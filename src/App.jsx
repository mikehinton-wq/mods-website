import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import WhatWeOffer from './pages/WhatWeOffer'
import Pricing from './pages/Pricing'
import SpecialistLearners from './pages/SpecialistLearners'
import TestRoutes from './pages/TestRoutes'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import BlogRotherham from './pages/BlogRotherham'
import BlogShowMe from './pages/BlogShowMe'
import BlogNervousDriver from './pages/BlogNervousDriver'
import Diagrams from './pages/Diagrams'
import FAQs from './pages/FAQs'
import DrivingSyllabus from './pages/DrivingSyllabus'
import Contact from './pages/Contact'
import Terms from './pages/Terms'

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
          <Route path="/what-we-offer"             element={<WhatWeOffer />} />
          <Route path="/pricing"                   element={<Pricing />} />
          <Route path="/specialist-learners"       element={<SpecialistLearners />} />
          <Route path="/test-routes"               element={<TestRoutes />} />
          <Route path="/testimonials"              element={<Testimonials />} />
          <Route path="/blog"                      element={<Blog />} />
          <Route path="/blog/rotherham-test-centre"element={<BlogRotherham />} />
          <Route path="/blog/show-me-tell-me-2026" element={<BlogShowMe />} />
          <Route path="/blog/3-things-nervous-drivers-do-on-test" element={<BlogNervousDriver />} />
          <Route path="/faqs"                      element={<FAQs />} />
          <Route path="/driving-syllabus"          element={<DrivingSyllabus />} />
          <Route path="/contact"                   element={<Contact />} />
          <Route path="/terms"                     element={<Terms />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
