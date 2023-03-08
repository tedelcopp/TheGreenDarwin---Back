const { allProducts } = require("../../utils/allProductsUtil");

const getAllProduct = async (req, res) => {
  try {
    let results = await allProducts();

    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: "db vacia" });
  }
};

module.exports = {
  getAllProduct,
};
