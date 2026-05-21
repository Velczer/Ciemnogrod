import { Box } from '@mui/material'

export function Divider() {
  return (  
        <Box sx={{
            display: 'flex', alignItems: 'center', gap: 2,
            maxWidth: '400px', mx: 'auto', mb: 2,
        }}>
            <Box sx={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
            <Box sx={{ color: '#C9A84C', fontSize: '0.8rem' }}>◈</Box>
            <Box sx={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
        </Box>
    )
}