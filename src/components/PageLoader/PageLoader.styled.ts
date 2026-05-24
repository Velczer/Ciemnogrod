import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const loading = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(220%); }
`;

const daggerFloatLeft = keyframes`
  0%, 100% {
    transform: rotate(90deg) translateY(0px) scale(1);
  }

  50% {
    transform: rotate(110deg) translateY(-4px) scale(1.05);
  }
`;

const daggerFloatRight = keyframes`
  0%, 100% {
    transform: scaleX(-1) rotate(90deg) translateY(0px) scale(1);
  }

  50% {
    transform: scaleX(-1) rotate(110deg) translateY(-4px) scale(1.05);
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    opacity: .45;
    filter: blur(40px);
  }

  50% {
    opacity: 1;
    filter: blur(60px);
  }
`;

export const LoaderRoot = styled(Box)({
  minHeight: '100vh',
  background:
    'radial-gradient(circle at 50% 40%, rgba(201,168,76,0.12), transparent 35%), linear-gradient(180deg, #060A12 0%, #080C14 60%, #0A1020 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
  color: '#C9A84C',
});

export const Glow = styled(Box)({
  position: 'absolute',
  width: 280,
  height: 280,
  borderRadius: '50%',
  background: 'rgba(201,168,76,0.08)',
  filter: 'blur(40px)',
  animation: `${glowPulse} 3s ease-in-out infinite`,
});

export const Swords = styled(Box)({
  position: 'relative',
  width: 180,
  height: 110,
  marginBottom: 90,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
});

export const SwordLeft = styled(Typography)({
  position: 'absolute',
  fontSize: '4rem',
  lineHeight: 1,
  color: '#C9A84C',
  filter: 'drop-shadow(0 0 16px rgba(201,168,76,0.9))',
  animation: `${daggerFloatLeft} 1.25s ease-in-out infinite`,
  transformOrigin: 'center bottom',
  userSelect: 'none',
  marginRight: 35,
});

export const SwordRight = styled(Typography)({
  position: 'absolute',
  fontSize: '4rem',
  lineHeight: 1,
  color: '#A688CC',
  filter: 'drop-shadow(0 0 16px rgba(123,79,166,0.9))',
  animation: `${daggerFloatRight} 1.25s ease-in-out infinite`,
  transformOrigin: 'center bottom',
  userSelect: 'none',
  marginLeft: 35,
});

export const Title = styled(Typography)({
  fontFamily: '"Cinzel", serif',
  fontSize: '1.15rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#E8DCC8',
  marginTop: 0,
  zIndex: 1,
});

export const Subtitle = styled(Typography)({
  fontFamily: '"Crimson Text", serif',
  fontSize: '1rem',
  fontStyle: 'italic',
  color: '#8C7C68',
  marginTop: 8,
  zIndex: 1,
});

export const Bar = styled(Box)({
  width: 240,
  height: 3,
  marginTop: 28,
  background: 'rgba(201,168,76,0.12)',
  overflow: 'hidden',
  borderRadius: 2,
  zIndex: 1,
});

export const BarFill = styled(Box)({
  width: '45%',
  height: '100%',
  background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
  animation: `${loading} 1.2s ease-in-out infinite`,
});
