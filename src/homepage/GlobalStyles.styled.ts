import Typography from '@mui/material/Typography';

import { styled as MuiStyled } from '@mui/material/styles';

export const SectionMiniHeader = MuiStyled(Typography)(() => ({
    fontFamily: '"Cinzel", serif',
    fontSize: '0.8rem', 
    letterSpacing: '0.2em',
    color: '#C9A84C', 
    textTransform: 'uppercase',
    marginBottom: 12,
}))

export const SectionHeader = MuiStyled(Typography)(({theme}) => ({
    fontFamily: '"Cinzel Decorative", serif',
    fontSize: '2rem', 
    fontWeight: 700,
    color: '#E8DCC8',
    marginBottom: 12,
    [theme.breakpoints.up('md')]: {
        fontSize: '2.8rem',
    }
}))

export const SectionSubtitle = MuiStyled(Typography)(() => ({
    fontFamily: '"Crimson Text", serif',
    fontSize: '1.2rem', 
    fontStyle: 'italic',
    color: '#7B6E5E', 
    maxWidth: '600px',
    margin: 'auto',
}))
