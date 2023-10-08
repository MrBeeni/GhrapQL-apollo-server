const express = require("express");
require("./config/db");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const app = express();

const port = "4000";
app.use(express.json());

const startServer = async () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app, path: "/info" });

  app.get("/data", (req, res) => {
    const data = req.body;
    res.send(data);
    console.log(data);
  });

  app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
  });
};
startServer();
