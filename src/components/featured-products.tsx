
import { ProductCard, Product } from "@/components/product-card"

const products: Product[] = [
  {
    id: "1",
    name: "Urban Comfort Hoodie",
    price: "$89.99",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "2",
    name: "Street Smart Jacket",
    price: "$129.99",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "3",
    name: "City Dweller Pants",
    price: "$79.99",
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "4",
    name: "Metro Chic Sneakers",
    price: "$99.99",
    image: "/placeholder.svg?height=500&width=500",
  },
]

export function FeaturedProducts() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg"
          alt="Background"
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      <div className="container relative">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">
          New <span className="text-blue-400">Arrivals</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
