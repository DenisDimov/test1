import { Schema, model } from "mongoose";

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  idAdmin: {
    default: true,
  },
});

export default model("user", userSchema);
