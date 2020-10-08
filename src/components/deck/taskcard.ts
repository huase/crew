import { CardType, Suit } from "./card";

export interface TaskCard {
  readonly value: number;
  readonly suit: Suit;
  readonly type: CardType.Task;
}

export const initTaskCard = (value: number, suit: Suit): TaskCard => {
  return {
    value: value,
    suit: suit,
    type: CardType.Task,
  };
};
