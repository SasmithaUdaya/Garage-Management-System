import AddSpareParts from "../models/addspareparts.js";

export const addparts = async (req ,res ,next) => {

    
    try{
        const newstatus = await AddSpareParts.create(req.body);
        return res.status(201).json(newstatus);

    }catch(error){
        next(error);
    }
};
