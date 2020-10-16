import { PlayCard } from "components/deck/playcard";

import { TaskCard } from "../deck/taskcard";

import { TaskToken } from "./token";

export enum TaskState {
  InProgressLocked,
  InProgressUnlocked,
  Success,
  Failure,
}

export interface Task {
  taskCard: TaskCard;
  taskToken?: TaskToken;
  playerId: number;
  taskState: TaskState;
}

export const initTask = (taskCard: TaskCard, playerId: number): Task => {
  return {
    taskCard: taskCard,
    playerId: playerId,
    taskState: TaskState.InProgressUnlocked,
  };
};

export const matchTaskToPlayCard = (
  task: Task,
  playCard: PlayCard
): boolean => {
  return (
    playCard.value === task.taskCard?.value &&
    playCard.suit === task.taskCard?.suit
  );
};
