const express = require('express')
const app = express()

//routes
app.get('/', (req, res) => {
    res.send("Hello NodeAPI")
})

app.listen(3000, ()=>{
    console.log('NodeAPI app is running on Port 3000')
})