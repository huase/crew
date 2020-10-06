import { PlayCard } from "components/card/types";

import { Player } from "./player";

export interface Hand {
  player: Player;
  cards: PlayCard[];
}
