const { User } = require('../../db');
const { userToUpdateUtil } = require("../../utils/userToUpdateUtil");
const { cloudinary } = require("../../cloudinary");

const updateUser = async (req, res) => {

    try {
    const {
        email, fullName, username, picture, birthday, addressLineOne, addressLineTwo, telephone
    } = req.body

    if (picture) newImg = await cloudinary.uploader.upload(picture)
    const newUrl = newImg.url

    const userToUpdate = await User.findOne({where: {email: email}}) 
    userToUpdate ?
    updatedDetail = userToUpdateUtil(userToUpdate, email, fullName, username, newUrl, birthday, addressLineOne, addressLineTwo, telephone) :
    res.status(404).json("User not found :(")

        const [updatedUser, created] = await User.upsert(updatedDetail)
        res.status(200).json(updatedUser || created)
    } catch(error) {
        res.status(404).json(console.log(error))
    }
}

module.exports = {
    updateUser
}
