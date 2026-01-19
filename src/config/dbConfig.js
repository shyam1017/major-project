import mongoose from "mongoose";

const connection = async() =>{

    
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to the database successfully");
    } catch(error) {
        console.log(error.message);
    };
};


export default connection;