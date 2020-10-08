import { CardState, CardType, Clue, Suit } from "./types";

export interface PlayCard {
  readonly value: number;
  readonly suit: Suit;
  readonly type: CardType.Play;
  playerId: number;
  state: CardState;
  clue?: Clue;
}
