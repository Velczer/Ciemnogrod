import * as Styled from './PageLoader.styled';

export function PageLoader() {
  return (
    <Styled.LoaderRoot>
      <Styled.Glow />
      <Styled.Swords>
        <Styled.SwordLeft>🗡️</Styled.SwordLeft>
        <Styled.SwordRight>🗡️</Styled.SwordRight>
      </Styled.Swords>

      <Styled.Title>Przywoływanie czempionów</Styled.Title>
      <Styled.Subtitle>Stary kodeks odczytuje zapis bitew...</Styled.Subtitle>

      <Styled.Bar>
        <Styled.BarFill />
      </Styled.Bar>
    </Styled.LoaderRoot>
  );
}
