const mongoose=require("mongoose");
const connectDatabase=async()=>{
    try{
    await mongoose.connect("mongodb://localhost:27017/doko")
    console.log("database connected");
    }catch(err){
        console.error("couldnt connect to database")
    }
}
module.exports=connectDatabase