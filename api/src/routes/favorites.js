const { Router } = require("express");
const { deleteFavorite } = require("../controllers/Favorites/deleteFavorite");
const {
  getUserFavorites,
} = require("../controllers/Favorites/getFavoritesbyUserID");
const { postFavorite } = require("../controllers/Favorites/postFavorite");

const favoriteRouter = Router();

favoriteRouter.get("/:email", getUserFavorites);
favoriteRouter.post("/", postFavorite);
favoriteRouter.delete("/", deleteFavorite);

module.exports = favoriteRouter;
