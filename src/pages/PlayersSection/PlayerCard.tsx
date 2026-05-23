import { Box, Typography } from '@mui/material';
import { factions } from '@data/gameData';
import { Player } from '@/types/player';
import { getWinRate } from '@helpers/calculate';

export function PlayerCard({ player, rank }: { player: Player; rank: number }) {
  const faction = factions[player.mainFaction] ?? factions.Temple;
  const winRate = getWinRate(player?.wins, player?.losses);

  console.log(player.mainFaction);

  return (
    <Box
      sx={{
        position: 'relative',
        background:
          'linear-gradient(145deg, #111B2E 0%, #0D1525 60%, #0A1020 100%)',
        border: '1px solid rgba(201,168,76,0.15)',
        borderRadius: '4px',
        p: 3,
        height: '100%',
        cursor: 'default',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${faction.primary}08 0%, transparent 60%)`,
          transition: 'opacity 0.4s ease',
          opacity: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
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
        sx={{
          backgroundImage: `url(/OE_${player.mainFaction}_screen.webp)`,
          backgroundSize: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          opacity: 0.2,
          transition: 'transform 0.4s ease',
        }}
      ></Box>
      <Box
        className="rank-badge"
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          width: 28,
          height: 28,
          borderRadius: '2px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.4s ease',
        }}
      >
        <Typography
          className="rank-badge-text"
          sx={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.65rem',
            color: '#C9A84C',
            fontWeight: 700,
          }}
        >
          #{rank}
        </Typography>
      </Box>

      {/* Avatar */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
        <Box
          className="avatar-ring"
          sx={{
            width: 64,
            height: 64,
            borderRadius: '4px',
            background: `linear-gradient(135deg, ${faction.primary}30 0%, rgba(8,12,20,0.8) 100%)`,
            border: `2px solid ${faction.primary}60`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.4s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Emblem background */}
          <Typography
            sx={{
              fontFamily: '"Cinzel Decorative", serif',
              fontSize: '1.6rem',
              fontWeight: 900,
              color: faction.primary,
              opacity: 0.8,
              lineHeight: 1,
              filter: `drop-shadow(0 0 8px ${faction.primary})`,
            }}
          >
            {player.nickname.charAt(0).toUpperCase()}
          </Typography>
          {/* Corner decoration */}
          <Box
            sx={{
              position: 'absolute',
              top: 3,
              left: 3,
              width: 8,
              height: 8,
              borderTop: `1px solid ${faction.primary}80`,
              borderLeft: `1px solid ${faction.primary}80`,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 3,
              right: 3,
              width: 8,
              height: 8,
              borderBottom: `1px solid ${faction.primary}80`,
              borderRight: `1px solid ${faction.primary}80`,
            }}
          />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            sx={{
              fontFamily: '"Cinzel", serif',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#E8DCC8',
              lineHeight: 1.2,
              mb: 0.5,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {player.nickname}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              sx={{
                fontFamily: '"Crimson Text", serif',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: faction.primary,
                opacity: 0.85,
              }}
            >
              {faction.label}
            </Typography>
          </Box>
          {/* <Typography sx={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.55rem', letterSpacing: '0.1em',
            color: '#5B4E3E', textTransform: 'uppercase', mt: 0.3,
          }}>{player.faction}</Typography> */}
        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: '1px',
          mb: 2,
          background: `linear-gradient(90deg, transparent, ${faction.primary}30, transparent)`,
        }}
      />

      {/* Stats */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1 }}>
        {[
          {
            label: 'Wygrane',
            value: player.wins.toLocaleString(),
            color: '#27AE60',
          },
          {
            label: 'Przegrane',
            value: player.losses.toLocaleString(),
            color: '#C0392B',
          },
          { label: 'Ratio', value: `${winRate}%`, color: '#C9A84C' },
        ].map((stat) => (
          <Box
            key={stat.label}
            sx={{
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(201,168,76,0.08)',
              borderRadius: '2px',
              p: 1,
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: stat.color,
                filter: `drop-shadow(0 0 4px ${stat.color}80)`,
                lineHeight: 1,
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cinzel", serif',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                color: '#7B6E5E',
                textTransform: 'uppercase',
                mt: 0.4,
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Win rate bar */}
      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            height: '3px',
            background: 'rgba(201,168,76,0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: `${winRate}%`,
              background: `linear-gradient(90deg, #C9A84C, ${faction.primary})`,
              borderRadius: '2px',
              boxShadow: `0 0 6px ${faction.primary}`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
