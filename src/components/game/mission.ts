import { Task } from "./task";

export interface Mission {
  readonly missionId: number;
  outstandingTasks: Task[];
  completedTasks: Task[];
}

export const initMission = (missionId: number): Mission => {
  return {
    missionId: missionId,
    outstandingTasks: [],
    completedTasks: [],
  };
};
