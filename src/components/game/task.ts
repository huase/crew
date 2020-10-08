import { TaskCard } from "components/deck/taskcard";

import { TaskToken } from "./token";

export interface Task {
  taskCard?: TaskCard;
  taskToken?: TaskToken;
  playerId: number;
}
