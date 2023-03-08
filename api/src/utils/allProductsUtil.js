const { Product, Category, Review} = require("../db");

const allProducts = async () => {
  const dbProducts = await Product.findAll({
    include: {
      model: Category,
      attributes: ["name"],
    },
  });
  const dbProductsClean = dbProducts.map((e) => {
    return {
      id: e.id,
      name: e.name,
      price: e.price,
      stock: e.stock,
      description: e.description,
      img: e.img,
      weight: e.weight,
      height: e.height,
      offert: e.offert,
      activeProduct : e.activeProduct,
      category: e.Categories.map((e) => e.name),
    };
  });

  const reviews = await Promise.all(dbProductsClean.map( async (p) => await Review.findAll(
    {where: {productId: p.id}}) 
    ));
    
    function resultsWithRating(reviews, dbProductsClean) {
     for (let i = 0; i < dbProductsClean.length; i++) {
      dbProductsClean[i]["rating"] = []
       reviews.map(r => {
         for (let j = 0; j < r.length; j++ ) {
           if (dbProductsClean[i].id === r[j].productId) {
            dbProductsClean[i]["rating"].push(r[j].rating)
           } 
         }
       })
       dbProductsClean[i]["rating"].length ?
       dbProductsClean[i]["rating"] = dbProductsClean[i]["rating"].reduce((a, b) => a+b, 0) / dbProductsClean[i]["rating"].length
       : dbProductsClean[i]["rating"]
     }
     return dbProductsClean
   }
   

  return resultsWithRating(reviews, dbProductsClean);
};

module.exports = {
  allProducts,
};
