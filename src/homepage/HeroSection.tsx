import { Typography } from '@mui/material';
import { Stat } from '@/types/stats';
import { factions } from '@consts/factions';
import * as Styled from './HeroSection.styled';

type HeroSectionProps = {
  stats: Stat[];
};

export function HeroSection({ stats }: HeroSectionProps) {
  return (
    <Styled.HeroRoot>
      <Styled.GridOverlay />

      {Styled.glyphPositions.map((g, i) => (
        <Styled.Glyph key={i} {...g}>
          {g.text}
        </Styled.Glyph>
      ))}

      {Styled.particlePositions.map((p, i) => (
        <Styled.Particle key={i} {...p} index={i} />
      ))}

      <Styled.CenterGlow />
      <Styled.TopBorder />

      <Styled.HeroContainer maxWidth="lg">
        <Styled.PreTitleBadge>
          <Styled.PulseDot />
          <Styled.BadgeText>
            Sezon I · Grand Tournament · Live Now
          </Styled.BadgeText>
          <Styled.PulseDot delay="1s" />
        </Styled.PreTitleBadge>

        <Styled.TitleGold variant="h1">Kroniki</Styled.TitleGold>
        <Styled.TitlePurple variant="h1">Ciemnogrodu</Styled.TitlePurple>

        <Styled.DecorDivider>
          <Styled.DividerLine side="left" />
          <Typography
            sx={{ color: '#C9A84C', fontSize: '1.2rem', lineHeight: 1 }}
          >
            ✦
          </Typography>
          <Styled.DividerLine side="right" />
        </Styled.DecorDivider>

        <Styled.Kicker>
          Heroes Olden Era · Sezon I · Grand Tournament
        </Styled.Kicker>

        <Styled.Description>
          Sześciu czempionów staje u progu legendy. Tylko jeden wzniesie się, by
          objąć panowanie nad pradawnymi królestwami. Stara era rozpoczyna się
          tej nocy.
        </Styled.Description>

        <Styled.StatsRow>
          {stats.map((stat) => {
            const translatedValue = factions[stat.value]?.label ?? stat.value;

            return (
              <Styled.StatItem key={stat.label}>
                <Styled.StatValue>{translatedValue}</Styled.StatValue>

                <Styled.StatLabel>{stat.label}</Styled.StatLabel>
              </Styled.StatItem>
            );
          })}
        </Styled.StatsRow>
      </Styled.HeroContainer>

      <Styled.BottomFade />
    </Styled.HeroRoot>
  );
}
