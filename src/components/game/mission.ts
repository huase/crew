import { Task } from "./task";

export interface Mission {
  missionId: number;
  outstandingTasks: Task[];
  completedTasks: Task[];
}
