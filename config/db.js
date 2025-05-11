const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB database successfully ${con.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Error while connecting the mongodb database : ${error}`.bgRed.white);
    }
}

module.exports = connectDb;