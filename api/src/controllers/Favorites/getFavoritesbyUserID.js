const { UserFavorites, User } = require("../../db");
const { allProducts } = require("../../utils/allProductsUtil");
const { allUsers } = require("../../utils/allUsersUtil");

const getUserFavorites = async (req, res) => {
  const { email } = req.params;

  try {
    const filtredUser = await User.findOne({ where: { email: email } });
    const allUserFavorites = await UserFavorites.findAll({
      where: { userId: filtredUser.dataValues.id },
    });
    const userFavoriteProducts = allUserFavorites.map((f) => f.productId);
    const products = await allProducts();
    const filtredProducts = () => {
      const finalFavorite = [];
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < userFavoriteProducts.length; j++) {
          if (products[i].id == userFavoriteProducts[j])
            finalFavorite.push(products[i]);
        }
      }
      return finalFavorite;
    };
    console.log(filtredProducts);
    res.status(200).json(filtredProducts());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUserFavorites,
};
