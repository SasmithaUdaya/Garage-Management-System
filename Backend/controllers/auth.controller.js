import Customer from "../models/customer.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'

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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const validUser = await Customer.findOne({ email });
      if (!validUser) return next(errorHandler(404, 'User not found!'));
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = validUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } catch (error) {
      next(error);
    }

}