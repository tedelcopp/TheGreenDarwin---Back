const { UserFavorites, User } = require("../../db");
const { allUsers } = require("../../utils/allUsersUtil");

const postFavorite = async (req, res) => {
    try {
        const { email, productId } = req.body

        const filtredUser = await User.findOne({where: {email: email}})
        console.log(filtredUser)
        const dbFavorite = await UserFavorites.findOrCreate({
            where :{
                userId: filtredUser.dataValues.id,
                productId: productId}
        })
        return res.status(200).json("Favorite added to DB")
    } catch (error) {
        return res.status(403).json({ msg: error })
    }
};

module.exports = {
    postFavorite
}
