import Request from '../models/accidentrequest.model.js';

export const create = async (req ,res ,next) => {

    
    try{
        const newrequest = await Request.create(req.body);
        return res.status(201).json(newrequest);

    }catch(error){
        next(error);
    }
};


export const getAllRequest = async (req , res , next) => {
    try{
 
       const newrequest = await Request.find();
       res.status(200).json(newrequest);
 
 
    }catch (error){
       next(error);
    }
 };