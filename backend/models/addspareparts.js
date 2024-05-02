import mongoose from "mongoose";

const addspareparts = new mongoose.Schema({

    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      image: {
        type: String, // Assuming you're storing the image path as a string
        required: true
      }



}, { timestamps: true });

const AddSpareParts = mongoose.model('AddSpareParts' ,addspareparts);

export default AddSpareParts;

