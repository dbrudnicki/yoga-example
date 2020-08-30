const { ApolloServer } = require("apollo-server");
const { readFileSync } = require("fs");
const resolvers = require("./resolvers.js");
const { start } = require("repl");

// Load the GraphQL definitions
const typeDefs = readFileSync(`${__dirname}/typeDefs.graphql`, "utf8");

// Set the PORT (default to 8000 or accept an environment variable)
const PORT = process.env.PORT || 8000;

// Create a server instance
const server = new ApolloServer({
  resolvers,
  typeDefs,
});

// Start the server on the specified port
async function startServer() {
  const { url } = await server.listen({ port: PORT });
  console.log(`Server is ready at ${url}`);
}

startServer();
