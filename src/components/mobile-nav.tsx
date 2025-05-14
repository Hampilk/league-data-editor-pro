
import { Link } from "react-router-dom"
import { Instagram, Twitter, Facebook } from "lucide-react"

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "New Arrivals",
    href: "/new",
  },
  {
    title: "Collections",
    href: "/collections",
  },
  {
    title: "Men",
    href: "/men",
  },
  {
    title: "Women",
    href: "/women",
  },
]

export function MobileNav() {
  return (
    <div className="flex flex-col h-full">
      <div className="px-2 py-6">
        <Link to="/" className="flex items-center mb-8">
          <span className="text-xl font-bold tracking-wider text-white">URBAN WEAR</span>
        </Link>
        <nav className="flex flex-col space-y-4">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-base py-2 text-gray-200 transition-colors hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-6 border-t border-gray-800">
        <div className="flex items-center justify-center gap-6 text-gray-400">
          <a href="https://instagram.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://twitter.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://facebook.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  )
}
