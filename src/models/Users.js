const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    location: { type: "string", required: true },
    isAdmin: { type: "boolean", default: false },
    date: { type: "Date", default: Date.now },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.models.Users;
