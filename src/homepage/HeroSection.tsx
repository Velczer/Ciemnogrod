import { Box, Typography, Button, Container } from '@mui/material'
import { SxProps, Theme } from '@mui/material/styles'

const particlePositions = [
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
]

const glyphPositions = [
  { left: '5%', top: '15%', text: '⚔', size: '2rem', opacity: 0.06 },
  { right: '8%', top: '25%', text: '✦', size: '3rem', opacity: 0.04 },
  { left: '12%', bottom: '20%', text: '☽', size: '2.5rem', opacity: 0.05 },
  { right: '15%', bottom: '30%', text: '◈', size: '2rem', opacity: 0.06 },
  { left: '45%', top: '8%', text: '⌘', size: '2.5rem', opacity: 0.04 },
  { right: '35%', bottom: '12%', text: '☠', size: '2rem', opacity: 0.05 },
]

export function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
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
      }}
    >
      {/* Grid overlay */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at center, black 30%, transparent 100%)',
      }} />

      {/* Decorative floating runes */}
      {glyphPositions.map((g, i) => (
        <Box key={i} sx={{
          position: 'absolute', pointerEvents: 'none', zIndex: 0,
          left: g.left, right: (g as any).right,
          top: g.top, bottom: (g as any).bottom,
          fontSize: g.size, opacity: g.opacity,
          color: '#C9A84C', userSelect: 'none',
          fontFamily: 'serif',
        }}>{g.text}</Box>
      ))}

      {/* Floating particles */}
      {particlePositions.map((p, i) => (
        <Box key={i} sx={{
          position: 'absolute', pointerEvents: 'none', zIndex: 0,
          left: p.left, top: p.top,
          width: '3px', height: '3px',
          borderRadius: '50%',
          background: i % 3 === 0 ? '#C9A84C' : i % 3 === 1 ? '#7B4FA6' : '#E8C97A',
          animation: `particleDrift ${p.duration} ${p.delay} infinite ease-in-out`,
          boxShadow: `0 0 6px currentColor`,
        }} />
      ))}

      {/* Center glow orb */}
      <Box sx={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Top border accent */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 30%, rgba(201,168,76,1) 50%, rgba(201,168,76,0.6) 70%, transparent 100%)',
        boxShadow: '0 0 20px rgba(201,168,76,0.4)',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: 12 }}>
        {/* Pre-title badge */}
        <Box sx={{
          display: 'inline-flex', alignItems: 'center', gap: 1.5,
          border: '1px solid rgba(201,168,76,0.3)',
          borderRadius: '2px',
          px: 2.5, py: 0.75, mb: 4,
          background: 'rgba(201,168,76,0.05)',
          backdropFilter: 'blur(10px)',
          animation: 'fadeIn 1s ease forwards',
        }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C', boxShadow: '0 0 8px #C9A84C', animation: 'borderPulse 2s infinite' }} />
          <Typography sx={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.7rem', letterSpacing: '0.2em',
            color: '#C9A84C', textTransform: 'uppercase',
          }}>
            Sezon I · Grand Tournament · Live Now
          </Typography>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C', boxShadow: '0 0 8px #C9A84C', animation: 'borderPulse 2s 1s infinite' }} />
        </Box>

        {/* Main title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.4rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
            fontWeight: 900,
            lineHeight: 1.05,
            mb: 1,
            background: 'linear-gradient(180deg, #F0E0A0 0%, #C9A84C 50%, #8B6914 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.4))',
            animation: 'floatUp 0.9s ease forwards',
          }}
        >
          Kroniki
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.4rem', sm: '3.5rem', md: '5rem', lg: '6rem' },
            fontWeight: 900,
            lineHeight: 1.05,
            mb: 3,
            background: 'linear-gradient(180deg, #D8D0E8 0%, #A688CC 50%, #5C3A8C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 30px rgba(123,79,166,0.5))',
            animation: 'floatUp 0.9s 0.15s ease forwards',
            opacity: 0,
            animationFillMode: 'forwards',
          }}
        >
          Ciemnogrodu
        </Typography>

        {/* Decorative subtitle divider */}
        <Box sx={{
          display: 'flex', alignItems: 'center', gap: 2,
          maxWidth: '500px', mx: 'auto', mb: 3,
          animation: 'floatUp 0.9s 0.3s ease forwards', opacity: 0, animationFillMode: 'forwards',
        }}>
          <Box sx={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))' }} />
          <Typography sx={{ color: '#C9A84C', fontSize: '1.2rem', lineHeight: 1 }}>✦</Typography>
          <Box sx={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }} />
        </Box>

        <Typography
          sx={{
            fontFamily: '"Cinzel", serif',
            fontSize: { xs: '0.7rem', sm: '0.8rem' },
            letterSpacing: '0.25em',
            color: '#9B8E7A',
            textTransform: 'uppercase',
            mb: 4,
            animation: 'floatUp 0.9s 0.4s ease forwards', opacity: 0, animationFillMode: 'forwards',
          }}
        >
          Heroes Olden Era · Season I · Grand Tournament
        </Typography>

        <Typography
          sx={{
            fontFamily: '"Crimson Text", serif',
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            fontStyle: 'italic',
            color: '#B8A890',
            maxWidth: '680px',
            mx: 'auto',
            mb: 6,
            lineHeight: 1.7,
            animation: 'floatUp 0.9s 0.5s ease forwards', opacity: 0, animationFillMode: 'forwards',
          }}
        >
          Sześciu czempionów staje u progu legendy. Tylko jeden wzniesie się, by objąć panowanie nad pradawnymi królestwami. Stara era rozpoczyna się tej nocy.
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{
          display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap',
          animation: 'floatUp 0.9s 0.65s ease forwards', opacity: 0, animationFillMode: 'forwards',
        }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #8B6914 100%)',
              color: '#080C14',
              fontWeight: 700,
              fontSize: '0.85rem',
              px: 5, py: 1.8,
              border: '1px solid rgba(201,168,76,0.4)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&::before': {
                content: '""',
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                transform: 'translateX(-100%)',
                transition: 'transform 0.6s ease',
              },
              '&:hover': {
                background: 'linear-gradient(135deg, #E8C97A 0%, #C9A84C 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 30px rgba(201,168,76,0.5)',
                '&::before': { transform: 'translateX(100%)' },
              },
            }}
          >
            Enter the Arena
          </Button>
          <Button
            href='#bracket'
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'rgba(201,168,76,0.4)',
              color: '#C9A84C',
              fontSize: '0.85rem',
              px: 5, py: 1.8,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: '#C9A84C',
                background: 'rgba(201,168,76,0.08)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 30px rgba(201,168,76,0.2)',
              },
            }}
          >
            Zobacz drabinkę
          </Button>
        </Box>

        {/* Stats row */}
        <Box sx={{
          display: 'flex', gap: { xs: 3, md: 6 }, justifyContent: 'center',
          mt: 10, flexWrap: 'wrap',
          animation: 'floatUp 0.9s 0.8s ease forwards', opacity: 0, animationFillMode: 'forwards',
        }}>
          {[
            { value: '6', label: 'Czempionów' },
            { value: '4,218', label: 'Najlepszy wynik' },
            { value: '847', label: 'Najwięcej zwycięstw' },
            { value: 'I', label: 'Sezon' },
          ].map((stat) => (
            <Box key={stat.label} sx={{ textAlign: 'center' }}>
              <Typography sx={{
                fontFamily: '"Cinzel Decorative", serif',
                fontSize: { xs: '1.6rem', md: '2rem' },
                color: '#C9A84C',
                lineHeight: 1,
                filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.4))',
              }}>{stat.value}</Typography>
              <Typography sx={{
                fontFamily: '"Cinzel", serif',
                fontSize: '0.75rem', letterSpacing: '0.15em',
                color: '#6B5E4E', textTransform: 'uppercase', mt: 0.5,
              }}>{stat.label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Bottom fade */}
      <Box sx={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
        background: 'linear-gradient(0deg, #080C14 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
    </Box>
  )
}
