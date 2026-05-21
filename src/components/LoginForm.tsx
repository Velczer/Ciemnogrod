import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

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


export function LoginForm({ onSwitch }: { onSwitch?: () => void }) {
  const [form, setForm] = useState({ username: '', password: '' })

  return (
    <Box sx={{
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
          content: '""', position: 'absolute',
          left: 0,
          right: 0, top: 0, bottom: 0,
          width: '100%', height: '100%',
          background: '#050505',
          backgroundImage: 'url(/logo.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          opacity: 0.4
        },
    }}>
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
    
    <Box sx={{
      maxWidth: 400,
      mx: 'auto',
      mt: 10,
      p: 4,
      background: 'rgba(13,21,37,0.95)',
      borderRadius: 3,
      boxShadow: '0 8px 32px rgba(201,168,76,0.10)',
      border: '1px solid rgba(201,168,76,0.18)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      '::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,79,166,0.10) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none',
      },
    }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#C9A84C', fontFamily: '"Cinzel", serif', letterSpacing: '0.12em', fontWeight: 700, textShadow: '0 2px 12px #0A1020' }}>Logowanie</Typography>
      <TextField
        label="Nazwa użytkownika"
        fullWidth
        margin="normal"
        value={form.username}
        onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
        sx={{
          input: {
            color: '#E8DCC8',
            fontFamily: '"Cinzel", serif',
            letterSpacing: '0.08em',
          },
          label: { color: '#C9A84C' },
        }}
      />
      <TextField
        label="Hasło"
        type="password"
        fullWidth
        margin="normal"
        value={form.password}
        onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
        sx={{
          input: {
            color: '#E8DCC8',
            fontFamily: '"Cinzel", serif',
            letterSpacing: '0.08em',
          },
          label: { color: '#C9A84C' },
        }}
      />
      <Button variant="contained" color="primary" fullWidth sx={{
        mt: 2,
        background: 'linear-gradient(135deg, #C9A84C 0%, #8B6914 100%)',
        color: '#080C14',
        fontWeight: 700,
        fontFamily: '"Cinzel", serif',
        fontSize: '1rem',
        border: '1px solid rgba(201,168,76,0.4)',
        boxShadow: '0 4px 16px rgba(201,168,76,0.10)',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'linear-gradient(135deg, #E8C97A 0%, #C9A84C 100%)',
          color: '#080C14',
          boxShadow: '0 8px 30px rgba(201,168,76,0.18)',
        },
      }}>Zaloguj</Button>
      <Button fullWidth sx={{ mt: 2, color: '#C9A84C', fontFamily: '"Cinzel", serif', fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', '&:hover': { color: '#E8C97A' } }} onClick={onSwitch}>Nie masz konta? Zarejestruj się</Button>
    </Box>
    </Box>
  )
}