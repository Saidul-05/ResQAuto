export default function PricingPlans() {
  const plans = [
    { id: 1, name: "Basic", price: "$29.99/month", features: ["Roadside assistance", "Battery jumpstart"] },
    { id: 2, name: "Premium", price: "$49.99/month", features: ["All Basic features", "On-site repairs", "Priority service"] },
    { id: 3, name: "Enterprise", price: "Contact us", features: ["Custom solutions", "24/7 support", "Dedicated account manager"] }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {plans.map(plan => (
        <div key={plan.id} className="border p-6 rounded shadow w-80">
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <p className="text-gray-700 mb-4">{plan.price}</p>
          <ul className="mb-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="text-gray-600">- {feature}</li>
            ))}
          </ul>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Select Plan</button>
        </div>
      ))}
    </div>
  )
}
