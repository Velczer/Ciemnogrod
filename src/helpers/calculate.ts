export function getCalculatePoints(wins: number, losses: number) {
  const totalMatches = wins + losses;

  if (totalMatches === 0) return 0;

  const winRate = wins / totalMatches;

  const basePoints = wins * 5 - losses * 2;

  const winRateBonus = Math.round(winRate * 100);

  if (basePoints < 0) return 0;

  return basePoints + winRateBonus;
}

export function getWinRate(wins: number, losses: number) {
  return ((wins / (wins + losses)) * 100).toFixed(1);
}
