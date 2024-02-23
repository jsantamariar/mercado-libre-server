const express = require("express");
const itemsController = require("../controllers/itemsController");
const router = express.Router();

router.get("/", itemsController.searchItems);
router.get("/:id", itemsController.getItemDetails);

module.exports = router;
