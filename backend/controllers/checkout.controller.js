import Checkout from "../models/checkout.model.js";

export const checkout = async (req ,res ,next) => {

    try{
        const newstatus = await Checkout.create(req.body);
        return res.status(201).json(newstatus);

    }catch(error){
        next(error);
    }
};

export const getAllBuyer = async (req , res , next) => {
    try{
 
       const issues = await Checkout.find();
       res.status(200).json(issues);
 
    }catch (error){
       next(error);
    }
 };