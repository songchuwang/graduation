import mongoose from "mongoose"
const Schema = mongoose.Schema

const completeSchema = new Schema({
  order: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  demand: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
})

export default mongoose.model("Complete", completeSchema)
