const express = require('express')
const router = express.Router()
//const mongoose = require('mongoose')

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

//Get every Fragrance in the database
router.get('/perfume', (req, res, next)=>{
  Perfume.find((error, data) => {
    if(error) {
      return next(error)
    }
    else {
      res.json(data)
    }
  })
})

//Get a fragrance by id
router.get('/perfume/:id', (req, res, next)=>{
  Perfume.findById(req.params.id, (error, data) => {
    if(error) {
      return next(error)
    }
    else {
      res.json(data)
    }
  })
})


//Update a fragrance using id as a search parameter
router.put('/update-perfume/:id', (req, res,next) =>{
  Perfume.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if(error) {
      return next(error)
    }
    else{
      res.json(data)
      console.log('Perfume updated successfully')
    }
  })
})


//Delete a particular fragrance using id as a search parameter
router.delete('/delete-perfume/:id', (req, res, next)=>{
  Perfume.findByIdAndRemove(req.params.id, (error, data) => {
    if(error){
      return next(error)
    }
    else{
      res.status(200).json({
        message: data
      })
      console.log('fragrance deleted')
    }
  })
})


module.exports = router