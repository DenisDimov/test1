import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
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
    isAdmin: [
      {
        type: Boolean,
        ref: "Role",
      },
    ],
  },
  { versionKey: false },
);

export default mongoose.model("User", userSchema);
