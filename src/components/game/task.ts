import { SmallCard } from "components/card/small";
import { Player } from "components/player/player";

import { TaskToken } from "./token";

export interface Task {
  smallCard?: SmallCard;
  taskToken?: TaskToken;
  owner: Player;
}
