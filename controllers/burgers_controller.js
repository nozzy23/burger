const express = require ("express");
const burger = require ("../models/burger.js");

const router = express.Router();



router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("devoured", devoured);

  burger.update(
    {
      Eaten: req.body.Eaten
    },
    devoured,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;