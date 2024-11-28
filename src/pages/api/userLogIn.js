import Users from "@/models/Users";
import db from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

export default async function handler(req, res) {
  let success = false;

  if (req.method === "POST") {
    await db.connect();
    const { email, password } = req.body;

    try {
      const user = await Users.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ success, error: "try to logging with correct Email" });
      }

      const pwdCompare = await bcrypt.compare(password, user.password);
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ success, error: "try to logging with correct password" });
      }
      const data = {
        user: {
          id: user["_id"],
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      const isAdmin = user.isAdmin;
      success = true;
      res.json({ success, authToken, isAdmin });
    } catch (error) {
      console.log(error.message);
      res.send("server error: " + error.message);
    }
  }

  res.status(200).json({ name: "John Doe" });
}
