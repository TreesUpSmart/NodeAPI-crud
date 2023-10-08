require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const errorMiddleWare = require('./middleware/errorMiddleware')
var cors = require('cors')

const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes - gets the response on the browser

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello NodeAPI")
})

app.get('/blog', (req, res) => {
    res.send('hello blog, this is crud operations')
})


app.listen(PORT, ()=>{
    console.log(`NodeAPI app is running on ${PORT}`)
})

app.use(errorMiddleWare)

mongoose.connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB') 
}).catch((error) => {
    console.log('error')
})