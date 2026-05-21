import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

export function RegisterForm({ onSwitch }: { onSwitch?: () => void }) {
  const [form, setForm] = useState({ username: '', password: '', confirm: '' })

  return (
    <Box sx={{ maxWidth: 350, mx: 'auto', mt: 8, p: 4, background: 'rgba(13,21,37,0.95)', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#C9A84C', fontFamily: '"Cinzel", serif' }}>Rejestracja</Typography>
      <TextField
        label="Nazwa użytkownika"
        fullWidth
        margin="normal"
        value={form.username}
        onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
      />
      <TextField
        label="Hasło"
        type="password"
        fullWidth
        margin="normal"
        value={form.password}
        onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
      />
      <TextField
        label="Powtórz hasło"
        type="password"
        fullWidth
        margin="normal"
        value={form.confirm}
        onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Zarejestruj</Button>
      <Button fullWidth sx={{ mt: 1, color: '#C9A84C' }} onClick={onSwitch}>Masz już konto? Zaloguj się</Button>
    </Box>
  )
}
