import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import '../styles.css';

const fantasyTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C9A84C',
      light: '#E8C97A',
      dark: '#8B6914',
    },
    secondary: {
      main: '#7B4FA6',
      light: '#A678CC',
      dark: '#4A2970',
    },
    background: {
      default: '#080C14',
      paper: '#0D1525',
    },
    text: {
      primary: '#E8DCC8',
      secondary: '#9B8E7A',
    },
    error: { main: '#C0392B' },
    success: { main: '#27AE60' },
  },
  typography: {
    fontFamily: '"Cinzel", "Georgia", serif',
    h1: {
      fontFamily: '"Cinzel Decorative", "Cinzel", serif',
      letterSpacing: '0.05em',
    },
    h2: {
      fontFamily: '"Cinzel Decorative", "Cinzel", serif',
      letterSpacing: '0.04em',
    },
    h3: { fontFamily: '"Cinzel", serif', letterSpacing: '0.03em' },
    h4: { fontFamily: '"Cinzel", serif', letterSpacing: '0.02em' },
    body1: {
      fontFamily: '"Crimson Text", "Georgia", serif',
      fontSize: '1.05rem',
    },
    body2: { fontFamily: '"Crimson Text", "Georgia", serif' },
    button: { fontFamily: '"Cinzel", serif', letterSpacing: '0.1em' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          textTransform: 'uppercase',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          border: '1px solid rgba(201, 168, 76, 0.15)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(201, 168, 76, 0.1)',
          fontFamily: '"Crimson Text", Georgia, serif',
        },
        head: {
          fontFamily: '"Cinzel", serif',
          letterSpacing: '0.08em',
          fontSize: '0.75rem',
          color: '#C9A84C',
          textTransform: 'uppercase',
        },
      },
    },
  },
});

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Kroniki Ciemnogrodu' },
      { name: 'theme-color', content: '#080C14' },
      { name: 'description', content: 'Bitwa o dominację w Olden Erze.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      { rel: 'icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cinzel+Decorative:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&display=swap',
      },
    ],
  }),
  notFoundComponent: () => (
    <div style={{ padding: 40, color: 'white' }}>
      <h1>404</h1>
      <p>Ta strona nie istnieje</p>
    </div>
  ),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider theme={fantasyTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
