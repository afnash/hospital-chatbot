import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Trust from './components/Trust'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <Hero />
        <Stats />
        <Services />
        <Trust />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
