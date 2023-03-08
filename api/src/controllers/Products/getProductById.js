const { allProducts } = require('../../utils/allProductsUtil')

const getProductById = async (req, res) => {
    try {
        const idProduct = req.params.id
        const allProd = await allProducts()
        const product = await allProd.find((e) => e.id.toString() == idProduct)
        await product ?
        res.status(200).json(product) :
        res.status(404).send('Product ID not found')
    } catch (error) {
        console.error(error)
        res.status(404).send('Error getting product ID')
    }
}

module.exports = {
    getProductById
}