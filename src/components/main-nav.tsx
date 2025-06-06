
import { Link } from "react-router-dom"
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
  },
]

export function MainNav({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center space-x-6", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="text-sm text-gray-400 transition-colors hover:text-white"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
