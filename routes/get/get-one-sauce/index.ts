import Route from "../../route.type";
import SauceModel from "../../../models/sauce.model";

const getOneSauce: Route = async (req, res) => {
  const { sauceID } = req.params;
  const sauce = await SauceModel.findById(sauceID);

  if (sauce) res.status(200).json(sauce);
  else
    res.status(404).json({
      status: "error",
      msg: "sauce not found",
    });
};

export default getOneSauce;
