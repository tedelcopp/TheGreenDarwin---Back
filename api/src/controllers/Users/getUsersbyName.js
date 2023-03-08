const { User } = require("../../db")
const { allUsers } = require("../../utils/allUsersUtil")

const getByName = async (req, res, next) => {
    const { fullName } = req.query;
        if(fullName){
            try{
            const usersDB =  await allUsers() 
            const results = usersDB.filter(e => e.fullName?.toLowerCase().includes(fullName.toLowerCase()))
            if (results.length > 0) return res.status(200).json(results)
            else return res.status(404).json("No hay productos con ese nombre")
            }
            catch(error) { 
            return res.status(400).json(console.log(error))
            } 
        }else{
            next()
        }
}

module.exports = {
    getByName
}