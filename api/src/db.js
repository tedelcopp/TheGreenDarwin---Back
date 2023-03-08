require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Product, Category, User, Review, OrderDetails, OrderItems } = sequelize.models;

// Declarar relaciones entre modelos
Product.belongsToMany(Category, {through: "category_Products"})
Category.belongsToMany(Product, {through: "category_Products"});


User.belongsToMany(Product, {
  through: 'UserFavorites',
  as: 'favorites',
  foreignKey: 'userId'
});
Product.belongsToMany(User, {
  through: 'UserFavorites',
  as: 'favoritedBy',
  foreignKey: 'productId'
});


User.hasMany(Review, { as: 'reviewsWritten' });
Product.hasMany(Review, { as: 'reviews' });
Review.belongsTo(User, { as: 'reviewAuthor', foreignKey: 'userId' });
Review.belongsTo(Product, { as: 'reviewedProduct', foreignKey: 'productId' });


OrderDetails.hasMany(OrderItems, { foreignKey: 'orderId' });
OrderItems.belongsTo(OrderDetails, { foreignKey: 'orderId' });

Product.hasMany(OrderItems, { foreignKey: 'productId' });
OrderItems.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(OrderDetails, { foreignKey: 'userId' });
OrderDetails.belongsTo(User, { foreignKey: 'userId' });



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
