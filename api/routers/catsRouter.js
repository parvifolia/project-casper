const express = require('express');
const Cat = require('../models/Cat');
const router = express.Router();

router.get('/cats',(req,res)=>{
    // Get cat list & listed via geojson. Max Distance:100km
    Cat.aggregate().near({
        near: [parseFloat(req.query.lat),parseFloat(req.query.lng) ],
        maxDistance: 0.01,
        spherical: true,
        distanceField: "dis"
       })
       .then(cats=>{
           res.send(cats)
       })
})

router.post('/cats',(req,res)=>{
    Cat.create(req.body)
        .then(e=>{
            res.send(e)
        })
        .catch(err=>{
            res.status(400).send({error:err.message})
        })
})

router.put('/cats/:id',(req,res)=>{
    Cat.findByIdAndUpdate(req.params.id,req.body,{new: true,useFindAndModify: false })
        .then(e=>{
            res.send(e)
        })
        .catch(err=>{
            res.status(400).send({error:err.message})
        })
})

router.delete('/cats/:id',(req,res)=>{
    Cat.findByIdAndDelete(req.params.id)
        .then(e=>{
            res.send(e)
        })
        .catch(err=>{
            res.status(400).send({error:err.message})
        })
})

module.exports=router;