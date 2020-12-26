const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/perfume.route')
require('./database/db')
const path = require("path")
const port = process.env.PORT || 4000

const app = express()
// const http = require('http').Server(app)
// const io = require('socket.io')(http)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(cors())

// io.on('connection', socket => {
//   socket.on('message', ({ name, message }) => {
//     io.emit('message', { name, message })
//   })
// })

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

 
app.use('/', router)

// PORT

 app.listen(port, () => {
  console.log('Connected to port ' + port)
})

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
})

