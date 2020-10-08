import { CardState, CardType, Clue, Suit } from "./types";

export interface PlayCard {
  readonly value: number;
  readonly suit: Suit;
  readonly type: CardType.Play;
  playerId: number;
  state: CardState;
  clue?: Clue;
}

export const testCard = (
  value: number,
  suit: Suit,
  playerId = -1,
  state = CardState.Deck,
  clue?: Clue
): PlayCard => {
  return {
    value: value,
    suit: suit,
    type: CardType.Play,
    playerId: playerId,
    state: state,
    clue: clue,
  };
};
