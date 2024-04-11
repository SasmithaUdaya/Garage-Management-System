import Dailystatus from "../models/daily.model.js";

export const createStatus = async (req ,res ,next) => {

    
    try{
        const newstatus = await Dailystatus.create(req.body);
        return res.status(201).json(newstatus);

    }catch(error){
        next(error);
    }
};
