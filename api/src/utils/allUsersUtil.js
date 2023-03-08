const { User } = require("../db")

const allUsers = async () => {
    const dbUsers = await User.findAll()
    
    const dbUsersClean = dbUsers.map((e) => {
        return{
            id: e.id,
            email: e.email,
            fullName: e.fullName,
            username: e.username,
            picture: e.picture,
            birthday: e.birthday,
            addressLineOne: e.addressLineOne,
            addressLineTwo: e.addressLineTwo,
            telephone: e.telephone,
            isAdmin: e.isAdmin,
        }
    })

    return dbUsersClean
}


module.exports = {
    allUsers
}