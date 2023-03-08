const { UserFavorites, User } = require("../../db");

const deleteFavorite = async(req, res) => {
    const { productId, email } = req.body;

    try {
        const filtredUser = await User.findOne({where: {email: email}})
        console.log(filtredUser)
        const dbFavorite = await UserFavorites.destroy({
            where :{
                userId: filtredUser.dataValues.id,
                productId: productId}
        })
        res.status(200).json('deleted');
      } catch (error) {
        res.status(400).send(console.log(error));
      }
}

module.exports= {
    deleteFavorite
}