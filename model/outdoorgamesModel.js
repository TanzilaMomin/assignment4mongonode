const mongoose = require("mongoose");

const outdoorgamesModel = mongoose.model("outdoorgames",{
    name : {type : String},
    type : {type : String}
});

module.exports = outdoorgamesModel ;