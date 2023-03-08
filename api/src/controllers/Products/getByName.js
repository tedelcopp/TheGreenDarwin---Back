const { Product } = require("../../db.js");

const getByName = async (req, res, next) => {
    const {name} = req.query
        if(name){
            try{
            const productsBDD =  await Product.findAll() 
            const results = productsBDD.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            if (results.length > 0) return res.status(200).json(results)
            else return res.status(404).json("No hay productos con ese nombre")
            }
            catch { 
            return res.status(400).json('Hubo un error en la coneccion de la base de datos')
            } 
        }else{
            next()
        }
}

    module.exports={
    getByName
}

        
