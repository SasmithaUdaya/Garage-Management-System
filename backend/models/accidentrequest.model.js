import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    cusId: {
        type: String,
       // required: true,
    },
    cusName: {
        type: String,
        required: true,
        default: Date.now
    },
    mobile: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    vehicleNo: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Request = mongoose.model('Request', requestSchema);

export default Request;
