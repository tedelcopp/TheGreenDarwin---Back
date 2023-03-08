const {Product} = require('../../db')

const deleteProduct = async(req, res) => {
    const { productId } = req.params;

    try {
        const deleted = await Product.destroy({
            where :{
                id: productId}
        })
        res.status(200).json('deleted');
      } catch (error) {
        res.status(400).send(console.log(error));
      }
}

module.exports= {
    deleteProduct
}