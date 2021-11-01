import mongoose from "mongoose";

const RoleShema = new mongoose.Schema(
  {
    value: {
      type: Boolean,
      default: false,
      unique: true,
    },
  },
  { versionKey: false },
);

export default mongoose.model("Role", RoleShema);
