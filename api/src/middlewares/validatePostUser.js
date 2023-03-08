const validatePostUser = (req, res, next) => {
    const {
        email,
        user_id,
    } = req.body
    if(!email) return res.status(404).send(`email field is required`)
    // if(!user_id) return res.status(404).send(`user_id field is required`)
    next()
}

module.exports = {
    validatePostUser
}
