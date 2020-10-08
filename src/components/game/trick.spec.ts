import { PlayCard, initPlayCard } from "../deck/playcard";
import { Suit } from "../deck/card";

import { Trick, trickWinner } from "./trick";

describe("trick winner", () => {
  test("same suit, ascending", () => {
    const c1: PlayCard = initPlayCard(1, Suit.Blue, 1);
    const c2: PlayCard = initPlayCard(2, Suit.Blue, 2);
    const c3: PlayCard = initPlayCard(3, Suit.Blue, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(3);
  });
  test("same suit, descending", () => {
    const c1: PlayCard = initPlayCard(3, Suit.Blue, 1);
    const c2: PlayCard = initPlayCard(2, Suit.Blue, 2);
    const c3: PlayCard = initPlayCard(1, Suit.Blue, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(1);
  });
  test("same suit, middle peak", () => {
    const c1: PlayCard = initPlayCard(1, Suit.Blue, 1);
    const c2: PlayCard = initPlayCard(3, Suit.Blue, 2);
    const c3: PlayCard = initPlayCard(2, Suit.Blue, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(2);
  });
  test("different suits, leader is winner", () => {
    const c1: PlayCard = initPlayCard(1, Suit.Blue, 1);
    const c2: PlayCard = initPlayCard(2, Suit.Green, 2);
    const c3: PlayCard = initPlayCard(3, Suit.Green, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(1);
  });
  test("different suits, follower is winner", () => {
    const c1: PlayCard = initPlayCard(1, Suit.Blue, 1);
    const c2: PlayCard = initPlayCard(3, Suit.Green, 2);
    const c3: PlayCard = initPlayCard(2, Suit.Blue, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(3);
  });
  test("all trumps, ascending", () => {
    const c1: PlayCard = initPlayCard(1, Suit.Rocket, 1);
    const c2: PlayCard = initPlayCard(2, Suit.Rocket, 2);
    const c3: PlayCard = initPlayCard(3, Suit.Rocket, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(3);
  });
  test("all trumps, descending", () => {
    const c1: PlayCard = initPlayCard(3, Suit.Rocket, 1);
    const c2: PlayCard = initPlayCard(2, Suit.Rocket, 2);
    const c3: PlayCard = initPlayCard(1, Suit.Rocket, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(1);
  });
  test("all trumps, middle peak", () => {
    const c1: PlayCard = initPlayCard(1, Suit.Rocket, 1);
    const c2: PlayCard = initPlayCard(3, Suit.Rocket, 2);
    const c3: PlayCard = initPlayCard(2, Suit.Rocket, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(2);
  });
  test("single trump wins as leader", () => {
    const c1: PlayCard = initPlayCard(1, Suit.Rocket, 1);
    const c2: PlayCard = initPlayCard(3, Suit.Blue, 2);
    const c3: PlayCard = initPlayCard(2, Suit.Green, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(1);
  });
  test("single trump wins as follower", () => {
    const c1: PlayCard = initPlayCard(3, Suit.Blue, 1);
    const c2: PlayCard = initPlayCard(2, Suit.Green, 2);
    const c3: PlayCard = initPlayCard(1, Suit.Rocket, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(3);
  });
  test("larger trump wins", () => {
    const c1: PlayCard = initPlayCard(1, Suit.Rocket, 1);
    const c2: PlayCard = initPlayCard(3, Suit.Rocket, 2);
    const c3: PlayCard = initPlayCard(5, Suit.Green, 3);

    const trick: Trick = {
      round: 1,
      cards: [c1, c2, c3],
    };
    expect(trickWinner(trick)).toBe(2);
  });
});
