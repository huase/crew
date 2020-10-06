import { PlayCard } from "components/deck/types";

import { Player } from "./player";

export interface Hand {
  player: Player;
  cards: PlayCard[];
}
