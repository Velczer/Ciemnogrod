export const factions: Record<
  string,
  { label: string; primary: string; glow: string }
> = {
  Temple: {
    label: 'Świątynia',
    primary: '#C9A84C',
    glow: 'rgba(201,168,76,0.5)',
  },
  Necropolis: {
    label: 'Nekropolia',
    primary: '#7B4FA6',
    glow: 'rgba(123,79,166,0.5)',
  },
  Sylvan: { label: 'Knieja', primary: '#27AE60', glow: 'rgba(39,174,96,0.5)' },
  Dungeon: { label: 'Loch', primary: '#E67E22', glow: 'rgba(230,126,34,0.5)' },
  Hive: { label: 'Rój', primary: '#C0392B', glow: 'rgba(192,57,43,0.5)' },
  Schisma: {
    label: 'Schisma',
    primary: '#4A8FCC',
    glow: 'rgba(74,143,204,0.5)',
  },
};
