import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type FactionTheme = {
  label: string;
  primary: string;
  glow: string;
};

export const Card = styled(Box)<{ faction: FactionTheme }>(({ faction }) => ({
  position: 'relative',
  background: 'linear-gradient(145deg, #111B2E 0%, #0D1525 60%, #0A1020 100%)',
  border: '1px solid rgba(201,168,76,0.15)',
  borderRadius: '4px',
  padding: 24,
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

    '&::before': {
      opacity: 1,
    },

    '&::after': {
      transform: 'scaleX(1)',
    },

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
}));

export const FactionBackground = styled(Box)<{
  factionname: string | null | undefined;
}>(({ factionname }) => ({
  backgroundImage: `url(/OE_${factionname ?? 'Temple'}_screen.webp)`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '100%',
  opacity: 0.2,
  transition: 'transform 0.4s ease',
}));

export const RankBadge = styled(Box)({
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
});

export const RankText = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.65rem',
  color: '#C9A84C',
  fontWeight: 700,
});

export const Header = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  marginBottom: 20,
});

export const Avatar = styled(Box)<{ faction: FactionTheme }>(({ faction }) => ({
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
}));

export const AvatarLetter = styled(Typography)<{ faction: FactionTheme }>(
  ({ faction }) => ({
    fontFamily: '"Cinzel Decorative", serif',
    fontSize: '1.6rem',
    fontWeight: 900,
    color: faction.primary,
    opacity: 0.8,
    lineHeight: 1,
    filter: `drop-shadow(0 0 8px ${faction.primary})`,
  })
);

export const Corner = styled(Box)<{
  cornerposition: 'top-left' | 'bottom-right';
  faction: FactionTheme;
}>(({ cornerposition, faction }) => ({
  position: 'absolute',
  width: 8,
  height: 8,

  ...(cornerposition === 'top-left'
    ? {
        top: 3,
        left: 3,
        borderTop: `1px solid ${faction.primary}80`,
        borderLeft: `1px solid ${faction.primary}80`,
      }
    : {
        bottom: 3,
        right: 3,
        borderBottom: `1px solid ${faction.primary}80`,
        borderRight: `1px solid ${faction.primary}80`,
      }),
}));

export const PlayerInfo = styled(Box)({
  flex: 1,
  minWidth: 0,
});

export const Nickname = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '1rem',
  fontWeight: 700,
  color: '#E8DCC8',
  lineHeight: 1.2,
  marginBottom: 4,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const FactionName = styled(Typography)<{ faction: FactionTheme }>(
  ({ faction }) => ({
    fontFamily: '"Crimson Text", serif',
    fontSize: '0.95rem',
    fontStyle: 'italic',
    color: faction.primary,
    opacity: 0.85,
  })
);

export const Divider = styled(Box)<{ faction: FactionTheme }>(
  ({ faction }) => ({
    height: '1px',
    marginBottom: 16,
    background: `linear-gradient(90deg, transparent, ${faction.primary}30, transparent)`,
  })
);

export const StatsGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 8,
});

export const StatBox = styled(Box)({
  background: 'rgba(0,0,0,0.3)',
  border: '1px solid rgba(201,168,76,0.08)',
  borderRadius: '2px',
  padding: 8,
  textAlign: 'center',
});

export const StatValue = styled(Typography)<{ colorvalue: string }>(
  ({ colorvalue }) => ({
    fontFamily: '"Cinzel Decorative", serif',
    fontSize: '0.95rem',
    fontWeight: 700,
    color: colorvalue,
    filter: `drop-shadow(0 0 4px ${colorvalue}80)`,
    lineHeight: 1,
  })
);

export const StatLabel = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.6rem',
  letterSpacing: '0.1em',
  color: '#7B6E5E',
  textTransform: 'uppercase',
  marginTop: 4,
});

export const WinRateWrapper = styled(Box)({
  marginTop: 16,
});

export const WinRateTrack = styled(Box)({
  height: '3px',
  background: 'rgba(201,168,76,0.1)',
  borderRadius: '2px',
  overflow: 'hidden',
});

export const WinRateFill = styled(Box)<{
  winrate: number;
  faction: FactionTheme;
}>(({ winrate, faction }) => ({
  height: '100%',
  width: `${winrate}%`,
  background: `linear-gradient(90deg, #C9A84C, ${faction.primary})`,
  borderRadius: '2px',
  boxShadow: `0 0 6px ${faction.primary}`,
}));

export const TrophyBox = styled(Box)({
  position: 'absolute',
  top: 58,
  right: 12,
  borderRadius: '3px',
  padding: 6,
  background:
    'linear-gradient(90deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))',
  border: '1px solid rgba(201,168,76,0.16)',
  textAlign: 'center',
});

export const TrophyIcons = styled(Typography)({
  fontSize: '1.05rem',
  letterSpacing: '0.12em',
  lineHeight: 1.2,
  filter: 'drop-shadow(0 0 6px rgba(201,168,76,0.5))',
});
