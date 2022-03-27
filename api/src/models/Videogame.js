const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('VideoGames', {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          is: /^[a-zA-Z ]{2,60}/m,
          max: 60
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      release_date:{
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          is : /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/m
        }
      },
      rating:{
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      platforms:{
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false
      }
  });
};
