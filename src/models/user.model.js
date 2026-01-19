import mongoose from "mongoose";
import bcrypt from "bcrypt";



const userSchema = new mongoose.Schema({
  name: {type:String, required:true},
  password: {type:String, required:true},
  email : {type:String,unique: true, required:true},
  refreshToken: {type: String}
});


userSchema.pre("save", async function (){
  if (!this.modifiedPaths(this.password)) return;
  this.password = await bcrypt(this.password, 10);
});

userSchema.methods.comparePassword = function(password){
  return bcrypt.comparePassword(password, this.password);
};

export const User = mongoose.model("User", userSchema);