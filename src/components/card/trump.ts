import { Player } from "components/player/player";

import { CardState, Clue, Suit, TrumpValue } from "./types";

export interface TrumpCard {
  readonly value: TrumpValue;
  readonly suit: Suit.Rocket;
  owner: Player;
  state: CardState;
  clue?: Clue;
}
