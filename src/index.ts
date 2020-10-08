import { Deck, initDeck, printDeck } from "./components/deck/deck";

function main(): void {
  const deck: Deck = initDeck();
  console.log(printDeck(deck));
}

main();
