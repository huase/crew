import { PlayCard } from "components/card/play";
import { TrumpCard } from "components/card/trump";
import { Player } from "components/player/player";

export interface Trick {
    round: number;
  cards: (PlayCard | TrumpCard)[];
}

export const getWinner = (trick: Trick): Player => {
  console.log(trick);
  throw new Error("NotImplemented");
};
