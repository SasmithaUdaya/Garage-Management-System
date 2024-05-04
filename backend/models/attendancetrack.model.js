import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    empName:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
  
}, { timestamps: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;
