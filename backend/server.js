let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
const router = require('./routes/perfume.route')
require('./database/db')

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
 });

app.use('/', router)

// PORT
const port = process.env.PORT || 4000;
 app.listen(port, () => {
  console.log('Connected to port ' + port)
})

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
})