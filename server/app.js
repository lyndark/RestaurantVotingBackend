const express = require("express");
const router = require('../routes')
const {json} = require ('body-parser')
const app = express()

app.use(json())
app.use(router)
module.exports = app