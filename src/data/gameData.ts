export const factions: Record<string, { label: string; primary: string; glow: string }> = {
  Temple: { label: "Świątynia", primary: '#C9A84C', glow: 'rgba(201,168,76,0.5)' },
  Necropolis: { label: "Nekropolia", primary: '#7B4FA6', glow: 'rgba(123,79,166,0.5)' },
  Grove: { label: "Knieja", primary: '#27AE60', glow: 'rgba(39,174,96,0.5)' },
  Dungeon: { label: "Loch", primary: '#E67E22', glow: 'rgba(230,126,34,0.5)' },
  Hive: { label: "Rój", primary: '#C0392B', glow: 'rgba(192,57,43,0.5)' },
  Schisma: { label: "Schisma", primary: '#4A8FCC', glow: 'rgba(74,143,204,0.5)' },
}

export interface BracketMatch {
  id: string
  player1: string
  player2: string
  score1?: number
  score2?: number
  winner?: string
  status: 'completed' | 'live' | 'upcoming'
}

export interface BracketRound {
  name: string
  matches: BracketMatch[]
}

export const bracket: BracketRound[] = [
  {
    name: 'Ćwierćfinały',
    matches: [
      { id: 'qf1', player1: 'FIFI', player2: 'Areczek', score1: 2, score2: 1, winner: 'FIFI', status: 'completed' },
      { id: 'qf2', player1: 'Velczer', player2: 'Damianejro',  status: 'live' },
      { id: 'qf3', player1: 'STIGMA', player2: 'Bianco',  status: 'upcoming' },
    ],
  },
  {
    name: 'Półfinały',
    matches: [
      { id: 'sf1', player1: 'FIFI', player2: 'TBD', status: 'upcoming' },
      { id: 'sf2', player1: 'TBD', player2: 'TBD', status: 'upcoming' },
    ],
  },
  {
    name: 'Finał',
    matches: [
      { id: 'gf1', player1: 'TBD', player2: 'TBD', status: 'upcoming' },
    ],
  },
]
