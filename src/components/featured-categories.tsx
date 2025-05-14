
import { CategoryCard, Category } from "@/components/category-card"

const categories: Category[] = [
  {
    id: "1",
    name: "Street Style",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Urban", "Casual", "Trending"],
    description:
      "Contemporary urban fashion that makes a statement. Featuring hoodies, graphic tees, and statement pieces for the bold and fashion-forward.",
  },
  {
    id: "2",
    name: "Casual Wear",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Comfort", "Essential", "Daily"],
    description:
      "Effortlessly stylish everyday wear. Premium basics and versatile pieces that combine comfort with modern design.",
  },
  {
    id: "3",
    name: "Accessories",
    image: "/placeholder.svg?height=400&width=300",
    tags: ["Style", "Premium", "Details"],
    description:
      "Complete your look with our curated selection of accessories. From minimalist jewelry to statement bags and more.",
  },
]

export function FeaturedCategories() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg"
          alt="Background"
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      <div className="container relative">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_20%)]">
          Explore Our <span className="text-blue-400">Collections</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
