const express = require("express");
const listItems = require("../controllers/itemsControllers");

const router = express.Router();

router.get("/list", listItems);

module.exports = router;
