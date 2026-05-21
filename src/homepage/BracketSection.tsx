import { Box, Typography, Container } from '@mui/material'
import { bracket, BracketMatch } from '../data/gameData'
import * as Styled from './GlobalStyles.styled'
import { Divider } from '../components/Divider'

const statusConfig = {
  completed: { color: '#5B4E3E', bg: 'rgba(0,0,0,0.4)', label: 'Wynik', accentColor: '#6B5E4E' },
  live: { color: '#C9A84C', bg: 'rgba(201,168,76,0.08)', label: 'Na żywo', accentColor: '#C9A84C' },
  upcoming: { color: '#4A7A9B', bg: 'rgba(74,122,155,0.06)', label: 'Nadchodzące', accentColor: '#4A7A9B' },
}

function MatchCard({ match }: { match: BracketMatch }) {
  const cfg = statusConfig[match.status]
  const isCompleted = match.status === 'completed'

  return (
    <Box sx={{
      position: 'relative',
      background: cfg.bg,
      border: `1px solid ${cfg.accentColor}30`,
      borderRadius: '3px',
      overflow: 'hidden',
      minWidth: { xs: 160, sm: 190 },
      width: { xs: 160, sm: 190 },
      transition: 'all 0.3s ease',
      '&::before': {
        content: '""',
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: `linear-gradient(90deg, transparent, ${cfg.accentColor}60, transparent)`,
      },
      '&:hover': {
        transform: 'scale(1.02)',
        border: `1px solid ${cfg.accentColor}60`,
        boxShadow: `0 8px 20px rgba(0,0,0,0.5), 0 0 15px ${cfg.accentColor}20`,
      },
    }}>
      {/* Status badge */}
      <Box sx={{
        px: 1.5, py: 0.4,
        background: `${cfg.accentColor}15`,
        borderBottom: `1px solid ${cfg.accentColor}20`,
        display: 'flex', alignItems: 'center', gap: 0.8,
      }}>
        {match.status === 'live' && (
          <Box sx={{
            width: 5, height: 5, borderRadius: '50%',
            background: '#C9A84C',
            boxShadow: '0 0 6px #C9A84C',
            animation: 'borderPulse 1.5s infinite',
          }} />
        )}
        <Typography sx={{
          fontFamily: '"Cinzel", serif',
          fontSize: '0.5rem', letterSpacing: '0.15em',
          color: cfg.color, textTransform: 'uppercase',
        }}>{cfg.label}</Typography>
      </Box>

      {/* Players */}
      {[
        { name: match.player1, score: match.score1, isWinner: match.winner === match.player1 },
        { name: match.player2, score: match.score2, isWinner: match.winner === match.player2 },
      ].map((p, i) => (
        <Box key={i} sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          px: 1.5, py: 1,
          background: p.isWinner && isCompleted ? 'rgba(201,168,76,0.06)' : 'transparent',
          borderBottom: i === 0 ? '1px solid rgba(201,168,76,0.08)' : 'none',
          position: 'relative',
        }}>
          {/* Winner glow strip */}
          {p.isWinner && isCompleted && (
            <Box sx={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px',
              background: 'linear-gradient(180deg, #C9A84C, #8B6914)',
              boxShadow: '0 0 6px rgba(201,168,76,0.6)',
            }} />
          )}
          <Typography sx={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.75rem',
            color: p.isWinner && isCompleted ? '#E8DCC8'
              : match.winner && !p.isWinner ? '#3A3028'
              : p.name === 'TBD' ? '#3A3028' : '#9B8E7A',
            fontWeight: p.isWinner ? 600 : 400,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            flex: 1,
          }}>
            {p.name}
          </Typography>
          {p.score !== undefined && (
            <Typography sx={{
              fontFamily: '"Cinzel Decorative", serif',
              fontSize: '0.9rem', fontWeight: 700,
              color: p.isWinner ? '#C9A84C' : '#3A3028',
              filter: p.isWinner ? 'drop-shadow(0 0 4px rgba(201,168,76,0.5))' : 'none',
              ml: 1,
            }}>{p.score}</Typography>
          )}
        </Box>
      ))}
    </Box>
  )
}

