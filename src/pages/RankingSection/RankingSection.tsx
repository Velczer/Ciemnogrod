import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import * as Styled from '@components/GlobalStyles.styled';
import { Divider } from '@components/Divider';
import { PlayerRow, rankIcons } from './PlayerRow';
import { Player } from '@/types/player';

export function RankingSection({
  players,
  loading,
}: {
  players: Player[];
  loading: boolean;
}) {
  return (
    <Box
      component="section"
      id="rankings"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background:
          'linear-gradient(180deg, #080C14 0%, #0C1422 50%, #080C14 100%)',
      }}
    >
      {/* Decorative columns */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: '20%',
          bottom: '20%',
          width: '3px',
          background:
            'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '20%',
          bottom: '20%',
          width: '3px',
          background:
            'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Styled.SectionMiniHeader>✦ Sala Chwały ✦</Styled.SectionMiniHeader>
          <Styled.SectionHeader variant="h2">Ranking</Styled.SectionHeader>
          <Divider />
          <Styled.SectionSubtitle>
            Wieczny kodeks zapisuje każdą bitwę. Chwała trwa wiecznie.
          </Styled.SectionSubtitle>
        </Box>

        {/* Table container */}
        <Box
          sx={{
            position: 'relative',
            background: 'linear-gradient(145deg, #0F1A2E 0%, #0D1525 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow:
              '0 0 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(0,0,0,0.3)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background:
                'linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background:
                'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
            },
          }}
        >
          {/* Corner ornaments */}
          {[
            {
              top: 0,
              left: 0,
              borderTop: '2px solid #C9A84C',
              borderLeft: '2px solid #C9A84C',
            },
            {
              top: 0,
              right: 0,
              borderTop: '2px solid #C9A84C',
              borderRight: '2px solid #C9A84C',
            },
            {
              bottom: 0,
              left: 0,
              borderBottom: '2px solid #C9A84C',
              borderLeft: '2px solid #C9A84C',
            },
            {
              bottom: 0,
              right: 0,
              borderBottom: '2px solid #C9A84C',
              borderRight: '2px solid #C9A84C',
            },
          ].map((corner, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                ...corner,
                width: 20,
                height: 20,
                zIndex: 1,
              }}
            />
          ))}

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    background:
                      'linear-gradient(90deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)',
                  }}
                >
                  {[
                    'Rank',
                    'Czempion',
                    'Wygrane',
                    'Przegrane',
                    'Wskaźnik Wygranych',
                    'Punkty',
                  ].map((col) => (
                    <TableCell
                      key={col}
                      sx={{
                        fontFamily: '"Cinzel", serif',
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                        color: '#C9A84C',
                        textTransform: 'uppercase',
                        py: 2.5,
                        borderBottom: '1px solid rgba(201,168,76,0.2)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {col}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {players.map((player, idx) => {
                  const rank = idx + 1;

                  return (
                    <PlayerRow key={player.id} player={player} rank={rank} />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Legend */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            mt: 3,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {Object.entries(rankIcons).map(([rank, data]) => (
            <Box
              key={rank}
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '1px',
                  background: data.color,
                  boxShadow: `0 0 6px ${data.color}`,
                }}
              />
              <Typography
                sx={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  color: '#7B6E5E',
                  textTransform: 'uppercase',
                }}
              >
                Rank {rank} — {data.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
