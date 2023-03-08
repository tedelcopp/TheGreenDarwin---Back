const { Blog } = require("../../db");

const getBlogById = async (req, res) => {
  try {
    let { id } = req.params;
    const blog = await Blog.findOne({ where: { id } });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getBlogById,
};
