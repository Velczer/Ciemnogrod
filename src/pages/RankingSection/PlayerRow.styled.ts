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
  rankcolor?: string;
  rankstyle: RankStyle;
}>(({ rank, rankcolor, rankstyle }) => ({
  background: rankstyle.bg,
  borderLeft:
    rank <= 3 && rankcolor
      ? `3px solid ${rankcolor}40`
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
    borderBottom: `1px solid ${rankstyle.border}`,
    paddingTop: 16,
    paddingBottom: 16,
    transition: 'color 0.3s ease',
  },
}));

export const Cell = styled(TableCell)({});

export const RankIconBox = styled(Box)<{ colorvalue: string }>(
  ({ colorvalue }) => ({
    width: 28,
    height: 28,
    background: `${colorvalue}15`,
    border: `1px solid ${colorvalue}40`,
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })
);

export const RankIconText = styled(Typography)<{ colorvalue: string }>(
  ({ colorvalue }) => ({
    fontFamily: '"Cinzel", serif',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: colorvalue,
    filter: `drop-shadow(0 0 4px ${colorvalue})`,
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

export const ChampionDot = styled(Box)<{ colorvalue?: string }>(
  ({ colorvalue }) => ({
    width: 8,
    height: 8,
    borderRadius: '1px',
    background: colorvalue ?? 'rgba(201,168,76,0.3)',
    boxShadow: colorvalue ? `0 0 6px ${colorvalue}` : 'none',
  })
);

export const ChampionName = styled(Typography)<{ istoprank: boolean }>(
  ({ istoprank }) => ({
    fontFamily: '"Cinzel", serif',
    fontSize: '0.9rem',
    color: istoprank ? '#E8DCC8' : '#B8A890',
    fontWeight: istoprank ? 600 : 400,
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

export const WinRateFill = styled(Box)<{ winrate: number }>(({ winrate }) => ({
  height: '100%',
  width: `${winrate}%`,
  background: getWinRateGradient(winrate),
  borderRadius: '2px',
}));

export const WinRateText = styled(Typography)<{ winrate: number }>(
  ({ winrate }) => ({
    fontFamily: '"Cinzel", serif',
    fontSize: '0.8rem',
    color: getWinRateColor(winrate),
    minWidth: 45,
  })
);

export const PointsText = styled(Typography)<{
  istoprank: boolean;
  isfirstrank: boolean;
}>(({ istoprank, isfirstrank }) => ({
  fontFamily: '"Cinzel Decorative", serif',
  fontSize: '0.9rem',
  color: '#C9A84C',
  filter: isfirstrank ? 'drop-shadow(0 0 6px rgba(201,168,76,0.6))' : 'none',
  fontWeight: istoprank ? 700 : 400,
}));
