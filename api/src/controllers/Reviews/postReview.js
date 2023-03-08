const { Review, User } = require("../../db");

const postReview = async(req, res) => {
    try {
    
        const { text, rating, email, productId } = req.body

        const user = await User.findOne({where: {email: email}})
        console.log(user)
        const newReview = await Review.create({
            text: text,
            rating: rating,
            productId: productId,
            userId: user.dataValues.id
        })
        return res.status(200).json(`review sent correctly!`)
    } catch (error) { return res.status(400).json({ error: error.message }) }
}

module.exports = {
    postReview
}