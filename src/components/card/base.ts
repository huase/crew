type CardValue =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9;

export enum Suit {
    Pink,
    Blue,
    Green,
    Yellow,
}

export interface BaseCard {
    suit: Suit;
    value: CardValue;
}
