const { Router } = require("express");
const router = Router();
const categories = require("./categories");
const products = require("./products");
const users = require("./users");
const favorites = require("./favorites");
const reviews = require("./reviews");
const orders = require("./orders");
const blogs = require("./blogs");
const cors = require("cors");

router.options("*", cors({ origin: "*", optionsSuccessStatus: 200 }));

router.use(cors({ origin: "*", optionsSuccessStatus: 200 }));

router.use("/categories", categories);
router.use("/products", products);
router.use("/users", users);
router.use("/favorites", favorites);
router.use("/reviews", reviews);
router.use("/orders", orders);
router.use("/blogs", blogs);
module.exports = router;
