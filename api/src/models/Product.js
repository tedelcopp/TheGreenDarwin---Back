const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set: function(val) {
        this.setDataValue('name', val.charAt(0).toUpperCase() + val.slice(1).toLowerCase());
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
    }, 
    description:{
      type: DataTypes.TEXT,
      allowNull: false,
    },    
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    offert: {
      type: DataTypes.INTEGER,
    },
    activeProduct: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    } 
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
