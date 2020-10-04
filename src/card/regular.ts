export enum Suit {
  Yellow,
  Red,
}

export enum CardValue {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
}

export interface RegularCard {
  suit: Suit;
  number: CardValue;
}
