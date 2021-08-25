const express = require("express")
const app = express()
const cors= require ('cors')


const uri = "mongodb+srv://user1:1234@cluster0.zlehy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongoose = require("mongoose");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());



mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("connected")
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
}).catch((err)=>{
    console.log("error while connecting to db..")
})


app.use("/classes",require("./router/classes"))
app.use("/update",require("./router/Administrateur"))
app.use("/enseignants", require('./router/enseignant'))
app.use('/matiere', require('./router/matiere'))


const port = 4000 || process.env.PORT
