const express = require('express');
const router = express.Router();
const {Traveller, Location, Trip} = require("../models")

router.get("/", (req, res) => {
    Traveller.findAll().then(allTravellers=>{
        res.json(allTravellers)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

router.get("/:id", (req, res) => {
    Traveller.findByPk(req.params.id)
    .then((oneTraveller) => {
        res.json(oneTraveller);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({msg:"Error Detected", err:err})
    })
});


module.exports=router;