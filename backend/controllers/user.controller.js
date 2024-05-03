import Customer from "../models/customer.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import  bcryptjs from 'bcryptjs' ;

export const test = (req, res) => {
    res.json({
        message: 'Api route is working!',
    });
};

export const updateCustomer = async(req ,res ,next) =>{
    if(req.user.id !== req.params.id) return next(errorHandler(401,"You can only update your own account!"))

    try{
        if(req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }

        const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, {
            $set: {
                name:req.body.name,
                email:req.body.email,
                password: req.body.password,
                phone_number:req.body.phone_number,
                address:req.body.address,
                avatar: req.body.avatar,
            }
        },{new: true})

        const {password, ...rest} = updateCustomer._doc

        res.status(200).json(rest)

    }catch (error){
        next(error)
    }
};

export const deleteCustomer = async(req ,res ,next) => {

    if(req.user.id !== req.params.id) return next(errorHandler(401,"You can only delete your own account!"))

        try{

            await Customer.findByIdAndDelete(req.params.id);
            res.clearCookie('access_token');

            res.status(200).json('User has been deleted!')
        }catch (error){
            next(error)
        }
}


export const updateUser = async(req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401,"you can update only your account!"))
    try{
       if(req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password,10)
       }
       const updateUser = await User.findByIdAndUpdate(req.params.id,{
            $set:{
               empname:req.body.empname,
               username:req.body.username,
               phone_number:req.body.phone_number,
               password:req.body.password,
               avatar : req.body.avatar,
            }
       },{new:true})

       const{password, ...rest} = updateUser._doc

       res.status(200).json(rest);
    }catch(error){
        next(error)
    }
};

export const deleteUser = async(req,res,next) =>{
    if(req.user.id !== req.params.id) return next(errorHandler(403,'You can only delete your account!'))
    try{
       await User.findByIdAndDelete(req.params.id);
       res.status(200).json('User has been deleted!');
    }catch(error){
        next(error)
    }
}
