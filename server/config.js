module.exports = app => {
  app.set("PGUSER", process.env.PGUSER || "boomtowndb");
  app.set("PGPASSWORD", process.env.PGPASSWORD || "boomtowndb");
  app.set("PGDATABASE", process.env.PGDATABASE || "boomtowndb");
  app.set("PGHOST", process.env.PGHOST || "localhost");
  app.set("PGPORT", process.env.PGHOST || "5432");
  //Express Config
  app.set("PORT", process.env.PORT || "3000");
  //FIREBASE CONFIG
  app.set("JSON_PORT", "3001");
  app.set("FIREBASE_CONFIG", {
    apiKey: "AIzaSyClOuAcOTLu5WImEqEMK-L-b3_mKKOwnWA",
    authDomain: "boomtown-8cc79.firebaseapp.com",
    databaseURL: "https://boomtown-8cc79.firebaseio.com",
    projectId: "boomtown-8cc79",
    storageBucket: "boomtown-8cc79.appspot.com",
    messagingSenderId: "478312715806"
  });
};
