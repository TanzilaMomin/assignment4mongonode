const express = require("express");
const mongoose = require("mongoose");
const indoorgamesModel = require("./model/indoorgamesModel");
const outdoorgamesModel = require("./model/outdoorgamesModel");

mongoose.connect("mongodb://127.0.0.1:27017/gamedb")
.then(()=>{
    console.log("MongoDB is connected Successfully!!!")
})

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Indoor $ Outdoor Games...");
});

app.get("/indoorgames", async (req,res)=>{
    const result = await indoorgamesModel.find({});
    res.send(result);
});

app.get("/outdoorgames", async (req,res)=>{
    const result = await outdoorgamesModel.find({});
    res.send(result);
});

app.listen(5020, ()=>{
    console.log("Service is running on 5020 Port...");
});