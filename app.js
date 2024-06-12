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


app.post("/search",(req,res)=>{
    let input = req.body
    bloodBankModel.find(input).then(
        (data)=>{
            res.json(data)

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})


app.post("/delete",(req,res)=>{
    let input=req.body
    bloodBankModel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"success"})
        }
    ).finally()
    

})

app.post("/view",(req,res)=>{
    bloodBankModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    ).finally()
})


app.listen(8080, () => {
    console.log("server started")
})
