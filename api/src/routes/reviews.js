const { Router } = require("express")
const { getProductReviews } = require("../controllers/Reviews/getProductReviews");
const { getUserReviews } = require("../controllers/Reviews/getUserReviews");
const { postReview } = require("../controllers/Reviews/postReview");
const { validatePostReview } = require("../middlewares/validatePostReview");
const { deleteReviews } = require("../controllers/Reviews/deleteReviews");

const reviewRouter = Router();

reviewRouter.get("/", getProductReviews);
reviewRouter.get("/:email", getUserReviews);
reviewRouter.post("/", validatePostReview, postReview);
reviewRouter.delete("/", deleteReviews);


module.exports=reviewRouter