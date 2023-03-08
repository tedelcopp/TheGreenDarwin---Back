const { Review } = require("../../db");

const getProductReviews = async (req, res) => {

    try{
        const { productId } = req.query;
    
        const productReviews = await Review.findAll({where: {productId: productId}})
        productReviews.length > 0 ?
        res.status(200).json(productReviews)
        : res.status(404).json("No reviews for this product")
    }
    catch(error) {
        res.status(400).json({err: "An error occurred while connecting to the DB"})
    }
}

module.exports = {
    getProductReviews
}