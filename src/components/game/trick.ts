import { Suit } from "../deck/card";
import { PlayCard } from "../deck/playcard";

import { Round } from "./types";

export interface Trick {
  round: Round;
  cards: PlayCard[];
}

export const initTrick = (round: Round): Trick => {
  return {
    round: round,
    cards: [],
  };
};

export const trickWinner = (trick: Trick): number => {
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
  return highCard.playerId;
};
