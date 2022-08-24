const Motorcycles = require('../models/motorcycles')

const getMotorcycles = async(req,res) =>{
    const bikes = await Motorcycles.find()
    res.status(200).json(bikes)
}
const getOneMotorcycle = async(req,res) =>{
    
    const bikes = await Motorcycles.findOne({_id:req.params.id})
    res.status(200).json(bikes)
}

module.exports = {getMotorcycles,getOneMotorcycle}