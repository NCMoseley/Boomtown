const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const express = require("express");
const bodyParser = require("body-parser");
const schema = require("./api/schema");
const cors = require("cors");
const app = express();

const GQL_PORT = process.env.PORT; // Where does this come from?

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
app.listen(GQL_PORT, () =>
  console.log(`GraphQL is now running on http://localhost:${GQL_PORT}/graphql`)
);