import { Player } from "components/player/player";

import { CardState, CardValue, Clue, Suit } from "./types";

export interface NormalCard {
  readonly value: CardValue;
  readonly suit: Suit;
  owner: Player;
  state: CardState;
  clue?: Clue;
}
