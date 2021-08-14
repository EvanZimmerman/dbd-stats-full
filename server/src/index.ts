import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import Express = require("express");
import { createConnection } from "typeorm";

import { CharacterResolver } from "./resolvers/CharacterResolver";
import { ItemResolver } from "./resolvers/ItemResolver";
import { PerkResolver } from "./resolvers/PerkResolver";
import { OfferingResolver } from "./resolvers/OfferingResolver";
import { SteamNewsResolver } from "./resolvers/SteamNewsResolver";
import { StatsResolver } from "./resolvers/StatsResolver";
import { UserResolver } from "./resolvers/UserResolver";
import authRoutes from "./routes/auth";



const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [
      CharacterResolver,
      ItemResolver,
      PerkResolver,
      OfferingResolver,
      SteamNewsResolver,
      StatsResolver,
      UserResolver
    ]
  });

  const apolloServer = new ApolloServer({schema});

  const app = Express();

  app.use("/auth", authRoutes);


  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('server started on port 4000.');
  })
}

main();