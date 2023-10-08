require('dotenv').config()

const errorMiddleWare = (err, req, res, next) => {
    console.log("Here is an Error Middleware");
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack : null})
}

module.exports = errorMiddleWare;