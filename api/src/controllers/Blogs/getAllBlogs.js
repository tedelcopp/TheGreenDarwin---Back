const { Blog } = require("../../db");

const getAllBlogs = async (req, res) => {
  try {
    const getAllBlogs = await Blog.findAll();
    res.status(200).json(getAllBlogs);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllBlogs,
};
