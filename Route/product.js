const express = require('express')
const router = express.Router()
const { read,list,create,update,remove } = require('../controller/product')

 
// http://localhost:8000/api/product
 router.get('/product',list) 
 router.get('/product/:id',read)
//post = create
 router.post('/product',create)
// put = update
 router.put('/product/:id',update)
// remove = delete
 router.delete('/product/:id',remove)

module.exports  =  router