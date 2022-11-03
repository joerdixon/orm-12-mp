const router = require("express").Router();

const travellerRoutes = require("./travellerController");
router.use("/travellers",travellerRoutes);

const locationRoutes = require("./locationController");
router.use("/locations",locationRoutes);

const tripRoutes = require("./tripController");
router.use("/trips", tripRoutes);

module.exports = router;