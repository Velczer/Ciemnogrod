import { useEffect, useState, useMemo } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Box } from '@mui/material';
import { Navbar } from '@components/Navbar';
import { HeroSection } from '../homepage/HeroSection';
import { PlayersSection } from '@pages/PlayersSection';
import { RankingSection } from '@pages/RankingSection';
import { BracketSection } from '@pages/BracketSection';
import { Footer } from '@components/Footer';
import { getCalculatePoints } from '@helpers/calculate';
import { Stat } from '@/types/stats';
import { PageLoader } from '@components/PageLoader/index';
import { MatchHistorySection } from '@pages/MatchHistorySection';
import type { MatchHistoryItem } from '@/types/match';

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

  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + '/api/stats', {
          headers: {
            'x-api-key': import.meta.env.VITE_API_KEY,
          },
        });

        const data = await res.json();

        setStats(data);
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      }
    };

    fetchStats();
  }, []);

  const [matches, setMatches] = useState<MatchHistoryItem[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_API_URL + '/api/matches?limit=10',
          {
            headers: {
              'x-api-key': import.meta.env.VITE_API_KEY,
            },
          }
        );

        const data = await res.json();

        if (Array.isArray(data)) {
          setMatches(data);
        }
      } catch (err) {
        console.error('Failed to fetch matches:', err);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Box sx={{ minHeight: '100vh', background: '#080C14' }}>
      <Navbar />
      <Box component="main" sx={{ pt: '64px' }}>
        <HeroSection stats={stats} />
        <PlayersSection players={sortedPlayers} />
        <RankingSection players={sortedPlayers} />
        <MatchHistorySection matches={matches} />
        <BracketSection />
      </Box>
      <Footer />
    </Box>
  );
}
