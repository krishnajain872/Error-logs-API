const express = require("express");
const mongoose = require("mongoose");
const app = express();

// middleware
app.use(express.json());

// port 
port = process.env.PORT || 3001;


// DataBase Connections
require("./database/connection")


// Routes

app.use(require("./api/Error"));



app.get("/", (req, res) => {
    res.send("this is a Error ");
})




app.listen(port, (e) => {
    e ? console.log(e) :
        console.log("backend is runnning")
})