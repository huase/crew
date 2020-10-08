import { PlayCard } from "../deck/playcard";
import { Task } from "../game/task";
import { Trick } from "../game/trick";

export interface Player {
  readonly playerId: number;
  myCards: PlayCard[];
  myTricks: Trick[];
  myTasks: Task[];
}

export const initPlayer = (playerId: number): Player => {
  return {
    playerId: playerId,
    myCards: [],
    myTricks: [],
    myTasks: [],
  };
};
