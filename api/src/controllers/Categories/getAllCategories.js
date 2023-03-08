const { allCategories } = require('../../utils/allCategoriesUtil')

const getAllCategories = async (req, res) => {
    try {
        let data = await allCategories()
        res.status(200).json(data)
    } catch (error) {
        console.error(error)
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getAllCategories
}