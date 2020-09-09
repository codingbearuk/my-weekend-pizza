import bcrypt from "bcrypt";
import hash from "hash-generator";

import Route from "../../route.type";
import UserModel from "../../../models/user.model";
import SessionModel from "../../../models/session.model";

const login: Route = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    res.status(200).json({
      status: "error",
      msg: `user ${email} doesn't exist`,
    });
  } else {
    const isMatch = bcrypt.compareSync(password, user.password);
    if (isMatch) {
      await SessionModel.findOneAndDelete({ email });
      const sessionID: string = hash(20);
      const session = new SessionModel({
        sessionID,
        userID: user._id,
        email: user.email,
      });
      try {
        await session.save();
        res.status(200).json({
          status: "ok",
          sessionID,
        });
      } catch (err) {
        console.error(err);
        res.status(500);
      }
    } else {
      res.status(200).json({
        status: "error",
        msg: "wrong password",
      });
    }
  }
};

export default login;
