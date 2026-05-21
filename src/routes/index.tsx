import { createFileRoute } from '@tanstack/react-router'
import { Box } from '@mui/material'
import { Navbar } from '../homepage/Navbar'
import { HeroSection } from '../homepage/HeroSection'
import { PlayersSection } from '../homepage/PlayersSection'
import { RankingsSection } from '../homepage/RankingsSection'
import { BracketSection } from '../homepage/BracketSection'
import { Footer } from '../homepage/Footer'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <Box sx={{ minHeight: '100vh', background: '#080C14' }}>
      <Navbar />
      <Box component="main" sx={{ pt: '64px' }}>
        <HeroSection />
        <PlayersSection />
        <RankingsSection />
        <BracketSection />
      </Box>
      <Footer />
    </Box>
  )
}
