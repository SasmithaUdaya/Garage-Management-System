import mongoose from 'mongoose';

const accidentSchema = new mongoose.Schema({
    macName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    location: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    vehicleNumber:{
        type:String,
        required:true,
    },
    mechanicId: {
        type: String,
        required: true,
    },
    coordinatorId: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Accident = mongoose.model('Accident', accidentSchema);

export default Accident;
