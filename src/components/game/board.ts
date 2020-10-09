import { Deck, initDeck } from "../deck/deck";
import { isRocketFour, PlayCard } from "../deck/playcard";
import { initPlayer, Player } from "../player/player";

import { initMission, Mission, MissionId } from "./mission";
import { Trick } from "./trick";
import { GameState } from "./types";

export interface Board {
  readonly players: Player[];
  readonly numPlayers: number;
  readonly deck: Deck;
  readonly commander: Player;
  leader: Player;
  curPlayer: Player;
  mission: Mission;
  status: GameState;
  currentTrick?: Trick;
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
const dealPlayCards = (deck: Deck, players: Player[]): Player => {
  let commander: Player = players[0];
  deck.playCards.forEach((card: PlayCard, index: number) => {
    const player: Player = players[index % players.length];
    card.playerId = player.playerId;
    player.myCards.push(card);
    if (isRocketFour(card)) {
      commander = player;
    }
  });
  return commander;
};

export const getPlayableCards = (board: Board, player: Player): PlayCard => {
  console.log(board);
  console.log(player);
  throw new Error("Not implemented");
};
