
import { memo } from "react"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MatchScore } from "./MatchScore"
import type { Match } from "@/types"
import { cn } from "@/lib/utils"

interface MatchCardProps {
  match: Match
  onClick?: (match: Match) => void
}

export const MatchCard = memo(({ match, onClick }: MatchCardProps) => {
  const homeWin = match.home_score > match.away_score
  const awayWin = match.home_score < match.away_score
  const draw = match.home_score === match.away_score

  const handleClick = () => {
    if (onClick) {
      onClick(match)
    }
  }

  return (
    <div 
      onClick={handleClick}
      className={cn(
        "bg-black/30 rounded-xl border border-white/5 p-4 hover:bg-black/40 transition-colors cursor-pointer",
        "hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
      )}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar className="h-3 w-3" />
          <span>{match.date}</span>
        </div>
        <Badge variant="outline" className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/20">
          {match.round || "Round ?"}
        </Badge>
      </div>

      <div className="flex items-center justify-between my-4">
        <div className={`text-right flex-1 text-white ${homeWin ? "font-bold" : ""}`}>
          <div className="line-clamp-1">{match.home_team}</div>
          {homeWin && <div className="mt-1 text-xs text-emerald-400">Winner</div>}
        </div>

        <div className="mx-4 px-4 py-2 bg-black/50 rounded-lg flex flex-col items-center">
          <div className="text-lg font-bold">
            <MatchScore homeScore={match.home_score} awayScore={match.away_score} />
          </div>
          <div className="text-xs text-gray-500 mt-1">
            HT: <MatchScore homeScore={match.ht_home_score} awayScore={match.ht_away_score} isHalfTime />
          </div>
        </div>

        <div className={`text-left flex-1 text-white ${awayWin ? "font-bold" : ""}`}>
          <div className="line-clamp-1">{match.away_team}</div>
          {awayWin && <div className="mt-1 text-xs text-emerald-400">Winner</div>}
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 text-xs">
        <div className="text-gray-500">
          {homeWin ? "Home Win" : awayWin ? "Away Win" : "Draw"}
        </div>
        <div className="text-blue-400 flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>Full Time</span>
        </div>
        <div className="text-gray-500">
          Total: {match.home_score + match.away_score} goals
        </div>
      </div>
    </div>
  )
})

MatchCard.displayName = "MatchCard"
