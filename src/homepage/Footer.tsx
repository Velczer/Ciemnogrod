import { Box, Typography, Container } from '@mui/material'

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        background: 'linear-gradient(180deg, #080C14 0%, #050810 100%)',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        position: 'relative',
      }}
    >
      <Box sx={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 200, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)',
      }} />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          {/* Logo */}
          <Typography sx={{
            fontFamily: '"Cinzel Decorative", serif',
            fontSize: '1.5rem', fontWeight: 700,
            color: 'rgba(201,168,76,0.6)',
            letterSpacing: '0.1em',
            mb: 0.5,
          }}>
            Kroniki Ciemnogrodu
          </Typography>
          <Typography sx={{
            fontFamily: '"Cinzel", serif',
            fontSize: '0.85rem', letterSpacing: '0.3em',
            color: '#ac6fff', textTransform: 'uppercase',
            mb: 3,
          }}>
            Olden Era · Sezon I
          </Typography>

          {/* Divider */}
          <Box sx={{
            display: 'flex', alignItems: 'center', gap: 2,
            maxWidth: 300, mx: 'auto', mb: 3,
          }}>
            <Box sx={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.15)' }} />
            <Typography sx={{ color: 'rgba(201,168,76,0.3)', fontSize: '0.7rem' }}>✦</Typography>
            <Box sx={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.15)' }} />
          </Box>

          <Typography sx={{
            fontFamily: '"Crimson Text", serif',
            fontSize: '0.95rem', fontStyle: 'italic',
            color: '#7B6E5E',
          }}>
            "W Starej Erze chwałę zdobywało się krwią i strategią."
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
