import { useState } from 'react'

export default function EmergencySupportForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend API
    alert('Emergency request submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Issue</label>
        <textarea
          name="issue"
          value={formData.issue}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
        Submit Emergency Request
      </button>
    </form>
  )
}
