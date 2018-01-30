const config = require("./config");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const express = require("express");
const app = express();
config(app);

const bodyParser = require("body-parser");
const typeDefs = require("./api/schema");
const cors = require("cors");

// const createLoaders = require("./api/loaders");

const initResolvers = require("./api/resolvers");

const jsonResource = require("./api/resources/jsonResource")(app);
const postgresResource = require("./api/resources/postgresResurce");
// const firebaseResource = require("./api/resources/firebaseResource")(app);

postgresResource(app).then(pgResource => start(pgResource));

function start() {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: initResolvers({
      jsonResource,
      postgresResource
    })
  });

  app.use("*", cors());

  // Where we will send all of our GraphQL requests
  app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
  // app.use(
  //   "/graphql",
  //   bodyParser.json(),
  //   graphqlExpress({
  //     schema,
  //     context: { loaders: createLoaders() }
  //   })
  // );
  // A route for accessing the GraphiQL tool
  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql"
    })
  );
  app.listen(app.get("PORT"), () =>
    console.log(
      `GraphQL is now running on http://localhost:${app.get("PORT")}/graphql`
    )
  );
}
