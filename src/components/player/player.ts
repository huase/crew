import { PlayCard } from "components/deck/playcard";
import { Board } from "components/game/board";
import { Task } from "components/game/task";
import { Trick } from "components/game/trick";

export interface Player {
  readonly playerId: number;
  myCards: PlayCard[];
  myTricks: Trick[];
  myTasks: Task[];
}

export const getPlayableCards = (board: Board, player: Player): PlayCard => {
  console.log(board);
  console.log(player);
  throw new Error("Not implemented");
};
