const mongoose = require("mongoose");

exports.connectionDatabase = () => {
    mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.xpdto.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(conn => {
        console.log(`Database connected: ${conn.connection.host}`)
    }).catch(err => console.log(err.message))
}