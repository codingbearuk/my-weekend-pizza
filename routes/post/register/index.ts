import Route from "../../route.type";
import bcrypt from "bcrypt";

import UserModel from "../../../models/user.model";

const register: Route = async (req, res) => {
  const { email, password, address, city, postcode, phone } = req.body;
  const salt = bcrypt.genSaltSync(15);
  const hash = bcrypt.hashSync(password, salt);
  const isUserExist = await UserModel.findOne({ email });

  if (isUserExist) {
    res.status(200).json({
      status: "error",
      msg: "email alredy exist in database",
    });
  } else {
    const newUser = new UserModel({
      email,
      password: hash,
      address,
      city,
      postcode,
      phone,
    });
    try {
      const save = await newUser.save();
      res.status(200).json({ status: "ok", save });
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  }
};

export default register;
