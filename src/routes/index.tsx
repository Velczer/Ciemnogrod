import { useEffect, useState, useMemo } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Box } from '@mui/material';
import { Navbar } from '@components/Navbar';
import { HeroSection } from '../homepage/HeroSection';
import { PlayersSection } from '@pages/PlayersSection';
import { RankingSection } from '@pages/RankingSection';
import { BracketSection } from '../homepage/BracketSection';
import { Footer } from '@components/Footer';
import { getCalculatePoints } from '@helpers/calculate';

export const Route = createFileRoute('/')({
  component: LandingPage,
});

function LandingPage() {
  const [players, setPlayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + '/api/players', {
          headers: {
            'x-api-key': import.meta.env.VITE_API_KEY,
          },
        });
        const data = await res.json();
        setPlayers(data);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
      return (
        getCalculatePoints(b.wins, b.losses) -
        getCalculatePoints(a.wins, a.losses)
      );
    });
  }, [players]);

  return (
    <Box sx={{ minHeight: '100vh', background: '#080C14' }}>
      <Navbar />
      <Box component="main" sx={{ pt: '64px' }}>
        <HeroSection />
        <PlayersSection players={sortedPlayers} loading={loading} />
        <RankingSection players={sortedPlayers} loading={loading} />
        <BracketSection />
      </Box>
      <Footer />
    </Box>
  );
}
