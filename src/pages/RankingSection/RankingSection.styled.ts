import { Box, Container, TableCell, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const rankIcons: Record<number, { color: string; label: string }> = {
  1: { color: '#FFD700', label: 'Wielki Archon' },
  2: { color: '#C0C0C0', label: 'Wódz Wojenny' },
  3: { color: '#CD7F32', label: 'Mistrz Bitewnej Magii' },
};

export const Section = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  position: 'relative',
  background: 'linear-gradient(180deg, #080C14 0%, #0C1422 50%, #080C14 100%)',

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const SideAccent = styled(Box)<{ side: 'left' | 'right' }>(
  ({ side }) => ({
    position: 'absolute',
    [side]: 0,
    top: '20%',
    bottom: '20%',
    width: '3px',
    background:
      'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)',
    pointerEvents: 'none',
  })
);

export const Content = styled(Container)({
  position: 'relative',
});

export const Header = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
}));

export const TableFrame = styled(Box)({
  position: 'relative',
  background: 'linear-gradient(145deg, #0F1A2E 0%, #0D1525 100%)',
  border: '1px solid rgba(201,168,76,0.2)',
  borderRadius: '4px',
  overflow: 'hidden',
  boxShadow: '0 0 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(0,0,0,0.3)',

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
});

export const Corner = styled(Box)<{
  cornerPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}>(({ cornerPosition }) => {
  const isTop = cornerPosition.includes('top');
  const isLeft = cornerPosition.includes('left');

  return {
    position: 'absolute',
    top: isTop ? 0 : undefined,
    bottom: !isTop ? 0 : undefined,
    left: isLeft ? 0 : undefined,
    right: !isLeft ? 0 : undefined,
    width: 20,
    height: 20,
    zIndex: 1,
    borderTop: isTop ? '2px solid #C9A84C' : undefined,
    borderBottom: !isTop ? '2px solid #C9A84C' : undefined,
    borderLeft: isLeft ? '2px solid #C9A84C' : undefined,
    borderRight: !isLeft ? '2px solid #C9A84C' : undefined,
  };
});

export const HeadRow = styled(TableRow)({
  background:
    'linear-gradient(90deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)',
});

export const HeadCell = styled(TableCell)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.65rem',
  letterSpacing: '0.12em',
  color: '#C9A84C',
  textTransform: 'uppercase',
  paddingTop: 20,
  paddingBottom: 20,
  borderBottom: '1px solid rgba(201,168,76,0.2)',
  whiteSpace: 'nowrap',
});

export const Legend = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
  justifyContent: 'center',
  flexWrap: 'wrap',
}));

export const LegendItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const LegendDot = styled(Box)<{ colorValue: string }>(
  ({ colorValue }) => ({
    width: 10,
    height: 10,
    borderRadius: '1px',
    background: colorValue,
    boxShadow: `0 0 6px ${colorValue}`,
  })
);

export const LegendText = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.65rem',
  letterSpacing: '0.1em',
  color: '#7B6E5E',
  textTransform: 'uppercase',
});
