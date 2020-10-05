import { SmallCard } from "components/card/small";

import { TaskToken } from "./token";

export interface Task {
  smallCard?: SmallCard;
  taskToken?: TaskToken;
}
