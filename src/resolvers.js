/**
 * This file resolves the various GraphQL types
 */

let lastId = 3;

// Array used as a basic database
const songList = [
  { id: "1", title: "Day Tripper", artist: "The Beatles" },
  { id: "2", title: "Lucky Man", artist: "Emerson, Lake & Palmer" },
  { id: "3", title: "The Beautiful People", artist: "Marilyn Manson" },
];

module.exports = {
  Query: {
    ping: () => "pong",
    songs: (obj, params) => {
      if (params.xyz) {
        if (params.xyz === "ODD") {
          return songList.filter((s) => Number(s.id) % 2 === 1);
        } else {
          return songList.filter((s) => Number(s.id) % 2 === 0);
        }
      }

      return songList;
    },
  },
  Mutation: {
    addSong1: (obj, { title, artist }) => {
      const song = {
        id: `${++lastId}`,
        title,
        artist,
      };

      songList.push(song);

      return song;
    },
    addSong2: (obj, { args: { title, artist } }) => {
      const song = {
        id: `${++lastId}`,
        title,
        artist,
      };

      songList.push(song);

      return song;
    },
  },
};
