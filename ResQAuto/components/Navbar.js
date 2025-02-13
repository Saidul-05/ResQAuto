import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">ResQ Auto</div>
        <div className="space-x-4">
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/services"><a>Services</a></Link>
          <Link href="/pricing"><a>Pricing</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
          <Link href="/admin"><a>Admin</a></Link>
        </div>
      </div>
    </nav>
  )
}
