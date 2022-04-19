const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Platforms', {
         name: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true,
        }
    },
    {
        timestamps: false 
    });
};