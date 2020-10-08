import { Board } from "components/game/board";

import { Card, printCards } from "./card";
import { initPlayCard, PlayCard } from "./playcard";
import { initTaskCard, TaskCard } from "./taskcard";

export interface Deck {
  playCards: PlayCard[];
  taskCards: TaskCard[];
}

export const initDeck = (): Deck => {
  const deck: Deck = generateDeck();
  shuffleCards(deck.playCards);
  shuffleCards(deck.taskCards);
  return deck;
};

const shuffleCards = (cards: Card[]): void => {
  for (let index = 0; index < cards.length; index++) {
    const k: number = Math.floor(Math.random() * (index + 1)); //generate random number between 0 and index, inclusive
    const temp: Card = cards[k];
    cards[k] = cards[index];
    cards[index] = temp;
  }
};

const generateDeck = (): Deck => {
  const playCards: PlayCard[] = [...Array(40).keys()].map((i) => {
    return initPlayCard((i % 9) + 1, Math.floor(i / 9));
  });

  const taskCards: TaskCard[] = [...Array(36).keys()].map((i) => {
    return initTaskCard((i % 9) + 1, Math.floor(i / 9));
  });

  const deck: Deck = {
    playCards: playCards,
    taskCards: taskCards,
  };

  return deck;
};

export const printDeck = (deck: Deck): string => {
  const playCards: string = printCards(deck.playCards);
  const taskCards: string = printCards(deck.taskCards);
  return `Play Cards: ${playCards}\nTask Cards: ${taskCards}`;
};

export const dealPlayCards = (deck: Deck, board: Board): void => {
  deck.playCards.forEach((card: PlayCard, index: number) => {
    const currentPlayerId: number = board.players[index % board.numPlayers];
    card.playerId = currentPlayerId;
    board.playerMap[currentPlayerId].myCards.push(card);
  });
};
