import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const validate = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).send("Unauthorized");

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).send("Unauthorized");
    const userData = await User.findOne({ _id: user }).lean();
    if (!userData) {
      return res.status(401).send("Unauthorized");
    }

    req.user = userData;
    next();
  });
};

export default validate;