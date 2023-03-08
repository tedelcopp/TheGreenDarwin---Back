const { OrderItems, OrderDetails } = require("../../db")

const putOrder = async (req, res) => {

    try {
        const { orderId, status } = req.body;
        
        const orderToUpdate = await OrderDetails.findOne({where: {id: orderId}}) 
    
        !orderToUpdate ?
        res.status(404).json("Order not found :(") :
        [updated] = await OrderDetails.update({status: status}, {where: {id: orderToUpdate.dataValues.id}})
        res.status(200).json(updated)
        } catch(error) {
            res.status(404).json(console.log(error))
        }
    }
    
    module.exports = {
        putOrder
    }
    