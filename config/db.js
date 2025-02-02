import mongoose from "mongoose";

export const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("mongoDb connected successfully")

    } catch(error){
        console.log("mongoDB connection error :", error)

    }
}