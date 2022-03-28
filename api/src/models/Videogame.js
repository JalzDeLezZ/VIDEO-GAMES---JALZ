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
        unique: true,
        validate: {     
          is: /^[a-zA-Z0-9\s]*$/m,
          // is: /^[a-zA-Z\s]*$/m,
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      release_date:{
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
          isDate: true,
        }
      },
      rating:{
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: {
          is: {
            args: /^([0-9])(\.[0-9]{1})?$/,
            msg: "Rating must be number or decimal",
          },
          isNumeric: true,
        },
      },
      platforms:{
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false
      }
    },
    {
        timestamps: false
    });
};
