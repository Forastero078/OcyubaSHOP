const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    sequelize.define('ropa_masculina', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull:false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        talla: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        moneda: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
};