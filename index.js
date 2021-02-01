// import express package and then instantiate it in "app"
// Mongoose is the most prefered mongoDB wrapper

const express = require("express")
const mongoose = require("mongoose")
const routes = require("./src/routes")
//configs
require("dotenv").config()

// the NODE_ENV you set in your package.json scripts
console.log(process.env.NODE_ENV)

// Connect to MongoDB database
mongoose
  .connect(process.env.DB_HOST, { useNewUrlParser: true })
  // connect method returns a promise, so resolve this  first then run express server
  .then(() => {
    const app = express()
    app.use(express.json())
    app.use("/api", routes) 

    app.listen(process.env.LISTEN_PORT, () => {
      console.log("Server has started!")
    })
  })
