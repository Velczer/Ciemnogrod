import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const particlePositions = [
  { left: '10%', top: '20%', delay: '0s', duration: '6s' },
  { left: '25%', top: '70%', delay: '1.5s', duration: '8s' },
  { left: '40%', top: '40%', delay: '0.8s', duration: '7s' },
  { left: '60%', top: '25%', delay: '2s', duration: '5s' },
  { left: '75%', top: '60%', delay: '0.3s', duration: '9s' },
  { left: '85%', top: '35%', delay: '1.2s', duration: '6.5s' },
  { left: '90%', top: '75%', delay: '2.5s', duration: '7.5s' },
  { left: '15%', top: '50%', delay: '3s', duration: '8.5s' },
  { left: '50%', top: '85%', delay: '0.5s', duration: '6s' },
  { left: '70%', top: '15%', delay: '1.8s', duration: '7s' },
  { left: '35%', top: '90%', delay: '2.8s', duration: '5.5s' },
  { left: '55%', top: '55%', delay: '0.2s', duration: '9.5s' },
];

export const glyphPositions = [
  { left: '5%', top: '15%', text: '⚔', size: '2rem', opacity: 0.06 },
  { right: '8%', top: '25%', text: '✦', size: '3rem', opacity: 0.04 },
  { left: '12%', bottom: '20%', text: '☽', size: '2.5rem', opacity: 0.05 },
  { right: '15%', bottom: '30%', text: '◈', size: '2rem', opacity: 0.06 },
  { left: '45%', top: '8%', text: '⌘', size: '2.5rem', opacity: 0.04 },
  { right: '35%', bottom: '12%', text: '☠', size: '2rem', opacity: 0.05 },
];

export const HeroRoot = styled(Box)({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  background: `
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,79,166,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(201,168,76,0.08) 0%, transparent 50%),
    radial-gradient(ellipse 50% 50% at 20% 80%, rgba(123,79,166,0.1) 0%, transparent 50%),
    linear-gradient(180deg, #060A12 0%, #080C14 40%, #0A1020 100%)
  `,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    background: '#050505',
    backgroundImage: 'url(/logo.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    opacity: 0.4,
  },
});

