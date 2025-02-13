import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EmergencySupportForm from '../components/EmergencySupportForm'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold">Contact & Emergency Support</h1>
        <EmergencySupportForm />
      </div>
      <Footer />
    </div>
  )
}
