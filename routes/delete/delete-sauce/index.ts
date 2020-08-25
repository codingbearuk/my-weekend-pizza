import Route from "../../route.type";
import SauceModel from "../../../models/sauce.model";

const deleteSauce: Route = async (req, res) => {
  const { sauceID } = req.body;
  const delSauce = await SauceModel.findByIdAndDelete(sauceID);

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
};

export default deleteSauce;
