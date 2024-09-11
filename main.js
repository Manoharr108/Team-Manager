const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = process.env.mongoDB || 3000;
const router = require("./routes/router")
app.use(express.json())
app.use(express.static("./frontend"))
app.use(express.urlencoded({extended:false}))
require("dotenv").config()
app.use("/",router)

mongoose.connect(process.env.mongoDB).then(()=>{
    console.log("successfully connected to DB!")
    app.listen(port,()=>{
        console.log("Port listening successfully on port 3000!");
    })
})
.catch((err)=>{
    console.log(err.message)
})