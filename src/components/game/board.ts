import { Deck } from "components/deck/deck";
import { Card } from "components/deck/types";
import { Player } from "components/player/player";

import { Mission } from "./mission";
import { Trick } from "./trick";
import { GameState } from "./types";

export interface Board {
  players: { [playerId: number]: Player };
  mission: Mission;
  status: GameState;
  currentTrick: Trick;
}

export const shuffleDeck = (deck: Deck): void => {
  shuffleCards(deck.playCards);
  shuffleCards(deck.taskCards);
  deck.shuffled = true;
};

const shuffleCards = (cards: Card[]): void => {
  for (let index = 0; index < cards.length; index++) {
    const k: number = Math.floor(Math.random() * (index + 1)); //generate random number between 0 and index, inclusive
    const temp: Card = cards[k];
    cards[k] = cards[index];
    cards[index] = temp;
  }
};
