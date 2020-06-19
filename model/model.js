const mongoose = require('mongoose');

const empSchema =  mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:String,
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Employee',empSchema)