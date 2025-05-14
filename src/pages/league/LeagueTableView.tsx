
"use client"

import { useState, useEffect } from "react"
import { Eye, Edit2, CheckCircle, Trash2, Search, Plus } from "lucide-react"
import type { LeagueData } from "@/types"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

interface LeagueTableViewProps {
  leagues: LeagueData[]
  onNewLeague: () => void
  onLeagueAction: (leagueId: string, action: "view" | "edit" | "complete" | "delete") => void
}

export function LeagueTableView({ leagues, onNewLeague, onLeagueAction }: LeagueTableViewProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredLeagues, setFilteredLeagues] = useState<LeagueData[]>(leagues)

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredLeagues(leagues)
    } else {
      const filtered = leagues.filter(
        (league) =>
          league.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          league.season.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredLeagues(filtered)
    }
  }, [searchTerm, leagues])

  return (
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden border border-white/5 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 p-6 bg-black/20">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search leagues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/30 text-white border border-white/10 rounded-lg pl-10 pr-4 py-2.5
                focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent
                transition-all duration-200 placeholder:text-gray-500"
            />
          </div>
          <Button
            onClick={onNewLeague}
            className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Plus className="w-4 h-4" />
            New League
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-black/40">
              <TableRow className="border-b border-white/5 hover:bg-transparent">
                <TableHead className="text-gray-400 font-normal">Season</TableHead>
                <TableHead className="text-gray-400 font-normal">Winner</TableHead>
                <TableHead className="text-gray-400 font-normal">Second Place</TableHead>
                <TableHead className="text-gray-400 font-normal">Third Place</TableHead>
                <TableHead className="text-gray-400 font-normal">Status</TableHead>
                <TableHead className="text-gray-400 font-normal text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeagues.map((league) => (
                <TableRow key={league.id} className="border-b border-white/5 hover:bg-white/5">
                  <TableCell className="font-medium">{league.season}</TableCell>
                  <TableCell>{league.winner || "—"}</TableCell>
                  <TableCell>{league.secondPlace || "—"}</TableCell>
                  <TableCell>{league.thirdPlace || "—"}</TableCell>
                  <TableCell>
                    <span
                      className={`
                        px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5
                        ${league.status === "In Progress" ? "bg-blue-500/20 text-blue-400" : "bg-emerald-500/20 text-emerald-400"}
                      `}
                    >
                      <div className="w-2 h-2 rounded-full bg-current"></div>
                      {league.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        onClick={() => onLeagueAction(league.id, "view")}
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-white/5 border-white/10 hover:bg-white/10 text-blue-400 hover:bg-blue-500/20"
                        aria-label={`View ${league.season}`}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => onLeagueAction(league.id, "edit")}
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-white/5 border-white/10 hover:bg-white/10 text-amber-400 hover:bg-amber-500/20"
                        aria-label={`Edit ${league.season}`}
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      {league.status === "In Progress" && (
                        <Button
                          onClick={() => onLeagueAction(league.id, "complete")}
                          variant="outline"
                          size="icon"
                          className="w-8 h-8 bg-white/5 border-white/10 hover:bg-white/10 text-emerald-400 hover:bg-emerald-500/20"
                          aria-label={`Complete ${league.season}`}
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        onClick={() => onLeagueAction(league.id, "delete")}
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 bg-white/5 border-white/10 hover:bg-white/10 text-red-400 hover:bg-red-500/20"
                        aria-label={`Delete ${league.season}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredLeagues.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center">
                    <p className="text-gray-400">No leagues found</p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
