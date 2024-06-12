const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { bloodBankModel } = require("./models/addBlood")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://ashna:ashna@cluster0.n9qo4.mongodb.net/bloodBankDB?retryWrites=true&w=majority&appName=Cluster0")



app.post("/", (req, res) => {
    let input = req.body
    let blood = new bloodBankModel(input)
    blood.save()
    res.json({ "status": "success" })


})


app.listen(8080, () => {
    console.log("server started")
})
