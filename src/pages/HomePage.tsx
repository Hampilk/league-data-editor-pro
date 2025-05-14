
import { ArrowRight, ShoppingBag, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Layout } from "@/components/layout"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCategories } from "@/components/featured-categories"
import { FeaturedProducts } from "@/components/featured-products"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <Newsletter />
    </Layout>
  )
}
