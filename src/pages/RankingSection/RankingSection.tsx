import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import * as GlobalStyled from '@components/GlobalStyles.styled';
import { Divider } from '@components/Divider';
import { PlayerRow } from './PlayerRow';
import { Player } from '@/types/player';
import * as Styled from './RankingSection.styled';

const columns = [
  'Rank',
  'Czempion',
  'Wygrane',
  'Przegrane',
  'Wskaźnik Wygranych',
  'Punkty',
];

export function RankingSection({ players }: { players: Player[] }) {
  return (
    <Styled.Section id="rankings">
      <Styled.SideAccent side="left" />
      <Styled.SideAccent side="right" />

      <Styled.Content maxWidth="lg">
        <Styled.Header>
          <GlobalStyled.SectionMiniHeader>
            ✦ Sala Chwały ✦
          </GlobalStyled.SectionMiniHeader>

          <GlobalStyled.SectionHeader variant="h2">
            Ranking
          </GlobalStyled.SectionHeader>

          <Divider />

          <GlobalStyled.SectionSubtitle>
            Wieczny kodeks zapisuje każdą bitwę. Chwała trwa wiecznie.
          </GlobalStyled.SectionSubtitle>
        </Styled.Header>

        <Styled.TableFrame>
          <Styled.Corner cornerposition="top-left" />
          <Styled.Corner cornerposition="top-right" />
          <Styled.Corner cornerposition="bottom-left" />
          <Styled.Corner cornerposition="bottom-right" />

          <TableContainer>
            <Table>
              <TableHead>
                <Styled.HeadRow>
                  {columns.map((col) => (
                    <Styled.HeadCell key={col}>{col}</Styled.HeadCell>
                  ))}
                </Styled.HeadRow>
              </TableHead>

              <TableBody>
                {players.map((player, idx) => (
                  <PlayerRow key={player.id} player={player} rank={idx + 1} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Styled.TableFrame>

        <Styled.Legend>
          {Object.entries(Styled.rankIcons).map(([rank, data]) => (
            <Styled.LegendItem key={rank}>
              <Styled.LegendDot colorvalue={data.color} />
              <Styled.LegendText>{data.label}</Styled.LegendText>
            </Styled.LegendItem>
          ))}
        </Styled.Legend>
      </Styled.Content>
    </Styled.Section>
  );
}
