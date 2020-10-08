import { TaskCard } from "../deck/taskcard";

import { TaskToken } from "./token";

export interface Task {
  taskCard?: TaskCard;
  taskToken?: TaskToken;
  playerId: number;
}
