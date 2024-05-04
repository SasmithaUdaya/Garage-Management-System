import Accident from '../models/accident.model.js';

export const create = async (req ,res ,next) => {

    
    try{
        const newaccident = await Accident.create(req.body);
        return res.status(201).json(newaccident);

    }catch(error){
        next(error);
    }
};


export const getAllAccident = async (req , res , next) => {
    try{
 
       const newaccident = await Accident.find();
       res.status(200).json(newaccident);
 
 
    }catch (error){
       next(error);
    }
 };
 
 export const oneAccident = async (req , res , next) => {
 
    try{
 
       const id = req.params.id;
       const userExist = await Accident.findById(id);
 
       res.status(200).json(userExist);
 
    }catch(error){
       next(error);
    }
 
 
 }
 
 export const updateAccident = async(req , res , next) => {
 
    try{
 
       const id = req.params.id ;
 
       
  
       const updateData = await Accident.findByIdAndUpdate(id, req.body, {new:true});
       res.status(200).json(updateData);
 
 
    }catch( error){
       next(error);
    }
 }
 
 
 export const deleteAccident = async(req , res ,next) => {
 
    try{
 
       const id = req.params.id ;
 
       
  
        await Accident.findByIdAndDelete(id);
       res.status(200).json('Accident has been deleted');
 
 
    }catch( error){
       next(error);
    }
 }
 
 
 