export function BracketSection() {
  const quarterFinals = bracket[0]
  const semiFinals = bracket[1]
  const grandFinal = bracket[2]

  return (
    <Box
      component="section"
      id="bracket"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: 'linear-gradient(180deg, #080C14 0%, #0E1828 50%, #080C14 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background sigil */}
      <Box sx={{
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500, height: 500,
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.04)',
        pointerEvents: 'none',
        '&::before': {
          content: '""', position: 'absolute', inset: 30,
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.03)',
        },
        '&::after': {
          content: '""', position: 'absolute', inset: 80,
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.025)',
        },
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Styled.SectionMiniHeader>
            ✦ Droga do Dominacji ✦
          </Styled.SectionMiniHeader>
          <Styled.SectionHeader variant="h2">
            Drabinka Turniejowa
          </Styled.SectionHeader>
          <Divider />
          <Styled.SectionSubtitle>
            Droga podboju się rozwija. Tylko jeden wstąpi na tron.
          </Styled.SectionSubtitle>
        </Box>

        {/* Bracket container */}
        <Box sx={{
          background: 'linear-gradient(145deg, #0D1525 0%, #0A1020 100%)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: '4px',
          p: { xs: 3, md: 5 },
          position: 'relative',
          overflow: 'auto',
          '&::before': {
            content: '""', position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)',
          },
        }}>
          {/* Round labels */}
          <Box sx={{
            display: 'flex', justifyContent: 'space-between',
            mb: 4, pb: 3,
            borderBottom: '1px solid rgba(201,168,76,0.1)',
            minWidth: 700,
          }}>
            {bracket.map((round) => (
              <Box key={round.name} sx={{
                flex: round.name === 'Grand Final' ? 0 : 1,
                minWidth: round.name === 'Quarterfinals' ? 190 : round.name === 'Semifinals' ? 190 : 190,
                textAlign: 'center',
                px: 1,
              }}>
                <Typography sx={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '0.65rem', letterSpacing: '0.2em',
                  color: '#C9A84C', textTransform: 'uppercase',
                }}>{round.name}</Typography>
              </Box>
            ))}
          </Box>

          {/* Bracket grid */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            minWidth: 700,
            minHeight: 400,
          }}>
            {/* Quarterfinals */}
            <Box sx={{
              display: 'flex', flexDirection: 'column',
              gap: 3, flex: 1,
            }}>
              {quarterFinals.matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </Box>

            {/* QF → SF connectors */}
            <Box sx={{
              display: 'flex', flexDirection: 'column',
              alignSelf: 'stretch',
              py: 0,
              width: 40,
              position: 'relative',
            }}>
              {/* Top half connector */}
              <Box sx={{
                position: 'absolute', top: '6%', left: 0, right: 0,
                height: '40%',
                borderTop: '1px solid rgba(201,168,76,0.3)',
                borderRight: '1px solid rgba(201,168,76,0.3)',
                borderBottom: '1px solid rgba(201,168,76,0.3)',
              }} />
              {/* Bottom half connector */}
              {/* <Box sx={{
                position: 'absolute', top: '62.5%', left: 0, right: 0,
                height: '25%',
                borderTop: '1px solid rgba(201,168,76,0.3)',
                borderRight: '1px solid rgba(201,168,76,0.3)',
                borderBottom: '1px solid rgba(201,168,76,0.3)',
                '&::after': {
                  content: '""', position: 'absolute',
                  right: -1, top: '50%', transform: 'translateY(-50%)',
                  width: 5, height: 5, borderRadius: '50%',
                  background: 'rgba(201,168,76,0.4)',
                  boxShadow: '0 0 4px rgba(201,168,76,0.3)',
                },
              }} /> */}
            </Box>

            {/* Semifinals */}
            <Box sx={{
              display: 'flex', flexDirection: 'column',
              justifyContent: 'space-around',
              alignSelf: 'stretch',
              gap: 7, flex: 1, py: '2%',
            }}>
              {semiFinals.matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </Box>

            {/* SF → Final connectors */}
            <Box sx={{
              display: 'flex', flexDirection: 'column',
              alignSelf: 'stretch',
              width: 40,
              position: 'relative',
              left: '-5px',
            }}>
              <Box sx={{
                position: 'absolute', top: '24%', left: 0, right: 0,
                height: '50%',
                borderTop: '1px solid rgba(201,168,76,0.3)',
                borderRight: '1px solid rgba(201,168,76,0.3)',
                borderBottom: '1px solid rgba(201,168,76,0.3)',
              }} />
            </Box>

            {/* Grand Final */}
            <Box sx={{
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'stretch',
              position: 'relative',
            }}>
              {/* Crown decoration */}
              <Box sx={{
                textAlign: 'center', mb: 1,
                fontFamily: '"Cinzel", serif',
                fontSize: '0.55rem', letterSpacing: '0.15em',
                color: '#C9A84C',
              }}>
                ✦ FINAŁ ✦
              </Box>

              <Box sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -6,
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '4px',
                  animation: 'borderPulse 3s infinite',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: -12,
                  border: '1px solid rgba(201,168,76,0.1)',
                  borderRadius: '6px',
                },
              }}>
                <MatchCard match={grandFinal.matches[0]} />
              </Box>

              <Box sx={{
                textAlign: 'center', mt: 2,
                fontFamily: '"Crimson Text", serif',
                fontSize: '0.75rem', fontStyle: 'italic',
                color: '#5B4E3E',
              }}>
                Tron czeka...
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Status legend */}
        <Box sx={{
          display: 'flex', gap: 4, mt: 3, justifyContent: 'center', flexWrap: 'wrap',
        }}>
          {Object.entries(statusConfig).map(([key, val]) => (
            <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{
                width: 10, height: 10, borderRadius: '1px',
                background: val.color,
                boxShadow: key === 'live' ? `0 0 6px ${val.color}` : 'none',
              }} />
              <Typography sx={{
                fontFamily: '"Cinzel", serif',
                fontSize: '0.65rem', letterSpacing: '0.1em',
                color: '#7B6E5E', textTransform: 'uppercase',
              }}>{val.label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
