import { PlayCard } from "components/card/types";
import { Board } from "components/game/board";
import { Task } from "components/game/task";
import { Trick } from "components/game/trick";

import { Hand } from "./hand";

export interface Player {
  readonly playerId: number;
  hand: Hand;
  tricks: Trick[];
  tasks: Task[];
}

export const getPlayableCards = (board: Board, player: Player): PlayCard => {
  console.log(board);
  console.log(player);
  throw new Error("Not implemented");
};
