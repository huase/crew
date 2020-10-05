import { Task } from "components/game/task";
import { Trick } from "components/game/trick";

import { Hand } from "./hand";

export interface Player {
  readonly playerId: number;
  hand: Hand;
  tricks: Trick[];
  tasks: Task[];
}
