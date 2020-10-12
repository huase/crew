import { Hand, initHand } from "../deck/hand";
import { Task } from "../game/task";
import { Trick } from "../game/trick";

export interface Player {
  readonly playerId: number;
  myCards: Hand;
  myTricks: Trick[];
  myTasks: Task[];
}

export const initPlayer = (playerId: number): Player => {
  return {
    playerId: playerId,
    myCards: initHand(),
    myTricks: [],
    myTasks: [],
  };
};
