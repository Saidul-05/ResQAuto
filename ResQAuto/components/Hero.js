export default function Hero() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-5xl font-bold">Fast & Reliable Roadside Assistance</h1>
        <p className="text-white text-xl mt-4">We get you back on the road in no time.</p>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4">Get Assistance</button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg">Learn More</button>
        </div>
      </div>
    </div>
  )
}
