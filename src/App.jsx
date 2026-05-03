import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Trust from './components/Trust'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import BookingPage from './components/BookingPage'
import { fetchDoctorDetails } from './api/mockApi'

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [isLoadingDoctor, setIsLoadingDoctor] = useState(false)

  const handleBookNow = async (doctorName) => {
    setIsLoadingDoctor(true)
    try {
      const doctorDetails = await fetchDoctorDetails(doctorName)
      setSelectedDoctor(doctorDetails)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error("Failed to fetch doctor details", error)
      alert("Failed to load doctor details. Please try again.")
    } finally {
      setIsLoadingDoctor(false)
    }
  }

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      <Header />
      
      {isLoadingDoctor ? (
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : selectedDoctor ? (
        <BookingPage doctor={selectedDoctor} onBack={() => setSelectedDoctor(null)} />
      ) : (
        <main className="pt-20">
          <Hero />
          <Stats />
          <Services />
          <Trust />
          <Testimonials />
          <Location />
        </main>
      )}

      <Footer />
      <Chatbot onBookNow={handleBookNow} />
    </div>
  )
}

export default App
