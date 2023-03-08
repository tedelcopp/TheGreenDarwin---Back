const { User } = require("../../db");
const { cloudinary } = require("../../cloudinary");

const postUser = async (req, res) => {

    try {
        const { email, fullName, username, picture, birthday, isAdmin } = req.body;
        if (picture) {
            newImg = await cloudinary.uploader.upload(picture)
        }
        const newUrl = newImg.url
            const newAdmin = await User.create({
                email: email,
                fullName: fullName,
                username: username,
                picture: newUrl,
                birthday: birthday,
                isAdmin: isAdmin
            })
        
        return res.status(201).json("New user created correctly")
    }
    catch (error){
        return res.status(400).json({msg: error})
    }
}

module.exports = {
    postUser
}
