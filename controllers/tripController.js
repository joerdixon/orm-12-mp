const express = require('express');
const router = express.Router();
const {Traveller, Location, Trip} = require("../models")

router.get("/", (req, res) => {
    Trip.findAll().then(allTrips=>{
        res.json(allTrips)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

router.get("/:id", (req, res) => {
    Trip.findByPk(req.params.id)
    .then((oneTrip) => {
        res.json(oneTrip);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({msg:"Error Detected", err:err})
    })
});


module.exports=router;