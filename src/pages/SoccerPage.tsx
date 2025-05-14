
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from "@/components/layout"
import { useLeagueState } from '@/hooks/useLeagueState'
import MatchDetail from "@/components/MatchDetail"
import { LeagueListView } from '@/pages/league/LeagueListView'
import { LeagueTableView } from '@/pages/league/LeagueTableView'
import { LeagueStatsView } from '@/pages/league/LeagueStatsView'
import { LeagueEditorView } from '@/pages/league/LeagueEditorView'
import { SoccerDashboard } from '@/components/soccer/SoccerDashboard'
import { SoccerHero } from '@/components/soccer/SoccerHero'

export default function SoccerPage() {
  const {
    activeTab,
    setActiveTab,
    isEditing, 
    setIsEditing,
    selectedLeague,
    matches,
    dataUpdatedAt,
    isRefreshing,
    isLoading,
    setIsLoading,
    currentRoute,
    isMatchDetailOpen,
    selectedMatch,
    setIsMatchDetailOpen,
    handleRefreshData,
    handleLeagueUpdate,
    handleMatchesUpdate,
    handleNavigate,
    handleSelectLeague,
    handleBackToList,
    handleBackFromEditor,
    handleOpenMatchDetail
  } = useLeagueState()

  const { leagueId } = useParams()
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards')

  // Sample league data
  const leaguesData = [
    {
      id: "premier-league",
      name: "Premier League",
      season: "2023-2024",
      winner: "-",
      secondPlace: "-",
      thirdPlace: "-",
      status: "In Progress",
    },
    {
      id: "la-liga",
      name: "La Liga",
      season: "2023-2024",
      winner: "-",
      secondPlace: "-",
      thirdPlace: "-",
      status: "In Progress",
    }
  ]

  useEffect(() => {
    if (leagueId) {
      setActiveTab('league-details')
    }
    
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [leagueId, setIsLoading, setActiveTab])

  const handleLeagueAction = (leagueId: string, action: "view" | "edit" | "complete" | "delete") => {
    const league = leaguesData.find(l => l.id === leagueId)
    if (!league) return
    
    switch (action) {
      case "view":
        handleSelectLeague(league, [])
        break
      case "edit":
        setIsEditing(true)
        break
      case "complete":
        // Handle complete action
        console.log("Complete league:", leagueId)
        break
      case "delete":
        // Handle delete action
        console.log("Delete league:", leagueId)
        break
    }
  }

  const handleNewLeague = () => {
    setIsEditing(true)
  }

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'cards' ? 'table' : 'cards')
  }

  const renderContent = () => {
    if (isEditing) {
      return <LeagueEditorView onBack={handleBackFromEditor} />
    }
    
    if (activeTab === "league-list" || (!selectedLeague && !isEditing)) {
      return (
        <>
          <SoccerHero />
          <SoccerDashboard />
          
          <div className="flex justify-end mb-4">
            <button 
              onClick={toggleViewMode}
              className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
            >
              Switch to {viewMode === 'cards' ? 'table' : 'card'} view
            </button>
          </div>
          
          {viewMode === 'cards' ? (
            <LeagueListView
              dataUpdatedAt={dataUpdatedAt}
              isRefreshing={isRefreshing}
              onRefresh={handleRefreshData}
              onEdit={() => setIsEditing(true)}
              onSelectLeague={handleSelectLeague}
            />
          ) : (
            <LeagueTableView 
              leagues={leaguesData}
              onNewLeague={handleNewLeague}
              onLeagueAction={handleLeagueAction}
            />
          )}
        </>
      )
    }

    if (["league-details", "matches", "standings", "form", "statistics"].includes(activeTab) && selectedLeague) {
      return (
        <LeagueStatsView
          league={selectedLeague}
          matches={matches}
          activeTab={activeTab}
          isLoading={isLoading}
          onTabChange={setActiveTab}
          onBackToLeagueDetails={() => setActiveTab('league-details')}
          onMatchClick={handleOpenMatchDetail}
        />
      )
    }

    return null
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {renderContent()}
        
        {selectedMatch && (
          <MatchDetail
            match={selectedMatch}
            isOpen={isMatchDetailOpen}
            onClose={() => setIsMatchDetailOpen(false)}
          />
        )}
      </div>
    </Layout>
  )
}
