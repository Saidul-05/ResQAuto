export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "John Doe", text: "Excellent service, highly recommend!" },
    { id: 2, name: "Jane Smith", text: "Very responsive and professional." },
    { id: 3, name: "Bob Johnson", text: "Saved my day when I was stranded." }
  ]

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
      <div className="flex flex-col space-y-4">
        {testimonials.map(t => (
          <div key={t.id} className="p-4 bg-gray-100 rounded shadow">
            <p>"{t.text}"</p>
            <p className="text-right font-bold mt-2">- {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
