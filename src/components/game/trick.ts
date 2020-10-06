import { PlayCard, Suit } from "components/card/types";
import { Player } from "components/player/player";

import { Round } from "./types";

export interface Trick {
  round: Round;
  cards: PlayCard[];
}

export const getWinner = (trick: Trick): Player => {
  let highCard: PlayCard = trick.cards[0];
  for (const card of trick.cards) {
    if (card.suit === Suit.Rocket) {
      if (highCard.suit !== Suit.Rocket || card.value > highCard.value) {
        highCard = card;
      }
    } else {
      if (card.suit === highCard.suit && card.value > highCard.value) {
        highCard = card;
      }
    }
  }
  return highCard.owner;
};
