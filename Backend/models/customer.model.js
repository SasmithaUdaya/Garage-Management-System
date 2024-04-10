import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
      email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    phone_number:{
        type:String,
        required:true,
        unique:true,
    },

    address:{
        type:String,
        required:true,

    },

    avatar:{
        type: String,
        default: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
      },
   
},


{ timestamps:true }

);

const Customer = mongoose.model('Customer',customerSchema);

export default Customer;