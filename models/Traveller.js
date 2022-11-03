// Extract the two object we need for modeling from the sequelize package.
const { Model, DataTypes } = require("sequelize");
// Import our sequelize instance
const sequelize = require("../config/connection")

class Traveller extends Model {}

Traveller.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
}, {
    sequelize
})

module.exports=Traveller;