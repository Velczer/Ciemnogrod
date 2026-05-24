import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type FactionTheme = {
  label: string;
  primary: string;
  glow: string;
};

const factionSpritePositions: Record<string, string> = {
  Dungeon: '0% 0%',
  Sylvan: '50% 0%',
  Temple: '100% 0%',
  Schisma: '0% 100%',
  Hive: '50% 100%',
  Necropolis: '100% 100%',
};

export const Section = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  position: 'relative',
  background: 'linear-gradient(180deg, #080C14 0%, #0A1020 50%, #080C14 100%)',

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const Background = styled(Box)({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  backgroundImage: `
    radial-gradient(circle at 15% 40%, rgba(201,168,76,0.05) 0%, transparent 45%),
    radial-gradient(circle at 85% 60%, rgba(123,79,166,0.07) 0%, transparent 45%)
  `,
});

export const Content = styled(Container)({
  position: 'relative',
});

export const Header = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
}));

export const List = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
}));

export const MatchCard = styled(Box)({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  gap: 24,
  padding: '22px 26px',
  background:
    'linear-gradient(145deg, rgba(17,27,46,0.96) 0%, rgba(10,16,32,0.96) 100%)',
  border: '1px solid rgba(201,168,76,0.14)',
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: '0 18px 40px rgba(0,0,0,0.35)',
  transition: 'all 0.3s ease',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(90deg, transparent, rgba(201,168,76,0.04), transparent)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },

  '&:hover': {
    transform: 'translateY(-3px)',
    borderColor: 'rgba(201,168,76,0.32)',
    boxShadow: '0 24px 55px rgba(0,0,0,0.55)',

    '&::before': {
      opacity: 1,
    },
  },

  '@media (max-width: 700px)': {
    gridTemplateColumns: '1fr',
    textAlign: 'center',
  },
});

export const PlayerSide = styled(Box)<{
  faction: FactionTheme;
  isWinner: boolean;
  align?: 'left' | 'right';
}>(({ faction, isWinner, align = 'left' }) => ({
  position: 'relative',
  minWidth: 0,
  textAlign: align,
  padding: '10px 12px',
  border: `1px solid ${isWinner ? faction.primary + '55' : 'rgba(201,168,76,0.08)'}`,
  background: isWinner
    ? `linear-gradient(135deg, ${faction.primary}18, rgba(0,0,0,0.12))`
    : 'rgba(0,0,0,0.16)',
  borderRadius: 3,
  overflow: 'hidden',
}));

export const FactionGlow = styled(Box)<{ faction: FactionTheme }>(
  ({ faction }) => ({
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(circle at 50% 0%, ${faction.glow}, transparent 70%)`,
    opacity: 0.18,
    pointerEvents: 'none',
  })
);

export const PlayerName = styled(Typography)({
  position: 'relative',
  fontFamily: '"Cinzel", serif',
  fontSize: '1rem',
  fontWeight: 700,
  color: '#E8DCC8',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const FactionName = styled(Typography)<{ faction: FactionTheme }>(
  ({ faction }) => ({
    position: 'relative',
    fontFamily: '"Crimson Text", serif',
    fontSize: '0.95rem',
    fontStyle: 'italic',
    color: faction.primary,
    opacity: 0.9,
  })
);

export const Center = styled(Box)({
  position: 'relative',
  textAlign: 'center',
  minWidth: 130,
});

export const Score = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
});

export const ScoreValue = styled(Typography)<{ isWinner: boolean }>(
  ({ isWinner }) => ({
    fontFamily: '"Cinzel Decorative", serif',
    fontSize: '2rem',
    fontWeight: 900,
    color: isWinner ? '#C9A84C' : '#6B5E4E',
    filter: isWinner ? 'drop-shadow(0 0 8px rgba(201,168,76,0.55))' : 'none',
    lineHeight: 1,
  })
);

export const ScoreSeparator = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '1.4rem',
  color: '#7B6E5E',
});

export const MapName = styled(Typography)({
  marginTop: 8,
  fontFamily: '"Cinzel", serif',
  fontSize: '0.7rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#C9A84C',
});

export const DateText = styled(Typography)({
  marginTop: 4,
  fontFamily: '"Crimson Text", serif',
  fontSize: '0.85rem',
  fontStyle: 'italic',
  color: '#6B5E4E',
});

export const FactionEmblem = styled(Box)<{ factionKey: string }>(
  ({ factionKey }) => ({
    position: 'relative',
    width: 42,
    height: 42,
    flexShrink: 0,
    backgroundImage: 'url(/OldenEra_Factions.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300% 200%',
    backgroundPosition:
      factionSpritePositions[factionKey] ?? factionSpritePositions.Temple,
    filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.35))',
    opacity: 0.9,
  })
);

export const PlayerContent = styled(Box)<{ align?: 'left' | 'right' }>(
  ({ align = 'left' }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
    gap: 12,
  })
);

export const PlayerText = styled(Box)({
  minWidth: 0,
});

export const MatchCount = styled(Typography)({
  marginTop: 18,
  fontFamily: '"Cinzel", serif',
  fontSize: '0.7rem',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: '#7B6E5E',
  opacity: 0.9,
});
