import { Suit } from "./card";
import { PlayCard } from "./playcard";

export type Hand = Map<Suit, PlayCard[]>;

export const initHand = (): Hand => {
  const hand: Hand = new Map();
  hand.set(Suit.Pink, []);
  hand.set(Suit.Blue, []);
  hand.set(Suit.Green, []);
  hand.set(Suit.Yellow, []);
  hand.set(Suit.Rocket, []);
  return hand;
};

export const allCards = (hand: Hand): PlayCard[] => {
  return Array.from(hand.values()).reduce((all, cards) => {
    all.push(...cards);
    return all;
  }, []);
};

export const validCards = (hand: Hand, suit: Suit): PlayCard[] => {
  const cards: PlayCard[] | undefined = hand.get(suit);
  if (cards !== undefined && cards.length > 0) {
    return cards;
  } else {
    return allCards(hand);
  }
};
