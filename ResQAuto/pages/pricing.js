import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingPlans from '../components/PricingPlans'

export default function Pricing() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold">Pricing Plans</h1>
        <PricingPlans />
      </div>
      <Footer />
    </div>
  )
}
