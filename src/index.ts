import readlineSync = require("readline-sync");

import { printCards } from "./components/deck/card";
import { allCards, cardFromString } from "./components/deck/hand";
import { PlayCard } from "./components/deck/playcard";
import {
  Board,
  getPlayableCards,
  initBoard,
  playPlayCard,
} from "./components/game/board";
import { MissionId } from "./components/game/mission";
import { GameState } from "./components/game/types";

function main(): void {
  const board: Board = initBoard([1, 2, 3], MissionId.Easy);
  console.log(`Player ${board.commander.playerId} is commander`);
  console.log("-----------------");
  console.log("-----------------");
  while (board.status === GameState.InProgress) {
    console.log(`\n\nPlayer ${board.curPlayer.playerId}'s turn`);
    console.log(
      `Your cards are: ${printCards(allCards(board.curPlayer.myCards))}`
    );
    const playableCards: PlayCard[] = getPlayableCards(board, board.curPlayer);
    console.log(`Your playable cards are ${printCards(playableCards)}`);
    while (true) {
      const card: string = readlineSync.question("Play a card: ");
      const playCard: PlayCard | undefined = cardFromString(
        board.curPlayer.myCards,
        card
      );
      if (playCard === undefined) {
        console.log(`${card} is not in your hand`);
        continue;
      }
      if (!playableCards.includes(playCard)) {
        console.log(`${card} is not a playable card`);
        continue;
      }
      playPlayCard(board, playCard);
      break;
    }
  }
  console.log("Game Over!");
}

main();
