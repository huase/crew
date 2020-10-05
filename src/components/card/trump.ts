import { Player } from "components/player/player";

import { CardState, Clue, TrumpValue } from "./types";

export interface TrumpCard {
  readonly value: TrumpValue;
  owner: Player;
  state: CardState;
  clue?: Clue;
}
