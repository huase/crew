import { Suit } from "../deck/card";
import { Deck, initDeck } from "../deck/deck";
import { allCards, validCards } from "../deck/hand";
import { isRocketFour, PlayCard } from "../deck/playcard";
import { initPlayer, Player } from "../player/player";

import { initMission, Mission, MissionId } from "./mission";
import { initTrick, Trick } from "./trick";
import { GameState, Round } from "./types";

export interface Board {
  readonly players: Player[];
  readonly numPlayers: number;
  readonly deck: Deck;
  readonly commander: Player;
  leader: Player;
  curPlayer: Player;
  mission: Mission;
  status: GameState;
  round: Round;
  tricks: Trick[];
}

export const initBoard = (playerIds: number[], missionId: MissionId): Board => {
  const deck: Deck = initDeck();
  const players: Player[] = playerIds.map((pid) => initPlayer(pid));
  const commander: Player = dealPlayCards(deck, players);

  return {
    players: players,
    numPlayers: players.length,
    deck: deck,
    commander: commander,
    leader: commander,
    curPlayer: commander,
    mission: initMission(missionId),
    status: GameState.InProgress,
    round: 1,
    tricks: [initTrick(1)],
  };
};

/**
 * return Player from players that matches playerId
 * @param players array of Players
 * @param playerId playerId to match
 */
export const getPlayer = (players: Player[], playerId: number): Player => {
  const player: Player | undefined = players.find(
    (p: Player) => p.playerId === playerId
  );
  if (player === undefined) {
    throw new Error("Internal error: playerId not found");
  }
  return player;
};

/**
 * deals cards to players and returns the commander
 * @param deck shuffled deck
 * @param players list of Players
 */
export const dealPlayCards = (deck: Deck, players: Player[]): Player => {
  let commander: Player | undefined;
  deck.playCards.forEach((card: PlayCard, index: number) => {
    const player: Player = players[index % players.length];
    card.playerId = player.playerId;
    player.myCards.get(card.suit)?.push(card);
    if (isRocketFour(card)) {
      commander = player;
    }
  });
  if (commander === undefined) {
    throw new Error("Internal error: commander does not exist");
  }
  return commander;
};

export const getPlayableCards = (board: Board, player: Player): PlayCard[] => {
  if (player === board.leader) {
    return allCards(player.myCards);
  }
  const leadSuit: Suit = board.tricks[board.round - 1].cards[0].suit;
  return validCards(player.myCards, leadSuit);
};

export const playPlayCard = (board: Board, playCard: PlayCard): void => {
  // TODO: do this
  console.log(board);
  console.log(playCard);
};

export const resolveTrick = (board: Board): void => {
  board.round++;
  board.tricks.push(initTrick(<Round>board.round));
  // TODO: other stuff
};
