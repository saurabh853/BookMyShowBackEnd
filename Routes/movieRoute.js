const express = require('express')
const router = express.Router()
const controller = require("../Controller/movieController")

router.post("/booking", controller.storMovieBooking)
router.get("/booking", controller.getMovieBooking)

module.exports = router