import { Player } from "components/player/player";
import { Mission } from "./mission";

enum GameState {
    Success,
    Failure,
    InProgress,
}

export interface Board {
    players: Player[];
    round: number;
    mission: Mission;
    status: GameState;
}
