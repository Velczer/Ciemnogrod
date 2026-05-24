export interface BracketMatch {
  id: string;
  player1: string;
  player2: string;
  score1?: number;
  score2?: number;
  winner?: string;
  status: 'completed' | 'live' | 'upcoming';
}

export interface BracketRound {
  name: string;
  matches: BracketMatch[];
}

export const bracket: BracketRound[] = [
  {
    name: 'Ćwierćfinały',
    matches: [
      {
        id: 'qf1',
        player1: 'FIFI',
        player2: 'Damianejro',
        score1: 0,
        score2: 2,
        winner: 'Damianejro',
        status: 'completed',
      },
      {
        id: 'qf2',
        player1: 'Velczer',
        player2: 'Arcio',
        score1: 0,
        score2: 2,
        winner: 'Arcio',
        status: 'completed',
      },
      {
        id: 'qf3',
        player1: 'STIGMA',
        player2: 'Bianco',
        score1: 2,
        score2: 0,
        winner: 'STIGMA',
        status: 'completed',
      },
    ],
  },
  {
    name: 'Półfinały',
    matches: [
      {
        id: 'sf1',
        player1: 'Damianejro',
        player2: 'Arcio',
        score1: 0,
        score2: 2,
        winner: 'Arcio',
        status: 'completed',
      },
      {
        id: 'sf2',
        player1: 'FIFI',
        player2: 'Velczer',
        score1: 2,
        score2: 0,
        winner: 'FIFI',
        status: 'completed',
      },
      // { id: 'sf3', player1: 'TBD', player2: 'TBD', status: 'upcoming' },
    ],
  },
  {
    name: 'Finał',
    matches: [
      { id: 'gf1', player1: 'Arcio', player2: 'Stigma', status: 'live' },
    ],
  },
];
