const express = require('express');
const router = express.Router();
const {Traveller, Location, Trip} = require("../models")

// All Travellers
router.get("/", (req, res) => {
    Traveller.findAll().then(allTravellers=>{
        res.json(allTravellers)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

// One Traveller
router.get("/:id", (req, res) => {
    Traveller.findByPk(req.params.id)
    .then((oneTraveller) => {
        res.json(oneTraveller);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({msg:"Error Detected", err:err})
    })
});

// New Traveller
router.post("/", (req, res) => {
    Traveller.create({
      name: req.body.name,
      email: req.body.email
    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
})

module.exports=router;