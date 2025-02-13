import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold">About ResQ Auto</h1>
        <p className="mt-4">
          ResQ Auto is dedicated to providing fast and reliable roadside assistance. Our team of professionals is always on hand to get you back on the road as quickly as possible.
        </p>
      </div>
      <Footer />
    </div>
  )
}
