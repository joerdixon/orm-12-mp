const express = require('express');
const router = express.Router();
const {Traveller, Location, Trip} = require("../models")

router.get("/", (req, res) => {
    Location.findAll().then(allLocations=>{
        res.json(allLocations)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

router.get("/:id", (req, res) => {
    Location.findByPk(req.params.id)
    .then((oneLocation) => {
        res.json(oneLocation);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({msg:"Error Detected", err:err})
    })
});


module.exports=router;