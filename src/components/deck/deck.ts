import { PlayCard } from "./playcard";
import { TaskCard } from "./taskcard";
import { CardState, CardType, printCards } from "./types";

export interface Deck {
  playCards: PlayCard[];
  taskCards: TaskCard[];
  shuffled: boolean;
}

export const generateDeck = (): Deck => {
  const playCards: PlayCard[] = [...Array(40).keys()].map((i) => {
    return {
      value: (i % 9) + 1,
      suit: Math.floor(i / 9),
      playerId: -1,
      type: CardType.Play,
      state: CardState.Deck,
    };
  });

  const taskCards: TaskCard[] = [...Array(36).keys()].map((i) => {
    return {
      value: (i % 9) + 1,
      suit: Math.floor(i / 9),
      type: CardType.Task,
    };
  });

  const deck: Deck = {
    playCards: playCards,
    taskCards: taskCards,
    shuffled: false,
  };

  return deck;
};

export const printDeck = (deck: Deck): string => {
  const playCards: string = printCards(deck.playCards);
  const taskCards: string = printCards(deck.taskCards);
  return `Play Cards: ${playCards}\nTask Cards: ${taskCards}`;
};
