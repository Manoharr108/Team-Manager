const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const router = require("./routes/router")
app.use(express.json())
app.use(express.static("./frontend"))

app.use("/",router)


mongoose.connect("mongodb+srv://manohar2004gr:5DFpcNwqPVvyLaww@testapi.unppitm.mongodb.net/?retryWrites=true&w=majority&appName=TestApi").then(()=>{
    console.log("successfully connected to DB!")
    app.listen(port,()=>{
        console.log("Port listening successfully on port 3000!");
    })
})
.catch((err)=>{
    console.log(err.message)
})