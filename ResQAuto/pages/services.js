import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MapComponent from '../components/MapComponent'

export default function Services() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-4">
          We offer a variety of services including towing, battery jumpstart, on-site repairs, and more.
        </p>
        <MapComponent />
      </div>
      <Footer />
    </div>
  )
}
