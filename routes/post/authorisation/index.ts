import UserModel from "../../../models/user.model";
import SessionModel from "../../../models/session.model";
import Route from "../../route.type";

const authorisation: Route = async (req, res) => {
  const { sessionID } = req.body;
  const sessionItem = await SessionModel.findOne({ sessionID });
  if (!sessionItem) {
    res.status(200).json({
      status: "error",
      msg: "session id doesn't match to any user",
    });
  } else {
    try {
      const user = await UserModel.findOne({ _id: sessionItem.userID });
      res.status(200).json({
        status: "ok",
        user: {
          id: user._id,
          email: user.email,
          adress: user.adress,
          city: user.city,
          postcode: user.postcode,
          phone: user.phone,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  }
};

export default authorisation;
