import { Box, Typography, Container, IconButton, Drawer, List, ListItem } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const navLinks = [
  { label: 'Gracze', href: '#players' },
  { label: 'Ranking', href: '#rankings' },
  { label: 'Drabinka', href: '#bracket' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 100,
          background: 'rgba(8,12,20,0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            py: 1.5,
          }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{
                width: 36, height: 36,
                background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))',
                border: '1px solid rgba(201,168,76,0.4)',
                borderRadius: '3px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 10px rgba(201,168,76,0.2)',
              }}>
                {/* <Typography sx={{ fontSize: '1rem', lineHeight: 1, color: '#C9A84C' }}>⚔</Typography> */}
                <img src="/favicon.png" alt="Logo" />
              </Box>
              <Box>
                <Typography sx={{
                  fontFamily: '"Cinzel Decorative", serif',
                  fontSize: '0.95rem', fontWeight: 700,
                  color: '#C9A84C',
                  lineHeight: 1.1,
                  letterSpacing: '0.05em',
                  filter: 'drop-shadow(0 0 6px rgba(201,168,76,0.3))',
                }}>Kroniki</Typography>
                <Typography sx={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '0.8rem', letterSpacing: '0.2em',
                  color: '#ac6fff', textTransform: 'uppercase',
                }}>Ciemnogrodu</Typography>
              </Box>
            </Box>

            {/* Desktop nav links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Box
                  key={link.label}
                  component="button"
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: '"Cinzel", serif',
                    fontSize: '0.8rem', letterSpacing: '0.15em',
                    color: '#9B8E7A', textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    position: 'relative', pb: 0.5,
                    '&::after': {
                      content: '""', position: 'absolute',
                      bottom: 0, left: 0, right: 0, height: '1px',
                      background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      color: '#C9A84C',
                      '&::after': { transform: 'scaleX(1)' },
                    },
                  }}
                >{link.label}</Box>
              ))}

              <Box sx={{
                px: 2, py: 0.6,
                border: '1px solid rgba(201,168,76,0.35)',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(201,168,76,0.1)',
                  boxShadow: '0 0 12px rgba(201,168,76,0.2)',
                },
              }}>
                <Typography sx={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '0.75rem', letterSpacing: '0.12em',
                  color: '#C9A84C', textTransform: 'uppercase',
                }}>Sezon I</Typography>
              </Box>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#C9A84C' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            background: 'rgba(8,12,20,0.98)',
            borderLeft: '1px solid rgba(201,168,76,0.2)',
            width: 260,
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#C9A84C' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {navLinks.map((link) => (
            <ListItem
              key={link.label}
              component="button"
              onClick={() => handleNavClick(link.href)}
              sx={{
                background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: '1px solid rgba(201,168,76,0.08)',
                py: 2, px: 0, width: '100%', textAlign: 'left',
                fontFamily: '"Cinzel", serif',
                fontSize: '0.75rem', letterSpacing: '0.15em',
                color: '#9B8E7A', textTransform: 'uppercase',
                transition: 'color 0.2s ease',
                '&:hover': { color: '#C9A84C' },
              }}
            >{link.label}</ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
