import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

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

export const BackgroundPattern = styled(Box)({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  backgroundImage: `
    radial-gradient(circle at 20% 50%, rgba(123,79,166,0.06) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 50%)
  `,
});

export const Content = styled(Container)({
  position: 'relative',
});

export const Header = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
}));
