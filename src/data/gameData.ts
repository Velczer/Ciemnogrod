export interface Player {
  id: number
  nickname: string
  wins: number
  losses: number
  points: number
  faction: string
  rank: number
  emblem: string
}

export const players: Player[] = [
  {
    id: 1,
    nickname: 'Velczer',
    wins: 847,
    losses: 203,
    points: 4218,
    faction: 'Hive',
    rank: 1,
    emblem: 'V',
  },
  {
    id: 2,
    nickname: 'FIFI',
    wins: 791,
    losses: 189,
    points: 3974,
    faction: 'Necropolis',
    rank: 2,
    emblem: 'F',
  },
  {
    id: 3,
    nickname: 'Areczek',
    wins: 723,
    losses: 241,
    points: 3601,
    faction: 'Shisma',
    rank: 3,
    emblem: 'A',
  },
  {
    id: 4,
    nickname: 'STIGMA',
    wins: 698,
    losses: 177,
    points: 3489,
    faction: 'Temple',
    rank: 4,
    emblem: 'S',
  },
  {
    id: 5,
    nickname: 'Bianco',
    wins: 654,
    losses: 298,
    points: 3102,
    faction: 'Temple',
    rank: 5,
    emblem: 'B',
  },
  {
    id: 6,
    nickname: 'Damianejro',
    wins: 612,
    losses: 265,
    points: 2988,
    faction: 'Hive',
    rank: 6,
    emblem: 'D',
  },
  // {
  //   id: 7,
  //   nickname: 'StormCaller',
  //   wins: 589,
  //   losses: 231,
  //   points: 2847,
  //   faction: 'Temple',
  //   rank: 7,
  //   emblem: 'F',
  // },
  // {
  //   id: 8,
  //   nickname: 'BoneWeaver',
  //   wins: 541,
  //   losses: 312,
  //   points: 2631,
  //   faction: 'Necropolis',
  //   rank: 8,
  //   emblem: 'N',
  // },
]

export const factions: Record<string, { label: string; primary: string; glow: string }> = {
  Temple: { label: "Świątynia", primary: '#C9A84C', glow: 'rgba(201,168,76,0.5)' },
  Necropolis: { label: "Nekropolia", primary: '#7B4FA6', glow: 'rgba(123,79,166,0.5)' },
  Grove: { label: "Knieja", primary: '#27AE60', glow: 'rgba(39,174,96,0.5)' },
  Dungeon: { label: "Loch", primary: '#E67E22', glow: 'rgba(230,126,34,0.5)' },
  Hive: { label: "Rój", primary: '#C0392B', glow: 'rgba(192,57,43,0.5)' },
  Shisma: { label: "Shisma", primary: '#4A8FCC', glow: 'rgba(74,143,204,0.5)' },
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
      { id: 'qf1', player1: 'Velczer', player2: 'Areczek', score1: 2, score2: 1, winner: 'Velczer', status: 'completed' },
      { id: 'qf2', player1: 'FIFI', player2: 'Damianejro', score1: 2, score2: 1, winner: 'FIFI', status: 'completed' },
      { id: 'qf3', player1: 'STIGMA', player2: 'Bianco', score1: 2, score2: 0, winner: 'STIGMA', status: 'completed' },
      // { id: 'qf4', player1: 'Nythera', player2: 'IronVeil', score1: 3, score2: 2, winner: 'Nythera', status: 'completed' },
    ],
  },
  {
    name: 'Półfinały',
    matches: [
      { id: 'sf1', player1: 'Velczer', player2: 'FIFI', score1: 1, score2: 2, winner: 'FIFI', status: 'live' },
      { id: 'sf2', player1: 'STIGMA', player2: 'TBD', status: 'upcoming' },
    ],
  },
  {
    name: 'Finał',
    matches: [
      { id: 'gf1', player1: 'FIFI', player2: 'STIGMA', status: 'upcoming' },
    ],
  },
]
