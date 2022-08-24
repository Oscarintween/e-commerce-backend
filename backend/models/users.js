// const mongoose = require('mongoose')
const {Schema,model} = require('mongoose')
const uniqueValidator= require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type:String,
        required:[true,'please enter your name']
    },
    email:{
        type:String,
        required:[true,'please enter your email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'please enter your password'],
    },
},{
    versionKey:false,
    timestamps:true
})
    userSchema.plugin(uniqueValidator,{message:'an account with this email has already been created'})
//==========this function executes before user is saved to db=======================
    userSchema.pre('save',async function(next){
        // console.log('user about to be created',this)
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)
        next()
    })

    module.exports = model('Users',userSchema)