const { OrderDetail } = require("../../db")

const getOrderById = async(req, res, next) => {
    const { id } = req.query;

    if (id) {
        try {
            const oneOrderDetail = await OrderDetail.findAll({ where: { id: id }})
                
            res.status(200).json(oneOrderDetail)
        } catch(error) {
            res.status(400).json({msg: error})
        }
    } else {
        next()
    }
}

module.exports = {
    getOrderById
}