const {Category} = require('../../db')

const deleteCategory = async(req, res) => {
    const { name } = req.params;

    try {
        const deleted = await Category.destroy({
            where :{
                name: name}
        })
        res.status(200).json('deleted');
      } catch (error) {
        res.status(400).send(console.log(error));
      }
}

module.exports= {
    deleteCategory
}