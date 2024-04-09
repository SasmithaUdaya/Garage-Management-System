import Customer from "../models/customer.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
    const { name, email, password, phone_number, address } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newCustomer = new Customer({ name, email, password:hashedPassword, phone_number, address });
try{
    await newCustomer.save();
    res.status(201).json('Customer created successfully!')

}catch (error) {

next(error);
}

};