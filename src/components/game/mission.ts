import { Task } from "./task";

export enum MissionId {
  Easy,
  Medium,
  Hard,
}

export interface Mission {
  readonly missionId: MissionId;
  outstandingTasks: Task[];
  completedTasks: Task[];
}

export const initMission = (missionId: MissionId): Mission => {
  return {
    missionId: missionId,
    outstandingTasks: [],
    completedTasks: [],
  };
};
