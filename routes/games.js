const { readData, writeData } = require("../utils/data");
const { sendAllGames, sendUpdatedGames } = require("../controllers/games");
const { findGameByld, updateGamesFile, checkIsTitleInArray, updateGamesArray } = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete("/games/:id", getAllGames, findGameByld, deleteGame, updateGamesFile, sendUpdatedGames);
gamesRouter.post("/games", getAllGames, checkIsTitleInArray, updateGamesArray, updateGamesFile, sendUpdatedGames);

module.exports = gamesRouter;
