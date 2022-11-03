const express = require('express');
const router = express.Router();
const {Traveller, Location, Trip} = require("../models")

// All Trips
router.get("/", (req, res) => {
    Trip.findAll().then(allTrips=>{
        res.json(allTrips)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

// One Trip
router.get("/:id", (req, res) => {
    Trip.findByPk(req.params.id)
    .then((oneTrip) => {
        res.json(oneTrip);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({msg:"Error Detected", err:err})
    })
});

// Delete Trip
router.delete("/:id", (req, res) => {
    Trip.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((delTrip) => {
          if (delTrip === 0) {
            return res.status(404).json({ msg: "no Trip found!" });
          }
          res.json(delTrip);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({err: err});
        });
});


module.exports=router;