const mongoose = require('mongoose')
const {Schema,model} = require('mongoose')

const motorcycleSchema = new Schema({
    brand:String,
    model:String,
    year:Number,
    image:String,
    description:String,
    motor:Number,
    horsepower:String,
    price:String,
    color:String,
    weight:Number,
    transmission:String,
    type:String,
})
    module.exports = model('Motorcyles',motorcycleSchema)