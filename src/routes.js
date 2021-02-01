import { Router } from "express"
import { Cache } from "memory-cache"
import { check } from "express-validator"

import { updateDog, deleteDogById, getDogById, getDogs, saveDog } from "./handlers"
import { cacheMiddleware } from "./cache"
import { CACHE_ENTRY_TTL } from "./constants"
require("dotenv").config()

// Definng methods and endpoints
// Get all existing Dogs
//using in-memory caching

const router = new Router()
let memCache = new Cache()

// -------------------------------------------------------------------------------------------------
router.get("/", function (req, res) {
  return res.status(200).json("Server is up and running")
})

router.get("/dogs", cacheMiddleware(process.env.CACHE_TIMEOUT, memCache), getDogs)

router.get("/dogs/:id", cacheMiddleware(process.env.CACHE_TIMEOUT, memCache), getDogById)

// post method returns new entry if successful
router.post(
  "/dogs",
  [
    check("name").isLength({ max: 15 }),
    check("breed").isLength({ max: 15 }),
    check("age").isNumeric().withMessage("Please enter a valid age"),
  ],
  saveDog,
)

// create a patch method for updating a field
router.patch(
  "/dogs/:id",
  [
    check("name").isLength({ max: 15 }),
    check("breed").isLength({ max: 15 }),
    check("age").isNumeric().withMessage("Please enter a valid age"),
  ],
  updateDog,
)

//delete method by id
router.delete("/dogs/:id", deleteDogById)

// above methods all working
module.exports = router
