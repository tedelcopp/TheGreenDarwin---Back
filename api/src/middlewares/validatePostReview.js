const validatePostReview = (req, res, next) => {
    const { text, rating } = req.body;
    if (!text) return res.status(400).send(`text is required`);
    if (!rating) return res.status(400).send(`rating value is required`);
    if (rating > 5 || rating < 1) return res.status(400).send(`rating must be a number between 1 and 5`)
    next()
    }
    
module.exports={
    validatePostReview
}