export const GridOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 0,
  backgroundImage: `
    linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
  maskImage:
    'radial-gradient(ellipse 80% 80% at center, black 30%, transparent 100%)',
});

export const Glyph = styled(Box)<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  size: string;
  opacity: number;
}>(({ left, right, top, bottom, size, opacity }) => ({
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 0,
  left,
  right,
  top,
  bottom,
  fontSize: size,
  opacity,
  color: '#C9A84C',
  userSelect: 'none',
  fontFamily: 'serif',
}));

export const Particle = styled(Box)<{
  left: string;
  top: string;
  delay: string;
  duration: string;
  index: number;
}>(({ left, top, delay, duration, index }) => ({
  position: 'absolute',
  pointerEvents: 'none',
  zIndex: 0,
  left,
  top,
  width: '3px',
  height: '3px',
  borderRadius: '50%',
  background:
    index % 3 === 0 ? '#C9A84C' : index % 3 === 1 ? '#7B4FA6' : '#E8C97A',
  animation: `particleDrift ${duration} ${delay} infinite ease-in-out`,
  boxShadow: '0 0 6px currentColor',
}));

export const CenterGlow = styled(Box)({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  height: '400px',
  background:
    'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
  pointerEvents: 'none',
  zIndex: 0,
});

export const TopBorder = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '2px',
  background:
    'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 30%, rgba(201,168,76,1) 50%, rgba(201,168,76,0.6) 70%, transparent 100%)',
  boxShadow: '0 0 20px rgba(201,168,76,0.4)',
});

export const HeroContainer = styled(Container)({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  paddingTop: '96px',
  paddingBottom: '96px',
});

export const PreTitleBadge = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '12px',
  border: '1px solid rgba(201,168,76,0.3)',
  borderRadius: '2px',
  padding: '6px 20px',
  marginBottom: '32px',
  background: 'rgba(201,168,76,0.05)',
  backdropFilter: 'blur(10px)',
  animation: 'fadeIn 1s ease forwards',
});

export const PulseDot = styled(Box)<{ delay?: string }>(({ delay = '0s' }) => ({
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: '#C9A84C',
  boxShadow: '0 0 8px #C9A84C',
  animation: `borderPulse 2s ${delay} infinite`,
}));

export const BadgeText = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.7rem',
  letterSpacing: '0.2em',
  color: '#C9A84C',
  textTransform: 'uppercase',
});

const titleBase = {
  fontWeight: 900,
  lineHeight: 1.05,
  textShadow: 'none',
  animation: 'floatUp 0.9s ease forwards',
};

export const TitleGold = styled(Typography)(({ theme }) => ({
  ...titleBase,
  marginBottom: theme.spacing(1),
  fontSize: '2.4rem',
  background: 'linear-gradient(180deg, #F0E0A0 0%, #C9A84C 50%, #8B6914 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.4))',

  [theme.breakpoints.up('sm')]: { fontSize: '3.5rem' },
  [theme.breakpoints.up('md')]: { fontSize: '5rem' },
  [theme.breakpoints.up('lg')]: { fontSize: '6rem' },
}));

export const TitlePurple = styled(Typography)(({ theme }) => ({
  ...titleBase,
  marginBottom: theme.spacing(3),
  opacity: 0,
  animationDelay: '0.15s',
  animationFillMode: 'forwards',
  fontSize: '2.4rem',
  background: 'linear-gradient(180deg, #D8D0E8 0%, #A688CC 50%, #5C3A8C 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 0 30px rgba(123,79,166,0.5))',

  [theme.breakpoints.up('sm')]: { fontSize: '3.5rem' },
  [theme.breakpoints.up('md')]: { fontSize: '5rem' },
  [theme.breakpoints.up('lg')]: { fontSize: '6rem' },
}));

export const DecorDivider = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  maxWidth: 500,
  margin: '0 auto 24px',
  animation: 'floatUp 0.9s 0.3s ease forwards',
  opacity: 0,
  animationFillMode: 'forwards',
});

export const DividerLine = styled(Box)<{ side: 'left' | 'right' }>(
  ({ side }) => ({
    flex: 1,
    height: '1px',
    background:
      side === 'left'
        ? 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))'
        : 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)',
  })
);

export const Kicker = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.7rem',
  letterSpacing: '0.25em',
  color: '#9B8E7A',
  textTransform: 'uppercase',
  marginBottom: theme.spacing(4),
  animation: 'floatUp 0.9s 0.4s ease forwards',
  opacity: 0,
  animationFillMode: 'forwards',

  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem',
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontFamily: '"Crimson Text", serif',
  fontSize: '1.1rem',
  fontStyle: 'italic',
  color: '#B8A890',
  maxWidth: 680,
  margin: '0 auto',
  marginBottom: theme.spacing(6),
  lineHeight: 1.7,
  animation: 'floatUp 0.9s 0.5s ease forwards',
  opacity: 0,
  animationFillMode: 'forwards',

  [theme.breakpoints.up('sm')]: { fontSize: '1.3rem' },
  [theme.breakpoints.up('md')]: { fontSize: '1.5rem' },
}));

export const StatsRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  justifyContent: 'center',
  marginTop: theme.spacing(17),
  flexWrap: 'wrap',
  animation: 'floatUp 0.9s 0.8s ease forwards',
  opacity: 0,
  animationFillMode: 'forwards',

  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(6),
  },
}));

export const StatItem = styled(Box)({
  textAlign: 'center',
});

export const StatValue = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cinzel Decorative", serif',
  fontSize: '1.6rem',
  color: '#C9A84C',
  lineHeight: 1,
  filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.4))',

  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}));

export const StatLabel = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '0.75rem',
  letterSpacing: '0.15em',
  color: '#6B5E4E',
  textTransform: 'uppercase',
  marginTop: 8,
});

export const BottomFade = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '200px',
  background: 'linear-gradient(0deg, #080C14 0%, transparent 100%)',
  pointerEvents: 'none',
});
