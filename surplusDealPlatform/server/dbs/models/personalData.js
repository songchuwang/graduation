import mongoose from "mongoose"
const Schema = mongoose.Schema

const personaldataSchema = new Schema({
    user: {
        type: String,
        required:true
    },
    teacherType: {
        type:String,
        required: true
    },
    sex: {
        type:String,
        required: true
    },
    name: {
        type:String,
        required:true,
    },
    experience: {
        type:String,
        required: true
    },
    desc: {
        type:String,
        required: true
    },
    img: {
        type:String,
        required: true
    }
})

export default mongoose.model("Personal", personaldataSchema)