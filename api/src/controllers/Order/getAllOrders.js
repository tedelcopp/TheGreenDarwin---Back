const { OrderDetails } = require("../../db")

const getAllOrders = async(req, res) => {
    try {
        const allOrders = await OrderDetails.findAll()
            
        res.status(200).json(allOrders)
    } catch(error) {
        res.status(400).json(console.log(error))
    }
}

module.exports = {
    getAllOrders
}