import { PlayCard, testCard } from "../deck/playcard";
import { Suit } from "../deck/types";

import { Trick, trickWinner } from "./trick";

describe("trick winner", () => {
  test("same suit, ascending", () => {
    const blue1: PlayCard = testCard(1, Suit.Blue, 1);
    const blue2: PlayCard = testCard(2, Suit.Blue, 2);
    const blue3: PlayCard = testCard(3, Suit.Blue, 3);

    const trick: Trick = {
      round: 1,
      cards: [blue1, blue2, blue3],
    };
    expect(trickWinner(trick)).toBe(3);
  });
  test("same suit, descending", () => {
    const blue1: PlayCard = testCard(3, Suit.Blue, 1);
    const blue2: PlayCard = testCard(2, Suit.Blue, 2);
    const blue3: PlayCard = testCard(1, Suit.Blue, 3);

    const trick: Trick = {
      round: 1,
      cards: [blue1, blue2, blue3],
    };
    expect(trickWinner(trick)).toBe(1);
  });
  test("same suit, middle peak", () => {
    const blue1: PlayCard = testCard(1, Suit.Blue, 1);
    const blue2: PlayCard = testCard(3, Suit.Blue, 2);
    const blue3: PlayCard = testCard(2, Suit.Blue, 3);

    const trick: Trick = {
      round: 1,
      cards: [blue1, blue2, blue3],
    };
    expect(trickWinner(trick)).toBe(2);
  });
});
