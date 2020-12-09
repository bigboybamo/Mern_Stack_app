const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const uri = process.env.MONGO_URI

mongoose.connect(uri, {
    dbName: 'PerfumeDB',
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!')
})

module.exports = mongoose.connection
