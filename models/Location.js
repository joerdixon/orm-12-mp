// Extract the two object we need for modeling from the sequelize package.
const { Model, DataTypes } = require("sequelize");
// Import our sequelize instance
const sequelize = require("../config/connection")

class Location extends Model {}

Location.init({
    location_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true
        }
    }
}, {
    sequelize
})

module.exports=Location;