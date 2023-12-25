const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    shortId :{
        type:String,
        required:true,
        unique:true
    },

    redirectURL :{
        type:String,
        required:true
    },

    visitHistory: [{timestamp: {
        type:Number
    }}]
}, {timestamps:true})

const url = mongoose.model('URL', urlSchema)

module.exports = url