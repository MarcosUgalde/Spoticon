const router = require("express").Router();

const spotiControllers = require("../controllers/spoti");

module.exports = (db) => {
  router.get("/lists"), spotiControllers.getPlaylists(db);
  router.post("/create", spotiControllers.addList(db));

  return router;
};
