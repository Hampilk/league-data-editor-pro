
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from "@/components/layout"
import { useLeagueState } from '@/hooks/useLeagueState'
import MatchDetail from "@/components/MatchDetail"
import { LeagueListView } from '@/pages/league/LeagueListView'
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

  useEffect(() => {
    if (leagueId) {
      setActiveTab('league-details')
    }
    
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [leagueId, setIsLoading, setActiveTab])

  const renderContent = () => {
    if (isEditing) {
      return <LeagueEditorView onBack={handleBackFromEditor} />
    }
    
    if (activeTab === "league-list" || (!selectedLeague && !isEditing)) {
      return (
        <>
          <SoccerHero />
          <SoccerDashboard />
          <LeagueListView
            dataUpdatedAt={dataUpdatedAt}
            isRefreshing={isRefreshing}
            onRefresh={handleRefreshData}
            onEdit={() => setIsEditing(true)}
            onSelectLeague={handleSelectLeague}
          />
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
