import Reactionhistory from "../models/reactionhistory.model.js";

export const createReactionshistory = async (req ,res ,next) => {

    
    
    try {
        const { email,vehiclenumber, engine,tyre,parts,approvel ,additional} = req.body;
        const newDailyStatus = new Reactionhistory({email , vehiclenumber, engine,tyre,parts,approvel ,additional});
        await newDailyStatus.save();
        res.status(201).send('History added successfully');
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
};

export const allreactionhistory = async (req , res , next) => {
  try{

     const issues = await Reactionhistory.find();
     res.status(200).json(issues);


  }catch (error){
     next(error);
  }
};