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


const dbURI = 'mongodb+srv://manohar2004gr:5DFpcNwqPVvyLaww@testapi.unppitm.mongodb.net/?retryWrites=true&w=majority&appName=TestApi';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to DB!'))
  .catch(err => console.error('Error connecting to DB:', err));

app.listen(port,()=>{
    console.log("Port listening successfully on port 3000!");
})