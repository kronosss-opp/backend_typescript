import mongoose from 'mongoose'

const URI = process.env.MONGO_URL

mongoose.connect(`${URI}`).then(() => console.log("connect db success")).catch((err) => console.log("Something wrong in database", err))