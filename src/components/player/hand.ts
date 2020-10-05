import { PlayCard } from "components/card/play";
import { TrumpCard } from "components/card/trump";

import { Player } from "./player";

export interface Hand {
  player: Player;
  cards: (PlayCard | TrumpCard)[];
}
