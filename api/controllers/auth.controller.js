import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const signup = async (req,res,next) => {//to use await we have to make funciton async
    const {username,email,password} = req.body;

    const hashedPassword = bcryptjs.hashSync(password,10);//hashsalt=10/combine with password and make it encrypted
    const newUser = new User({username, email, password:hashedPassword});
    
    try{
        await newUser.save();//save it in database
    //await is used to ensure if saving takes time there is no error //it does not move to next line of code
    
 res.status(201).json("User created successfully");
}
    catch(error)
    {
        next(error)
        // next(errorHandler(550,'error from the function'));
    }
   

};