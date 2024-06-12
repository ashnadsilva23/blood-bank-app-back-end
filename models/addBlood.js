const mongoose=require("mongoose")
const schema =mongoose.Schema({
    "name":String,
    "mobileNo":String,
    "email":String,
    "address":String,
    "place":String,
    "pincode":String,
    "bloodGrp":String,
    "disease":String,
    "gender":String,
    "userName":String,
    "password":String
})

let bloodBankModel=mongoose.model("addbanks",schema)
module.exports={bloodBankModel}