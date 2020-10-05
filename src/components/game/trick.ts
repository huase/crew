import { PlayCard } from "components/card/play";
import { TrumpCard } from "components/card/trump";
import { Player } from "components/types";

export interface Trick {
  cards: (PlayCard | TrumpCard)[];
}

export const getWinner = (trick: Trick): Player => {
  console.log(trick);
  throw new Error("NotImplemented");
};
