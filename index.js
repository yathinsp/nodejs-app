var express = require('express')
var app = express()

app.get('/', (req,res)=>{
    res.send("Hello World! - NodeJs")
})

app.listen(process.env.PORT||5000)