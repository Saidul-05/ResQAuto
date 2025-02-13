import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Admin() {
  const [features, setFeatures] = useState({
    realTimeMap: true,
    testimonials: true,
    pricing: true,
    emergencySupport: true,
  })

  const toggleFeature = (feature) => {
    setFeatures({
      ...features,
      [feature]: !features[feature],
    })
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <div className="mt-6">
          <div>
            <span className="mr-4">Real-Time Map: {features.realTimeMap ? 'Enabled' : 'Disabled'}</span>
            <button onClick={() => toggleFeature('realTimeMap')} className="bg-blue-500 text-white px-4 py-2 rounded">
              Toggle
            </button>
          </div>
          <div className="mt-4">
            <span className="mr-4">Testimonials: {features.testimonials ? 'Enabled' : 'Disabled'}</span>
            <button onClick={() => toggleFeature('testimonials')} className="bg-blue-500 text-white px-4 py-2 rounded">
              Toggle
            </button>
          </div>
          <div className="mt-4">
            <span className="mr-4">Pricing: {features.pricing ? 'Enabled' : 'Disabled'}</span>
            <button onClick={() => toggleFeature('pricing')} className="bg-blue-500 text-white px-4 py-2 rounded">
              Toggle
            </button>
          </div>
          <div className="mt-4">
            <span className="mr-4">Emergency Support: {features.emergencySupport ? 'Enabled' : 'Disabled'}</span>
            <button onClick={() => toggleFeature('emergencySupport')} className="bg-blue-500 text-white px-4 py-2 rounded">
              Toggle
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}