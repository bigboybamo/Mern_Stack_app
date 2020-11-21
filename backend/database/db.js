const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Olabamiji:uOvedZtPIB3CHqVp@cluster0.rngnw.mongodb.net/test?retryWrites=true&w=majority', {
    dbName: 'PerfumeDB',
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!')
})

module.exports = mongoose.connection
