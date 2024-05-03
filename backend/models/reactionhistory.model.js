import mongoose from "mongoose";
 
const reactionhistorySchema = new mongoose.Schema({

    email: {
        type: String,
        required: true

    },

    vehiclenumber: {
        type: String,
        required: true

    },

    engine: {
        type: String,

        
    },
    tyre: {
        type: String,
    },

    parts: {
        type: String,
        
    },

    approvel: {
        type: String,
      

        
    },
    additional: {
        type: String,
     
        
    }
 


},{ timestamps: true });

const Reactionhistory = mongoose.model('Reactionhistory', reactionhistorySchema);

export default Reactionhistory;
