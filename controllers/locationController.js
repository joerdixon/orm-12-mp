const express = require('express');
const router = express.Router();
const {Traveller, Location, Trip} = require("../models")

// All Locations
router.get("/", (req, res) => {
    Location.findAll().then(allLocations=>{
        res.json(allLocations)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({err:err})
    })
})

// One Location
router.get("/:id", (req, res) => {
    Location.findByPk(req.params.id)
    .then((oneLocation) => {
        res.json(oneLocation);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({msg:"Error Detected", err:err})
    })
});

// New Location
router.post("/", (req, res) => {
    Location.create({
        location_name: req.body.location_name
    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: err });
      });
})

// Delete Location
router.delete("/:id", (req, res) => {
    Location.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((delLocation) => {
          if (delLocation === 0) {
            return res.status(404).json({ msg: "no Location found!" });
          }
          res.json(delLocation);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({err: err});
        });
})

module.exports=router;