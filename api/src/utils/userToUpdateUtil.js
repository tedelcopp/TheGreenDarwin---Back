
const userToUpdateUtil = (userToUpdate, email, fullName, username, newUrl, birthday, addressLineOne, addressLineTwo, telephone) => {
    const changedDetail = {}
    changedDetail.id = userToUpdate.dataValues.id
    changedDetail.fullName = fullName
    changedDetail.username = username
    changedDetail.picture = newUrl
    changedDetail.birthday = birthday
    changedDetail.addressLineOne = addressLineOne
    changedDetail.addressLineTwo = addressLineTwo
    changedDetail.telephone = telephone
    changedDetail.email = email

    return changedDetail
}

module.exports = {
    userToUpdateUtil
}