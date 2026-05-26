import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type StatusConfig = {
  color: string;
  bg: string;
  label: string;
  accentColor: string;
};

export const statusConfig: Record<string, StatusConfig> = {
  completed: {
    color: '#5B4E3E',
    bg: 'rgba(0,0,0,0.4)',
    label: 'Wynik',
    accentColor: '#6B5E4E',
  },
  live: {
    color: '#C9A84C',
    bg: 'rgba(201,168,76,0.08)',
    label: 'Na żywo',
    accentColor: '#C9A84C',
  },
  upcoming: {
    color: '#4A7A9B',
    bg: 'rgba(74,122,155,0.06)',
    label: 'Nadchodzące',
    accentColor: '#4A7A9B',
  },
};

export const Section = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  position: 'relative',
  background: 'linear-gradient(180deg, #080C14 0%, #0E1828 50%, #080C14 100%)',
  overflow: 'hidden',

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const BackgroundSigil = styled(Box)({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  borderRadius: '50%',
  border: '1px solid rgba(201,168,76,0.04)',
  pointerEvents: 'none',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 30,
    borderRadius: '50%',
    border: '1px solid rgba(201,168,76,0.03)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 80,
    borderRadius: '50%',
    border: '1px solid rgba(201,168,76,0.025)',
  },
});

export const Content = styled(Container)({
  position: 'relative',
});

export const Header = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
}));

export const BracketFrame = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(145deg, #0D1525 0%, #0A1020 100%)',
  border: '1px solid rgba(201,168,76,0.15)',
  borderRadius: '4px',
  padding: theme.spacing(3),
  position: 'relative',
  overflow: 'auto',
  maxWidth: 1000,
  margin: '0 auto',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background:
      'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)',
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

export const RoundLabels = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 32,
  paddingBottom: 24,
  borderBottom: '1px solid rgba(201,168,76,0.1)',
  minWidth: 700,
});

export const RoundLabelBox = styled(Box)({
  flex: 1,
  minWidth: 190,
  textAlign: 'center',
  paddingLeft: 8,
  paddingRight: 8,
});

export const RoundLabel = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.65rem',
  letterSpacing: '0.2em',
  color: '#C9A84C',
  textTransform: 'uppercase',
});

export const BracketGrid = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 0,
  minWidth: 700,
  minHeight: 400,
});

export const QuarterColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 40,
  flex: 1,
});

export const SemiColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  alignSelf: 'center',
  gap: 40,
  flex: 1,
  paddingTop: '6%',
  paddingBottom: '6%',
});

export const FinalColumn = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  position: 'relative',
  gap: 40,
  flex: 1,
});

export const FinalTitle = styled(Box)({
  textAlign: 'center',
  //   marginBottom: 8,
  fontFamily: '"Cinzel", serif',
  fontSize: '0.55rem',
  letterSpacing: '0.15em',
  color: '#C9A84C',
});

export const FinalCardFrame = styled(Box)({
  position: 'relative',
  width: 'auto',
  margin: '0 auto',

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
});

export const FinalSubtitle = styled(Box)({
  textAlign: 'center',
  //   marginTop: 16,
  fontFamily: '"Crimson Text", serif',
  fontSize: '0.75rem',
  fontStyle: 'italic',
  color: '#5B4E3E',
});

export const MatchCard = styled(Box)<{ statusConfig: StatusConfig }>(
  ({ statusConfig }) => ({
    position: 'relative',
    background: statusConfig.bg,
    border: `1px solid ${statusConfig.accentColor}30`,
    borderRadius: '3px',
    overflow: 'hidden',
    minWidth: 160,
    width: 160,
    transition: 'all 0.3s ease',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: `linear-gradient(90deg, transparent, ${statusConfig.accentColor}60, transparent)`,
    },

    '&:hover': {
      transform: 'scale(1.02)',
      border: `1px solid ${statusConfig.accentColor}60`,
      boxShadow: `0 8px 20px rgba(0,0,0,0.5), 0 0 15px ${statusConfig.accentColor}20`,
    },

    '@media (min-width: 600px)': {
      minWidth: 190,
      width: 190,
    },
  })
);

export const StatusBadge = styled(Box)<{ statusConfig: StatusConfig }>(
  ({ statusConfig }) => ({
    padding: '3px 12px',
    background: `${statusConfig.accentColor}15`,
    borderBottom: `1px solid ${statusConfig.accentColor}20`,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  })
);

export const LiveDot = styled(Box)({
  width: 5,
  height: 5,
  borderRadius: '50%',
  background: '#C9A84C',
  boxShadow: '0 0 6px #C9A84C',
  animation: 'borderPulse 1.5s infinite',
});

export const StatusText = styled(Typography)<{ statusConfig: StatusConfig }>(
  ({ statusConfig }) => ({
    fontFamily: '"Cinzel", serif',
    fontSize: '0.5rem',
    letterSpacing: '0.15em',
    color: statusConfig.color,
    textTransform: 'uppercase',
  })
);

export const PlayerRow = styled(Box)<{
  iswinner: boolean;
  iscompleted: boolean;
  hasborder: boolean;
}>(({ iswinner, iscompleted, hasborder }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 12px',
  background: iswinner && iscompleted ? 'rgba(201,168,76,0.06)' : 'transparent',
  borderBottom: hasborder ? '1px solid rgba(201,168,76,0.08)' : 'none',
  position: 'relative',
}));

export const WinnerStrip = styled(Box)({
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  width: '2px',
  background: 'linear-gradient(180deg, #C9A84C, #8B6914)',
  boxShadow: '0 0 6px rgba(201,168,76,0.6)',
});

export const PlayerName = styled(Typography)<{
  iswinner: boolean;
  iscompleted: boolean;
  haswinner: boolean;
  istbd: boolean;
}>(({ iswinner, iscompleted, haswinner, istbd }) => ({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.75rem',
  color:
    iswinner && iscompleted
      ? '#E8DCC8'
      : haswinner && !iswinner
        ? '#3A3028'
        : istbd
          ? '#3A3028'
          : '#9B8E7A',
  fontWeight: iswinner ? 600 : 400,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: 1,
}));

export const PlayerScore = styled(Typography)<{ iswinner: boolean }>(
  ({ iswinner }) => ({
    fontFamily: '"Cinzel Decorative", serif',
    fontSize: '0.9rem',
    fontWeight: 700,
    color: iswinner ? '#C9A84C' : '#3A3028',
    filter: iswinner ? 'drop-shadow(0 0 4px rgba(201,168,76,0.5))' : 'none',
    marginLeft: 8,
  })
);

export const StatusLegend = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  marginTop: theme.spacing(3),
  justifyContent: 'center',
  flexWrap: 'wrap',
}));

export const StatusLegendItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const StatusLegendDot = styled(Box)<{
  islive: boolean;
  colorvalue: string;
}>(({ islive, colorvalue }) => ({
  width: 10,
  height: 10,
  borderRadius: '1px',
  background: colorvalue,
  boxShadow: islive ? `0 0 6px ${colorvalue}` : 'none',
}));

export const StatusLegendText = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.65rem',
  letterSpacing: '0.1em',
  color: '#7B6E5E',
  textTransform: 'uppercase',
});

export const RoundSeparator = styled(Box)({
  width: 1,
  alignSelf: 'stretch',
  minHeight: 260,
  background:
    'linear-gradient(180deg, transparent, rgba(201,168,76,0.22), transparent)',
  boxShadow: '0 0 14px rgba(201,168,76,0.12)',
  marginLeft: 24,
  marginRight: 24,
});
