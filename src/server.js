const { GraphQLServer } = require("graphql-yoga");
const { readFileSync } = require("fs");

// Load the resolvers
const resolvers = require("./resolvers");

// Load the GraphQL definitions
const typeDefs = readFileSync(`${__dirname}/typeDefs.graphql`, "utf8");

// Set the PORT (default to 8000 or accept an environment variable)
const PORT = process.env.PORT || 8000;

// Create a server instance
const server = new GraphQLServer({
  resolvers,
  typeDefs,
});

// Start the server on the specified port
server.start({ port: PORT }, () =>
  console.log(`Server started and listening on port: ${PORT}`)
);
