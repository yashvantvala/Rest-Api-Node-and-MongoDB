const express = require('express')
const mongoose = require('mongoose');


const url = "mongodb://localhost/Employee";
const app = express();

mongoose.connect(
     url,
    {useNewUrlParser:true},
()=>console.log('mongodb is  connected'));

app.use(express.json())
app.use('/employee',require('./routes/employee'))

app.listen(5000,()=>console.log('server is running on port 5000'))