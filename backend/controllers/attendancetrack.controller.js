import Attendance from '../models/attendancetrack.model.js';

export const create = async (req ,res ,next) => {

    
    try{
        const newrequest = await Attendance.create(req.body);
        return res.status(201).json(newrequest);

    }catch(error){
        next(error);
    }
};

export const getAllAtt = async (req , res , next) => {
    try{
 
       const newrequest = await Attendance.find();
       res.status(200).json(newrequest);
 
 
    }catch (error){
       next(error);
    }
 };
