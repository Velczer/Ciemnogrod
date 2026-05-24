import { Grid } from '@mui/material';
import * as GlobalStyled from '@components/GlobalStyles.styled';
import { Divider } from '@components/Divider';
import { PlayerCard } from './PlayerCard';
import { Player } from '@/types/player';
import * as Styled from './PlayersSection.styled';

type PlayersSectionProps = {
  players: Player[];
};

export function PlayersSection({ players }: PlayersSectionProps) {
  return (
    <Styled.Section id="players">
      <Styled.BackgroundPattern />

      <Styled.Content maxWidth="lg">
        <Styled.Header>
          <GlobalStyled.SectionMiniHeader>
            ✦ Czempioni Sezonu I ✦
          </GlobalStyled.SectionMiniHeader>

          <GlobalStyled.SectionHeader variant="h2">
            Gracze
          </GlobalStyled.SectionHeader>

          <Divider />

          <GlobalStyled.SectionSubtitle>
            Ośmiu wojowników wybranych przez los, by stanąć do walki o pradawny
            tron.
          </GlobalStyled.SectionSubtitle>
        </Styled.Header>

        <Grid container spacing={3}>
          {players.map((player, index) => (
            <Grid key={player.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <PlayerCard player={player} rank={index + 1} />
            </Grid>
          ))}
        </Grid>
      </Styled.Content>
    </Styled.Section>
  );
}
