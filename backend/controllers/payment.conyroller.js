import Payment from "../models/payment.model.js";

export const payment = async (req ,res ,next) => {

    try{
        const newstatus = await Payment.create(req.body);
        return res.status(201).json(newstatus);

    }catch(error){
        next(error);
    }
};

export const getAllPayment = async (req , res , next) => {
    try{
 
       const issues = await Payment.find();
       res.status(200).json(issues);
 
    }catch (error){
       next(error);
    }
 };
