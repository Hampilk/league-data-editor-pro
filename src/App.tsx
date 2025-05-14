
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NewArrivalsPage from "./pages/NewArrivalsPage"
import CollectionsPage from "./pages/CollectionsPage"
import MenPage from "./pages/MenPage"
import WomenPage from "./pages/WomenPage"
import SoccerPage from "./pages/SoccerPage"
import { Toaster } from "@/components/ui/toaster"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewArrivalsPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/soccer" element={<SoccerPage />} />
        <Route path="/soccer/league/:leagueId" element={<SoccerPage />} />
      </Routes>
      <Toaster />
    </Router>
  )
}
