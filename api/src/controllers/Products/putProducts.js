const { Product, Category } = require('../../db')
const { productToUpdateUtil } = require("../../utils/productToUpdateUtil");
const { cloudinary } = require("../../cloudinary");
//this function updates product detail

const updateProduct = async (req, res) => {
    
    try {
    const {name, lessStock, moreStock, height, weight, img, description, price, offert, category, activeProduct} = req.body;
    
    if (img) {
        var newImg = await cloudinary.uploader.upload(img, {public_id: name}) 
        var newUrl  = newImg.url
    } 
    
    const productToUpdate = await Product.findOne({where: {name: name}}) 
    
    if (productToUpdate && lessStock) {
        var newStock = productToUpdate.dataValues.stock - lessStock
    } else if (productToUpdate && moreStock) {
        var newStock = productToUpdate.dataValues.stock + moreStock
    }

    if (category) {
     const dbCategories = await Promise.all(
        category?.map(c =>
          Category.findOrCreate({
              where: {
              name: c
            }})));
      var tempObj = dbCategories?.map(([temp, created]) => temp)
    }    

    productToUpdate ?
    updatedDetail = productToUpdateUtil(name, newStock, height, weight, newUrl, description, price, offert, activeProduct) 
    : res.status(404).json("Product not found :(")
  
      const updatedProduct = await Product.update(updatedDetail, {where: {id: productToUpdate.dataValues.id}})
      category?  await productToUpdate.addCategory(tempObj) : null
      
      res.status(200).json(updatedProduct)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    updateProduct
}
