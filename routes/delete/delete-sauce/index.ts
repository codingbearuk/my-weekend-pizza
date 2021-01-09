import Route from "../../route.type";
import SauceModel from "../../../models/sauce.model";
import auth from "../../../modules/check-authorisation-header";

const deleteSauce: Route = async (req, res) => {
  const { sauceID } = req.body;
  const authHeader = req.headers.authorization;
  const delSauce = await SauceModel.findByIdAndDelete(sauceID);

  const authorisation = await auth(authHeader);
  if (authorisation) {
    if (delSauce)
      res.status(200).json({
        status: "ok",
        msg: "delete succesfull",
        deletedObject: delSauce,
      });
    else
      res.status(404).json({
        status: "error",
        msg: "id not found",
      });
  } else {
    res.status(403).json({
      status: "error",
      msg: "authorisation required",
    });
  }
};

export default deleteSauce;
