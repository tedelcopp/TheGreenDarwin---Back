const { Category } = require("../../db")

const postCategory = async (req, res) => {
    try {
        const { name } = req.body
        const newCategory = await Category.create({
            name: name,
        })
        return res.status(200).json(`category ${name} was created!`)
    } catch (error) { return res.status(400).json({ error: error.message }) }
}

module.exports = {
    postCategory
}