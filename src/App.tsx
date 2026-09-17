import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import HodSection from './components/HodSection'
import FocusAreas from './components/FocusAreas'
import StatisticsSection from './components/StatisticsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <HodSection />
      <FocusAreas />
      <StatisticsSection />
      <Footer />
    </div>
  )
}
