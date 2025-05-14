
import { memo, useState, useMemo } from "react"
import { AlertCircle, ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MatchFilters } from "./matches/MatchFilters"
import { MatchesHeader } from "./matches/MatchesHeader"
import { MatchesTableView } from "./matches/MatchesTableView"
import { MatchesByRound } from "./matches/MatchesByRound"
import { MatchesCardsView } from "./matches/MatchesCardsView"
import { useMatchFiltering } from "@/hooks/useMatchFiltering"
import type { Match } from "@/types"

interface MatchesTableProps {
  matches: Match[]
  onMatchClick?: (match: Match) => void
}

export const MatchesTable = memo(({ matches = [], onMatchClick }: MatchesTableProps) => {
  const [viewType, setViewType] = useState<"rounds" | "all" | "cards">("cards")
  const { sortedMatches, matchesByRound, setFilters, requestSort, sortConfig } = useMatchFiltering(matches)

  const getSortIcon = (key: string) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown className="h-4 w-4 ml-1" />
    }
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="h-4 w-4 ml-1" />
    ) : (
      <ChevronDown className="h-4 w-4 ml-1" />
    )
  }

  if (matches.length === 0) {
    return (
      <Card className="bg-black/20 border-white/5 hover:border-blue-500/20 transition-all">
        <CardContent className="p-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <AlertCircle className="w-8 h-8 text-gray-500" />
            <p className="text-gray-400">No matches available for this league yet.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-black/20 border-white/5 hover:border-blue-500/20 transition-all">
      <CardHeader className="pb-0">
        <MatchesHeader
          viewType={viewType}
          onViewTypeChange={setViewType}
          onRequestSort={requestSort}
          getSortIcon={getSortIcon}
        />
      </CardHeader>

      <CardContent className="pt-6">
        <MatchFilters onFilterChange={setFilters} />

        {viewType === "cards" ? (
          <MatchesCardsView matches={sortedMatches} onMatchClick={onMatchClick} />
        ) : viewType === "rounds" ? (
          <MatchesByRound matchesByRound={matchesByRound} />
        ) : (
          <MatchesTableView
            matches={sortedMatches}
            onRequestSort={requestSort}
            getSortIcon={getSortIcon}
          />
        )}
      </CardContent>
    </Card>
  )
})

MatchesTable.displayName = "MatchesTable"
