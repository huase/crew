import { Task } from "./task";

export interface Mission {
  readonly missionId: number;
  outstandingTasks: Task[];
  completedTasks: Task[];
}
