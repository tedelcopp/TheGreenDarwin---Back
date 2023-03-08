const { Review, User } = require("../../db");

const getUserReviews = async (req, res) => {

    try{
        const { email } = req.params;
        
        const user = await User.findOne({where: {email: email}})
        const userId = user.dataValues.id
        const userReviews = await Review.findAll({where: {userId: userId}})
        console.log(userReviews)
        res.status(200).json(userReviews)
    }
    catch(error) {
        res.status(400).json({err: "An error occurred while connecting to the DB"})
    }
}

module.exports = {
    getUserReviews
}