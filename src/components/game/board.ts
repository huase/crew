import { Card } from "components/deck/types";
import { Player } from "components/player/player";

import { Mission } from "./mission";
import { Trick } from "./trick";
import { GameState } from "./types";

export interface Board {
  players: Player[];
  mission: Mission;
  status: GameState;
  currentTrick: Trick;
}

export const shufflePlayCards = (deck: Card[]): void => {
  for (let index = 0; index < deck.length; index++) {
    const k: number = Math.floor(Math.random() * (index + 1)); //generate random number between 0 and index, inclusive
    const temp: Card = deck[k];
    deck[k] = deck[index];
    deck[index] = temp;
  }
};
