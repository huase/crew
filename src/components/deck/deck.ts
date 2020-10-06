import { SmallCard } from "./small";
import { PlayCard } from "./types";

export interface Deck {
  playCardDeck: PlayCard[];
  missionCardDeck: SmallCard[];
  shuffled: boolean;
}
