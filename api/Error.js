const express = require("express");
const router = express.Router();

// models
const ErrorModel = require("../models/Error-Model");

// Error-logs Get

router.get("/Error", async (req, res) => {
  try {
    const Error = await ErrorModel.find()
    res.status(202).send(Error);
    console.log(Error);

  } catch (e) {
    res.status(404).send(e);
    console.log(e);
  }
});


router.post("/Error", async (req, res) => {
  try {
    const Error = new ErrorModel(req.body);
    console.log(Error);
    const ErrorSave = await Error.save();
    //  ErrorSave.
    res.status(200).send(ErrorSave);
    console.log(ErrorSave);

  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
})

module.exports = router