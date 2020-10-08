import { PlayCard } from "components/deck/playcard";
import { Task } from "components/game/task";
import { Trick } from "components/game/trick";

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
