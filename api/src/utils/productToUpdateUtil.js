const productToUpdateUtil = (name, newStock, height, weight, newUrl, description, price, offert, activeProduct) => {
    const changedDetail = {}
    newUrl ? changedDetail.img = newUrl : null
    name ? changedDetail.name = name : null
    newStock ? changedDetail.stock = newStock : null
    height ? changedDetail.height = height : null
    weight ? changedDetail.weight = weight : null
    description ? changedDetail.description = description : null
    price ? changedDetail.price = price : null
    offert ? changedDetail.offert = offert : null
    activeProduct !== undefined ? changedDetail.activeProduct = activeProduct : null

    return changedDetail
}

module.exports = {
    productToUpdateUtil
}