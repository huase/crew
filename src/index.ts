import { generateDeck, printDeck } from "./components/deck/deck";

function main(): void {
  console.log("Hello world!");
  console.log(printDeck(generateDeck()));
}

main();
