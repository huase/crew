import { Player } from "components/player/player";

type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export enum Suit {
  Pink,
  Blue,
  Green,
  Yellow,
}

export enum Clue {
    High,
    Low,
    Only,
}

export interface BaseCard {
  readonly suit: Suit;
  readonly value: CardValue;
  owner?: Player;
}
