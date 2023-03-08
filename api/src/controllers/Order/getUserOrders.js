const { OrderDetails, OrderItems } = require("../../db");

const getUserOrders = async(req, res) => {
    try {
        const { userId } = req.params;
        //busco todas las ordenes de compra del usuario
        const allUserOrders = await OrderDetails.findAll({where: {userId: userId}})
        
        //filtro solo los items comprados por el usuario
        const purchasedItems = await Promise.all(allUserOrders.map(order => 
            OrderItems.findAll({
                where: {
                    orderId: order.id
                }
            })))
            console.log(purchasedItems)
        res.status(200).json({userOrders: allUserOrders, itemPurchasedinUserOrder: purchasedItems})

    } catch(error) {
        res.status(400).json(console.log(error))
    }
}

module.exports= {
    getUserOrders
}


//PurchasedItems devuelve un objeto con dos propiedades: userOrders y purchasedItems. 
//Cada propiedad es un array de objeto:
//1. userOrders: array con objetos que incluyen los detalles las compras hechas por el usuario.
//2. purchasedItems: array con objetos que incluyen el detalle de todos los productos de cada compra con su respectiva cantidad. 

//Ejemplo: 
// {
//     "userOrders": [
//       {
//         "id": 1,
//         "userId": 1,
//         "totalAmount": 100,
//         "date": "2023-02-09T21:04:09.000Z",
//         "status": "pending"
//       },
//       {
//         "id": 2,
//         "userId": 1,
//         "totalAmount": 300,
//         "date": "2023-02-09T21:05:10.318Z",
//         "status": "pending"
//       },
//       {
//         "id": 3,
//         "userId": 1,
//         "totalAmount": 150,
//         "date": "2023-02-09T21:09:35.438Z",
//         "status": "pending"
//       },
//       {
//         "id": 4,
//         "userId": 1,
//         "totalAmount": 150,
//         "date": "2023-02-09T21:11:41.503Z",
//         "status": "pending"
//       },
//       {
//         "id": 5,
//         "userId": 1,
//         "totalAmount": 150,
//         "date": "2023-02-09T21:12:08.960Z",
//         "status": "pending"
//       },
//       {
//         "id": 6,
//         "userId": 1,
//         "totalAmount": 150,
//         "date": "2023-02-10T00:29:32.976Z",
//         "status": "pending"
//       }
//     ],
//     "itemPurchasedinUserOrder": [
//       [
//         {
//           "id": 1,
//           "quantity": 3,
//           "orderId": 5,
//           "productId": 1
//         },
//         {
//           "id": 2,
//           "quantity": 1,
//           "orderId": 5,
//           "productId": 2
//         }
//       ],
//       [
//         {
//           "id": 3,
//           "quantity": 3,
//           "orderId": 6,
//           "productId": 2
//         },
//         {
//           "id": 4,
//           "quantity": 4,
//           "orderId": 6,
//           "productId": 1
//         }
//       ]
//     ]
//   }