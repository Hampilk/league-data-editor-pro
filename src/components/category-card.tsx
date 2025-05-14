
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Category {
  id: string
  name: string
  image: string
  tags: string[]
  description: string
}

export function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-black/60 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-black/70 border border-white/10">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6">
        <img
          src={category.image}
          alt={category.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">{category.name}</h3>

        <div className="flex flex-wrap gap-2">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>

        <div className="pt-4">
          <Button className="w-full bg-blue-500 hover:bg-blue-400 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
            Explore Collection
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
