import { Deck, generateDeck, printDeck } from "./components/deck/deck";
import { shuffleDeck } from "./components/game/board";

function main(): void {
  const deck: Deck = generateDeck();
  shuffleDeck(deck);
  console.log(printDeck(deck));
}

main();
