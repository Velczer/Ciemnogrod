import { Box, Container, Grid } from '@mui/material';
import * as Styled from '@components/GlobalStyles.styled';
import { Divider } from '@components/Divider';
import { PlayerCard } from './PlayerCard';
import { Player } from '@/types/player';

export function PlayersSection({
  players,
  loading,
}: {
  players: Player[];
  loading: boolean;
}) {
  return (
    <Box
      component="section"
      id="players"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background:
          'linear-gradient(180deg, #080C14 0%, #0A1020 50%, #080C14 100%)',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(123,79,166,0.06) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 50%)`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Styled.SectionMiniHeader>
            ✦ Czempioni Sezonu I ✦
          </Styled.SectionMiniHeader>
          <Styled.SectionHeader variant="h2">Gracze</Styled.SectionHeader>
          <Divider />
          <Styled.SectionSubtitle>
            Ośmiu wojowników wybranych przez los, by stanąć do walki o pradawny
            tron.
          </Styled.SectionSubtitle>
        </Box>

        <Grid container spacing={3}>
          {players.map((player) => (
            <Grid key={player.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <PlayerCard player={player} rank={player.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
