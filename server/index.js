const config = require("./config");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const express = require("express");
const app = express();
config(app);

const bodyParser = require("body-parser");
const typeDefs = require("./api/schema");
const cors = require("cors");

const initResolvers = require("./api/resolvers");

const postgresResource = require("./api/resources/postgresResurce");
const firebaseResource = require("./api/resources/firebaseResource")(app);

postgresResource(app).then(pgResource => start(pgResource));

function start(postgresResource) {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: initResolvers({
      postgresResource,
      firebaseResource
    })
  });

  app.use("*", cors());

  // Where we will send all of our GraphQL requests
  app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

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
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
