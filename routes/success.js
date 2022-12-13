const path= require('path')
const express = require('express');
const rootDir=require('../util/path');


const router = express.Router();

router.get('/success',(req,res,next) =>{
  console.log('"Form successfuly filled"');
  res.write('<h1>Form successfuly filled :)</h1>');

})

module.exports=router;