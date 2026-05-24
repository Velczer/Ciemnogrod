import { Player } from '@/types/player';
import { getCalculatePoints, getWinRate } from '@helpers/calculate';
import * as Styled from './PlayerRow.styled';

export function PlayerRow({ player, rank }: { player: Player; rank: number }) {
  const rankStyle = Styled.getRankStyle(rank);
  const rankIcon = Styled.rankIcons[rank];
  const winRate = getWinRate(player.wins, player.losses);
  const winRateNum = parseFloat(winRate);
  const points = getCalculatePoints(player.wins, player.losses);

  return (
    <Styled.Row rank={rank} rankColor={rankIcon?.color} rankStyle={rankStyle}>
      <Styled.Cell>
        {rankIcon ? (
          <Styled.RankIconBox colorValue={rankIcon.color}>
            <Styled.RankIconText colorValue={rankIcon.color}>
              {rank}
            </Styled.RankIconText>
          </Styled.RankIconBox>
        ) : (
          <Styled.NormalRank>#{rank}</Styled.NormalRank>
        )}
      </Styled.Cell>

      <Styled.Cell>
        <Styled.ChampionWrapper>
          <Styled.ChampionDot colorValue={rankIcon?.color} />
          <Styled.ChampionName isTopRank={rank <= 3}>
            {player.nickname}
          </Styled.ChampionName>
        </Styled.ChampionWrapper>
      </Styled.Cell>

      <Styled.Cell>
        <Styled.WinsText>{player.wins.toLocaleString()}</Styled.WinsText>
      </Styled.Cell>

      <Styled.Cell>
        <Styled.LossesText>{player.losses.toLocaleString()}</Styled.LossesText>
      </Styled.Cell>

      <Styled.Cell>
        <Styled.WinRateWrapper>
          <Styled.WinRateTrack>
            <Styled.WinRateFill winRate={winRateNum} />
          </Styled.WinRateTrack>
          <Styled.WinRateText winRate={winRateNum}>
            {winRate}%
          </Styled.WinRateText>
        </Styled.WinRateWrapper>
      </Styled.Cell>

      <Styled.Cell>
        <Styled.PointsText isTopRank={rank <= 3} isFirstRank={rank === 1}>
          {points.toLocaleString()}
        </Styled.PointsText>
      </Styled.Cell>
    </Styled.Row>
  );
}
