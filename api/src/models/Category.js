const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
