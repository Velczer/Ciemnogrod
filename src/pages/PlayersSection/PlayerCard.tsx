import { factions } from '@consts/factions';
import { Player } from '@/types/player';
import { getWinRate } from '@helpers/calculate';
import * as Styled from './PlayerCard.styled';

export function PlayerCard({ player, rank }: { player: Player; rank: number }) {
  const faction = factions[player.mainFaction] ?? factions.Temple;
  const winRate = getWinRate(player.wins, player.losses);

  const stats = [
    { label: 'Wygrane', value: player.wins.toLocaleString(), color: '#27AE60' },
    {
      label: 'Przegrane',
      value: player.losses.toLocaleString(),
      color: '#C0392B',
    },
    { label: 'Ratio', value: `${winRate}%`, color: '#C9A84C' },
  ];

  return (
    <Styled.Card faction={faction}>
      <Styled.FactionBackground factionName={player.mainFaction} />

      <Styled.RankBadge className="rank-badge">
        <Styled.RankText className="rank-badge-text">#{rank}</Styled.RankText>
      </Styled.RankBadge>

      <Styled.Header>
        <Styled.Avatar className="avatar-ring" faction={faction}>
          <Styled.AvatarLetter faction={faction}>
            {player.nickname.charAt(0).toUpperCase()}
          </Styled.AvatarLetter>
          <Styled.Corner cornerPosition="top-left" faction={faction} />
          <Styled.Corner cornerPosition="bottom-right" faction={faction} />
        </Styled.Avatar>

        <Styled.PlayerInfo>
          <Styled.Nickname>{player.nickname}</Styled.Nickname>
          <Styled.FactionName faction={faction}>
            {faction.label}
          </Styled.FactionName>
        </Styled.PlayerInfo>
      </Styled.Header>

      <Styled.Divider faction={faction} />

      <Styled.StatsGrid>
        {stats.map((stat) => (
          <Styled.StatBox key={stat.label}>
            <Styled.StatValue colorValue={stat.color}>
              {stat.value}
            </Styled.StatValue>
            <Styled.StatLabel>{stat.label}</Styled.StatLabel>
          </Styled.StatBox>
        ))}
      </Styled.StatsGrid>

      <Styled.WinRateWrapper>
        <Styled.WinRateTrack>
          <Styled.WinRateFill winRate={winRate} faction={faction} />
        </Styled.WinRateTrack>
      </Styled.WinRateWrapper>
    </Styled.Card>
  );
}
