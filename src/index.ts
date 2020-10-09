import { printCards } from "./components/deck/card";
import { Board, initBoard } from "./components/game/board";
import { MissionId } from "./components/game/mission";

function main(): void {
  const board: Board = initBoard([1, 2, 3], MissionId.Easy);
  board.players.forEach((player) => {
    console.log(player.playerId);
    console.log(printCards(player.myCards));
  });
  console.log(`Commander: ${board.commander.playerId}`);
}

main();
