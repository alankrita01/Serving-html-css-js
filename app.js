const path= require('path');

const express = require('express');


const bodyParser = require('body-parser');

const app = express();

//importing shop.js , admin.js , contact.js, success.js files
const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');
const contactRouter = require('./routes/contact');
const successRouter = require('./routes/success');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

//importing shop.js , admin.js , contact.js, success.js files
app.use("/admin",adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use(successRouter);

//adding error page
app.use((req,res,next) =>{
  res.status(404).sendFile(path.join(__dirname,"views","404page.html"));
})


app.listen(3000);