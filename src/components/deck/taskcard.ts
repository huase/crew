import { CardType, Suit } from "./types";

export interface TaskCard {
  readonly value: number;
  readonly suit: Suit;
  readonly type: CardType.Task;
}
