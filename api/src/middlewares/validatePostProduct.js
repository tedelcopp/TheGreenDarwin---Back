const validatePostProduct = (req, res, next) => {
    const {
        name, height, weight, img, description, price, stock, offert, category
    } = req.body;
    if (!name) return res.status(400).send(`Name value is required`);
    if (!height) return res.status(400).send(`Height value is required`);
    if (!weight) return res.status(400).send(`Weight value is required`);
    if (!img) return res.status(400).send(`Img value is required`);
    if (!description) return res.status(400).send(`Description value is required`);
    if (!price) return res.status(400).send(`Price value is required`);
    if (!stock) return res.status(400).send(`Stock value is required`);
    if (!category.length) return res.status(400).send(`Category value is required`)
    next()
}

module.exports = {
    validatePostProduct
}