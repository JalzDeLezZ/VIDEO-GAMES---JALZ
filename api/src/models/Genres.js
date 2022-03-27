const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Genres', {
         name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate:{
                is: /^[a-zA-Z ]{2,45}/m,
                max: 45
            },
        }
    }, 
    {
        timestamps: false 
    });
};
