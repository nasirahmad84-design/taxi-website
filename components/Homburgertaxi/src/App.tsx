import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PricesSection from './components/PricesSection'
import ServicesSection from './components/ServicesSection'
import USPSection from './components/USPSection'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PricesSection />
      <ServicesSection />
      <USPSection />
      <ReviewsSection />
      <Footer />
    </div>
  )
}