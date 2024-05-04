import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken' ;


export const signup =async (req, res ,next) => {

const { empname, phone_number, username, password } = req.body;
const hashedPassword = bcryptjs.hashSync(password, 10);
const newUser = new User({ empname, phone_number, username, password:hashedPassword });

try{
await newUser.save();
res.status(201).json('User created successfully!');

}catch (error){

   next(error) ;
}  

};

export const signin = async(req, res, next) =>{
   const{username,password} = req.body;
   try{
       const validUser = await User.findOne({username});
       if(!validUser) return next(errorHandler(404,'User not found'));
       const validPassword = bcryptjs.compareSync(password,validUser.password);
       if(!validPassword) return next(errorHandler(401,'Invalid password'));
       const token = jwt.sign({id:validUser._id},process.env.Jwt_SECRET);
       const {passsword:Pass,...rest} = validUser._doc;
       res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
   }catch(error){
        next(error);
   }
};

export const signOut = async ( req , res , next) => {

   try{
       res.clearCookie('access_token');
       res.status(200).json('User has been logged out!') ;

   }catch (error){
       next(error)
   }

}

