
"use client"

import type React from "react"

import { useState, useCallback, useMemo, useRef, memo } from "react"
import { ArrowLeft, Save, Edit, Upload } from "lucide-react"
import Papa from "papaparse"
import type { Match, LeagueData } from "../types"
import { MatchesTable } from "./MatchesTable"
import { StandingsTable } from "./StandingsTable"
import { FormTable } from "./FormTable"
import { calculateStandings, calculateTeamForms } from "../utils/calculations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

interface LeagueDetailsProps {
  league: LeagueData
  matches: Match[]
  onBack: () => void
  onUpdateLeague: (updatedLeague: LeagueData) => void
  onUpdateMatches: (matches: Match[]) => void
}

export const LeagueDetails = memo(
  ({ league, matches, onBack, onUpdateLeague, onUpdateMatches }: LeagueDetailsProps) => {
    const [activeTab, setActiveTab] = useState<string>("matches")
    const [isEditing, setIsEditing] = useState(false)
    const [editedLeague, setEditedLeague] = useState(league)
    const [isSaveDisabled, setIsSaveDisabled] = useState(true)
    const [dataLoaded, setDataLoaded] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const standings = useMemo(() => calculateStandings(matches), [matches])
    const teamForms = useMemo(() => calculateTeamForms(matches), [matches])

    const handleSave = useCallback(() => {
      onUpdateLeague(editedLeague)
      setIsEditing(false)
      setIsSaveDisabled(true)
      toast("League details saved successfully")
    }, [editedLeague, onUpdateLeague])

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setEditedLeague((prev) => ({ ...prev, [name]: value }))
      setIsSaveDisabled(false)
    }, [])

    const handleFileUpload = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        Papa.parse(file, {
          header: true,
          complete: (result) => {
            try {
              const parsedMatches = result.data
                .filter((rawMatch: any) => {
                  // Make sure all required fields exist
                  return (
                    rawMatch.date !== undefined &&
                    (rawMatch.Home_team || rawMatch.home_team) !== undefined &&
                    (rawMatch.Away_team || rawMatch.away_team) !== undefined &&
                    (rawMatch["Half/Home"] || rawMatch.ht_home_score) !== undefined &&
                    (rawMatch["Half/Away"] || rawMatch.ht_away_score) !== undefined &&
                    (rawMatch["Full/Home"] || rawMatch.home_score) !== undefined &&
                    (rawMatch["Full/Away"] || rawMatch.away_score) !== undefined
                  )
                })
                .map((rawMatch: any) => {
                  // Map the CSV columns to our Match type
                  const match: Match = {
                    date: rawMatch.date,
                    home_team: rawMatch.Home_team || rawMatch.home_team,
                    away_team: rawMatch.Away_team || rawMatch.away_team,
                    ht_home_score: Number(rawMatch["Half/Home"] || rawMatch.ht_home_score),
                    ht_away_score: Number(rawMatch["Half/Away"] || rawMatch.ht_away_score),
                    home_score: Number(rawMatch["Full/Home"] || rawMatch.home_score),
                    away_score: Number(rawMatch["Full/Away"] || rawMatch.away_score),
                    round: rawMatch.round || "1",
                  }
                  return match
                })

              if (parsedMatches.length === 0) {
                toast({
                  title: "Error",
                  description: "No valid matches found in the CSV file. Please check the format and try again.",
                  variant: "destructive",
                })
                return
              }

              onUpdateMatches(parsedMatches)
              setDataLoaded(true)
              setIsSaveDisabled(false)
              toast({
                title: "Success",
                description: `${parsedMatches.length} matches imported successfully`,
              })
            } catch (error) {
              console.error("Error processing CSV data:", error)
              toast({
                title: "Error",
                description: "Failed to process CSV file. Please check the format and try again.",
                variant: "destructive",
              })
            }
          },
          error: (error) => {
            console.error("Error parsing CSV:", error)
            toast({
              title: "Error",
              description: "Failed to parse CSV file. Please check the format and try again.",
              variant: "destructive",
            })
          },
        })
      },
      [onUpdateMatches],
    )

    const triggerFileUpload = useCallback(() => {
      fileInputRef.current?.click()
    }, [])

    return (
      <div className="space-y-6 animate-fadeIn">
        <div className="flex items-center justify-between">
          <Button
            onClick={onBack}
            variant="outline"
            className="gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Leagues
          </Button>
          <Button
            onClick={() => setIsEditing((prev) => !prev)}
            variant={isEditing ? "default" : "outline"}
            className={`gap-2 ${isEditing ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-white/5 border-white/10 text-white hover:bg-white/10"}`}
          >
            {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            {isEditing ? "Save" : "Edit League"}
          </Button>
        </div>

        {isEditing && (
          <div className="bg-black/20 rounded-xl p-6 space-y-6 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="leagueName" className="text-gray-300 text-sm">
                  League Name
                </label>
                <Input
                  type="text"
                  id="leagueName"
                  name="name"
                  value={editedLeague.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter league name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="leagueSeason" className="text-gray-300 text-sm">
                  Season
                </label>
                <Input
                  type="text"
                  id="leagueSeason"
                  name="season"
                  value={editedLeague.season}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter season (e.g., 2023-24)"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-full sm:w-auto flex-grow">
                <label htmlFor="csv-upload" className="block text-gray-300 text-sm mb-2">
                  Upload Matches Data (CSV)
                </label>
                <input
                  ref={fileInputRef}
                  id="csv-upload"
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="flex items-center gap-3">
                  <Button
                    onClick={triggerFileUpload}
                    variant="outline"
                    className="gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    <Upload className="w-4 h-4" />
                    Choose CSV File
                  </Button>
                  <span className={`text-sm ${dataLoaded ? "text-emerald-400" : "text-gray-400"}`}>
                    {dataLoaded ? "✓ Data loaded successfully" : "No file chosen"}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleSave}
                disabled={isSaveDisabled}
                className="gap-2 bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </div>
        )}

        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 bg-black/20 w-full rounded-xl">
            <TabsTrigger
              value="matches"
              className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
            >
              Matches
            </TabsTrigger>
            <TabsTrigger
              value="standings"
              className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
            >
              Standings
            </TabsTrigger>
            <TabsTrigger
              value="form"
              className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
            >
              Form
            </TabsTrigger>
          </TabsList>

          <TabsContent value="matches" className="p-0 mt-6">
            <MatchesTable matches={matches} />
          </TabsContent>
          <TabsContent value="standings" className="p-0 mt-6">
            <StandingsTable standings={standings} />
          </TabsContent>
          <TabsContent value="form" className="p-0 mt-6">
            <FormTable teamForms={teamForms} />
          </TabsContent>
        </Tabs>
      </div>
    )
  },
)

LeagueDetails.displayName = "LeagueDetails"
