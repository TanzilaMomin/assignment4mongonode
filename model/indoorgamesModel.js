const mongoose = require("mongoose");

const indoorgamesModel = mongoose.model("indoorgames",{
    name : {type : String},
    type : {type : String}
});
module.exports = indoorgamesModel ;