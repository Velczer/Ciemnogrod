import { Box, Typography, Container, Grid } from '@mui/material'
import { players, factions } from '../data/gameData'
import * as Styled from './GlobalStyles.styled'
import { Divider } from '../components/Divider'

function getWinRate(wins: number, losses: number) {
  return ((wins / (wins + losses)) * 100).toFixed(1)
}

function PlayerCard({ player }: { player: typeof players[0] }) {
  const faction = factions[player.faction] ?? factionColors.Temple
  const winRate = parseFloat(getWinRate(player.wins, player.losses))

  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(145deg, #111B2E 0%, #0D1525 60%, #0A1020 100%)',
        border: '1px solid rgba(201,168,76,0.15)',
        borderRadius: '4px',
        p: 3,
        height: '100%',
        cursor: 'default',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${faction.primary}08 0%, transparent 60%)`,
          transition: 'opacity 0.4s ease',
          opacity: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, transparent, ${faction.primary}, transparent)`,
          transform: 'scaleX(0)',
          transition: 'transform 0.4s ease',
        },
        '&:hover': {
          transform: 'translateY(-6px)',
          border: `1px solid ${faction.primary}55`,
          boxShadow: `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${faction.glow}`,
          '&::before': { opacity: 1 },
          '&::after': { transform: 'scaleX(1)' },
          '& .avatar-ring': {
            boxShadow: `0 0 20px ${faction.glow}, 0 0 40px ${faction.glow}`,
            borderColor: faction.primary,
          },
          '& .rank-badge': {
            background: faction.primary,
            color: '#080C14',
          },
          '& .rank-badge-text': {
            color: '#fff',
          },
        },
      }}
    >
      {/* Rank badge */}
      <Box
        className="rank-badge"
        sx={{
          position: 'absolute', top: 12, right: 12,
          width: 28, height: 28, borderRadius: '2px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.4s ease',
        }}
      >
        <Typography className="rank-badge-text" sx={{
          fontFamily: '"Cinzel", serif', fontSize: '0.65rem',
          color: '#C9A84C', fontWeight: 700,
        }}>#{player.rank}</Typography>
      </Box>

      {/* Avatar */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
        <Box
          className="avatar-ring"
          sx={{
            width: 64, height: 64, borderRadius: '4px',
            background: `linear-gradient(135deg, ${faction.primary}30 0%, rgba(8,12,20,0.8) 100%)`,
            border: `2px solid ${faction.primary}60`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.4s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Emblem background */}
          <Typography sx={{
            fontFamily: '"Cinzel Decorative", serif',
            fontSize: '1.6rem', fontWeight: 900,
            color: faction.primary,
            opacity: 0.8,
            lineHeight: 1,
            filter: `drop-shadow(0 0 8px ${faction.primary})`,
          }}>
            {player.emblem}
          </Typography>
          {/* Corner decoration */}
          <Box sx={{
            position: 'absolute', top: 3, left: 3,
            width: 8, height: 8, borderTop: `1px solid ${faction.primary}80`,
            borderLeft: `1px solid ${faction.primary}80`,
          }} />
          <Box sx={{
            position: 'absolute', bottom: 3, right: 3,
            width: 8, height: 8, borderBottom: `1px solid ${faction.primary}80`,
            borderRight: `1px solid ${faction.primary}80`,
          }} />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{
            fontFamily: '"Cinzel", serif',
            fontSize: '1rem', fontWeight: 700,
            color: '#E8DCC8', lineHeight: 1.2,
            mb: 0.5,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>
            {player.nickname}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{
              fontFamily: '"Crimson Text", serif',
              fontSize: '0.95rem', fontStyle: 'italic',
              color: faction.primary, opacity: 0.85,
            }}>{faction.label}</Typography>
          </Box>
          {/* <Typography sx={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.55rem', letterSpacing: '0.1em',
            color: '#5B4E3E', textTransform: 'uppercase', mt: 0.3,
          }}>{player.faction}</Typography> */}
        </Box>
      </Box>

      {/* Divider */}
      <Box sx={{
        height: '1px', mb: 2,
        background: `linear-gradient(90deg, transparent, ${faction.primary}30, transparent)`,
      }} />

      {/* Stats */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1 }}>
        {[
          { label: 'Wygrane', value: player.wins.toLocaleString(), color: '#27AE60' },
          { label: 'Przegrane', value: player.losses.toLocaleString(), color: '#C0392B' },
          { label: 'Ratio', value: `${winRate}%`, color: '#C9A84C' },
        ].map((stat) => (
          <Box key={stat.label} sx={{
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(201,168,76,0.08)',
            borderRadius: '2px',
            p: 1, textAlign: 'center',
          }}>
            <Typography sx={{
              fontFamily: '"Cinzel Decorative", serif',
              fontSize: '0.95rem', fontWeight: 700,
              color: stat.color,
              filter: `drop-shadow(0 0 4px ${stat.color}80)`,
              lineHeight: 1,
            }}>{stat.value}</Typography>
            <Typography sx={{
              fontFamily: '"Cinzel", serif',
              fontSize: '0.6rem', letterSpacing: '0.1em',
              color: '#7B6E5E', textTransform: 'uppercase', mt: 0.4,
            }}>{stat.label}</Typography>
          </Box>
        ))}
      </Box>

      {/* Win rate bar */}
      <Box sx={{ mt: 2 }}>
        <Box sx={{
          height: '3px',
          background: 'rgba(201,168,76,0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <Box sx={{
            height: '100%',
            width: `${winRate}%`,
            background: `linear-gradient(90deg, #C9A84C, ${faction.primary})`,
            borderRadius: '2px',
            boxShadow: `0 0 6px ${faction.primary}`,
          }} />
        </Box>
      </Box>
    </Box>
  )
}

export function PlayersSection() {
  return (
    <Box
      component="section"
      id="players"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: 'linear-gradient(180deg, #080C14 0%, #0A1020 50%, #080C14 100%)',
      }}
    >
      {/* Background pattern */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(123,79,166,0.06) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 50%)`,
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Styled.SectionMiniHeader>
            ✦ Czempioni Sezonu I  ✦
          </Styled.SectionMiniHeader>
          <Styled.SectionHeader variant="h2">
            Gracze
          </Styled.SectionHeader>
          <Divider />
          <Styled.SectionSubtitle>
            Ośmiu wojowników wybranych przez los, by stanąć do walki o pradawny tron.
          </Styled.SectionSubtitle>
        </Box>

        <Grid container spacing={3}>
          {players.map((player) => (
            <Grid key={player.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <PlayerCard player={player} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
