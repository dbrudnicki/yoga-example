/**
 * This file resolves the various GraphQL types
 */

// Array used as a basic database
const songList = [
  { title: "Day Tripper", artist: "The Beatles" },
  { title: "Lucky Man", artist: "Emerson, Lake & Palmer" },
  { title: "The Beautiful People", artist: "Marilyn Manson" },
];

module.exports = {
  Query: {
    ping: () => "pong",
    songs: () => songList,
  },
};
