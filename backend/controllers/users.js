const Users = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createToken = (_id) =>{
    return jwt.sign({_id},process.env.ACCESS_TOKEN)
}


const getUser = async(req,res) =>{
    const user = await Users.find()
    res.status(200).json(user)
}

const addUser = async(req,res) =>{
    const {name, email,password} = req.body
    try {
        const user = await Users.create({name,email,password}) 
    //=====create the token for user=============
        const token = createToken(user._id)
        res.status(201).json({name,email,token})
    } catch (error) {
        res.status(400).send('user was not created')
    }      
}

const signIn = async (req,res) =>{
    const {email,password} = req.body
    const user = await Users.findOne({email})
    const name = user&&user.name 
        if(user && await bcrypt.compare(password,user.password)){
            const token = createToken(user._id)
            res.status(200).json({name,email,token})
        }        
        else
        res.status(400).send("user not found")        
}
    

    
module.exports = {
    getUser,
    addUser,
    signIn,
    // deleteUser
}