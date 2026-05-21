import {
  Box, Typography, Container,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material'
import { rankedPlayers } from '../data/players'
import * as Styled from './GlobalStyles.styled'
import { Divider } from '../components/Divider'

const rankIcons: Record<number, { color: string; label: string }> = {
  1: { color: '#FFD700', label: 'Wielki Archon' },
  2: { color: '#C0C0C0', label: 'Wódz Wojenny' },
  3: { color: '#CD7F32', label: 'Mistrz Bitewnej Magii' },
}

function getRankStyle(rank: number) {
  if (rank === 1) return { bg: 'rgba(255,215,0,0.05)', border: 'rgba(255,215,0,0.15)' }
  if (rank === 2) return { bg: 'rgba(192,192,192,0.04)', border: 'rgba(192,192,192,0.1)' }
  if (rank === 3) return { bg: 'rgba(205,127,50,0.04)', border: 'rgba(205,127,50,0.1)' }
  return { bg: 'transparent', border: 'rgba(201,168,76,0.06)' }
}

export function RankingsSection() {
  const sortedPlayers = [...rankedPlayers].sort((a, b) => b.points - a.points);

  return (
    <Box
      component="section"
      id="rankings"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: 'linear-gradient(180deg, #080C14 0%, #0C1422 50%, #080C14 100%)',
      }}
    >
      {/* Decorative columns */}
      <Box sx={{
        position: 'absolute', left: 0, top: '20%', bottom: '20%',
        width: '3px',
        background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', right: 0, top: '20%', bottom: '20%',
        width: '3px',
        background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Section header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Styled.SectionMiniHeader>
            ✦ Sala Chwały ✦
          </Styled.SectionMiniHeader>
          <Styled.SectionHeader variant="h2">
            Ranking
          </Styled.SectionHeader>
          <Divider />
          <Styled.SectionSubtitle>
            Wieczny kodeks zapisuje każdą bitwę. Chwała trwa wiecznie.
          </Styled.SectionSubtitle>
        </Box>

        {/* Table container */}
        <Box sx={{
          position: 'relative',
          background: 'linear-gradient(145deg, #0F1A2E 0%, #0D1525 100%)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 0 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(0,0,0,0.3)',
          '&::before': {
            content: '""',
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)',
          },
          '&::after': {
            content: '""',
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
          },
        }}>
          {/* Corner ornaments */}
          {[
            { top: 0, left: 0, borderTop: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' },
            { top: 0, right: 0, borderTop: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' },
            { bottom: 0, left: 0, borderBottom: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' },
            { bottom: 0, right: 0, borderBottom: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' },
          ].map((corner, i) => (
            <Box key={i} sx={{
              position: 'absolute', ...corner, width: 20, height: 20, zIndex: 1,
            }} />
          ))}

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{
                  background: 'linear-gradient(90deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)',
                }}>
                  {['Rank', 'Czempion', 'Wygrane', 'Przegrane', 'Wskaźnik Wygranych', 'Punkty'].map((col) => (
                    <TableCell key={col} sx={{
                      fontFamily: '"Cinzel", serif',
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      color: '#C9A84C',
                      textTransform: 'uppercase',
                      py: 2.5,
                      borderBottom: '1px solid rgba(201,168,76,0.2)',
                      whiteSpace: 'nowrap',
                    }}>
                      {col}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedPlayers.map((player, idx) => {
                  const rank = idx + 1
                  const style = getRankStyle(rank)
                  const winRateNum = parseFloat(player.winRate)
                  const ri = rankIcons[rank]

                  return (
                    <TableRow
                      key={player.id}
                      sx={{
                        background: style.bg,
                        borderLeft: rank <= 3 ? `3px solid ${ri.color}40` : '3px solid transparent',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        '&:hover': {
                          background: 'rgba(201,168,76,0.06)',
                          '& td': { color: '#E8DCC8' },
                        },
                        '& td': {
                          borderBottom: `1px solid ${style.border}`,
                          py: 2,
                          transition: 'color 0.3s ease',
                        },
                      }}
                    >
                      {/* Rank */}
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {ri ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Box sx={{
                                width: 28, height: 28,
                                background: `${ri.color}15`,
                                border: `1px solid ${ri.color}40`,
                                borderRadius: '2px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                              }}>
                                <Typography sx={{
                                  fontFamily: '"Cinzel", serif',
                                  fontSize: '0.75rem', fontWeight: 700,
                                  color: ri.color,
                                  filter: `drop-shadow(0 0 4px ${ri.color})`,
                                }}>{rank}</Typography>
                              </Box>
                            </Box>
                          ) : (
                            <Typography sx={{
                              fontFamily: '"Cinzel", serif',
                              fontSize: '0.8rem', color: '#5B4E3E', fontWeight: 500,
                              pl: 0.5,
                            }}>#{rank}</Typography>
                          )}
                        </Box>
                      </TableCell>

                      {/* Champion */}
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Box sx={{
                            width: 8, height: 8, borderRadius: '1px',
                            background: ri ? ri.color : 'rgba(201,168,76,0.3)',
                            boxShadow: ri ? `0 0 6px ${ri.color}` : 'none',
                          }} />
                          <Typography sx={{
                            fontFamily: '"Cinzel", serif',
                            fontSize: '0.9rem',
                            color: rank <= 3 ? '#E8DCC8' : '#B8A890',
                            fontWeight: rank <= 3 ? 600 : 400,
                          }}>{player.nickname}</Typography>
                        </Box>
                      </TableCell>

                      {/* Class */}
                      {/* <TableCell>
                        <Typography sx={{
                          fontFamily: '"Crimson Text", serif',
                          fontSize: '0.95rem', fontStyle: 'italic',
                          color: '#7B6E5E',
                        }}>{player.faction}</Typography>
                      </TableCell> */}

                      {/* Wins */}
                      <TableCell>
                        <Typography sx={{
                          fontFamily: '"Cinzel", serif',
                          fontSize: '0.9rem', color: '#27AE60',
                          filter: 'drop-shadow(0 0 4px rgba(39,174,96,0.4))',
                        }}>{player.wins.toLocaleString()}</Typography>
                      </TableCell>

                      {/* Losses */}
                      <TableCell>
                        <Typography sx={{
                          fontFamily: '"Cinzel", serif',
                          fontSize: '0.9rem', color: '#C0392B',
                          filter: 'drop-shadow(0 0 4px rgba(192,57,43,0.3))',
                        }}>{player.losses.toLocaleString()}</Typography>
                      </TableCell>

                      {/* Win Rate */}
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 100 }}>
                          <Box sx={{
                            flex: 1, height: '4px', borderRadius: '2px',
                            background: 'rgba(201,168,76,0.1)',
                            overflow: 'hidden',
                          }}>
                            <Box sx={{
                              height: '100%',
                              width: `${winRateNum}%`,
                              background: winRateNum >= 75 ? 'linear-gradient(90deg, #27AE60, #2ECC71)'
                                : winRateNum >= 60 ? 'linear-gradient(90deg, #C9A84C, #E8C97A)'
                                : 'linear-gradient(90deg, #C0392B, #E74C3C)',
                              borderRadius: '2px',
                            }} />
                          </Box>
                          <Typography sx={{
                            fontFamily: '"Cinzel", serif',
                            fontSize: '0.8rem',
                            color: winRateNum >= 75 ? '#27AE60' : winRateNum >= 60 ? '#C9A84C' : '#C0392B',
                            minWidth: 45,
                          }}>{player.winRate}%</Typography>
                        </Box>
                      </TableCell>

                      {/* Points */}
                      <TableCell>
                        <Typography sx={{
                          fontFamily: '"Cinzel Decorative", serif',
                          fontSize: '0.9rem',
                          color: '#C9A84C',
                          filter: rank === 1 ? 'drop-shadow(0 0 6px rgba(201,168,76,0.6))' : 'none',
                          fontWeight: rank <= 3 ? 700 : 400,
                        }}>{player.points.toLocaleString()}</Typography>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Legend */}
        <Box sx={{
          display: 'flex', gap: 3, mt: 3, justifyContent: 'center', flexWrap: 'wrap',
        }}>
          {Object.entries(rankIcons).map(([rank, data]) => (
            <Box key={rank} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{
                width: 10, height: 10, borderRadius: '1px',
                background: data.color, boxShadow: `0 0 6px ${data.color}`,
              }} />
              <Typography sx={{
                fontFamily: '"Cinzel", serif',
                fontSize: '0.65rem', letterSpacing: '0.1em',
                color: '#7B6E5E', textTransform: 'uppercase',
              }}>Rank {rank} — {data.label}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
