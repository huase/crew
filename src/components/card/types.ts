export type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type TrumpValue = 1 | 2 | 3 | 4;

export enum Suit {
  Pink,
  Blue,
  Green,
  Yellow,
  Rocket,
}

export enum CardState {
  Hand,
  Table,
  Clue,
}

export enum Clue {
  High,
  Low,
  Only,
}
