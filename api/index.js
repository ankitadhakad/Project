import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose
.connect(process.env.MONGO)//MONGO=environment variable so that everybody cant seee password
.then (() => {
    console.log('Connected to MONGODB!');
})//to check wether we are connected to database//
.catch((err) => {
    console.log(err);
})


const app=express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});