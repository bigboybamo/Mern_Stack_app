const mongoose = require('mongoose')


const perfumeSchema = new mongoose.Schema({
  perfumeName: {
    type: String
    },
  brand: {
    type: String
  },
  notes: {
    type: String
  },
  yourName: {
    type: String
  },
  luvFragrance: {
    type: String
  },
  price: {
    type: Number
  }
  })


const Perfume = mongoose.model('Perfume', perfumeSchema)

module.exports = Perfume