
import { Layout } from "@/components/layout"

export default function MenPage() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
          Men's <span className="text-blue-400">Collection</span>
        </h1>
        <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-gray-300">
          <p>This is where the men's collection content will go.</p>
        </div>
      </div>
    </Layout>
  )
}
