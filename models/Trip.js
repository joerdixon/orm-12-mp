// Extract the two object we need for modeling from the sequelize package.
const { Model, DataTypes } = require("sequelize");
// Import our sequelize instance
const sequelize = require("../config/connection")

class Trip extends Model {}

Trip.init({
    trip_budget: {
        type: DataTypes.FLOAT
    },
    traveller_amount: {
        type: DataTypes.INTEGER
    },
    traveller_id: {
        type: DataTypes.INTEGER
    },
    location_id: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize
})

module.exports=Trip;