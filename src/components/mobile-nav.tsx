
import { Link } from "react-router-dom"
import { Trophy, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"

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
  {
    title: "Soccer Analytics",
    href: "/soccer",
    icon: <Trophy className="h-4 w-4 mr-2" />,
  },
]

export function MobileNav() {
  return (
    <div className="py-6">
      <Link to="/" className="flex items-center space-x-2 mb-8">
        <span className="text-xl font-bold tracking-wider text-white">URBAN WEAR</span>
      </Link>
      <div className="flex flex-col space-y-3">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex items-center text-sm py-2 px-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            {item.icon || <ShoppingBag className="h-4 w-4 mr-2" />}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
