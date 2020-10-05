import { PlayCard } from "components/card/play";
import { TrumpCard } from "components/card/trump";
import { Player } from "components/player/player";

import { Round } from "./types";

export interface Trick {
  round: Round;
  cards: (PlayCard | TrumpCard)[];
}

export const getWinner = (trick: Trick): Player => {
  console.log(trick);
  throw new Error("NotImplemented");
};
