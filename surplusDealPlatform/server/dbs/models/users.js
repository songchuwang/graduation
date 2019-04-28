import mongoose from "mongoose"
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  type: {
    type: String,
    required:true
  },
  age: {
    type:String,
    required: true
  },
  username:{
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
})

export default mongoose.model("User", UserSchema);
