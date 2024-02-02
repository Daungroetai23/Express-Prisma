const express = require('express')
const router = express.Router()

 // Require controller modules.
 router.get('/auth',(req,res)=>{
    res.send('Hello auth Endpoind');
 })
 



module.exports  =  router