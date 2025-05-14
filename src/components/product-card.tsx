
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface Product {
  id: string
  name: string
  price: string
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-black/60 backdrop-blur-sm rounded-xl p-4 transition-transform duration-300 hover:scale-105 border border-white/10">
      <div className="aspect-square overflow-hidden rounded-lg bg-black/50 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{product.name}</h3>
      <div className="flex items-center justify-between">
        <p className="text-blue-400 font-bold">{product.price}</p>
        <Button
          size="icon"
          className="bg-blue-500 hover:bg-blue-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          <ShoppingBag className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
