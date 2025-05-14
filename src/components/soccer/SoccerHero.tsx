
import { Trophy, Flag } from "lucide-react"
import { Ball } from "@/components/icons/Ball"
import { Button } from "@/components/ui/button"

export function SoccerHero() {
  return (
    <div className="relative overflow-hidden rounded-3xl mb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/60 z-0"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30 z-[-1]"></div>
      
      <div className="relative z-10 py-16 px-8 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-medium text-sm mb-2">
              Professional Soccer Statistics
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              <span className="block">Soccer Championship</span>
              <span className="text-blue-400">Analysis System</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0">
              Comprehensive statistics, match analysis, and league standings for professional soccer leagues around the world.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-6 rounded-xl">
                <Trophy className="mr-2 h-5 w-5" />
                Browse Leagues
              </Button>
              <Button variant="outline" className="bg-white/5 border-white/10 text-white px-6 py-6 rounded-xl">
                <Ball className="mr-2 h-5 w-5" />
                Latest Matches
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Trophy className="w-32 h-32 text-blue-400/80" />
              </div>
              <div className="absolute top-0 right-10 animate-bounce">
                <div className="bg-blue-500/20 p-4 rounded-full">
                  <Ball className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <div className="absolute bottom-10 left-0 animate-pulse delay-300">
                <div className="bg-blue-500/20 p-4 rounded-full">
                  <Flag className="w-12 h-12 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
    </div>
  )
}
