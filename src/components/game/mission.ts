import { Deck } from "components/deck/deck";
import { TaskCard } from "components/deck/taskcard";
import { Player } from "components/player/player";

import { initTask, matchTaskToPlayCard, Task, TaskState } from "./task";
import { Trick, trickWinner } from "./trick";

export enum MissionId {
  Easy,
  Medium,
  Hard,
}

export enum MissionState {
  Success,
  Failure,
  InProgress,
}

export interface Mission {
  readonly missionId: MissionId;
  unassignedTaskCards: TaskCard[];
  outstandingTasks: Task[];
  completedTasks: Task[];
  missionState: MissionState;
}

export const initMission = (missionId: MissionId): Mission => {
  return {
    missionId: missionId,
    unassignedTaskCards: [],
    outstandingTasks: [],
    completedTasks: [],
    missionState: MissionState.InProgress,
  };
};

export const drawTaskCards = (
  numberOfTaskCards: number,
  deck: Deck,
  mission: Mission
): void => {
  for (let i = 0; i < numberOfTaskCards; i++) {
    mission.unassignedTaskCards.push(deck.taskCards[i]);
  }
};

export const pickTaskCards = (
  player: Player,
  taskCard: TaskCard,
  mission: Mission
): boolean => {
  const availableTaskCards: TaskCard[] = mission.unassignedTaskCards;
  const i: number = availableTaskCards.indexOf(taskCard);

  if (i > -1) {
    availableTaskCards.splice(i, 1);
    const newTask: Task = initTask(taskCard, player.playerId);
    player.myTasks.push(newTask);
    mission.outstandingTasks.push(newTask);
    return true;
  } else {
    return false;
  }
};

/**
 * mark relevant tasks as succeeded/failed after trick
 * return false if any task has failed, true otherwise
 * @param trick last played trick
 * @param mission current mission
 */
export const resolveTasks = (trick: Trick, mission: Mission): boolean => {
  const trickWinnerId: number = trickWinner(trick);
  for (const playCard of trick.cards) {
    for (const [taskIndex, task] of mission.outstandingTasks.entries()) {
      if (matchTaskToPlayCard(task, playCard)) {
        if (
          trickWinnerId !== task.playerId ||
          task.taskState === TaskState.InProgressLocked
        ) {
          task.taskState = TaskState.Failure;
          mission.missionState = MissionState.Failure;
          return false;
        } else {
          task.taskState = TaskState.Success;
          mission.outstandingTasks.splice(taskIndex, 1);
          mission.completedTasks.push(task);
        }
      }
    }
  }
  return true;
};
