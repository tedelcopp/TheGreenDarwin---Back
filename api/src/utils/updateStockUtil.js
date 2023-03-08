const {Product} = require("../db")

const findProductStock = async(id) => {
    const product = await Product.findOne({where: {id: id}})

    return product.dataValues.stock
}

module.exports = {
    findProductStock
}