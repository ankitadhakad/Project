import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

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


export const signin = async (req,res,next) => {
    const {email,password} = req.body;
    try{
        const validUser = await User.findOne({email});
        if(!validUser)
        return next(errorHandler(404,'User not found!'));
        const validPassword = bcryptjs.compareSync(password,validUser.password);//need to compare decrypted password as encrypted password is stored in data base therefore ee need to decrypt them
        if(!validPassword)
        return next(errorHandler(401,'Wrong Credentials!'));
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const {password:pass, ...rest} = validUser._doc;
        res.cookie('access_token',token,{httpOnly: true}).status(200).json(rest);

    }catch(error)
    {
        next(error);
    }
}