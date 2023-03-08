const { Product, Category } = require("../../db");
const { cloudinary } = require("../../cloudinary");

const postProduct = async (req, res) => {
  try {

    const { name, height, weight, img, description, price, stock, offert, category, activeProduct } = req.body;

    const uploadedRes = await cloudinary.uploader.upload(img, { public_id: name })


    const modCategories = await category.map(c => {
    const lowercaseCategory = c.toLowerCase();
    const capitalizedCategory = lowercaseCategory.charAt(0).toUpperCase() + lowercaseCategory.slice(1);
      return capitalizedCategory;
    });

    const newProduct = await Product.create({
      name: name,
      height: height,
      weight: weight,
      img: uploadedRes.url,
      description: description,
      price: price,
      stock: stock,
      offert: offert,
      activeProduct: activeProduct
    });

    const dbCategories = await Promise.all(
      modCategories?.map(c =>
        Category.findOrCreate({
          where: {
            name: c
          }
        })
      )
    );

    const tempObj = dbCategories.map(([temp, created]) => temp)
    await newProduct.addCategory(tempObj)
    return res.status(201).json("New product created successfully")
  } catch (error) {
    console.error(error)
    return res.status(400).json('Error creating new product')
  }
};


module.exports = {
  postProduct
};


// const { Product, Category } = require("../../db");
// const { cloudinary } = require("../../cloudinary");
// const fs = require("fs");

// const postProduct = async (req, res) => {
//   try {
//     const { name, height, weight, description, price, stock, offert, category } = req.body;
//     const file = req.file;

//     const uploadedRes = await cloudinary.uploader.upload(fs.readFileSync(file.path), {
//       public_id: name
//     });

//     const modCategories = await category.map(c => {
//       const lowercaseCategory = c.toLowerCase();
//       const capitalizedCategory = lowercaseCategory.charAt(0).toUpperCase() + lowercaseCategory.slice(1);
//       return capitalizedCategory;
//     });

//     const newProduct = await Product.create({
//       name: name,
//       height: height,
//       weight: weight,
//       img: uploadedRes.secure_url,
//       description: description,
//       price: price,
//       stock: stock,
//       offert: offert
//     });

//     const dbCategories = await Promise.all(
//       modCategories?.map(c =>
//         Category.findOrCreate({
//           where: {
//             name: c
//           }
//         })
//       )
//     );

//     const tempObj = dbCategories.map(([temp, created]) => temp)
//     await newProduct.addCategory(tempObj)
//     return res.status(201).json("New product created successfully")
//   } catch (error) {
//     return res.status(400).json({ error: error.message })
//   }
// };

// module.exports = {
//   postProduct
// };