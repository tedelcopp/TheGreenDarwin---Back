const { Router } = require("express")
const { postOrder } = require("../controllers/Order/postOrder");
const { getAllOrders } = require("../controllers/Order/getAllOrders")
const { getOrderById } = require("../controllers/Order/getOrderDetail");
const { getUserOrders } = require("../controllers/Order/getUserOrders");
const { putOrder } = require("../controllers/Order/putOrder");

const orderRouter = Router();

orderRouter.get("/", getOrderById, getAllOrders);
orderRouter.get("/:userId", getUserOrders);
orderRouter.post("/", postOrder);
orderRouter.put("/", putOrder)


module.exports=orderRouter