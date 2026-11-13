import { MotionConfig } from 'framer-motion'
import { SpecialtyProvider } from './context/SpecialtyContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import MobileStickyBar from './components/layout/MobileStickyBar'
import BookingModal from './components/layout/BookingModal'
import Hero from './components/sections/Hero'
import EmergencyStrip from './components/sections/EmergencyStrip'
import TrustStrip from './components/sections/TrustStrip'
import Specialities from './components/sections/Specialities'
import DoctorProfile from './components/sections/DoctorProfile'
import WhyUs from './components/sections/WhyUs'
import Approach from './components/sections/Approach'
import Faqs from './components/sections/Faqs'
import Booking from './components/sections/Booking'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SpecialtyProvider>
        <div id="top" />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {/* bottom padding on mobile so nothing hides behind the sticky bar */}
        <div className="pb-[calc(56px+env(safe-area-inset-bottom))] md:pb-0">
          <main id="main" tabIndex={-1} className="outline-none">
            <Hero />
            <EmergencyStrip />
            <TrustStrip />
            <Specialities />
            <DoctorProfile />
            <WhyUs />
            <Approach />
            <Faqs />
            <Booking />
            <Contact />
          </main>
          <Footer />
        </div>
        <MobileStickyBar />
        <BookingModal />
      </SpecialtyProvider>
    </MotionConfig>
  )
}
