export interface Player {
  id: number
  nickname: string
  wins: number
  losses: number
  faction: string
  emblem: string
  points: number
  rank?: number
  winRate?: string
}

const players: Player[] = [
  {
    id: 1,
    nickname: 'Velczer',
    wins: 0,
    losses: 0,
    faction: 'Hive',
    emblem: 'V',
    points: 0,
  },
  {
    id: 2,
    nickname: 'FIFI',
    wins: 1,
    losses: 0,
    faction: 'Necropolis',
    emblem: 'F',
    points: 0,
  },
  {
    id: 3,
    nickname: 'Areczek',
    wins: 0,
    losses: 1,
    faction: 'Schisma',
    emblem: 'A',
    points: 0,
  },
  {
    id: 4,
    nickname: 'STIGMA',
    wins: 0,
    losses: 0,
    faction: 'Temple',
    emblem: 'S',
    points: 0,
  },
  {
    id: 5,
    nickname: 'Bianco',
    wins: 0,
    losses: 0,
    faction: 'Temple',
    emblem: 'B',
    points: 0,
  },
  {
    id: 6,
    nickname: 'Damianejro',
    wins: 0,
    losses: 0,
    faction: 'Hive',
    emblem: 'D',
    points: 0,
  },
]

function calculatePoints(wins: number, losses: number) {
  const totalMatches = wins + losses;

  if (totalMatches === 0) return 0;

  const winRate = wins / totalMatches;

  const basePoints = wins * 5 - losses * 2;

  const winRateBonus = Math.round(winRate * 100);

  if (basePoints < 0) return 0;

  return basePoints + winRateBonus;
};

function getWinRate(wins: number, losses: number) {
  return ((wins / (wins + losses)) * 100).toFixed(1)
}

export const rankedPlayers: Player[] = players
    .map((player) => ({
      ...player,
      points: calculatePoints(player.wins, player.losses),
      winRate: getWinRate(player.wins, player.losses),
    }))
    .sort((a, b) => b.points - a.points)
    .map((player, index) => ({
      ...player,
      rank: index + 1,
    }));
    