const { Blog } = require("../../db");

const deleteBlog = async(req, res) => {
    const { id } = req.body;

    try {
        const dbBlog = await Blog.destroy({
            where :{
                id: id,
            }
        })
        res.status(200).json('deleted');
      } catch (error) {
        res.status(400).send(console.log(error));
      }
}

module.exports= {
    deleteBlog
}