const express = require('express')
 const router = express.Router()

const Perfume = require('../Models/perfume');

// CREATE Perfume

router.post('/perfume', (req, res) => {
  const perfume = new Perfume(req.body)
  perfume.save()
  .then(
    () => {
      res.status(201).json({
      message: 'Perfume saved successfully!'
       
      })
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      })
    })
})


module.exports = router