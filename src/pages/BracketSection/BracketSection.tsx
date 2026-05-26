import { useEffect, useState } from 'react';
import * as GlobalStyled from '@components/GlobalStyles.styled';
import { Divider } from '@components/Divider';
import * as Styled from './BracketSection.styled';
import { ROUND_TRANSLATIONS } from '@consts/brackets';

type BracketMatchStatus = 'completed' | 'live' | 'upcoming';

export type BracketMatch = {
  id: number;
  player1: string | null;
  player2: string | null;
  score1: number | null;
  score2: number | null;
  winner: string | null;
  status: BracketMatchStatus;
};

export type BracketRound = {
  name: string;
  matches: BracketMatch[];
};

function MatchCard({ match }: { match: BracketMatch }) {
  const cfg = Styled.statusConfig[match.status] ?? Styled.statusConfig.upcoming;
  const isCompleted = match.status === 'completed';

  const players = [
    {
      name: match.player1 ?? 'TBD',
      score: match.score1,
      isWinner: match.winner === match.player1,
    },
    {
      name: match.player2 ?? 'TBD',
      score: match.score2,
      isWinner: match.winner === match.player2,
    },
  ];

  return (
    <Styled.MatchCard statusConfig={cfg}>
      <Styled.StatusBadge statusConfig={cfg}>
        {match.status === 'live' && <Styled.LiveDot />}

        <Styled.StatusText statusConfig={cfg}>{cfg.label}</Styled.StatusText>
      </Styled.StatusBadge>

      {players.map((player, index) => (
        <Styled.PlayerRow
          key={`${match.id}-${index}`}
          iswinner={player.isWinner}
          iscompleted={isCompleted}
          hasborder={index === 0}
        >
          {player.isWinner && isCompleted && <Styled.WinnerStrip />}

          <Styled.PlayerName
            iswinner={player.isWinner}
            iscompleted={isCompleted}
            haswinner={Boolean(match.winner)}
            istbd={player.name === 'TBD'}
          >
            {player.name}
          </Styled.PlayerName>

          {player.score !== null && player.score !== undefined && (
            <Styled.PlayerScore iswinner={player.isWinner}>
              {player.score}
            </Styled.PlayerScore>
          )}
        </Styled.PlayerRow>
      ))}
    </Styled.MatchCard>
  );
}

export function BracketSection() {
  const [bracket, setBracket] = useState<BracketRound[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBracket = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + '/api/bracket', {
          headers: {
            'x-api-key': import.meta.env.VITE_API_KEY,
          },
        });

        const data = await res.json();

        if (Array.isArray(data)) {
          setBracket(data);
        }
      } catch (err) {
        console.error('Failed to fetch bracket:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBracket();
  }, []);

  const quarterFinals = bracket.find((round) => round.name == 'Quarterfinals');

  const semiFinals = bracket.find((round) => round.name == 'Semifinals');

  const grandFinal = bracket.find((round) => round.name == 'Final');

  const thirdPlace = bracket.find((round) => round.name === 'ThirdPlace');

  if (loading) {
    return null;
  }

  if (!grandFinal) {
    return null;
  }

  const finalMatch = grandFinal.matches[0];
  const thirdPlaceMatch = thirdPlace?.matches[0];

  if (!finalMatch) {
    return null;
  }

  return (
    <Styled.Section id="bracket">
      <Styled.BackgroundSigil />

      <Styled.Content maxWidth="xl">
        <Styled.Header>
          <GlobalStyled.SectionMiniHeader>
            ✦ Droga do Dominacji ✦
          </GlobalStyled.SectionMiniHeader>

          <GlobalStyled.SectionHeader variant="h2">
            Drabinka Turniejowa
          </GlobalStyled.SectionHeader>

          <Divider />

          <GlobalStyled.SectionSubtitle>
            Droga podboju się rozwija. Tylko jeden wstąpi na tron.
          </GlobalStyled.SectionSubtitle>
        </Styled.Header>

        <Styled.BracketFrame>
          <Styled.RoundLabels>
            {bracket
              .filter((round) => round.name !== 'ThirdPlace')
              .map((round) => (
                <Styled.RoundLabelBox key={round.name}>
                  <Styled.RoundLabel>
                    {ROUND_TRANSLATIONS[round.name] ?? round.name}
                  </Styled.RoundLabel>
                </Styled.RoundLabelBox>
              ))}
          </Styled.RoundLabels>

          <Styled.BracketGrid>
            {quarterFinals && (
              <>
                <Styled.QuarterColumn>
                  {quarterFinals.matches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </Styled.QuarterColumn>

                {/* <Styled.ConnectorColumn>
                  <Styled.QfToSfConnector />
                </Styled.ConnectorColumn> */}
                <Styled.RoundSeparator />
              </>
            )}

            {semiFinals && (
              <>
                <Styled.SemiColumn>
                  {semiFinals.matches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </Styled.SemiColumn>

                {/* <Styled.ConnectorColumn>
                  <Styled.SfToFinalConnector />
                </Styled.ConnectorColumn> */}
                <Styled.RoundSeparator />
              </>
            )}

            <Styled.FinalColumn>
              {/* <Styled.FinalTitle>✦ FINAŁ ✦</Styled.FinalTitle> */}

              <Styled.FinalCardFrame>
                <MatchCard match={finalMatch} />
              </Styled.FinalCardFrame>
              <Styled.FinalSubtitle>Tron czeka...</Styled.FinalSubtitle>

              <Styled.FinalTitle>✦ WALKA O TRZECIE ✦</Styled.FinalTitle>
              {thirdPlaceMatch && <MatchCard match={thirdPlaceMatch} />}
            </Styled.FinalColumn>
          </Styled.BracketGrid>
        </Styled.BracketFrame>

        <Styled.StatusLegend>
          {Object.entries(Styled.statusConfig).map(([key, value]) => (
            <Styled.StatusLegendItem key={key}>
              <Styled.StatusLegendDot
                islive={key === 'live'}
                colorvalue={value.color}
              />
              <Styled.StatusLegendText>{value.label}</Styled.StatusLegendText>
            </Styled.StatusLegendItem>
          ))}
        </Styled.StatusLegend>
      </Styled.Content>
    </Styled.Section>
  );
}
