const { Review } = require("../../db");

const deleteReviews = async(req, res) => {
    try {
       const dbFavorite = await Review.destroy({
            where :{ },
            truncate: true
        })
        res.status(200).json('deleted');
      } catch (error) {
        res.status(400).send(console.log(error));
      }
}

module.exports= {
    deleteReviews
}