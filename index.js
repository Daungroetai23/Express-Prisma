const express = require('express');
const app = express();

const { readdirSync } = require('fs')
const morgan = require('morgan');
const cors = require('cors');
const bodyParse = require('body-parser');
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParse.json({limit:'10mb'}))

// const ProductRouters = require('./Route/product')
// const authRouter = require('./Route/auth');
// router1
// app.get("/product",(req,res)=>{
//     res.send('Hello get Product');
// });
// router2
// app.use('/api',ProductRouters)
// app.use('/api',authRouter)

readdirSync('./Route')
.map((r)=> app.use('/api',require('./Route/'+r)))

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})