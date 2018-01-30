module.exports = app => {
  app.set("PGUSER", process.env.PGUSER || "boomtowndb");
  app.set("PGPASSWORD", process.env.PGPASSWORD || "boomtowndb");
  app.set("PGDATABASE", process.env.PGDATABASE || "boomtowndb");
  app.set("PGHOST", process.env.PGHOST || "localhost");
  app.set("PGPORT", process.env.PGHOST || "5432");
  //Express Config
  app.set("PORT", process.env.PORT || "3000");
  //Temporary JSON
  app.set("JSON_PORT", "3001");
};

// export const GQL_PORT = process.env.PORT; // Where does this come from?
// export const POSTGRES_PORT = process.env.PG_PORT;
