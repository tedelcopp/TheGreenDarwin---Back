const { Category } = require("../db")

const allCategories = async () => {
  const categories = await Category.findAll();
  const categoryNames = categories.map(c => c.name);
  return categoryNames;
};

module.exports = {
  allCategories
};