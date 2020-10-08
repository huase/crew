import { PlayCard } from "../deck/playcard";
import { initPlayer, Player } from "../player/player";

import { initMission, Mission } from "./mission";
import { Trick } from "./trick";
import { GameState } from "./types";

export interface Board {
  players: number[];
  playerMap: { [playerId: number]: Player };
  numPlayers: number;
  mission: Mission;
  status: GameState;
  currentTrick?: Trick;
}

export const initBoard = (players: number[], missionId: number): Board => {
  return {
    players: players,
    playerMap: players.reduce(
      (player: { [playerId: number]: Player }, playerId) => {
        player[playerId] = initPlayer(playerId);
        return player;
      },
      {}
    ),
    numPlayers: players.length,
    mission: initMission(missionId),
    status: GameState.InProgress,
  };
};

export const distributePlayCards = (board: Board): void => {
  console.log(board);
  throw new Error("Not implemented");
};

export const distributeTasks = (board: Board): void => {
  console.log(board);
  throw new Error("Not implemented");
};

export const getPlayableCards = (board: Board, player: Player): PlayCard => {
  console.log(board);
  console.log(player);
  throw new Error("Not implemented");
};
