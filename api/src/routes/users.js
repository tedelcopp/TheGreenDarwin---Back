const { Router } = require('express');
const { getAllUsers } = require("../controllers/Users/getAllUsers");
const { getByName } = require("../controllers/Users/getUsersbyName");
const { postUser } = require("../controllers/Users/postUser");
const { getUserById } = require("../controllers/Users/getUsersById")
const { validatePostUser } = require("../middlewares/validatePostUser");
const { updateUser } = require('../controllers/Users/putUser')
const userRouter = Router();

userRouter.get("/", getByName, getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/", validatePostUser, postUser)
userRouter.put("/", updateUser)


module.exports = userRouter