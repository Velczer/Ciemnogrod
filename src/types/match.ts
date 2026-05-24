import type { Player } from './player';

export type MatchHistoryItem = {
  id: number;
  player1Id: number;
  player2Id: number;
  faction1: string;
  faction2: string;
  score1: number;
  score2: number;
  map: string;
  createdAt: string;
  player1: Player;
  player2: Player;
};
