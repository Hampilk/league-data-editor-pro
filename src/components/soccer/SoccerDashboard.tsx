
import { Trophy, Flag, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const quickStats = [
  { 
    title: "Leagues", 
    value: "12", 
    change: "+2", 
    icon: <Trophy className="h-5 w-5" />,
    color: "blue"
  },
  { 
    title: "Teams", 
    value: "240", 
    change: "+8", 
    icon: <Flag className="h-5 w-5" />,
    color: "amber" 
  },
  { 
    title: "Matches", 
    value: "1,520", 
    change: "+64", 
    icon: <Soccer className="h-5 w-5" />,
    color: "emerald" 
  },
]

function Soccer(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m12 16-4-4 4-4 4 4-4 4" />
      <path d="M12 8V4.5" />
      <path d="m16 16-2-1" />
      <path d="m8 16 2-1" />
    </svg>
  )
}

export function SoccerDashboard() {
  return (
    <div className="mb-12 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">Soccer Analytics Dashboard</h2>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search leagues or teams..."
            className="w-full md:w-[300px] pl-9 py-2 bg-black/30 border border-white/10 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="bg-black/20 border-white/10 hover:border-blue-500/50 transition-all">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
                  <span className={cn("text-xs font-medium",
                    stat.change.startsWith("+") ? "text-emerald-500" : "text-red-500"
                  )}>
                    {stat.change}
                  </span>
                </div>
              </div>
              
              <div className={cn("p-3 rounded-full", 
                stat.color === "blue" ? "bg-blue-500/20 text-blue-400" :
                stat.color === "amber" ? "bg-amber-500/20 text-amber-400" :
                "bg-emerald-500/20 text-emerald-400"
              )}>
                {stat.icon}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-black/20 border-white/10 lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-white mb-4">Recent Matches</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-black/30 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Flag className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Premier League</div>
                      <div className="text-sm text-gray-400">Match Day {i + 1}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right mr-4">
                      <div className="font-medium text-white">Team A</div>
                      <div className="text-sm text-gray-400">Home</div>
                    </div>
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg font-mono">2-1</div>
                    <div className="text-left ml-4">
                      <div className="font-medium text-white">Team B</div>
                      <div className="text-sm text-gray-400">Away</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-black/20 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-white mb-4">Top Leagues</h3>
            <div className="space-y-4">
              {["Premier League", "La Liga", "Bundesliga", "Serie A"].map((league, i) => (
                <div key={i} className="bg-black/30 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{league}</div>
                      <div className="text-sm text-gray-400">Season 2023-24</div>
                    </div>
                  </div>
                  <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    View
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
