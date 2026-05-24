import { Box, TableCell, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type RankStyle = {
  bg: string;
  border: string;
};

export const rankIcons: Record<number, { color: string; label: string }> = {
  1: { color: '#FFD700', label: 'Wielki Archon' },
  2: { color: '#C0C0C0', label: 'Wódz Wojenny' },
  3: { color: '#CD7F32', label: 'Mistrz Bitewnej Magii' },
};

export const getRankStyle = (rank: number) => {
  if (rank === 1) {
    return {
      bg: 'rgba(255,215,0,0.05)',
      border: 'rgba(255,215,0,0.15)',
    };
  }

  if (rank === 2) {
    return {
      bg: 'rgba(192,192,192,0.04)',
      border: 'rgba(192,192,192,0.1)',
    };
  }

  if (rank === 3) {
    return {
      bg: 'rgba(205,127,50,0.04)',
      border: 'rgba(205,127,50,0.1)',
    };
  }

  return {
    bg: 'transparent',
    border: 'rgba(201,168,76,0.06)',
  };
};

const getWinRateColor = (winRate: number) => {
  if (winRate >= 75) return '#27AE60';
  if (winRate >= 60) return '#C9A84C';
  return '#C0392B';
};

const getWinRateGradient = (winRate: number) => {
  if (winRate >= 75) return 'linear-gradient(90deg, #27AE60, #2ECC71)';
  if (winRate >= 60) return 'linear-gradient(90deg, #C9A84C, #E8C97A)';
  return 'linear-gradient(90deg, #C0392B, #E74C3C)';
};

export const Row = styled(TableRow)<{
  rank: number;
  rankColor?: string;
  rankStyle: RankStyle;
}>(({ rank, rankColor, rankStyle }) => ({
  background: rankStyle.bg,
  borderLeft:
    rank <= 3 && rankColor
      ? `3px solid ${rankColor}40`
      : '3px solid transparent',
  transition: 'all 0.3s ease',
  cursor: 'default',

  '&:hover': {
    background: 'rgba(201,168,76,0.06)',

    '& td': {
      color: '#E8DCC8',
    },
  },

  '& td': {
    borderBottom: `1px solid ${rankStyle.border}`,
    paddingTop: 16,
    paddingBottom: 16,
    transition: 'color 0.3s ease',
  },
}));

export const Cell = styled(TableCell)({});

export const RankIconBox = styled(Box)<{ colorValue: string }>(
  ({ colorValue }) => ({
    width: 28,
    height: 28,
    background: `${colorValue}15`,
    border: `1px solid ${colorValue}40`,
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })
);

export const RankIconText = styled(Typography)<{ colorValue: string }>(
  ({ colorValue }) => ({
    fontFamily: '"Cinzel", serif',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: colorValue,
    filter: `drop-shadow(0 0 4px ${colorValue})`,
  })
);

export const NormalRank = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.8rem',
  color: '#5B4E3E',
  fontWeight: 500,
  paddingLeft: 4,
});

export const ChampionWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const ChampionDot = styled(Box)<{ colorValue?: string }>(
  ({ colorValue }) => ({
    width: 8,
    height: 8,
    borderRadius: '1px',
    background: colorValue ?? 'rgba(201,168,76,0.3)',
    boxShadow: colorValue ? `0 0 6px ${colorValue}` : 'none',
  })
);

export const ChampionName = styled(Typography)<{ isTopRank: boolean }>(
  ({ isTopRank }) => ({
    fontFamily: '"Cinzel", serif',
    fontSize: '0.9rem',
    color: isTopRank ? '#E8DCC8' : '#B8A890',
    fontWeight: isTopRank ? 600 : 400,
  })
);

export const WinsText = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.9rem',
  color: '#27AE60',
  filter: 'drop-shadow(0 0 4px rgba(39,174,96,0.4))',
});

export const LossesText = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.9rem',
  color: '#C0392B',
  filter: 'drop-shadow(0 0 4px rgba(192,57,43,0.3))',
});

export const WinRateWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  minWidth: 100,
});

export const WinRateTrack = styled(Box)({
  flex: 1,
  height: '4px',
  borderRadius: '2px',
  background: 'rgba(201,168,76,0.1)',
  overflow: 'hidden',
});

export const WinRateFill = styled(Box)<{ winRate: number }>(({ winRate }) => ({
  height: '100%',
  width: `${winRate}%`,
  background: getWinRateGradient(winRate),
  borderRadius: '2px',
}));

export const WinRateText = styled(Typography)<{ winRate: number }>(
  ({ winRate }) => ({
    fontFamily: '"Cinzel", serif',
    fontSize: '0.8rem',
    color: getWinRateColor(winRate),
    minWidth: 45,
  })
);

export const PointsText = styled(Typography)<{
  isTopRank: boolean;
  isFirstRank: boolean;
}>(({ isTopRank, isFirstRank }) => ({
  fontFamily: '"Cinzel Decorative", serif',
  fontSize: '0.9rem',
  color: '#C9A84C',
  filter: isFirstRank ? 'drop-shadow(0 0 6px rgba(201,168,76,0.6))' : 'none',
  fontWeight: isTopRank ? 700 : 400,
}));
