const mongoose = require("mongoose")

const connectDatabase = () =>{
    mongoose.connect(process.env.MONGODB_URI).then(() => console.log("MongoDB is connected")).catch(err => console.log(err))
}

module.exports = connectDatabase