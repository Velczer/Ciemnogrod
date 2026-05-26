import { MatchHistoryItem } from '@/types/match';
import { factions } from '@consts/factions';
import { Divider } from '@components/Divider';
import * as GlobalStyled from '@components/GlobalStyles.styled';
import * as Styled from './MatchHistorySection.styled';

type Props = {
  matches: MatchHistoryItem[];
};

export function MatchHistorySection({ matches }: Props) {
  return (
    <Styled.Section id="match-history">
      <Styled.Background />

      <Styled.Content maxWidth="md">
        <Styled.Header>
          <GlobalStyled.SectionMiniHeader>
            ✦ Kronika Bitew ✦
          </GlobalStyled.SectionMiniHeader>

          <GlobalStyled.SectionHeader variant="h2">
            Historia meczów
          </GlobalStyled.SectionHeader>

          <Divider />

          <GlobalStyled.SectionSubtitle>
            Każde starcie zapisane w pradawnym kodeksie. Każde zwycięstwo ma
            swoją cenę.
          </GlobalStyled.SectionSubtitle>

          <Styled.MatchCount>Ostatnie 10 zapisanych starć</Styled.MatchCount>
        </Styled.Header>

        <Styled.List>
          {matches.map((match) => {
            const faction1 = factions[match.faction1] ?? factions.Temple;
            const faction2 = factions[match.faction2] ?? factions.Temple;
            const p1Won = match.score1 > match.score2;
            const p2Won = match.score2 > match.score1;

            return (
              <Styled.MatchCard key={match.id}>
                <Styled.PlayerSide faction={faction1} iswinner={p1Won}>
                  <Styled.FactionGlow faction={faction1} />

                  <Styled.PlayerContent>
                    <Styled.FactionEmblem factionkey={match.faction1} />

                    <Styled.PlayerText>
                      <Styled.PlayerName>
                        {match.player1.nickname}
                      </Styled.PlayerName>
                      <Styled.FactionName faction={faction1}>
                        {faction1.label}
                      </Styled.FactionName>
                    </Styled.PlayerText>
                  </Styled.PlayerContent>
                </Styled.PlayerSide>

                <Styled.Center>
                  <Styled.Score>
                    <Styled.ScoreValue iswinner={p1Won}>
                      {match.score1}
                    </Styled.ScoreValue>
                    <Styled.ScoreSeparator>:</Styled.ScoreSeparator>
                    <Styled.ScoreValue iswinner={p2Won}>
                      {match.score2}
                    </Styled.ScoreValue>
                  </Styled.Score>

                  <Styled.MapName>{match.map}</Styled.MapName>
                  <Styled.DateText>
                    {new Date(match.createdAt).toLocaleDateString('pl-PL')}
                  </Styled.DateText>
                </Styled.Center>

                <Styled.PlayerSide
                  faction={faction2}
                  iswinner={p2Won}
                  align="right"
                >
                  <Styled.FactionGlow faction={faction2} />

                  <Styled.PlayerContent align="right">
                    <Styled.PlayerText>
                      <Styled.PlayerName>
                        {match.player2.nickname}
                      </Styled.PlayerName>
                      <Styled.FactionName faction={faction2}>
                        {faction2.label}
                      </Styled.FactionName>
                    </Styled.PlayerText>

                    <Styled.FactionEmblem factionkey={match.faction2} />
                  </Styled.PlayerContent>
                </Styled.PlayerSide>
              </Styled.MatchCard>
            );
          })}
        </Styled.List>
      </Styled.Content>
    </Styled.Section>
  );
}
