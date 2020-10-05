import { Player } from "components/player/player";

import { Mission } from "./mission";
import { GameState } from "./types";

export interface Board {
  players: Player[];
  round: number;
  mission: Mission;
  status: GameState;
}
