const { Blog } = require("../../db");

const postBlog = async (req, res) => {
  try {
    // const { blogId } = req.query;
    const { text, img, name } = req.body;

    // const user = await User.findOne({ where: { email: email } });
    await Blog.create(req.body);
    return res.status(200).json(`blog sent correctly!`);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postBlog,
};
