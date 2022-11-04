const express = require("express");
const { connectionDatabase } = require("./config/database");
const app = express();
const dotenv = require("dotenv");

const studentRouter = require("./routes/studentRoute");



if(process.env.NODE_ENV !== "production") {
    dotenv.config({path: "config/.env"})
}

// For post request
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// Database connection
connectionDatabase()

// Router Importing
app.use("/api/", studentRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is working on ${process.env.PORT}`)
})