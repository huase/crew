import { Player } from "components/player/player";

import { Mission } from "./mission";
import { Trick } from "./trick";
import { GameState } from "./types";

export interface Board {
  players: Player[];
  mission: Mission;
  status: GameState;
  currentTrick: Trick;
}
