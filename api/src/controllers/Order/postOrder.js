const { OrderItems, OrderDetails, User, Product } = require("../../db")
const {findProductStock} = require("../../utils/updateStockUtil")

const postOrder = async(req, res) => {
    try {
        const { email, totalAmount, status, paypalId, products } = req.body;
        const user = await User.findOne({where: {email: email}})

        const newOrder = await OrderDetails.create({
            userId: user.dataValues.id,
            totalAmount: totalAmount,
            payPalOrderId: paypalId,
            status: status?.toLowerCase()
        })

        const orderIdDB = newOrder.dataValues.id

        const soldItems = await Promise.all(products.map(async i => 
            await OrderItems.create({
               orderId: orderIdDB,
               productId: i.productId,
               quantity: i.quantity
            })))

        const updateProduct = await Promise.all(products.map( async p => {
            oldStock = await findProductStock(p.productId)
            await Product.update({
                stock: oldStock - p.quantity
            }, {where: {id: p.productId}})
            }
        ))
        return res.status(201).json("New product created correctly")
    }
    catch (error){
        return res.status(400).json({error: error.message})
    }
}
module.exports= {
    postOrder
}