const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

// // Travellers can have multiple locations
// Traveller.hasMany(Location, {
//     through: "Trips"
// });
// // Locations can belong to multiple travellers
// Location.belongsToMany(Traveller, {
//     through: "Trips"
// });

module.exports = {
    Traveller:Traveller,
    Location:Location,
    Trip:Trip
}