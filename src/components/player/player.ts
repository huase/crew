import { Hand } from "./hand";
import { Trick } from "components/game/trick";
import { Task } from "components/game/task";

export interface Player {
    readonly playerId: number;
    hand: Hand;
    tricks: Trick[];
    tasks: Task[];
}
